/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import { NextRequest, NextResponse } from "next/server";
import { captureException, captureMessage } from "@sentry/node";

import { logger } from "../../../functions/server/logging";
import {
  getSubscriberByFxaUid,
  updateFxAProfileData,
  updatePrimaryEmail,
} from "../../../../db/tables/subscribers";
import { bearerToken } from "../../utils/auth";
import { revokeOAuthTokens } from "../../../../utils/fxa";
import { deleteAccount } from "../../../functions/server/deleteAccount";
import { record } from "../../../functions/server/glean";

const FXA_PROFILE_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/profile-change";
const FXA_PASSWORD_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/password-change";
const FXA_DELETE_USER_EVENT =
  "https://schemas.accounts.firefox.com/event/delete-user";

/**
 * Fetch FxA JWT Public for verification
 *
 * @returns {Promise<Array<jwt.JwtPayload> | undefined>} keys an array of FxA JWT keys
 */
const getJwtPubKey = async () => {
  const jwtKeyUri = `${process.env.OAUTH_ACCOUNT_URI}/jwks`;
  try {
    const response = await fetch(jwtKeyUri, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { keys } = (await response.json()) as { keys: jwkToPem.JWK[] };
    logger.info("get_jwt_pub_key", {
      message: `fetched jwt public keys from: ${jwtKeyUri} - ${keys.length}`,
    });
    return keys;
  } catch (e: unknown) {
    logger.error("get_jwt_pub_key", {
      exception: `Could not get JWT public key: ${jwtKeyUri}`,
    });
    captureMessage(
      `Could not get JWT public key: ${jwtKeyUri} - ${e as string}`,
    );
  }
};

/**
 * Authenticate FxA JWT for FxA relay event requests
 *
 * @param {NextRequest} req
 * @returns {Promise<jwt.JwtPayload>} decoded JWT data, which should contain FxA events
 */
const authenticateFxaJWT = async (req: NextRequest) => {
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
    logger.error("fxa_rp_event", { exception: e as string });
    captureException(e);
    return NextResponse.json({ success: false }, { status: 401 });
  }

  if (!decodedJWT?.events) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    logger.error("fxa_rp_event", { decodedJWT });
    captureMessage(
      `fxa_rp_event: decodedJWT is missing attribute "events", ${
        decodedJWT as unknown as string
      }`,
    );
    return NextResponse.json(
      {
        success: false,
        message: 'fxa_rp_event: decodedJWT is missing attribute "events"',
      },
      { status: 400 },
    );
  }

  const fxaUserId = decodedJWT?.sub;
  if (!fxaUserId) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    captureMessage(
      `fxa_rp_event: decodedJWT is missing attribute "sub", ${
        decodedJWT as unknown as string
      }`,
    );
    return NextResponse.json(
      {
        success: false,
        message: 'fxa_rp_event: decodedJWT is missing attribute "sub"',
      },
      { status: 400 },
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
      `could not find subscriber with fxa user id: ${fxaUserId}`,
    );
    logger.error("fxa_rp_event", { exception: e.message });
    return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
  }

  // reference example events: https://github.com/mozilla/fxa/blob/main/packages/fxa-event-broker/README.md
  for (const event in decodedJWT?.events) {
    switch (event) {
      case FXA_DELETE_USER_EVENT: {
        await deleteAccount(subscriber);
        break;
      }
      case FXA_PROFILE_CHANGE_EVENT: {
        const updatedProfileFromEvent = decodedJWT.events[
          event
        ] as ProfileChangeEvent;
        logger.info("fxa_profile_update", {
          subscriber_id: subscriber.id,
          event,
          updatedProfileFromEvent,
        });

        record("account", "profile_change", {
          string: {
            monitorUserId: subscriber.id.toString(),
          },
        });

        // get current profiledata
        // Typed as `any` because `subscriber` used to be typed as `any`, and
        // making that type more specific was enough work just by itself:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const currentFxAProfile: any = subscriber?.fxa_profile_json;

        // merge new event into existing profile data
        if (Object.keys(updatedProfileFromEvent).length !== 0) {
          for (const key in updatedProfileFromEvent) {
            // primary email change
            if (key === "email") {
              await updatePrimaryEmail(
                subscriber,
                updatedProfileFromEvent[key as keyof ProfileChangeEvent] ||
                  subscriber.primary_email,
              );
            }
            if (currentFxAProfile && currentFxAProfile[key]) {
              currentFxAProfile[key] =
                updatedProfileFromEvent[key as keyof ProfileChangeEvent];
            }
          }
        }

        // update fxa profile data
        await updateFxAProfileData(subscriber, currentFxAProfile);
        break;
      }
      case FXA_PASSWORD_CHANGE_EVENT: {
        const updateFromEvent = decodedJWT.events[event];
        logger.info("fxa_password_change", {
          subscriber: subscriber.id,
          event,
          updateFromEvent,
        });

        record("account", "password_change", {
          string: {
            monitorUserId: subscriber.id.toString(),
          },
        });

        const refreshToken = subscriber.fxa_refresh_token ?? "";
        const accessToken = subscriber.fxa_access_token ?? "";
        if (!accessToken || !refreshToken) {
          logger.error("failed_changing_password", {
            subscriber_id: subscriber.id,
            fxa_refresh_token: refreshToken,
            fxa_access_token: accessToken,
          });
        }

        // MNTOR-1932: Change password should revoke sessions
        await revokeOAuthTokens({
          fxa_access_token: accessToken,
          fxa_refresh_token: refreshToken,
        });

        return NextResponse.json(
          { success: true, message: "session_revoked" },
          { status: 200 },
        );
      }
      default:
        logger.warn("unhandled_event", {
          event,
        });
        break;
    }
  }

  return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
}
