/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Session } from "next-auth";
import { getOnerepProfileId } from "../../../db/tables/subscribers.js";
import mozlog from "../../../utils/log.js";
import {
  E164PhoneNumberString,
  ISO8601DateString,
} from "../../../utils/parse.js";
import { StateAbbr } from "../../../utils/states.js";
import { getLatestOnerepScan } from "../../../db/tables/onerep_scans";
import { isFlagEnabled } from "./featureFlags";
import { RemovalStatus } from "../universal/scanResult.js";
const log = mozlog("external.onerep");

export type ProfileData = {
  first_name: string;
  last_name: string;
  addresses: [{ city: string; state: StateAbbr }];
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

async function onerepFetch(
  path: string,
  options: Parameters<typeof fetch>[1] = {}
) {
  const onerepApiBase = process.env.ONEREP_API_BASE;
  if (!onerepApiBase) {
    throw new Error("ONEREP_API_BASE env var not set");
  }
  const onerepApiKey = process.env.ONEREP_API_KEY;
  if (!onerepApiKey) {
    throw new Error("ONEREP_API_BASE env var not set");
  }
  const url = new URL(path, onerepApiBase);
  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${onerepApiKey}`);
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
        state: profileData.addresses[0].state,
        city: profileData.addresses[0].city,
      },
    ],
  };
  const response = await onerepFetch("/profiles", {
    method: "POST",
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    log.info(
      `Failed to create OneRep profile: [${response.status}] [${
        response.statusText
      }] [${JSON.stringify(await response.json())}]`
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

export async function deactivateProfile(profileId: number): Promise<void> {
  const response: Response = await onerepFetch(
    `/profiles/${profileId}/deactivate`,
    {
      method: "PUT",
    }
  );
  if (!response.ok) {
    log.info(
      `Failed to deactivate OneRep profile: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to deactivate OneRep profile: [${response.status}] [${response.statusText}]`
    );
  }
}

export async function optoutProfile(profileId: number): Promise<void> {
  const response = await onerepFetch(`/profiles/${profileId}/optout`, {
    method: "POST",
  });
  if (!response.ok) {
    log.info(
      `Failed to opt-out OneRep profile: [${response.status}] [${
        response.statusText
      }] [${JSON.stringify(await response.json())}]`
    );
    throw new Error(
      `Failed to opt-out OneRep profile: [${response.status}] [${
        response.statusText
      }] [${JSON.stringify(await response.json())}]`
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

export async function isEligibleForFreeScan(
  user: Session["user"],
  countryCode: string
) {
  if (countryCode !== "us") {
    return false;
  }

  if (!user?.subscriber?.id) {
    throw new Error("No session");
  }

  if (!(await isFlagEnabled("FreeBrokerScan", user))) {
    return false;
  }

  const result = await getOnerepProfileId(user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"] as number;
  const scanResult = await getLatestOnerepScan(profileId);

  if (scanResult?.onerep_scan_results?.data?.length) {
    console.warn("User has already used free scan");
    return false;
  }

  return true;
}

export async function isEligibleForPremium(
  user: Session["user"],
  countryCode: string
) {
  if (countryCode !== "us") {
    return false;
  }

  if (countryCode !== "us") {
    return false;
  }

  if (!user?.subscriber?.id) {
    throw new Error("No session");
  }

  if (!(await isFlagEnabled("PremiumBrokerRemoval", user))) {
    return false;
  }

  return true;
}

export async function getScanDetails(
  profileId: number,
  scanId: number
): Promise<Scan> {
  const response = await onerepFetch(`/profiles/${profileId}/scans/${scanId}`, {
    method: "GET",
  });
  if (!response.ok) {
    log.info(
      `Failed to fetch scan details: [${response.status}] [${response.statusText}]`
    );
    throw new Error(
      `Failed to fetch scan details: [${response.status}] [${response.statusText}]`
    );
  }
  return response.json() as Promise<Scan>;
}

export async function getAllScanResults(
  profileId: number
): Promise<ScanResult[]> {
  const scanPagesAll = [];
  const firstPage = await listScanResults(profileId, {
    per_page: 100,
  });
  // Results are paginated, use per_page maximum and collect all pages into one result.
  if (firstPage.meta.last_page > 1) {
    let currentPage = 2;
    while (currentPage <= firstPage.meta.last_page) {
      const nextPage = await listScanResults(profileId, {
        per_page: 100,
        page: currentPage,
      });
      currentPage++;
      nextPage.data.forEach((element: object) => scanPagesAll.push(element));
    }
  } else {
    scanPagesAll.push(firstPage.data);
  }

  return scanPagesAll.flat();
}
