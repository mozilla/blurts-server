/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  mockOnerepProfileStatus,
  mockOnerepTime,
  profileIdLeftBound,
  profileIdRightBound,
} from "../config/config.ts";
import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "crypto";
import { errorIfProduction } from "../../../utils/errorThrower.ts";

export type RequestProfileData = {
  first_name: string;
  last_name: string;
  middle_name: string;
  birth_date: string;
  addresses: Array<{ state: string; city: string }>;
};

type ResponseProfileData = {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string | null;
  birth_date: string;
  first_names: string[];
  middle_names: string[];
  last_names: string[];
  phone_numbers: string[];
  emails: string[];
  addresses: Array<{
    id: number;
    profile_id: number;
    state: string;
    city: string;
    address_line: string | null;
    zip: string | null;
    created_at: string;
    updated_at: string;
    url: string;
  }>;
  status: "active" | "inactive";
  created_at: string;
  updated_at: string;
  url: string;
};

export async function POST(req: NextRequest) {
  const prodError = errorIfProduction();
  if (prodError) return prodError;

  //TODO-mock: makes this considerably higher
  const profileId = randomInt(profileIdLeftBound, profileIdRightBound);
  try {
    if (req.body === null) {
      return NextResponse.json({ error: "Invalid request - without body" });
    }
    const requestProfile: RequestProfileData = await req.json();
    // Mock response object
    const responseProfile: ResponseProfileData = {
      id: profileId,
      first_name: requestProfile.first_name,
      last_name: requestProfile.last_name,
      middle_name: requestProfile.middle_name,
      birth_date: requestProfile.birth_date,
      first_names: [],
      middle_names: [],
      last_names: [],
      phone_numbers: [],
      emails: [],
      addresses: requestProfile.addresses.map((addr, index) => ({
        id: profileId + index, // Mocked IDs for addresses
        profile_id: profileId,
        state: addr.state,
        city: addr.city,
        address_line: null,
        zip: null,
        created_at: mockOnerepTime(),
        updated_at: mockOnerepTime(),
        url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/addresses/${profileId + index}`,
      })),
      status: mockOnerepProfileStatus(),
      created_at: mockOnerepTime(),
      updated_at: mockOnerepTime(),
      url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}`,
    };
    return NextResponse.json(responseProfile, { status: 201 });
  } catch (error) {
    console.error("Failed to process request:", error);
    return NextResponse.json(
      { error: "Bad Request: Invalid JSON or incorrect data structure" },
      { status: 403 },
    );
  }
}
