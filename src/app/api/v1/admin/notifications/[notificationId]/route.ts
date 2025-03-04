/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { logger } from "../../../../../functions/server/logging";
import { isAdmin } from "../../../../utils/auth";
import {
  deleteNotification,
  getNotificationByNotificationId,
} from "../../../../../../db/tables/notifications";

export async function GET(
  req: NextRequest,
  props: { params: Promise<{ notificationId: string }> },
) {
  const params = await props.params;
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    const notificationId = params.notificationId;
    try {
      const notificationItem =
        await getNotificationByNotificationId(notificationId);
      return NextResponse.json(notificationItem);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

export async function DELETE(
  req: NextRequest,
  props: { params: Promise<{ notificationId: string }> },
) {
  const params = await props.params;
  const session = await getServerSession();
  if (isAdmin(session?.user?.email || "")) {
    // Signed in
    const notificationId = params.notificationId;
    try {
      const notificationItem = await deleteNotification(notificationId);
      return NextResponse.json(notificationItem);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
