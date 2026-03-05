/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { logger } from "../../../../functions/server/logging";
import {
  getSubscriberByFxaUid,
  setAllEmailsToPrimary,
} from "../../../../../db/tables/subscribers";
import createDbConnection from "../../../../../db/connect";
import {
  getOrBackfillEmailSubscription,
  updateSubscriptionWithEvent,
} from "../../../../../db/tables/email_subscriptions";
import { BREACH_ALERT_LIST_ID } from "../../../../../constants";
import { captureException } from "@sentry/node";

export type EmailUpdateCommTypeOfOptions = "null" | "affected" | "primary";

export interface EmailUpdateCommOptionRequest {
  instantBreachAlerts?: EmailUpdateCommTypeOfOptions;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (typeof token?.subscriber?.fxa_uid === "string") {
    try {
      const { instantBreachAlerts }: EmailUpdateCommOptionRequest =
        await req.json();
      const subscriber = await getSubscriberByFxaUid(token.subscriber?.fxa_uid);

      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      // "null"     = Do not send instant notifications. Newly added in MNTOR-1368
      // "affected" = Send breach alerts to the corresponding affected emails.
      // "primary"  = Send all breach alerts to user's primary email address.

      let allEmailsToPrimary;
      switch (instantBreachAlerts) {
        case "primary":
          allEmailsToPrimary = true;
          break;
        case "affected":
          allEmailsToPrimary = false;
          break;
        default:
          allEmailsToPrimary = null;
      }

      if (typeof instantBreachAlerts !== "undefined") {
        // Patch to handle unsubscribe and resubscribe logic
        // This variable is currently overloaded and stores
        // both subscription state and communication preference
        // Eventually can migrate to use email_subscriptions table
        // as single source of truth
        if (
          // Unsubscribing
          allEmailsToPrimary === null ||
          // Resubscribing
          (allEmailsToPrimary !== null &&
            subscriber.all_emails_to_primary === null)
        ) {
          const subscribed = allEmailsToPrimary !== null;
          const knex = createDbConnection();
          await knex.transaction(async (trx) => {
            await setAllEmailsToPrimary(subscriber, allEmailsToPrimary, trx);
            // Get subscription and backfill record if this is user existed
            // prior to subscription_events table
            const emailSubscription = await getOrBackfillEmailSubscription(
              subscriber.id,
              BREACH_ALERT_LIST_ID,
              // previous subscription state
              subscriber.all_emails_to_primary !== null,
              trx,
            );
            await updateSubscriptionWithEvent(trx, emailSubscription, {
              subscribed,
              source: "settings",
              timestamp: new Date(),
            });
          });
        } else {
          // Just toggling email pref without subscribe/unsubscribe
          await setAllEmailsToPrimary(subscriber, allEmailsToPrimary);
        }
      }

      return NextResponse.json({
        success: true,
        message: "Communications options updated",
      });
    } catch (e) {
      logger.error("error_update_comm_option", { error: e });
      captureException(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
