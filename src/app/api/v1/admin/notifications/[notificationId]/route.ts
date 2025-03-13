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
  updateNotification,
} from "../../../../../../db/tables/notifications";
import { NotificationRow } from "knex/types/tables";

export async function GET(
  _req: NextRequest,
  props: { params: Promise<{ notificationId: string }> },
) {
  const params = await props.params;
  const session = await getServerSession();

  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }

  const notificationId = params.notificationId;
  try {
    const notificationItem =
      await getNotificationByNotificationId(notificationId);
    return NextResponse.json(notificationItem);
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  props: {
    params: Promise<{ notificationId: string }>;
  },
) {
  const params = await props.params;
  const session = await getServerSession();
  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }

  const notificationId = params.notificationId;
  try {
    const notificationItem = await deleteNotification(notificationId);
    return NextResponse.json(notificationItem);
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ notificationId: string }> },
) {
  const params = await props.params;
  const { notificationId } = params;
  const session = await getServerSession();
  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }
  try {
    const updatedData: NotificationRow = await req.json();
    const updatedNotification = await updateNotification(
      notificationId,
      updatedData,
    );

    return NextResponse.json(updatedNotification, { status: 200 });
  } catch (error) {
    console.error("Error updating notification:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
