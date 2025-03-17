/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  mockOnerepTime,
  mockOnerepFirstName,
  mockOnerepLastName,
  mockOnerepBirthdate,
  mockOnerepAddresses,
  mockOnerepProfileStatus,
} from "../../config/config.ts";
import { ShowProfileResponse } from "../../../../../functions/server/onerep.ts";
import { NextRequest, NextResponse } from "next/server";
import { errorIfProduction } from "../../../../utils/errorThrower.ts";

// Mock endpoint to simulate fetching a profile by ID
export async function GET(
  _: NextRequest,
  props: { params: Promise<{ profileId: string }> },
) {
  const params = await props.params;
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  const profileId: number = Number(params.profileId);

  if (!profileId || isNaN(profileId)) {
    return NextResponse.json({ error: "Invalid profile ID" }, { status: 400 });
  }

  const mockProfileData: ShowProfileResponse = {
    id: profileId,
    first_name: mockOnerepFirstName(),
    last_name: mockOnerepLastName(),
    birth_date: mockOnerepBirthdate(),
    addresses: mockOnerepAddresses(),
    status: mockOnerepProfileStatus(),
    created_at: mockOnerepTime(),
    updated_at: mockOnerepTime(),
    url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}`,
  };

  return NextResponse.json(mockProfileData);
}
