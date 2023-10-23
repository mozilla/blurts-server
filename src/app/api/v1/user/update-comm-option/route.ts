/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

import { logger } from "../../../../functions/server/logging";
import AppConstants from "../../../../../appConstants";

import {
  getSubscriberByEmail,
  setAllEmailsToPrimary,
} from "../../../../../db/tables/subscribers";

interface EmailUpdateCommOptionRequest {
  communicationOption: string;
}

export async function POST(req: NextRequest) {
  const token = await getToken({ req });

  if (typeof token?.email === "string") {
    try {
      const { communicationOption }: EmailUpdateCommOptionRequest =
        await req.json();
      const subscriber = await getSubscriberByEmail(token.email);
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
