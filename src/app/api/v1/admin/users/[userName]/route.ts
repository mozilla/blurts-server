/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { isAdmin, authOptions } from "../../../../utils/auth";
import appConstants from "../../../../../../appConstants";
import {
  activateProfile,
  deactivateProfile,
  optoutProfile,
} from "../../../../../functions/server/onerep";
import { getSubscriberByEmail } from "../../../../../../db/tables/subscribers";

export async function GET(
  req: NextRequest,
  { params }: { params: { userName: string } }
) {
  const session = await getServerSession(authOptions);
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    const userName = params.userName;
    try {
      const subscriber = await getSubscriberByEmail(userName);
      return NextResponse.json(subscriber);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const userPrimaryEmail = req.nextUrl.pathname.split("/").at(-1);
      if (!userPrimaryEmail) {
        throw new Error("No userPrimaryEmail provided");
      }
      const result = await req.json();

      if (result.id === "isEnabled") {
        if (result.isEnabled) {
          console.debug({ result });
          // activate and opt out profiles
          await activateProfile(result.onerepProfileId);
          await optoutProfile(result.onerepProfileId);
        } else {
          // deactivate profile
          await deactivateProfile(result.oneRepProfileId);
        }
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
