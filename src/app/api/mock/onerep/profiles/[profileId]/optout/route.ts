/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

export function PUT(req: NextRequest) {
  const profileId: number = Number(req.url.match(/profiles\/([0-9]+)/)![1]);

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  //TODO: update the json file corresponding to this user

  return NextResponse.json({
    message: `Profile ${profileId} successfully opted out`,
  });
}
