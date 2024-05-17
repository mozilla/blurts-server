/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { logger } from "../../../../functions/server/logging";
import AppConstants from "../../../../../appConstants";

import {
  getSubscriberByFxaUid,
  setAllEmailsToPrimary,
  setMonthlyMonitorReport,
} from "../../../../../db/tables/subscribers";

export type EmailUpdateCommTypeOfOptions = "null" | "affected" | "primary";

export interface EmailUpdateCommOptionRequest {
  instantBreachAlerts?: EmailUpdateCommTypeOfOptions;
  monthlyMonitorReport?: boolean;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (typeof token?.subscriber?.fxa_uid === "string") {
    try {
      const {
        instantBreachAlerts,
        monthlyMonitorReport,
      }: EmailUpdateCommOptionRequest = await req.json();
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
        await setAllEmailsToPrimary(subscriber, allEmailsToPrimary);
      }
      if (typeof monthlyMonitorReport === "boolean") {
        await setMonthlyMonitorReport(subscriber, monthlyMonitorReport);
      }

      return NextResponse.json({
        success: true,
        message: "Communications options updated",
      });
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 301);
  }
}
