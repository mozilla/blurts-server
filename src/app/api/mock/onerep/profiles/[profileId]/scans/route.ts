/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import {
  MOCK_ONEREP_OBJECT_LINKS,
  MOCK_ONEREP_OBJECT_META,
  MOCK_ONEREP_SCAN_ID,
  MOCK_ONEREP_TIME,
} from "../../../config/config";
import { errorIfProduction } from "../../../../../utils/errorThrower";
import {
  getEmailForProfile,
  getLatestOnerepScan,
} from "../../../../../../../db/tables/onerep_scans";
import {
  computeSha1First6,
  hashToEmailKeyMap,
} from "../../../../../utils/mockUtils";
import mockUser from "../../../mockData/mockUser.json";

interface ScansMap {
  [key: string]: MockScanOptionals[];
}

interface MockScan {
  id: number;
  profile_id: number;
  status: string;
  reason: string;
  created_at: string;
  updated_at: string;
  url: string;
}

interface MockScanOptionals {
  status?: string;
  reason?: string;
  created_at?: string;
  updated_at?: string;
}

const mockScans = mockUser.SCANS_LIST as ScansMap;

export async function POST(
  _: NextRequest,
  { params }: { params: { profileId: number } },
) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  const latestScan = await getLatestOnerepScan(profileId);
  if (latestScan) return NextResponse.json([latestScan]);

  const mockScanId = MOCK_ONEREP_SCAN_ID(profileId);

  const mockResponse = {
    id: mockScanId,
    profile_id: profileId,
    status: "finished",
    reason: "manual",
    created_at: MOCK_ONEREP_TIME(),
    updated_at: MOCK_ONEREP_TIME(),
    url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${mockScanId}`,
  } as MockScan;

  return NextResponse.json(mockResponse);
}

export async function GET(
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
  const links = MOCK_ONEREP_OBJECT_LINKS(profileId);
  const meta = MOCK_ONEREP_OBJECT_META(profileId);

  const email = await getEmailForProfile(profileId);
  if (!email)
    return NextResponse.json({ error: "No email for this ID is found" });
  const emailHash = computeSha1First6(email);
  const dataKey = hashToEmailKeyMap[emailHash] || "default";
  const data = mockScans[dataKey];

  const latestScan = await getLatestOnerepScan(profileId);

  const responseData = {
    data: latestScan
      ? [latestScan]
      : data.map(
          (scan) =>
            ({
              id: scandId,
              profile_id: profileId,
              status: scan.status || "finished",
              reason: scan.reason || "manual",
              created_at: scan.created_at || MOCK_ONEREP_TIME(),
              updated_at: scan.updated_at || MOCK_ONEREP_TIME(),
              url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${scandId}`,
            }) as MockScan,
        ),
    links: links,
    meta: meta,
  };
  return NextResponse.json(responseData);
}
