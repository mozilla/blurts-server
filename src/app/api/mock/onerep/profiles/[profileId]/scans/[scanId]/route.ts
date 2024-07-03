/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { errorIfProduction } from "../../../../../../utils/errorThrower";
import { MOCK_ONEREP_TIME } from "../../../../config/config";
import { NextRequest, NextResponse } from "next/server";

export function GET(
  _: NextRequest,
  { params }: { params: { profileId: number; scanId: number } },
) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = params.profileId;
  const scanId: number = params.scanId;

  const responseData = {
    id: scanId,
    profile_id: profileId,
    status: "finished",
    reason: "manual",
    created_at: MOCK_ONEREP_TIME(),
    updated_at: MOCK_ONEREP_TIME(),
    url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/scans/${scanId}`,
  };

  return NextResponse.json(responseData);
}
