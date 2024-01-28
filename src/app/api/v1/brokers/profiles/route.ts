/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.debug("Request:", body);
  const onerepProfile = structuredClone(body);
  onerepProfile.id = 1;
  return NextResponse.json(onerepProfile, { status: 200 });
}
