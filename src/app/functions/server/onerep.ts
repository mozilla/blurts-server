/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Session } from "next-auth";
import { getOnerepProfileId } from "../../../db/tables/subscribers";
import { ISO8601DateString } from "../../../utils/parse.js";
import { StateAbbr } from "../../../utils/states.js";
import {
  getEmailForProfile,
  getLatestScanForProfileByReason,
  getScanResultsWithBroker,
} from "../../../db/tables/onerep_scans";
import { RemovalStatus } from "../universal/scanResult.js";
import { logger } from "./logging";
import { isUsingMockONEREPEndpoint } from "../universal/mock.ts";
import { hasPremium } from "../universal/user.ts";
import { OnerepProfileAddress } from "knex/types/tables";
import { getScanAndResults } from "./moscary.ts";

export const monthlyScansQuota = parseInt(
  (process.env.MONTHLY_SCANS_QUOTA as string) ?? "0",
);
export const monthlySubscribersQuota = parseInt(
  (process.env.MONTHLY_SUBSCRIBERS_QUOTA as string) ?? "0",
);

export type CreateProfileRequest = {
  first_name: string;
  last_name: string;
  birth_date: ISO8601DateString;
  addresses: {
    city: string;
    state: StateAbbr;
  }[];
  name_suffix?: string;
  middle_name?: string;
};

export type UpdateProfileRequest = CreateProfileRequest & {
  first_names: {
    first_name: string;
  }[];
  last_names: {
    last_name: string;
  }[];
  middle_names: {
    middle_name: string;
  }[];
  phone_numbers: {
    number: string;
  }[];
};

export interface UpdateableProfileDetails {
  first_name: string;
  last_name: string;
  first_names: string[];
  last_names: string[];
  middle_names: string[];
  phone_numbers: string[];
  addresses: OnerepProfileAddress[];
  middle_name?: string;
}

export type ShowProfileResponse = CreateProfileRequest & {
  id: number;
  status: "active" | "inactive";
  created_at: ISO8601DateString;
  updated_at: ISO8601DateString;
  url: `${string}/profiles/${number}`;
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
export type OneRepResponse<Data> = {
  data: Data;
  meta: OneRepMeta;
};
export type ScanReason = "initial" | "monitoring" | "manual";
export type Scan = {
  id: number;
  profile_id: number;
  status: "in_progress" | "finished";
  reason: ScanReason;
};
export type ListScansResponse = OneRepResponse<Scan[]>;
export type ScanResult = {
  id: number;
  scan_id: number;
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
  optout_attempts?: number;
  last_optout_at?: ISO8601DateString;
  data_broker_id: number;
  created_at: ISO8601DateString;
  updated_at: ISO8601DateString;
};
export type ProfileStats = {
  created: number;
  deleted: number;
  activated: number;
  reactivated: number;
  deactivated: number;
  total_active: number;
  total_inactive: number;
  total: number;
};
export type ListScanResultsResponse = OneRepResponse<ScanResult[]>;

async function onerepFetch(
  path: string,
  options: Parameters<typeof fetch>[1] = {},
) {
  const onerepApiBase = process.env.ONEREP_API_BASE;
  if (!onerepApiBase) {
    throw new Error("ONEREP_API_BASE env var not set");
  }
  const onerepApiKey = process.env.ONEREP_API_KEY;
  if (!onerepApiKey) {
    throw new Error("ONEREP_API_KEY env var not set");
  }

  //If mock, remove the first slash so that it doesn't overwrite the path
  if (
    onerepApiBase.includes("/api/mock") &&
    path.length > 1 &&
    path[0] === "/"
  ) {
    path = path.substring(1);
  }

  const url = new URL(path, onerepApiBase);
  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${onerepApiKey}`);
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  return fetch(url, { ...options, headers });
}

/** @deprecated */
export async function createProfile(
  profileData: CreateProfileRequest,
): Promise<number> {
  const requestBody = {
    first_name: profileData.first_name,
    ...(profileData.middle_name && { middle_name: profileData.middle_name }),
    last_name:
      `${profileData.last_name} ${profileData.name_suffix ?? ""}`.trim(),
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
    logger.error(
      `Failed to create OneRep profile: [${response.status}] [${
        response.statusText
      }] [${JSON.stringify(await response.json())}]`,
    );
    throw new Error(
      `Failed to create OneRep profile: [${response.status}] [${response.statusText}]`,
    );
  }

  const savedProfile: {
    id: number;
    status: "active" | "inactive";
    created_at: ISO8601DateString;
    updated_at: ISO8601DateString;
    url: string;
  } = await response.json();

  logger.info("onerep_profile_created");

  return savedProfile.id;
}

/** @deprecated */
export async function updateProfile(
  profileId: number,
  profileData: UpdateProfileRequest,
) {
  const {
    first_name,
    last_name,
    name_suffix,
    middle_name,
    first_names,
    last_names,
    middle_names,
    birth_date,
    addresses,
    phone_numbers,
  } = profileData;
  const response = await onerepFetch(`/profiles/${profileId}`, {
    method: "PUT",
    body: JSON.stringify({
      first_name,
      last_name,
      name_suffix,
      middle_name,
      first_names,
      last_names,
      middle_names,
      birth_date,
      addresses,
      phone_numbers,
    }),
  });
  if (!response.ok) {
    const responseJson = await response.json();
    logger.error(
      `Failed to update OneRep profile: [${response.status}] [${response.statusText}] [${JSON.stringify(responseJson)}]`,
    );
    throw new Error(
      `Failed to update OneRep profile: [${response.status}] [${response.statusText}]`,
    );
  }

  logger.info("onerep_profile_updated");
}

export async function getProfile(
  profileId: number,
): Promise<ShowProfileResponse> {
  const response: Response = await onerepFetch(`/profiles/${profileId}`, {
    method: "GET",
  });
  if (!response.ok) {
    logger.error(
      `Failed to fetch OneRep profile: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to fetch OneRep profile: [${response.status}] [${response.statusText}]`,
    );
  }

  const profile: ShowProfileResponse = await response.json();
  return profile;
}

export async function activateProfile(profileId: number): Promise<void> {
  const response: Response = await onerepFetch(
    `/profiles/${profileId}/activate`,
    {
      method: "PUT",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to activate OneRep profile: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to activate OneRep profile: [${response.status}] [${response.statusText}]`,
    );
  }
}

export async function deactivateProfile(profileId: number): Promise<void> {
  const response: Response = await onerepFetch(
    `/profiles/${profileId}/deactivate`,
    {
      method: "PUT",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to deactivate OneRep profile: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to deactivate OneRep profile: [${response.status}] [${response.statusText}]`,
    );
  }
}

export async function optoutProfile(profileId: number): Promise<void> {
  const response = await onerepFetch(`/profiles/${profileId}/optout`, {
    method: "POST",
  });
  if (!response.ok) {
    logger.error(
      `Failed to opt-out OneRep profile: [${response.status}] [${
        response.statusText
      }] [${JSON.stringify(await response.json())}]`,
    );
    throw new Error(
      `Failed to opt-out OneRep profile: [${response.status}] [${
        response.statusText
      }] [${JSON.stringify(await response.json())}]`,
    );
  }
}

export async function activateAndOptoutProfile({
  profileId,
  forceActivation = false,
}: {
  profileId: number;
  forceActivation?: boolean;
}): Promise<void> {
  try {
    const scan = await getLatestScanForProfileByReason(profileId, "initial");
    if (scan && !forceActivation) {
      return;
    }

    const { status: profileStatus } = await getProfile(profileId);
    if (profileStatus === "inactive" && !forceActivation) {
      await activateProfile(profileId);
    }

    await optoutProfile(profileId);
  } catch (error) {
    logger.error("Failed to activate and optout profile:", error);
  }
}

export async function createScan(
  profileId: number,
): Promise<CreateScanResponse> {
  /**
   * See https://docs.onerep.com/#operation/createScan
   */
  const response = await onerepFetch(`/profiles/${profileId}/scans`, {
    method: "POST",
  });
  if (!response.ok) {
    logger.error(
      `Failed to create a scan: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to create a scan: [${response.status}] [${response.statusText}]`,
    );
  }
  return response.json() as Promise<CreateScanResponse>;
}

export async function listScans(
  profileId: number,
  options: Partial<{ page: number; per_page: number }> = {},
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
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to fetch scans: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to fetch scans: [${response.status}] [${response.statusText}]`,
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
  }> = {},
): Promise<ListScanResultsResponse> {
  let mockEmail = "";
  if (isUsingMockONEREPEndpoint()) {
    mockEmail = (await getEmailForProfile(profileId)) || mockEmail;
  }
  const queryParams = new URLSearchParams({
    "profile_id[]": profileId.toString(),
    email: mockEmail,
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
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to fetch scan results: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to fetch scan results: [${response.status}] [${response.statusText}]`,
    );
  }
  return response.json() as Promise<ListScanResultsResponse>;
}

export async function isEligibleForFreeScan(
  user: Session["user"],
  countryCode: string,
) {
  if (countryCode !== "us") {
    return false;
  }

  if (!user?.subscriber?.id) {
    throw new Error("No session with a known subscriber found");
  }

  if (user.subscriber.moscary_id) {
    const scanResult = await getScanAndResults(user.subscriber.moscary_id);

    if (scanResult.scan) {
      logger.warn("User has already used free scan");
      return false;
    }
  } else {
    const profileId = await getOnerepProfileId(user.subscriber.id);
    const scanResult = await getScanResultsWithBroker(
      profileId,
      hasPremium(user),
    );

    if (scanResult.scan) {
      logger.warn("User has already used free scan");
      return false;
    }
  }

  return true;
}

export async function getScanDetails(
  profileId: number,
  scanId: number,
): Promise<Scan> {
  const response = await onerepFetch(`/profiles/${profileId}/scans/${scanId}`, {
    method: "GET",
  });
  if (!response.ok) {
    logger.error(
      `Failed to fetch scan details: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to fetch scan details: [${response.status}] [${response.statusText}]`,
    );
  }
  return response.json() as Promise<Scan>;
}

export async function getAllScanResults(
  profileId: number,
): Promise<ScanResult[]> {
  return fetchAllPages((page: number) =>
    listScanResults(profileId, { per_page: 100, page: page }),
  );
}

export async function getAllDataBrokers() {
  return fetchAllPages(async (page: number) => {
    const response = await onerepFetch(
      "/data-brokers?per_page=100&page=" + page.toString(),
    );
    const data: OneRepResponse<
      Array<{
        id: number;
        data_broker: string;
        url: string;
        status:
          | "active"
          | "scan_under_maintenance"
          | "removal_under_maintenance"
          | "on_hold"
          | "ceased_operation";
      }>
    > = await response.json();
    return data;
  });
}

export async function fetchAllPages<Data>(
  fetchFunction: (_page: number) => Promise<OneRepResponse<Data[]>>,
): Promise<Data[]> {
  const firstPage = await fetchFunction(1);
  const dataList: Data[][] = [firstPage.data];
  // Results are paginated, use per_page maximum and collect all pages into one result.
  for (
    let currentPage = 2;
    currentPage <= firstPage.meta.last_page;
    currentPage++
  ) {
    const nextPage = await fetchFunction(currentPage);
    dataList.push(nextPage.data);
  }

  return dataList.flat();
}

// Local instance map to cache results to prevent excessive API requests
// Would be nice to share this cache with other pod via Redis in the future
const profileStatsCache = new Map<string, ProfileStats>();
export async function getProfilesStats(
  from?: Date,
  to?: Date,
): Promise<ProfileStats | undefined> {
  const queryParams = new URLSearchParams();
  if (from) queryParams.set("from", from.toISOString().substring(0, 10));
  if (to) queryParams.set("to", to.toISOString().substring(0, 10));
  const queryParamsString = queryParams.toString();

  // check for cache map first
  if (profileStatsCache.has(queryParamsString))
    return profileStatsCache.get(queryParamsString);

  const response: Response = await onerepFetch(
    `/stats/profiles?${queryParamsString}`,
    {
      method: "GET",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to fetch OneRep profile stats: [${response.status}] [${response.statusText}]`,
    );
    // throw new Error(
    //   `Failed to fetch OneRep profile stats: [${response.status}] [${response.statusText}]`,
    // );
  }

  try {
    const profileStats: ProfileStats = await response.json();

    // cache results in map, with a flush hack to keep the size low
    if (profileStatsCache.size > 5) profileStatsCache.clear();
    profileStatsCache.set(queryParamsString, profileStats);
    return profileStats;
  } catch (e) {
    if (e instanceof Error) {
      logger.error("failed_fetching_stats", {
        stack: e.stack,
        message: e.message,
      });
    } else {
      logger.error("failed_fetching_stats", { e });
    }
  }
}
