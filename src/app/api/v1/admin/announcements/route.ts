/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { AnnouncementRow } from "knex/types/tables";
import { NextRequest, NextResponse } from "next/server";
import createDbConnection from "../../../../../db/connect";
import { getAllAnnouncements } from "../../../../../db/tables/announcements";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { isAdmin } from "../../../utils/auth";

const knex = createDbConnection();

export async function GET() {
  const session = await getServerSession();

  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }

  try {
    const announcements = await getAllAnnouncements();
    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ error: "Not an admin user" }, { status: 401 });
  }

  try {
    const newAnnouncements: AnnouncementRow = await req.json();

    const [addedAnnouncements] = await knex("announcements")
      .insert(newAnnouncements)
      .returning("*");

    if (!addedAnnouncements) {
      return NextResponse.json(
        { error: "Failed to insert announcement" },
        { status: 400 },
      );
    }

    return NextResponse.json(addedAnnouncements, { status: 201 });
  } catch (error) {
    console.error("Error adding announcement:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
