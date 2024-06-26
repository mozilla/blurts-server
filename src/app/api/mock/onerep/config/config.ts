/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { StateAbbr } from "../../../../../utils/states";
import MockUser from "./mockUser.json";

export function MOCK_ONEREP_PROFILE_ID() {
  return MockUser.PROFILE_ID;
}

export function MOCK_ONEREP_SCAN_ID() {
  return MockUser.SCAN_ID;
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
