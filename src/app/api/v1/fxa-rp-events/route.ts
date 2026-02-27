/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

import { logger } from "../../../functions/server/logging";
import {
  getSubscriberByFxaUid,
  updateFxAProfileData,
  updatePrimaryEmail,
} from "../../../../db/tables/subscribers";
import { bearerToken } from "../../utils/bearerToken";
import { revokeOAuthTokens } from "../../../../utils/fxa";
import { deleteAccount } from "../../../functions/server/deleteAccount";
import { record } from "../../../functions/server/glean";
import { config } from "../../../../config";
import { jwksClient } from "../../../../utils/jwks";

const FXA_PROFILE_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/profile-change";
const FXA_PASSWORD_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/password-change";
const FXA_DELETE_USER_EVENT =
  "https://schemas.accounts.firefox.com/event/delete-user";
const FXA_SUBSCRIPTION_STATE_CHANGE_EVENT =
  "https://schemas.accounts.firefox.com/event/subscription-state-change";

/**
 * Authenticate FxA JWT for FxA relay event requests
 *
 * @param req NextRequest
 * @returns decoded JWT data, which should contain FxA events
 */
const authenticateFxaJWT = async (req: NextRequest) => {
  // Validate bearer token exists and extract it
  const headerToken = bearerToken(req);
  const JWKS = jwksClient();
  // Verify the token against the remote keyset with specified issuer and audience
  // jose handles matching against kid, algorithm, etc. and requires that
  // there be only one matching key
  const { payload } = await jose.jwtVerify<FxaJwtPayload>(headerToken, JWKS, {
    issuer: config.fxaIssuer,
    audience: config.oauthClientId,
    algorithms: ["RS256"],
  });
  return payload;
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

interface FxaJwtPayload {
  sub: string;
  events: {
    [FXA_PROFILE_CHANGE_EVENT]: ProfileChangeEvent;
    [FXA_PASSWORD_CHANGE_EVENT]: PasswordChangeEvent;
    [FXA_SUBSCRIPTION_STATE_CHANGE_EVENT]: SubscriptionStateChangeEvent;
    [FXA_DELETE_USER_EVENT]: null;
  };
}

export async function POST(request: NextRequest) {
  let decodedJWT: FxaJwtPayload & jose.JWTPayload;

  try {
    decodedJWT = await authenticateFxaJWT(request);
  } catch (err) {
    logger.error("fxa_rp_event: jwtVerify error", { exception: err });
    return NextResponse.json({ success: false }, { status: 401 });
  }

  if (!("events" in decodedJWT && Object.keys(decodedJWT.events).length > 0)) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    const message = 'fxa_rp_event: decodedJWT is missing attribute "events"';
    logger.error(message);
    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: 400 },
    );
  }

  const fxaUserId = decodedJWT.sub;
  if (!fxaUserId) {
    const message = 'fxa_rp_event: decodedJWT is missing attribute "sub"';
    logger.error(message);
    return NextResponse.json(
      {
        success: false,
        message,
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
  for (const event in decodedJWT.events) {
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
