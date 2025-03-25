/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { initializeUserAnnouncements } from "../../../../../db/tables/user_announcements";

export async function GET() {
  const session = await getServerSession();
  const userId = session?.user?.subscriber?.id;

  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const announcements = await initializeUserAnnouncements(userId);
    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    console.error("Error initializing announcements:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
