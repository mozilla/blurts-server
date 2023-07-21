/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import {
  enableFeatureFlagByName,
  getFeatureFlagByName,
  updateAllowList,
  updateDependencies,
  updateOwner,
  updateWaitList,
} from "../../../../../../db/tables/featureFlags";
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

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const flagName = req.nextUrl.pathname.split("/").at(-1);
      if (!flagName) {
        throw new Error("No flag name provided");
      }
      const result = await req.json();

      if (result.id === "isEnabled") {
        await enableFeatureFlagByName(flagName, result.isEnabled);
      } else if (result.id === "dependencies") {
        const dependencies = result.value.split(",");
        await updateDependencies(flagName, dependencies);
      } else if (result.id === "allowList") {
        const allowList = result.value.split(",");
        await updateAllowList(flagName, allowList);
      } else if (result.id === "waitList") {
        const waitList = result.value.split(",");
        await updateWaitList(flagName, waitList);
      } else if (result.id === "owner") {
        const owner = result.value;
        await updateOwner(flagName, owner);
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}
