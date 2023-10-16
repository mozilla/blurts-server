/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { vers } from "../../utils/dockerflow.js";

export function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  // heartbeat route for dockerflow
  if (
    params.slug.includes("__heartbeat__") ||
    params.slug.includes("__lbheartbeat__")
  ) {
    return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
  }

  // version route
  if (params.slug.includes("__version__")) {
    return NextResponse.json(vers());
  }

  return new NextResponse(null, { status: 404 });
}
