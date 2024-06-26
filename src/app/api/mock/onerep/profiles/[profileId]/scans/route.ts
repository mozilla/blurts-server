/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { MOCK_ONEREP_SCAN_ID, MOCK_ONEREP_TIME } from "../../../config/config";
import { NextRequest, NextResponse } from "next/server";

//TODO: mock out the id field and url

function extractProfileId(req: NextRequest) {
  const idFromUrl = Number(req.url.match(/profiles\/([0-9]+)\/scans/)![1]);
  return idFromUrl;
}

export function POST(req: NextRequest) {
  const profileId: number = extractProfileId(req);
  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  const mockResponse = {
    id: MOCK_ONEREP_SCAN_ID(),
    profile_id: profileId,
    status: "finished",
    reason: "manual",
    created_at: MOCK_ONEREP_TIME(),
    updated_at: MOCK_ONEREP_TIME(),
    url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${MOCK_ONEREP_SCAN_ID()}`,
  };

  return NextResponse.json(mockResponse);
}

export function GET(req: NextRequest) {
  const profileId: number = extractProfileId(req);

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  //TODO: mock out ID here and urls
  const responseData = {
    data: [
      {
        id: MOCK_ONEREP_SCAN_ID(),
        profile_id: profileId,
        status: "finished",
        reason: "manual",
        created_at: MOCK_ONEREP_TIME(),
        updated_at: MOCK_ONEREP_TIME(),
        url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${MOCK_ONEREP_SCAN_ID()}`,
      },
    ],
    links: {
      first: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans?page=1`,
      last: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans?page=1`,
      prev: null,
      next: null,
    },
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      path: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans`,
      per_page: 20,
      to: 1,
      total: 1,
    },
  };
  return NextResponse.json(responseData);
}
