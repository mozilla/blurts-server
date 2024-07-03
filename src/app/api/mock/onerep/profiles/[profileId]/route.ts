/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  MOCK_ONEREP_TIME,
  MOCK_ONEREP_FIRSTNAME,
  MOCK_ONEREP_LASTNAME,
  MOCK_ONEREP_BIRTHDATE,
  MOCK_ONEREP_ADDRESSES,
  MOCK_ONEREP_STATUS,
} from "../../config/config.ts";
import { ShowProfileResponse } from "../../../../../functions/server/onerep.ts";
import { NextRequest, NextResponse } from "next/server";
import { errorIfProduction } from "../../../../utils/errorThrower.ts";

// Mock endpoint to simulate fetching a profile by ID
export function GET(
  _: NextRequest,
  { params }: { params: { profileId: string } },
) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = Number(params.profileId);

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" }, { status: 400 });
  }

  const mockProfileData: ShowProfileResponse = {
    id: profileId,
    first_name: MOCK_ONEREP_FIRSTNAME(),
    last_name: MOCK_ONEREP_LASTNAME(),
    birth_date: MOCK_ONEREP_BIRTHDATE(),
    addresses: MOCK_ONEREP_ADDRESSES(),
    status: MOCK_ONEREP_STATUS(),
    created_at: MOCK_ONEREP_TIME(),
    updated_at: MOCK_ONEREP_TIME(),
    url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}`,
  };

  return NextResponse.json(mockProfileData);
}
