/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import { NextRequest, NextResponse } from "next/server";
import { captureException, captureMessage } from "@sentry/node";
import {
  deleteSubscriber,
  getSubscriberByFxaUid,
  updateFxAProfileData,
  updatePrimaryEmail,
  getOnerepProfileId,
} from "../../../../db/tables/subscribers.js";
import { bearerToken } from "../../utils/auth";
import appConstants from "../../../../appConstants";
import {
  activateProfile,
  deactivateProfile,
  optoutProfile,
} from "../../../functions/server/onerep.js";

const FXA_PROFILE_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/profile-change";
const FXA_PASSWORD_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/password-change";
const FXA_SUBSCRIPTION_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/subscription-state-change";
const FXA_DELETE_USER_EVENT =
  "https://schemas.accounts.firefox.com/event/delete-user";
const MONITOR_PREMIUM_CAPABILITY = "monitor";

/**
 * Fetch FxA JWT Public for verification
 *
 * @returns {Promise<Array<jwt.JwtPayload> | undefined>} keys an array of FxA JWT keys
 */
const getJwtPubKey = async (): Promise<Array<jwt.JwtPayload> | undefined> => {
  const jwtKeyUri = `${appConstants.OAUTH_ACCOUNT_URI}/jwks`;
  try {
    const response = await fetch(jwtKeyUri, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { keys } = (await response.json()) as { keys: jwkToPem.JWK[] };
    console.info(
      "getJwtPubKey",
      `fetched jwt public keys from: ${jwtKeyUri} - ${keys.length}`
    );
    return keys;
  } catch (e: unknown) {
    console.error("getJwtPubKey", `Could not get JWT public key: ${jwtKeyUri}`);
    captureException(
      new Error(`Could not get JWT public key: ${jwtKeyUri} - ${e as string}`)
    );
  }
};

/**
 * Authenticate FxA JWT for FxA relay event requests
 *
 * @param {NextRequest} req
 * @returns {Promise<jwt.JwtPayload>} decoded JWT data, which should contain FxA events
 */
const authenticateFxaJWT = async (
  req: NextRequest
): Promise<jwt.JwtPayload> => {
  // bearer token
  const headerToken = bearerToken(req);

  // Verify we have a key for this kid, this assumes that you have fetched
  // the publicJwks from FxA and put both them in an Array.
  const publicJwks = await getJwtPubKey();
  const jwk = publicJwks?.[0];
  if (!jwk) {
    throw new Error("No public jwk found");
  }

  // Verify the token is valid
  const jwkPem = jwkToPem(jwk);
  const decoded = jwt.verify(headerToken, jwkPem, {
    algorithms: ["RS256"],
  });

  // This is the JWT data itself.
  return decoded;
};

interface PasswordChangeEvent {
  changeTime: number;
}

interface ProfileChangeEvent {
  email?: string;
}

interface SubscriptionStateChangeEvent {
  capabilities: [string];
  isActive: boolean;
  changeTime: number;
}

interface JwtPayload {
  sub: string;
  events: {
    [key: string]:
      | PasswordChangeEvent
      | ProfileChangeEvent
      | SubscriptionStateChangeEvent
      | null;
  };
}

export async function POST(request: NextRequest) {
  let decodedJWT: JwtPayload;
  try {
    decodedJWT = (await authenticateFxaJWT(request)) as JwtPayload;
  } catch (e) {
    console.error("fxaRpEvents", e);
    captureException(e);
    return NextResponse.json({ success: false }, { status: 401 });
  }

  if (!decodedJWT?.events) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    console.error("fxaRpEvents", decodedJWT);
    captureMessage(
      `fxaRpEvents: decodedJWT is missing attribute "events", ${
        decodedJWT as unknown as string
      }`
    );
    return NextResponse.json(
      {
        success: false,
        message: 'fxaRpEvents: decodedJWT is missing attribute "events"',
      },
      { status: 400 }
    );
  }

  const fxaUserId = decodedJWT?.sub;
  if (!fxaUserId) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    captureMessage(
      `fxaRpEvents: decodedJWT is missing attribute "sub", ${
        decodedJWT as unknown as string
      }`
    );
    return NextResponse.json(
      {
        success: false,
        message: 'fxaRpEvents: decodedJWT is missing attribute "sub"',
      },
      { status: 400 }
    );
  }

  const subscriber = await getSubscriberByFxaUid(fxaUserId);

  // highly unlikely, though it is a possible edge case from QA tests.
  // To reproduce, perform the following two actions in sequence very quickly in FxA settings portal:
  // 1. swap primary email and secondary email
  // 2. quickly follow step 1 with deleting the account
  // There's a chance that the fxa event from deletion gets to our service first, in which case, the user will be deleted from the db prior to the profile change event hitting our service
  if (!subscriber) {
    const e = new Error(
      `could not find subscriber with fxa user id: ${fxaUserId}`
    );
    console.error("fxaRpEvents", e);
    captureException(e);
    return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
  }

  // reference example events: https://github.com/mozilla/fxa/blob/main/packages/fxa-event-broker/README.md
  for (const event in decodedJWT?.events) {
    switch (event) {
      case FXA_DELETE_USER_EVENT:
        console.debug("fxa_delete_user", {
          subscriber,
          event,
        });

        // delete user events only have keys. Keys point to empty objects
        await deleteSubscriber(subscriber);
        break;
      case FXA_PROFILE_CHANGE_EVENT: {
        const updatedProfileFromEvent = decodedJWT.events[
          event
        ] as ProfileChangeEvent;
        console.debug("fxa_profile_update", {
          fxaUserId,
          event,
          updatedProfileFromEvent,
        });

        // get current profiledata
        const currentFxAProfile = subscriber?.fxa_profile_json || {};

        // merge new event into existing profile data
        for (const key in updatedProfileFromEvent) {
          // primary email change
          if (key === "email") {
            await updatePrimaryEmail(
              subscriber,
              updatedProfileFromEvent[key as keyof ProfileChangeEvent] ||
                subscriber.primary_email
            );
          }
          if (currentFxAProfile[key]) {
            currentFxAProfile[key] =
              updatedProfileFromEvent[key as keyof ProfileChangeEvent];
          }
        }

        // update fxa profile data
        await updateFxAProfileData(subscriber, currentFxAProfile);
        break;
      }
      case FXA_PASSWORD_CHANGE_EVENT: {
        const updateFromEvent = decodedJWT.events[event];
        console.debug("fxa_password_change", {
          fxaUserId,
          event,
          updateFromEvent,
        });
        break;
      }
      case FXA_SUBSCRIPTION_CHANGE_EVENT: {
        // TODO: to be implemented after subplat
        const updatedSubscriptionFromEvent = decodedJWT.events[
          event
        ] as SubscriptionStateChangeEvent;
        console.debug("fxa_subscription_change", {
          fxaUserId,
          event,
          updatedSubscriptionFromEvent,
        });

        // get profile id
        const result = await getOnerepProfileId(subscriber);
        const oneRepProfileId = result[0]["onerep_profile_id"] as number;

        if (
          updatedSubscriptionFromEvent.isActive &&
          updatedSubscriptionFromEvent.capabilities.includes(
            MONITOR_PREMIUM_CAPABILITY
          )
        ) {
          // activate and opt out profiles
          await activateProfile(oneRepProfileId);
          await optoutProfile(oneRepProfileId);
        } else if (
          !updatedSubscriptionFromEvent.isActive &&
          updatedSubscriptionFromEvent.capabilities.includes(
            MONITOR_PREMIUM_CAPABILITY
          )
        ) {
          // deactivation stops opt out process
          await deactivateProfile(oneRepProfileId);
        }
        break;
      }
      default:
        console.warn("unhandled_event", {
          event,
        });
        break;
    }
  }

  return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
}
