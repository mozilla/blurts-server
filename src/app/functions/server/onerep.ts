/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from "../../../appConstants.js";
import mozlog from "../../../utils/log.js";
import {
  E164PhoneNumberString,
  ISO8601DateString,
  parseE164PhoneNumber,
  parseIso8601Datetime,
} from "../../../utils/parse.js";
import { StateAbbr, usStates } from "../../../utils/states.js";
const log = mozlog("external.onerep");

export type ProfileData = {
  first_name: string;
  last_name: string;
  city: string;
  state: StateAbbr;
  birth_date?: ISO8601DateString;
  age?: ISO8601DateString;
  phone_number?: E164PhoneNumberString;
};
export type CreateScanResponse = {
  id: number;
  profile_id: number;
  status: "in_progress";
  reason: "manual";
  created_at: ISO8601DateString;
  updated_at: ISO8601DateString;
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
  age: string;
  addresses: Array<{
    city: string;
    state: StateAbbr;
    street?: string;
    zip?: string;
  }>;
  relatives: string[];
  phones: string[];
  emails: string[];
  data_broker: string;
  status: RemovalStatus;
  data_broker_id: number;
  created_at: ISO8601DateString;
  updated_at: ISO8601DateString;
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

async function onerepFetch(
  path: string,
  options: Parameters<typeof fetch>[1] = {}
) {
  const url = "https://api.onerep.com" + path;
  const headers = new Headers(options.headers);
  headers.set(
    "Authorization",
    `Basic ${Buffer.from(`${AppConstants.ONEREP_API_KEY}:`).toString("base64")}`
  );
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  return fetch(url, { ...options, headers });
}

export async function createProfile(profileData: ProfileData): Promise<number> {
  const requestBody = {
    first_name: profileData.first_name,
    last_name: profileData.last_name,
    birth_date: profileData.birth_date,
    addresses: [
      {
        state: profileData.state,
        city: profileData.city,
      },
    ],
  };
  const response = await onerepFetch("/profiles", {
    method: "POST",
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    log.info(
      `Failed to create OneRep profile: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to create OneRep profile: [${response.status}] [${response.statusText}]`
    );
  }

  const savedProfile: {
    id: number;
    status: "active" | "inactive";
    created_at: ISO8601DateString;
    updated_at: ISO8601DateString;
    url: string;
  } = await response.json();
  return savedProfile.id;
}

export function parseExposureScanData(body: ScanResult): ProfileData | null {
  const state = usStates.find(
    (state) => typeof body === "object" && state === body.addresses[0].state
  );
  if (
    typeof body !== "object" ||
    typeof body.first_name !== "string" ||
    body.first_name.length === 0 ||
    typeof body.last_name !== "string" ||
    body.last_name.length === 0 ||
    typeof body.addresses[0].city !== "string" ||
    body.addresses[0].city.length === 0 ||
    typeof body.addresses[0].state !== "string" ||
    typeof state !== "string" ||
    (typeof body.age !== "string" && typeof body.age !== "undefined") ||
    (typeof body.phones !== "string" && typeof body.phones !== "undefined")
  ) {
    return null;
  }

  return {
    first_name: body.first_name,
    last_name: body.last_name,
    city: body.addresses[0].city,
    state,
    age: parseIso8601Datetime(body.age)?.toString() ?? undefined,
    phone_number: parseE164PhoneNumber(body.phones) ?? undefined,
  };
}

export async function activateProfile(profileId: number): Promise<void> {
  const response: Response = await onerepFetch(
    `/profiles/${profileId}/activate`,
    {
      method: "PUT",
    }
  );
  if (!response.ok) {
    log.info(
      `Failed to activate OneRep profile: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to activate OneRep profile: [${response.status}] [${response.statusText}]`
    );
  }
}

export async function optoutProfile(profileId: number): Promise<void> {
  const response = await onerepFetch(`/profiles/${profileId}/optout`, {
    method: "POST",
  });
  if (!response.ok) {
    log.info(
      `Failed to opt-out OneRep profile: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to opt-out OneRep profile: [${response.status}] [${response.statusText}]`
    );
  }
}
export async function createScan(
  profileId: number
): Promise<CreateScanResponse> {
  /**
   * See https://docs.onerep.com/#operation/createScan
   */
  const response = await onerepFetch(`/profiles/${profileId}/scans`, {
    method: "POST",
  });
  if (!response.ok) {
    log.info(
      `Failed to create a scan: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to create a scan: [${response.status}] [${response.statusText}]`
    );
  }
  return response.json() as Promise<CreateScanResponse>;
}

export async function listScans(
  profileId: number,
  options: Partial<{ page: number; per_page: number }> = {}
): Promise<ListScansResponse> {
  const queryParams = new URLSearchParams();
  if (options.page) {
    queryParams.set("page", options.page.toString());
  }
  if (options.per_page) {
    queryParams.set("per_page", options.per_page.toString());
  }
  const response: Response = await onerepFetch(
    `/profiles/${profileId}/scans?` + queryParams.toString(),
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    log.info(
      `Failed to fetch scans: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to fetch scans: [${response.status}] [${response.statusText}]`
    );
  }
  return response.json() as Promise<ListScansResponse>;
}

export async function listScanResults(
  profileId: number,
  options: Partial<{
    page: number;
    per_page: number;
    status: RemovalStatus;
  }> = {}
): Promise<ListScanResultsResponse> {
  const queryParams = new URLSearchParams({
    "profile_id[]": profileId.toString(),
  });
  if (options.page) {
    queryParams.set("page", options.page.toString());
  }
  if (options.per_page) {
    queryParams.set("per_page", options.per_page.toString());
  }
  if (options.status) {
    const statuses = Array.isArray(options.status)
      ? options.status
      : [options.status];
    statuses.forEach((status) => {
      queryParams.append("status[]", status);
    });
  }
  const response: Response = await onerepFetch(
    "/scan-results/?" + queryParams.toString(),
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    log.info(
      `Failed to fetch scan results: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to fetch scan results: [${response.status}] [${response.statusText}]`
    );
  }
  return response.json() as Promise<ListScanResultsResponse>;
}
