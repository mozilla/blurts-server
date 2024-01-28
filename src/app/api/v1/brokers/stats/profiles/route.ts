/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";

export function GET() {
  const response = {
    created: 5,
    deleted: 1,
    activated: 2,
    reactivated: 5,
    deactivated: 5,
    total_active: 2,
    total_inactive: 2,
    total: 4,
  };
  return NextResponse.json(response, { status: 200 });
}
