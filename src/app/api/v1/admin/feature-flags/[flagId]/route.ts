/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import {
  getFeatureFlagByName
} from "../../../../../../db/tables/featureFlags";
import { isAdmin } from "../../../../utils/auth";
import appConstants from "../../../../../../appConstants";

//  import appConstants from "../../../../../appConstants";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (typeof token?.email === "string" && isAdmin(token?.email)) {
    // Signed in
    const flagName = req.nextUrl.toString().split('/').pop() || ''
    console.log({ flagName })
    try {
      const flag = await getFeatureFlagByName(flagName)
      return NextResponse.json(flag);
    } catch (e) {
      console.error(e)
      return NextResponse.json({ success: false }, { status: 500 });
    }
  }
  else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}