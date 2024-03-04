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
  getOnerepProfileId,
} from "../../../../db/tables/subscribers.js";
import {
  activateProfile,
  deactivateProfile,
  optoutProfile,
} from "../../../functions/server/onerep";
import { bearerToken } from "../../utils/auth";
import { revokeOAuthTokens } from "../../../../utils/fxa";
import appConstants from "../../../../appConstants";
import { changeSubscription } from "../../../functions/server/changeSubscription";
import { deleteAccount } from "../../../functions/server/deleteAccount";

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
const getJwtPubKey = async () => {
  const jwtKeyUri = `${appConstants.OAUTH_ACCOUNT_URI}/jwks`;
  try {
    const response = await fetch(jwtKeyUri, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { keys } = (await response.json()) as { keys: jwkToPem.JWK[] };
    logger.info(
      "getJwtPubKey",
      `fetched jwt public keys from: ${jwtKeyUri} - ${keys.length}`,
    );
    return keys;
  } catch (e: unknown) {
    logger.error("getJwtPubKey", `Could not get JWT public key: ${jwtKeyUri}`);
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
    logger.error("fxaRpEvents", e);
    captureException(e);
    return NextResponse.json({ success: false }, { status: 401 });
  }

  if (!decodedJWT?.events) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    logger.error("fxaRpEvents", decodedJWT);
    captureMessage(
      `fxaRpEvents: decodedJWT is missing attribute "events", ${
        decodedJWT as unknown as string
      }`,
    );
    return NextResponse.json(
      {
        success: false,
        message: 'fxaRpEvents: decodedJWT is missing attribute "events"',
      },
      { status: 400 },
    );
  }

  const fxaUserId = decodedJWT?.sub;
  if (!fxaUserId) {
    // capture an exception in Sentry only. Throwing error will trigger FXA retry
    captureMessage(
      `fxaRpEvents: decodedJWT is missing attribute "sub", ${
        decodedJWT as unknown as string
      }`,
    );
    return NextResponse.json(
      {
        success: false,
        message: 'fxaRpEvents: decodedJWT is missing attribute "sub"',
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
    logger.error("fxaRpEvents", e);
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

        break;
      }
      case FXA_SUBSCRIPTION_CHANGE_EVENT: {
        const updatedSubscriptionFromEvent = decodedJWT.events[
          event
        ] as SubscriptionStateChangeEvent;
        logger.info("fxa_subscription_change", {
          subscriber: subscriber.id,
          event,
          updatedSubscriptionFromEvent,
        });

        try {
          // get profile id
          const oneRepProfileId = await getOnerepProfileId(subscriber.id);

          logger.info("get_onerep_profile", {
            subscriber_id: subscriber.id,
            oneRepProfileId,
          });

          if (
            updatedSubscriptionFromEvent.isActive &&
            updatedSubscriptionFromEvent.capabilities.includes(
              MONITOR_PREMIUM_CAPABILITY,
            )
          ) {
            // Update fxa profile data to match subscription status.
            // This is done before trying to activate the OneRep subscription, in case there are
            // any problems with activation.
            await changeSubscription(subscriber, true);

            // MNTOR-2103: if one rep profile id doesn't exist in the db, fail immediately
            if (!oneRepProfileId) {
              logger.error("onerep_profile_not_found", {
                subscriber_id: subscriber.id,
              });

              captureMessage(
                `User subscribed but no OneRep profile Id found, user: ${
                  subscriber.id
                }\n
            Event: ${event}\n
            updateFromEvent: ${JSON.stringify(updatedSubscriptionFromEvent)}`,
              );
              return NextResponse.json(
                {
                  success: true,
                  message: "failed_activating_subscription_profile_id_missing",
                },
                { status: 200 },
              );
            }

            // activate and opt out profiles
            try {
              await activateProfile(oneRepProfileId);
            } catch (ex) {
              if (
                (ex as Error).message ===
                "Failed to activate OneRep profile: [403] [Forbidden]"
              )
                logger.error("profile_already_activated", {
                  subscriber_id: subscriber.id,
                  exception: ex,
                });
            }

            try {
              await optoutProfile(oneRepProfileId);
            } catch (ex) {
              if (
                (ex as Error).message ===
                "Failed to opt-out OneRep profile: [403] [Forbidden]"
              )
                logger.error("profile_already_opted_out", {
                  subscriber_id: subscriber.id,
                  exception: ex,
                });
            }

            logger.info("activated_onerep_profile", {
              subscriber_id: subscriber.id,
            });
          } else if (
            !updatedSubscriptionFromEvent.isActive &&
            updatedSubscriptionFromEvent.capabilities.includes(
              MONITOR_PREMIUM_CAPABILITY,
            )
          ) {
            // Update fxa profile data to match subscription status.
            // This is done before trying to deactivate the OneRep subscription, in case there are
            // any problems with deactivation.
            await changeSubscription(subscriber, false);

            // MNTOR-2103: if one rep profile id doesn't exist in the db, fail immediately
            if (!oneRepProfileId) {
              logger.error("onerep_profile_not_found", {
                subscriber_id: subscriber.id,
              });

              captureMessage(
                `No OneRep profile Id found, subscriber: ${subscriber.id}\n
                        Event: ${event}\n
                        updateFromEvent: ${JSON.stringify(
                          updatedSubscriptionFromEvent,
                        )}`,
              );
              return NextResponse.json(
                { success: true, message: "failed_deactivating_subscription" },
                { status: 200 },
              );
            }

            // deactivation stops opt out process
            try {
              await deactivateProfile(oneRepProfileId);
            } catch (ex) {
              if (
                (ex as Error).message ===
                "Failed to deactivate OneRep profile: [403] [Forbidden]"
              )
                logger.error("profile_already_opted_out", {
                  subscriber_id: subscriber.id,
                  exception: ex,
                });
            }

            logger.info("deactivated_onerep_profile", {
              subscriber_id: subscriber.id,
            });
          }
        } catch (e) {
          captureMessage(
            `${(e as Error).message}\n
          Event: ${event}\n
          updateFromEvent: ${JSON.stringify(updatedSubscriptionFromEvent)}`,
          );
          logger.error("failed_activating_subscription", {
            subscriber_id: subscriber.id,
            exception: e,
          });
          return NextResponse.json(
            { success: false, message: "failed_activating_subscription" },
            { status: 500 },
          );
        }
        break;
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
