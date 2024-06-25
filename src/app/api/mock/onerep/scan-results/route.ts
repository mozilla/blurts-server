/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  MOCK_FIRSTNAME,
  MOCK_LASTNAME,
  MOCK_TIME,
  MOCK_PROFILE_ID,
  MOCK_SCAN_ID,
} from "../config/config";
import { NextRequest, NextResponse } from "next/server";

//TODO: mock out all URLS
export function GET(req: NextRequest) {
  // const profileId = MOCK_PROFILE_ID
  const page = req.url.match(/page=([0-9]+)/)![1] || "1";
  const perPage = req.url.match(/per_page=([0-9]+)/)![1] || "100";

  const magicNum0 = 37680;
  const magicNum1 = 23;
  const howMany = 10;

  // TODO: mock put the indecies, id scan_id
  const responseData = {
    data: new Array(howMany).fill(null).map((_, index) => ({
      id: magicNum0 - index,
      profile_id: MOCK_PROFILE_ID,
      scan_id: MOCK_SCAN_ID,
      status: "new",
      first_name: MOCK_FIRSTNAME,
      middle_name: null,
      last_name: MOCK_LASTNAME,
      age: null,
      addresses: [],
      phones: [],
      emails: [],
      relatives: [],
      link: `https://example.com/link-to-databroker${index}`,
      data_broker: `example${index}.com`,
      data_broker_id: magicNum1 - index,
      optout_attempts: 0,
      created_at: MOCK_TIME,
      updated_at: MOCK_TIME,
      url: `${process.env.ONEREP_API_BASE}scan-results/${magicNum0 - index}`,
    })),
    links: {
      first: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${MOCK_PROFILE_ID}&per_page=100&page=1`,
      last: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${MOCK_PROFILE_ID}&per_page=100&page=1`,
      prev: null,
      next: null,
    },
    meta: {
      current_page: parseInt(page),
      from: 1,
      last_page: 1,
      path: `${process.env.ONEREP_API_BASE}/scan-results`,
      per_page: parseInt(perPage),
      to: 10,
      total: 10,
    },
  };

  return NextResponse.json(responseData);
}
