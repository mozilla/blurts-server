/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { logger } from "../../../../../functions/server/logging";
import { isAdmin } from "../../../../utils/auth";
import {
  deleteAnnouncements,
  getAnnouncementsByAnnouncementsId,
  updateAnnouncements,
} from "../../../../../../db/tables/announcements";
import { AnnouncementRow } from "knex/types/tables";

export async function GET(
  _req: NextRequest,
  props: { params: Promise<{ announcementId: string }> },
) {
  const params = await props.params;
  const session = await getServerSession();

  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }

  const announcementId = params.announcementId;
  try {
    const notificationItem =
      await getAnnouncementsByAnnouncementsId(announcementId);
    return NextResponse.json(notificationItem);
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  props: {
    params: Promise<{ announcementId: string }>;
  },
) {
  const params = await props.params;
  const session = await getServerSession();
  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }

  const announcementId = params.announcementId;
  try {
    const notificationItem = await deleteAnnouncements(announcementId);
    return NextResponse.json(notificationItem);
  } catch (e) {
    logger.error(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ announcementId: string }> },
) {
  const params = await props.params;
  const { announcementId } = params;
  const session = await getServerSession();
  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }
  try {
    const updatedData: AnnouncementRow = await req.json();
    const updatedAnnouncements = await updateAnnouncements(
      announcementId,
      updatedData,
    );

    return NextResponse.json(updatedAnnouncements, { status: 200 });
  } catch (error) {
    console.error("Error updating announcement:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
