/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export type ProfileData = {
  first_name: string;
  last_name: string;
  city: string;
  state: import("../../../utils/states").StateAbbr;
  birth_date?: import("../../../utils/parse.js").ISO8601DateString;
  phone_number?: import("../../../utils/parse.js").E164PhoneNumberString;
};
export type CreateScanResponse = {
  id: number;
  profile_id: number;
  status: "in_progress";
  reason: "manual";
  created_at: import("../../../utils/parse.js").ISO8601DateString;
  updated_at: import("../../../utils/parse.js").ISO8601DateString;
};
export type OneRepMeta = {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
};
export type Scan = {
  id: number;
  profile_id: number;
  status: "in_progress" | "finished";
  reason: "initial" | "monitoring" | "manual";
};
export type ListScansResponse = {
  meta: OneRepMeta;
  data: Scan[];
};
export type ScanResult = {
  id: number;
  url: string;
  link: string;
  profile_id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  age: number;
  addresses: Array<{
    city: string;
    state: string;
    street: string;
    zip: string;
  }>;
  relatives: string[];
  phones: string[];
  emails: string[];
  data_broker: string;
  status: RemovalStatus;
  scan_id: number;
  data_broker_id: number;
  created_at: import("../../../utils/parse.js").ISO8601DateString;
  updated_at: import("../../../utils/parse.js").ISO8601DateString;
};
export type ListScanResultsResponse = {
  meta: OneRepMeta;
  data: ScanResult[];
};
export type RemovalStatus =
  | "new"
  | "optout_in_progress"
  | "waiting_for_verification"
  | "removed";
