/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BinaryLike, createHash } from "crypto";
import { StateAbbr } from "../../../../../utils/states";
import MockUser from "../mockData/mockUser.json";
import { emailHashPrefix, hashToEmailKeyMap } from "../../../utils/mockUtils";
import { getLatestOnerepScan } from "../../../../../db/tables/onerep_scans";

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
  last_optout_at: string;
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
  last_optout_at?: string;
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

export function mockOnerepScanId(profileId: number) {
  return hasher(profileId);
}

export function mockOnerepDatabrokerIdStart(profileId: number) {
  return hasher(profileId * MAGIC_NUM_1);
}

export function mockOnerepIdStart(profileId: number) {
  return hasher(profileId * MAGIC_NUM_2);
}

export function mockOnerepTime() {
  return MockUser.TIME;
}

export function mockOnerepFirstName() {
  return MockUser.FIRSTNAME;
}

export function mockOnerepLastName() {
  return MockUser.LASTNAME;
}

export function mockOnerepBirthdate() {
  return MockUser.BIRTHDATE;
}

export function mockOnerepEmails() {
  return MockUser.EMAILS;
}

export function mockOnerepPhones() {
  return MockUser.PHONES;
}

export function mockOnerepRelatives() {
  return MockUser.RELATIVES;
}

export function mockOnerepProfileStatus() {
  return MockUser.STATUS as "active" | "inactive";
}

export function mockOnerepAddresses() {
  type typeOfAddr = [{ city: string; state: StateAbbr }];

  return MockUser.ADDRESSES.map((address) => ({
    city: address.city,
    state: address.state as StateAbbr,
  })) as typeOfAddr;
}

export function mockOnerepObjectMeta(page: number | string = 1) {
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

export function mockOnerepObjectLinks(
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

export async function mockOnerepBrokers(
  profileId: number,
  page: string,
  perPage: string,
  email: string,
) {
  let scanId = (await getLatestOnerepScan(profileId))?.onerep_scan_id;
  if (!scanId) scanId = mockOnerepScanId(profileId);
  const mockMeta = mockOnerepObjectMeta(page);
  const mockLinks = mockOnerepObjectLinks(profileId, page, perPage);
  const idStart = mockOnerepIdStart(profileId);
  const idStartDataBroker = mockOnerepDatabrokerIdStart(profileId);

  const emailHash = emailHashPrefix(email);
  const brokersListMap = MockUser.BROKERS_LIST as BrokerMap;
  const datasetKey = hashToEmailKeyMap[emailHash] || "default";
  const brokersListLookup = brokersListMap[datasetKey];
  const brokersList =
    brokersListLookup === undefined
      ? brokersListMap["default"]
      : brokersListLookup;

  const res = brokersList.map(
    (elem: BrokerOptionals, index: number) =>
      ({
        id: idStart - index,
        profile_id: profileId,
        scan_id: elem["scan_id"] || scanId,
        status: elem["status"] || "new",
        first_name: elem["first_name"] || mockOnerepFirstName(),
        middle_name: elem["middle_name"] || null,
        last_name: elem["last_name"] || mockOnerepLastName(),
        age: elem["age"] || null,
        addresses: elem["addresses"] || mockOnerepAddresses(),
        phones: elem["phones"] || mockOnerepPhones(),
        emails: elem["emails"] || mockOnerepEmails(),
        relatives: elem["relatives"] || mockOnerepRelatives(),
        link:
          elem["link"] || `https://mockexample.com/link-to-databroker${index}`,
        data_broker: elem["data_broker"] || `mockexample${index}.com`,
        data_broker_id: elem["data_broker_id"] || idStartDataBroker - index,
        optout_attempts: elem["optout_attempts"] || 0,
        last_optout_at: elem["last_optout_at"] || mockOnerepTime(),
        created_at: elem["created_at"] || mockOnerepTime(),
        updated_at: elem["updated_at"] || mockOnerepTime(),
      }) as Broker,
  );

  const responseData = {
    data: res,
    meta: mockMeta,
    links: mockLinks,
  };

  return responseData;
}
