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
  deleteFeatureFlagByName,
} from "../../../../../db/tables/featureFlags";

import { isAdmin } from "../../../utils/auth";

export async function GET() {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const flags = await getAllFeatureFlags();
      return NextResponse.json(flags);
    } catch {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

export type CreateFeatureFlagRequestBody = {
  name: string;
  isEnabled: boolean;
  description?: string;
  dependencies?: string[];
  allowList?: string[];
  waitList?: string[];
  expiredAt?: Date;
  deletedAt?: Date;
  owner?: string;
};

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const newFlag = (await req.json()) as CreateFeatureFlagRequestBody;
      if (!newFlag || !newFlag.name) {
        throw new Error("No flag or flag name provided");
      }
      const resp = await addFeatureFlag({
        name: newFlag.name,
        is_enabled: newFlag.isEnabled,
        description: newFlag.description,
        dependencies: newFlag.dependencies,
        allow_list: newFlag.allowList,
        wait_list: newFlag.waitList,
        expired_at: newFlag.expiredAt,
        owner: newFlag.owner,
      });
      return NextResponse.json(resp);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
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
    } catch {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

export type FeatureFlagDeleteRequest = {
  name: string;
};

export async function DELETE(req: NextRequest) {
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    try {
      const reqBody = (await req.json()) as FeatureFlagDeleteRequest;
      await deleteFeatureFlagByName(reqBody.name);

      return NextResponse.json({ success: true, name: reqBody.name });
    } catch {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
