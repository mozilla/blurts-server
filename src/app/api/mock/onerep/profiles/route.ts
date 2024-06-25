/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { MOCK_ONEREP_TIME } from "../config/config.ts";
import {
  ResponseProfileData,
  RequestProfileData,
} from "../config/userObject.ts";
import { NextRequest, NextResponse } from "next/server";
import { randomInt } from "crypto";

// Mock API endpoint
export async function POST(req: NextRequest) {
  const profileId = randomInt(1000, 10000);
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
        created_at: MOCK_ONEREP_TIME,
        updated_at: MOCK_ONEREP_TIME,
        url: `${process.env.ONEREP_API_BASE}/profiles/${profileId}/addresses/${profileId + index}`,
      })),
      status: "active", //assuming status is active
      created_at: MOCK_ONEREP_TIME,
      updated_at: MOCK_ONEREP_TIME,
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
