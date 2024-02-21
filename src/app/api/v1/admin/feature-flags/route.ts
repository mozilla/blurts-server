/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { logger } from "../../../../functions/server/logging";
import {
  getAllFeatureFlags,
  addFeatureFlag,
  enableFeatureFlagByName,
  disableFeatureFlagByName,
  updateAllowList,
  updateWaitList,
  FeatureFlag,
} from "../../../../../db/tables/featureFlags";

import { isAdmin } from "../../../utils/auth";
import appConstants from "../../../../../appConstants";

export async function GET() {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const flags = await getAllFeatureFlags();
      return NextResponse.json(flags);
    } catch (e) {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const newFlag = (await req.json()) as FeatureFlag;
      if (!newFlag || !newFlag.name) {
        throw new Error("No flag or flag name provided");
      }
      const resp = await addFeatureFlag(newFlag);
      return NextResponse.json(resp);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}

export type FeatureFlagPutRequest = {
  name: string;
  isEnabled?: boolean;
  allowList?: string[];
  waitList?: string[];
};

export async function PUT(req: NextRequest) {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const reqBody = (await req.json()) as FeatureFlagPutRequest;
      // if toggle request
      if (reqBody.isEnabled !== undefined && reqBody.isEnabled) {
        await enableFeatureFlagByName(reqBody.name, reqBody.isEnabled);
      } else if (reqBody.isEnabled !== undefined && !reqBody.isEnabled) {
        await disableFeatureFlagByName(reqBody.name);
      }

      if (reqBody.allowList) {
        await updateAllowList(reqBody.name, reqBody.allowList);
      }

      if (reqBody.waitList) {
        await updateWaitList(reqBody.name, reqBody.waitList);
      }

      return NextResponse.json({ success: true, name: reqBody.name });
    } catch (e) {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(appConstants.SERVER_URL, 301);
  }
}
