/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  MOCK_ONEREP_FIRSTNAME,
  MOCK_ONEREP_LASTNAME,
  MOCK_ONEREP_TIME,
  MOCK_ONEREP_SCAN_ID,
  MOCK_ONEREP_EMAIL,
} from "../config/config";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const page = req.url.match(/page=([0-9]+)/)![1] || "1";
  const perPage = req.url.match(/per_page=([0-9]+)/)![1] || "100";

  const profileId = req.url.match(/profile_id......=([0-9]+)&/)![1];

  const magicNum0 = 37680;
  const magicNum1 = 23;
  const howMany = 5;

  // TODO: mock put the indecies, id scan_id
  const responseData = {
    data: new Array(howMany).fill(null).map((_, index) => ({
      id: magicNum0 - index,
      profile_id: profileId,
      scan_id: MOCK_ONEREP_SCAN_ID,
      status: "new",
      first_name: MOCK_ONEREP_FIRSTNAME,
      middle_name: null,
      last_name: MOCK_ONEREP_LASTNAME,
      age: null,
      addresses: [],
      phones: [],
      emails: [MOCK_ONEREP_EMAIL],
      relatives: [],
      link: `https://mockexample.com/link-to-databroker${index}`,
      data_broker: `mockexample${index}.com`,
      data_broker_id: magicNum1 - index,
      optout_attempts: 0,
      created_at: MOCK_ONEREP_TIME,
      updated_at: MOCK_ONEREP_TIME,
      url: `${process.env.ONEREP_API_BASE}scan-results/${magicNum0 - index}`,
    })),
    links: {
      first: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${profileId}&per_page=${perPage}&page=${page}`,
      last: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${profileId}&per_page=${perPage}&page=${page}`,
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
