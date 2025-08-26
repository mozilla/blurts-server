/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { initializeUserAnnouncements } from "../../../../../db/tables/user_announcements";
import { redirect } from "next/navigation";
import { getEnabledFeatureFlags } from "../../../../../db/tables/featureFlags";

export async function GET() {
  const session = await getServerSession();

  if (!session?.user?.subscriber) {
    return redirect("/auth/logout");
  }

  const enabledFeatureFlags = await getEnabledFeatureFlags({
    email: session.user.email,
  });

  try {
    const userAnnouncements = await initializeUserAnnouncements(
      session.user,
      enabledFeatureFlags,
    );
    return NextResponse.json(userAnnouncements, { status: 200 });
  } catch (error) {
    console.error("Error initializing announcements:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
