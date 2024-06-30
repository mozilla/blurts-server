/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// import { randomInt } from "crypto";
import { StateAbbr } from "../../../../../utils/states";
import MockUser from "./mockUser.json";
// import { getLatestOnerepScanResults } from "../../../../../db/tables/onerep_scans";

interface Broker {
  id: number;
  profile_id: number;
  scan_id: number;
  status: string;
  first_name: string;
  middle_name?: string | null;
  last_name: string;
  age?: number | null;
  addresses: object[];
  phones: object[];
  emails: object[];
  relatives: object[];
  link: string;
  data_broker: string;
  data_broker_id: number;
  optout_attempts: number;
  created_at: string;
  updated_at: string;
}

const DEFAULT_NUMBER_BREACHES = 10;
const MAGIC_NUM_1 = 24623;
const MAGIC_NUM_2 = 2161;
const MAGIC_NUM_3 = 1013;

export function MOCK_ONEREP_PROFILE_ID() {
  return MockUser.PROFILE_ID;
}

export function MOCK_ONEREP_SCAN_ID(profileId: number) {
  return (profileId * MAGIC_NUM_1) % MAGIC_NUM_2;
}

export function MOCK_ONEREP_DATABROKER_ID_START(profileId: number) {
  return MockUser.MAGIC_NUM_0 * MOCK_ONEREP_SCAN_ID(profileId);
}

export function MOCK_ONEREP_ID_START(profileId: number) {
  return MOCK_ONEREP_DATABROKER_ID_START(profileId) % MAGIC_NUM_3;
}

export function MOCK_ONEREP_TIME() {
  return MockUser.TIME;
}

export function MOCK_ONEREP_FIRSTNAME() {
  return MockUser.FIRSTNAME;
}

export function MOCK_ONEREP_LASTNAME() {
  return MockUser.LASTNAME;
}

export function MOCK_ONEREP_BIRTHDATE() {
  return MockUser.BIRTHDATE;
}

export function MOCK_ONEREP_EMAIL() {
  return MockUser.EMAIL;
}

export function MOCK_ONEREP_STATUS() {
  return MockUser.STATUS as "active" | "inactive";
}

export function MOCK_ONEREP_ADDRESSES() {
  type typeOfAddr = [{ city: string; state: StateAbbr }];

  return MockUser.ADDRESSES.map((address) => ({
    city: address.city,
    state: address.state as StateAbbr,
  })) as typeOfAddr;
}

export function MOCK_ONEREP_BROKERS(
  profileId: number,
  page: string,
  perPage: string,
) {
  const mockResponseData = MockUser.BROKERS_LIST;
  const latestScanId = MOCK_ONEREP_SCAN_ID(profileId);

  const mockLinks = {
    first: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${profileId}&per_page=${perPage}&page=${page}`,
    last: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${profileId}&per_page=${perPage}&page=${page}`,
    prev: null,
    next: null,
  };

  const mockMeta = {
    current_page: parseInt(page),
    from: 1,
    last_page: 1,
    path: `${process.env.ONEREP_API_BASE}/scan-results`,
    per_page: parseInt(perPage),
    to: 10,
    total: 10,
  };

  if (mockResponseData.valid) {
    const response: {
      data: Broker[];
      links: typeof mockLinks;
      meta: typeof mockMeta;
    } = {
      data: [],
      links: mockLinks,
      meta: mockMeta,
    };

    if (mockResponseData.data.length > 0) {
      response.data = mockResponseData.data.map((broker) => {
        return {
          ...(broker as Broker),
          profile_id: profileId,
          scan_id: latestScanId,
        };
      });
    }

    return mockResponseData;
  }

  const idStart = MOCK_ONEREP_ID_START(profileId);
  const idStartDataBroker = MOCK_ONEREP_DATABROKER_ID_START(profileId);

  //TODO: update array creation to be of type broker

  const responseData = {
    data: new Array(DEFAULT_NUMBER_BREACHES).fill(null).map((_, index) => ({
      id: idStart - index,
      profile_id: profileId,
      scan_id: latestScanId,
      status: "new",
      first_name: MOCK_ONEREP_FIRSTNAME(),
      middle_name: null,
      last_name: MOCK_ONEREP_LASTNAME(),
      age: null,
      addresses: [],
      phones: [],
      emails: [MOCK_ONEREP_EMAIL()],
      relatives: [],
      link: `https://mockexample.com/link-to-databroker${index}`,
      data_broker: `mockexample${index}.com`,
      data_broker_id: idStartDataBroker - index,
      optout_attempts: 0,
      created_at: MOCK_ONEREP_TIME(),
      updated_at: MOCK_ONEREP_TIME(),
    })),
    links: mockLinks,
    meta: mockMeta,
  };

  return responseData;
}
