/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { vers } from "../../controllers/dockerflow.js";
import { getBreaches, getBreachIcons } from "../functions/server/getBreaches";

export async function GET(req: NextRequest) {
  // heartbeat route for dockerflow
  const slug = req.nextUrl.pathname;
  if (slug.includes("__heartbeat__") || slug.includes("__lbheartbeat__")) {
    // Ensure breaches and their icons are loaded after app startup.
    // Note: we do not `await` this Promise, to ensure we do not delay sending
    //       the heartbeat response while we are still fetching the data.
    // TODO: Replace with a cron job to fetch breach data and icons.
    getBreaches().then((breaches) => getBreachIcons(breaches));
    return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
  }

  // version route
  if (slug.includes("__version__")) {
    return NextResponse.json(vers());
  }

  return new NextResponse(null, { status: 404 });
}
