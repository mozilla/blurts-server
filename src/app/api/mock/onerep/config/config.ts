/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { StateAbbr } from "../../../../../utils/states";

export const MOCK_ONEREP_PROFILE_ID = 777;
export const MOCK_ONEREP_SCAN_ID = 129837123;
export const MOCK_ONEREP_TIME = "2024-06-19T01:37:02+0000";
export const MOCK_ONEREP_FIRSTNAME = "John";
export const MOCK_ONEREP_LASTNAME = "Doe";
export const MOCK_ONEREP_BIRTHDATE = "2000-01-01";
export const MOCK_ONEREP_EMAIL = "JohnDoe@JohnDoe.com";

export const MOCK_ONEREP_ADDRESSES: [{ city: string; state: StateAbbr }] = [
  { city: "Berkeley", state: "CA" as StateAbbr },
];
