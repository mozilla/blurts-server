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
} from "../../../../../db/tables/subscribers";

export interface EmailUpdateCommOptionRequest {
  /** "1" to send breach alerts to the primary email address, "0" to send them to the affected address */
  communicationOption: "0" | "1";
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (typeof token?.subscriber?.fxa_uid === "string") {
    try {
      const { communicationOption }: EmailUpdateCommOptionRequest =
        await req.json();
      const subscriber = await getSubscriberByFxaUid(token.subscriber?.fxa_uid);
      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      // 0 = Send breach alerts to the corresponding affected emails.
      // 1 = Send all breach alerts to user's primary email address.
      const allEmailsToPrimary = Number(communicationOption) === 1 ?? false;
      await setAllEmailsToPrimary(subscriber, allEmailsToPrimary);

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
