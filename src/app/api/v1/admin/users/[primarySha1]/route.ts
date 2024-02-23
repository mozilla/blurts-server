/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { Profile } from "next-auth";
import { SubscriberRow } from "knex/types/tables";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { logger } from "../../../../../functions/server/logging";
import { isAdmin } from "../../../../utils/auth";
import {
  deleteOnerepProfileId,
  deleteSubscriber,
  getOnerepProfileId,
  getSubscriberByEmail,
  getSubscribersByHashes,
} from "../../../../../../db/tables/subscribers";
import {
  activateProfile,
  deactivateProfile,
  optoutProfile,
} from "../../../../../functions/server/onerep";
import { deleteProfileDetails } from "../../../../../../db/tables/onerep_profiles";
import {
  deleteScanResultsForProfile,
  deleteScansForProfile,
} from "../../../../../../db/tables/onerep_scans";
import { changeSubscription } from "../../../../../functions/server/changeSubscription";

export type GetUserStateResponseBody = {
  subscriberId: SubscriberRow["id"];
  onerepProfileId: SubscriberRow["onerep_profile_id"];
  createdAt: SubscriberRow["created_at"];
  updatedAt: SubscriberRow["updated_at"];
  signupLanguage: SubscriberRow["signup_language"];
  all_emails_to_primary: SubscriberRow["all_emails_to_primary"];
  subscriptions: Profile["subscriptions"];
};

/**
 * Look up a subscriber based on SHA1 hash of their email address.
 *
 * This requires admin privileges, and doesn't return any PII directly, just user state and IDs.
 *
 * @param req
 * @param root0
 * @param root0.params
 * @param root0.params.primarySha1
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { primarySha1: string } },
) {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in as admin
    try {
      if (!params.primarySha1) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const primarySha1 = params.primarySha1;
      const subscriber = (await getSubscribersByHashes([primarySha1]))[0];
      const responseBody: GetUserStateResponseBody = {
        subscriberId: subscriber.id,
        onerepProfileId: subscriber.onerep_profile_id,
        createdAt: subscriber.created_at,
        updatedAt: subscriber.updated_at,
        signupLanguage: subscriber.signup_language,
        all_emails_to_primary: subscriber.all_emails_to_primary,
        subscriptions: subscriber.fxa_profile_json?.subscriptions,
      };
      return NextResponse.json(responseBody);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not signed in as admin
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

export type UserStateAction =
  | "subscribe"
  | "unsubscribe"
  | "delete_onerep_profile"
  | "delete_onerep_scans"
  | "delete_onerep_scan_results"
  | "delete_subscriber";
export type PutUserStateRequestBody = {
  actions: UserStateAction[];
};

/**
 * Change user state based on subscriber ID.
 *
 * Multiple actions may be specified in one request:
 * {
 *   "actions":[
 *     "subscribe",
 *     "unsubscribe",
 *     "delete_onerep_profile",
 *     "delete_onerep_scans",
 *     "delete_onerep_scan_results",
 *     "delete_subscriber"
 *   ]
 * }
 *
 * Actions will be processed in the order specified.
 *
 * NOTE: this will only carry out the server actions that should happen - client
 * state (such as the badge) depends on the FxA `subscriptions` claim in the JWT.
 *
 * @param req
 * @param root0
 * @param root0.params
 * @param root0.params.primarySha1
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: { primarySha1: string } },
) {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in as admin
    try {
      const primarySha1 = params.primarySha1;
      if (!primarySha1) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const body = await req.json();
      const actions = body.actions;

      const subscriberRow = (await getSubscribersByHashes([primarySha1]))[0];
      const subscriber = await getSubscriberByEmail(
        subscriberRow.primary_email,
      );
      if (!subscriber) {
        throw new Error("No subscriber found for given email.");
      }

      const onerepProfileId = await getOnerepProfileId(subscriber.id);

      logger.info("admin_subscription_change", {
        actions,
        subscriberId: subscriber.id,
      });

      for (const action of actions) {
        switch (action) {
          case "subscribe": {
            await changeSubscription(subscriber, true);

            // activate and opt out profiles, if any
            if (typeof onerepProfileId === "number") {
              await activateProfile(onerepProfileId);
              await optoutProfile(onerepProfileId);
            }
            logger.info("force_user_subscribe", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "unsubscribe": {
            await changeSubscription(subscriber, false);

            if (typeof onerepProfileId === "number") {
              await deactivateProfile(onerepProfileId);
            }
            logger.info("force_user_unsubscribe", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "delete_onerep_profile": {
            if (typeof onerepProfileId !== "number") {
              throw new Error(
                `Could not force-delete the OneRep profile of subscriber [${primarySha1}], as they do not have a OneRep profile known to us.`,
              );
            }
            await deleteProfileDetails(onerepProfileId);
            await deleteOnerepProfileId(subscriber.id);
            logger.info("delete_onerep_profile", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "delete_onerep_scans": {
            if (typeof onerepProfileId !== "number") {
              throw new Error(
                `Could not force-delete OneRep scans for subscriber [${primarySha1}], as they do not have a OneRep profile known to us.`,
              );
            }
            await deleteScansForProfile(onerepProfileId);
            logger.info("delete_onerep_scans", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "delete_onerep_scan_results": {
            if (typeof onerepProfileId !== "number") {
              throw new Error(
                `Could not force-delete OneRep scan results for subscriber [${primarySha1}], as they do not have a OneRep profile known to us.`,
              );
            }
            await deleteScanResultsForProfile(onerepProfileId);
            logger.info("delete_onerep_scan_results", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "delete_subscriber": {
            await deleteSubscriber(subscriber);
            logger.info("delete_subscriber", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          default: {
            logger.error("unknown_action", action);
            return NextResponse.json({ success: false }, { status: 500 });
          }
        }
      }
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    // Not signed in as admin
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
