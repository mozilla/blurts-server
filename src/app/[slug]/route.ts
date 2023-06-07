/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname;
  if (slug.includes("__heartbeat__") || slug.includes("__lbheartbeat__")) {
    return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
  }

  //TODO: add a version route
  // if (slug.includes("__version__")) {
  //   return NextResponse.json({ success: true, version: "1.0" });
  // }
}
