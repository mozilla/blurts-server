/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

import { logger } from "../../../../functions/server/logging";
import { verifyEmailHash } from "../../../../../db/tables/emailAddresses";
import { config } from "../../../../../config";

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams;
    const token = query.get("token");
    if (!token) {
      throw new Error("No token given.");
    }
    await verifyEmailHash(token);
    return NextResponse.redirect(config.serverUrl + "/user/settings", 301);
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
