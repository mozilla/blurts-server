/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { MOCK_ONEREP_SCAN_ID, MOCK_ONEREP_TIME } from "../../../config/config";
import { errorIfProduction } from "../../../../utils/errorThrower";

export function POST(
  _: NextRequest,
  { params }: { params: { profileId: number } },
) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  const scanId = MOCK_ONEREP_SCAN_ID(profileId);

  const mockResponse = {
    id: scanId,
    profile_id: profileId,
    status: "finished",
    reason: "manual",
    created_at: MOCK_ONEREP_TIME(),
    updated_at: MOCK_ONEREP_TIME(),
    url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${scanId}`,
  };

  return NextResponse.json(mockResponse);
}

export function GET(
  _: NextRequest,
  { params }: { params: { profileId: number } },
) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  const scandId = MOCK_ONEREP_SCAN_ID(profileId);

  const responseData = {
    data: [
      {
        id: scandId,
        profile_id: profileId,
        status: "finished",
        reason: "manual",
        created_at: MOCK_ONEREP_TIME(),
        updated_at: MOCK_ONEREP_TIME(),
        url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${scandId}`,
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
