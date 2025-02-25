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
  featureFlagNames,
  getEnabledFeatureFlags,
} from "../../../../../db/tables/featureFlags";

import { isAdmin } from "../../../utils/auth";

/**
 * This API endpoint returns a list of all globally-enabled feature flag names by default.
 * If an admin is signed in, it will return all data about all feature flags,
 * regardless of whether they're enabled.
 * (This latter functionality does not seem to be used anywhere, so maybe we
 * should remove that for consistency? Or alternatively, move the non-admin
 * functionality outside of the `/admin/` namespace?)
 */
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
    const flagNamesInDb = await getEnabledFeatureFlags({ isSignedOut: true });
    const availableFlags = featureFlagNames;
    return NextResponse.json(
      availableFlags.filter((flag) => flagNamesInDb.indexOf(flag) !== -1),
    );
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
  if (
    isAdmin(session?.user?.email || "") &&
    typeof session?.user?.subscriber?.id === "number"
  ) {
    // Signed in
    try {
      const newFlag = (await req.json()) as CreateFeatureFlagRequestBody;
      if (!newFlag || !newFlag.name) {
        throw new Error("No flag or flag name provided");
      }
      const resp = await addFeatureFlag({
        name: newFlag.name,
        is_enabled: newFlag.isEnabled,
        allow_list: newFlag.allowList,
        last_updated_by_subscriber_id: session.user.subscriber.id,
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
  if (
    isAdmin(session?.user?.email || "") &&
    typeof session?.user?.subscriber?.id === "number"
  ) {
    // Signed in
    try {
      const reqBody = (await req.json()) as FeatureFlagPutRequest;
      // if toggle request
      if (reqBody.isEnabled !== undefined && reqBody.isEnabled) {
        await enableFeatureFlagByName(
          reqBody.name,
          reqBody.isEnabled,
          session.user.subscriber.id,
        );
      } else if (reqBody.isEnabled !== undefined && !reqBody.isEnabled) {
        await disableFeatureFlagByName(
          reqBody.name,
          session.user.subscriber.id,
        );
      }
      return NextResponse.json({ success: true, name: reqBody.name });
    } catch {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
