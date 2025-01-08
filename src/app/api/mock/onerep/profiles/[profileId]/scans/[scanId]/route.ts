/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getLatestOnerepScan } from "../../../../../../../../db/tables/onerep_scans";
import { errorIfProduction } from "../../../../../../utils/errorThrower";
import { mockOnerepTime } from "../../../../config/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  props: { params: Promise<{ profileId: number; scanId: number }> },
) {
  const params = await props.params;
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;
  const scanId: number = params.scanId;

  const latestScan = await getLatestOnerepScan(profileId);

  const responseData =
    latestScan !== null
      ? {
          id: latestScan.id,
          profileId: latestScan.onerep_profile_id,
          status: latestScan.onerep_scan_status,
          created_at: latestScan.created_at,
          updated_at: latestScan.updated_at,
          url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${scanId}`,
        }
      : {
          id: scanId,
          profile_id: profileId,
          status: "finished",
          reason: "manual",
          created_at: mockOnerepTime(),
          updated_at: mockOnerepTime(),
          url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${scanId}`,
        };

  return NextResponse.json(responseData);
}
