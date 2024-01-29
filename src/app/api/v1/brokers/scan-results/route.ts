/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  let subscribed = false;
  if (query.has("subscribed") && query.get("subscribed") === "true") {
    subscribed = true;
  }

  const response = {
    data: [
      {
        id: 1,
        scan_id: 1,
        profile_id: 1,
        first_name: "John",
        last_name: "Smith",
        middle_name: "A",
        age: "29",
        addresses: [
          {
            city: "New York",
            state: "NY",
            street: "1st Ave 10",
            zip: "11111",
          },
        ],
        phones: ["1234567890"],
        emails: ["johnsmith@example.com"],
        relatives: ["Adam Smith"],
        data_broker: "example.com",
        data_broker_id: 1,
        link: "https://example.com/john-smith",
        created_at: "2019-06-05T11:11:11+0000",
        updated_at: "2019-06-05T11:11:11+0000",
        url: "https://api.onerep.com/scan-results/1",
        status: subscribed ? "removed" : "new",
      },
    ],
    links: {
      first: "https://api.onerep.com/scan-results?page=1",
      last: "https://api.onerep.com/scan-results?page=1",
      prev: null,
      next: null,
    },
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      path: "https://api.onerep.com/scan-results",
      per_page: 20,
      to: 1,
      total: 1,
    },
  };

  if (subscribed) {
    response.data.push({
      id: 2,
      scan_id: 2,
      profile_id: 1,
      first_name: "John",
      last_name: "Smith",
      middle_name: "A",
      age: "29",
      addresses: [
        {
          city: "New York",
          state: "NY",
          street: "1st Ave 10",
          zip: "11111",
        },
      ],
      phones: ["1234567890"],
      emails: ["johnsmith@example.com"],
      relatives: ["Adam Smith"],
      data_broker: "example.com",
      data_broker_id: 1,
      link: "https://example.com/john-smith",
      created_at: "2019-06-06T11:11:11+0000",
      updated_at: "2019-06-06T11:11:11+0000",
      url: "https://api.onerep.com/scan-results/1",
      status: "removed",
    });
    response.data.push({
      id: 3,
      scan_id: 3,
      profile_id: 1,
      first_name: "John",
      last_name: "Smith",
      middle_name: "A",
      age: "29",
      addresses: [
        {
          city: "New York",
          state: "NY",
          street: "1st Ave 10",
          zip: "11111",
        },
      ],
      phones: ["1234567890"],
      emails: ["johnsmith@example.com"],
      relatives: ["Adam Smith"],
      data_broker: "example.com",
      data_broker_id: 1,
      link: "https://example.com/john-smith",
      created_at: "2019-06-07T11:11:11+0000",
      updated_at: "2019-06-07T11:11:11+0000",
      url: "https://api.onerep.com/scan-results/1",
      status: "removed",
    });
  }
  return NextResponse.json(response, { status: 200 });
}
