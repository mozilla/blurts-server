/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { CreateScanResponse } from "../../../../../../functions/server/onerep";

export function GET(_request: NextRequest, { params }) {
  console.debug(params);

  const response = {
    data: [
      {
        id: 1,
        profile_id: 1,
        status: "finished", // FIXME make dynamic
        reason: "manual", // FIXME make dynamic
        created_at: "2019-06-05T11:11:11+0000",
        updated_at: "2019-06-05T11:11:11+0000",
        url: "https://api.onerep.com/scans/1",
      },
    ],
    links: {
      first: "https://api.onerep.com/profiles/2/scans?page=1",
      last: "https://api.onerep.com/profiles/2/scans?page=1",
      prev: null,
      next: null,
    },
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      path: "https://api.onerep.com/profiles/2/scans",
      per_page: 20,
      to: 1,
      total: 1,
    },
  };

  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.debug("Request:", body);

  const response: CreateScanResponse = {
    id: 1,
    profile_id: 1,
    status: "in_progress",
    reason: "manual",
    created_at: Date.now().toString(),
    updated_at: Date.now().toString(),
  };

  return NextResponse.json(response, { status: 200 });
}
