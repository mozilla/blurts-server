/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { Profile, getServerSession } from "next-auth";
import {
  OnerepScanResultRow,
  OnerepScanRow,
  SubscriberRow,
} from "knex/types/tables";
import { logger } from "../../../../../functions/server/logging";
import { isAdmin, authOptions } from "../../../../utils/auth";
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
  getAllScansForProfile,
  getScanResults,
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
  onerep_scans: OnerepScanRow[];
  onerep_scan_results: OnerepScanResultRow[][];
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
  const session = await getServerSession(authOptions);
  if (isAdmin(session?.user?.email || "")) {
    // Signed in as admin
    try {
      if (!params.primarySha1) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const primarySha1 = params.primarySha1;
      const subscriber = (await getSubscribersByHashes([primarySha1]))[0];

      let scanData: OnerepScanRow[] = [];
      const scanResultData: OnerepScanResultRow[][] = [];
      if (subscriber.onerep_profile_id) {
        scanData = await getAllScansForProfile(subscriber.onerep_profile_id);
        for (const scan of scanData) {
          const scanResult = await getScanResults(scan.onerep_scan_id);
          scanResultData.push(scanResult);
        }
      }

      const responseBody: GetUserStateResponseBody = {
        subscriberId: subscriber.id,
        onerepProfileId: subscriber.onerep_profile_id,
        createdAt: subscriber.created_at,
        updatedAt: subscriber.updated_at,
        signupLanguage: subscriber.signup_language,
        all_emails_to_primary: subscriber.all_emails_to_primary,
        subscriptions: subscriber.fxa_profile_json?.subscriptions,
        onerep_scans: scanData,
        onerep_scan_results: scanResultData,
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
  const session = await getServerSession(authOptions);
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

      const result = await getOnerepProfileId(subscriber.id);
      const onerepProfileId = result?.[0]?.["onerep_profile_id"] as number;

      logger.info("admin_subscription_change", {
        actions,
        subscriberId: subscriber.id,
      });

      for (const action of actions) {
        switch (action) {
          case "subscribe": {
            await changeSubscription(subscriber, true);

            // activate and opt out profiles
            await activateProfile(onerepProfileId);
            await optoutProfile(onerepProfileId);
            logger.info("force_user_subscribe", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "unsubscribe": {
            await changeSubscription(subscriber, false);

            await deactivateProfile(onerepProfileId);
            logger.info("force_user_unsubscribe", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "delete_onerep_profile": {
            await deleteProfileDetails(onerepProfileId);
            await deleteOnerepProfileId(subscriber.id);
            logger.info("delete_onerep_profile", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "delete_onerep_scans": {
            await deleteScansForProfile(onerepProfileId);
            logger.info("delete_onerep_scans", {
              onerepProfileId,
              primarySha1,
            });
            break;
          }
          case "delete_onerep_scan_results": {
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
