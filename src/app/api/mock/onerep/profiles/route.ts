/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { NextApiRequest, NextApiResponse } from "next";
import { MOCK_PROFILE_ID, MOCK_TIME } from "../config/config.ts";

type RequestProfileData = {
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

// Mock API endpoint
export default function POST(req: NextApiRequest, res: NextApiResponse) {
  //TODO: mock out all URLs
  try {
    const requestProfile: RequestProfileData = JSON.parse(req.body);

    // Mock response object
    const responseProfile: ResponseProfileData = {
      id: MOCK_PROFILE_ID, //Random Mock id
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
        id: MOCK_PROFILE_ID + index, // Mocked IDs for addresses
        profile_id: MOCK_PROFILE_ID,
        state: addr.state,
        city: addr.city,
        address_line: null,
        zip: null,
        created_at: MOCK_TIME,
        updated_at: MOCK_TIME,
        url: `https://api.onerep.com/profiles/${MOCK_PROFILE_ID}/addresses/${MOCK_PROFILE_ID + index}`,
      })),
      status: "inactive", //assuming status is active
      created_at: MOCK_TIME,
      updated_at: MOCK_TIME,
      url: `https://api.onerep.com/profiles/${MOCK_PROFILE_ID}`,
    };

    res.status(201).json(responseProfile);
  } catch (error) {
    console.error("Failed to process request:", error);
    res
      .status(400)
      .json({ error: "Bad Request: Invalid JSON or incorrect data structure" });
  }
}
