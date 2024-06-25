/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export type RequestProfileData = {
  first_name: string;
  last_name: string;
  middle_name: string;
  birth_date: string;
  addresses: Array<{ state: string; city: string }>;
};

export type ResponseProfileData = {
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
