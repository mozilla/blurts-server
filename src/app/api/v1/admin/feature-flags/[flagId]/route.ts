/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { logger } from "../../../../../functions/server/logging";
import {
  enableFeatureFlagByName,
  getFeatureFlagByName,
  updateAllowList,
} from "../../../../../../db/tables/featureFlags";
import { isAdmin } from "../../../../utils/auth";

export async function GET(
  req: NextRequest,
  props: { params: Promise<{ flagId: string }> },
) {
  const params = await props.params;
  const session = await getServerSession();
  console.log("session from default route: ", session);

  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    const flagName = params.flagId;
    try {
      const flag = await getFeatureFlagByName(flagName);
      return NextResponse.json(flag);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

export type UpdateFeatureFlagRequestBody =
  | {
      id: "isEnabled";
      isEnabled: boolean;
    }
  | {
      id: "allowList";
      value: string;
    };

export async function PUT(req: NextRequest) {
  const session = await getServerSession();
  if (
    isAdmin(session?.user?.email || "") &&
    typeof session?.user?.subscriber?.id === "number"
  ) {
    // Signed in
    try {
      const flagName = req.nextUrl.pathname.split("/").at(-1);
      if (!flagName) {
        throw new Error("No flag name provided");
      }
      const result: UpdateFeatureFlagRequestBody = await req.json();

      if (result.id === "isEnabled") {
        await enableFeatureFlagByName(
          flagName,
          result.isEnabled,
          session.user.subscriber.id,
        );
      } else if (result.id === "allowList") {
        const allowList = result.value.split(",");
        await updateAllowList(flagName, allowList, session.user.subscriber.id);
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
