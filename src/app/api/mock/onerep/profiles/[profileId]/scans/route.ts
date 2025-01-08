/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import {
  mockOnerepObjectLinks,
  mockOnerepObjectMeta,
  mockOnerepScanId,
  mockOnerepTime,
} from "../../../config/config";
import { errorIfProduction } from "../../../../../utils/errorThrower";
import {
  getEmailForProfile,
  getLatestOnerepScan,
} from "../../../../../../../db/tables/onerep_scans";
import {
  emailHashPrefix,
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
  props: { params: Promise<{ profileId: number }> },
) {
  const params = await props.params;
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  const latestScan = await getLatestOnerepScan(profileId);
  if (latestScan) return NextResponse.json([latestScan]);

  const mockScanId = mockOnerepScanId(profileId);

  const mockResponse = {
    id: mockScanId,
    profile_id: profileId,
    status: "finished",
    reason: "manual",
    created_at: mockOnerepTime(),
    updated_at: mockOnerepTime(),
    url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${mockScanId}`,
  } as MockScan;

  return NextResponse.json(mockResponse);
}

export async function GET(
  _: NextRequest,
  props: { params: Promise<{ profileId: number }> },
) {
  const params = await props.params;
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" });
  }

  const scanId = mockOnerepScanId(profileId);
  const links = mockOnerepObjectLinks(profileId);
  const meta = mockOnerepObjectMeta(profileId);

  const email = await getEmailForProfile(profileId);
  if (!email)
    return NextResponse.json({ error: "No email for this ID is found" });
  const emailHash = emailHashPrefix(email);
  const dataKey = hashToEmailKeyMap[emailHash] || "default";
  const dataLookup = mockScans[dataKey];
  const data = dataLookup === undefined ? mockScans["default"] : dataLookup;

  const latestScan = await getLatestOnerepScan(profileId);

  const responseData = {
    data:
      latestScan !== null
        ? [
            {
              id: latestScan.onerep_scan_id,
              profileId: latestScan.onerep_profile_id,
              status: latestScan.onerep_scan_status,
              created_at: latestScan.created_at,
              updated_at: latestScan.updated_at,
              url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${latestScan.onerep_scan_id}`,
            },
          ]
        : data.map(
            (scan) =>
              ({
                id: scanId,
                profile_id: profileId,
                status: scan.status || "finished",
                reason: scan.reason || "manual",
                created_at: scan.created_at || mockOnerepTime(),
                updated_at: scan.updated_at || mockOnerepTime(),
                url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${scanId}`,
              }) as MockScan,
          ),
    links: links,
    meta: meta,
  };
  return NextResponse.json(responseData);
}
