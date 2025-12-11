/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";

//ONLY PART OF ADMIN - probably shouldn't mock?
export function GET() {
  return NextResponse.json({ error: "You've reached a mock endpoint" });
}

export function POST() {
  return NextResponse.json({ error: "You've reached a mock endpoint" });
}

export function PUT() {
  return NextResponse.json({ error: "You've reached a mock endpoint" });
}

export function DELETE() {
  return NextResponse.json({ error: "You've reached a mock endpoint" });
}
