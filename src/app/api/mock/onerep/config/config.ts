/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BinaryLike, createHash } from "crypto";
import { StateAbbr } from "../../../../../utils/states";
import MockUser from "./mockUser.json";
import { computeSha1First6, hashToEmailKeyMap } from "../../../utils/mockUtils";

export interface Broker {
  id: number;
  profile_id: number;
  scan_id: number;
  status: string;
  first_name: string;
  middle_name?: string | null;
  last_name: string;
  age?: number | null;
  addresses: object[];
  phones: string[];
  emails: string[];
  relatives: string[];
  link: string;
  data_broker: string;
  data_broker_id: number;
  optout_attempts: number;
  created_at: string;
  updated_at: string;
}

export interface BrokerOptionals {
  id?: number;
  profile_id?: number;
  scan_id?: number;
  status?: string;
  first_name?: string;
  middle_name?: string | null;
  last_name?: string;
  age?: number | null;
  addresses?: object[];
  phones?: string[];
  emails?: string[];
  relatives?: string[];
  link?: string;
  data_broker?: string;
  data_broker_id?: number;
  optout_attempts?: number;
  created_at?: string;
  updated_at?: string;
}

export interface BrokerMap {
  [key: string]: BrokerOptionals[];
}

const MAGIC_NUM_1 = 24623;
const MAGIC_NUM_2 = 2161;
export const profileIdLeftBound = 2 ** 28;
export const profileIdRightBound = 2 ** 31 - 1;

function hasher(plaintext: number | string) {
  if (typeof plaintext === "number") plaintext = String(plaintext);
  const rawHash = createHash("sha1").update(plaintext as BinaryLike);
  const last4BytesHex = rawHash.digest("hex").slice(-7);
  return parseInt(last4BytesHex, 16);
}

export function MOCK_ONEREP_SCAN_ID(profileId: number) {
  return hasher(profileId);
}

export function MOCK_ONEREP_DATABROKER_ID_START(profileId: number) {
  return hasher(profileId * MAGIC_NUM_1);
}

export function MOCK_ONEREP_ID_START(profileId: number) {
  return hasher(profileId * MAGIC_NUM_2);
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

export function MOCK_ONEREP_EMAILS() {
  return MockUser.EMAILS;
}

export function MOCK_ONEREP_PHONES() {
  return MockUser.PHONES;
}

export function MOCK_ONEREP_RELATIVES() {
  return MockUser.RELATIVES;
}

export function MOCK_ONEREP_PROFILE_STATUS() {
  return MockUser.STATUS as "active" | "inactive";
}

export function MOCK_ONEREP_ADDRESSES() {
  type typeOfAddr = [{ city: string; state: StateAbbr }];

  return MockUser.ADDRESSES.map((address) => ({
    city: address.city,
    state: address.state as StateAbbr,
  })) as typeOfAddr;
}

export function MOCK_ONEREP_OBJECT_META(page: number | string = 1) {
  if (typeof page === "string") page = parseInt(page);
  return {
    current_page: page,
    from: 1,
    last_page: 1,
    path: `${process.env.ONEREP_API_BASE}/scan-results`,
    per_page: page,
    to: 10,
    total: 10,
  };
}

export function MOCK_ONEREP_OBJECT_LINKS(
  profileId: number | string,
  page: number | string = 1,
  perPage: number | string = 100,
) {
  if (typeof profileId === "string") profileId = parseInt(profileId);
  if (typeof page === "string") page = parseInt(page);
  if (typeof perPage === "string") perPage = parseInt(perPage);

  return {
    first: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${profileId}&per_page=${perPage}&page=${page}`,
    last: `${process.env.ONEREP_API_BASE}/scan-results?profile_id%5B0%5D=${profileId}&per_page=${perPage}&page=${page}`,
    prev: null,
    next: null,
  };
}

export function MOCK_ONEREP_BROKERS(
  profileId: number,
  page: string,
  perPage: string,
  email: string,
) {
  const scanId = MOCK_ONEREP_SCAN_ID(profileId);
  const mockMeta = MOCK_ONEREP_OBJECT_META(page);
  const mockLinks = MOCK_ONEREP_OBJECT_LINKS(profileId, page, perPage);

  const idStart = MOCK_ONEREP_ID_START(profileId);
  const idStartDataBroker = MOCK_ONEREP_DATABROKER_ID_START(profileId);

  const emailHash = computeSha1First6(email);
  const brokersListMap = MockUser.BROKERS_LIST as BrokerMap;
  const datasetKey = hashToEmailKeyMap[emailHash] || "default";
  const brokersList = brokersListMap[datasetKey];

  const res = brokersList.map(
    (elem: BrokerOptionals, index: number) =>
      ({
        id: idStart - index,
        profile_id: profileId,
        scan_id: scanId,
        status: elem["status"] || "new",
        first_name: elem["first_name"] || MOCK_ONEREP_FIRSTNAME(),
        middle_name: elem["middle_name"] || null,
        last_name: elem["last_name"] || MOCK_ONEREP_LASTNAME(),
        age: elem["age"] || null,
        addresses: elem["addresses"] || MOCK_ONEREP_ADDRESSES(),
        phones: elem["phones"] || MOCK_ONEREP_PHONES(),
        emails: elem["emails"] || MOCK_ONEREP_EMAILS(),
        relatives: elem["relatives"] || MOCK_ONEREP_RELATIVES(),
        link:
          elem["link"] || `https://mockexample.com/link-to-databroker${index}`,
        data_broker: elem["data_broker"] || `mockexample${index}.com`,
        data_broker_id: idStartDataBroker - index,
        optout_attempts: elem["optout_attempts"] || 0,
        created_at: elem["created_at"] || MOCK_ONEREP_TIME(),
        updated_at: elem["updated_at"] || MOCK_ONEREP_TIME(),
      }) as Broker,
  );

  const responseData = {
    data: res,
    links: mockLinks,
    meta: mockMeta,
  };

  return responseData;
}
