/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "../../../../../../functions/server/getServerSession";
import { markAnnouncementAsSeen } from "../../../../../../../db/tables/user_announcements";

export async function PUT(
  _req: NextRequest,
  { params }: { params: { announcementId: string } },
) {
  const session = await getServerSession();
  const userId = session?.user?.subscriber?.id;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await markAnnouncementAsSeen(userId, params.announcementId);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: `Failed to update ${params.announcementId}` },
      { status: 500 },
    );
  }
}
