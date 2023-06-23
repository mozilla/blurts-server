/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getFeatureFlagByName } from "../../../../../../db/tables/featureFlags";
import { isAdmin, authOptions } from "../../../../utils/auth";
import appConstants from "../../../../../../appConstants";

export async function GET(
  req: NextRequest,
  { params }: { params: { flagId: string } }
) {
  const session = await getServerSession(authOptions);
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    const flagName = params.flagId;
    try {
      const flag = await getFeatureFlagByName(flagName);
      return NextResponse.json(flag);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}
