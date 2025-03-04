/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NotificationRow } from "knex/types/tables";
import { NextRequest, NextResponse } from "next/server";
import createDbConnection from "../../../../../db/connect";
import { getAllNotifications } from "../../../../../db/tables/notifications";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { isAdmin } from "../../../utils/auth";
import { logger } from "../../../../functions/server/logging";

const knex = createDbConnection();

export async function GET() {
  const session = await getServerSession();

  if (!isAdmin(session?.user?.email || "")) {
    logger.error("Not an admin user");
  }

  try {
    const notifications = await getAllNotifications();
    return NextResponse.json(notifications, { status: 200 });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const newNotification: NotificationRow = await req.json();

    const [addedNotification] = await knex("notifications")
      .insert(newNotification)
      .returning("*");

    if (!addedNotification) {
      return NextResponse.json(
        { error: "Failed to insert notification" },
        { status: 400 },
      );
    }

    return NextResponse.json(addedNotification, { status: 201 });
  } catch (error) {
    console.error("Error adding notification:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
