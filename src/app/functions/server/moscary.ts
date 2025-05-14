/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { UUID } from "node:crypto";
import { SubscriberRow } from "knex/types/tables";
import type {
  components as Components,
  paths as Paths,
} from "./moscary_schema";
import { logger } from "./logging";
import { ISO8601DateString } from "../../../utils/parse";
import { StateAbbr } from "../../../utils/states";

export const monthlyScansQuota = parseInt(
  (process.env.MONTHLY_SCANS_QUOTA as string) ?? "0",
);
export const monthlySubscribersQuota = parseInt(
  (process.env.MONTHLY_SUBSCRIBERS_QUOTA as string) ?? "0",
);

type CreateProfileRequest = {
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

// type UpdateProfileRequest = CreateProfileRequest & {
//   first_names: {
//     first_name: string;
//   }[];
//   last_names: {
//     last_name: string;
//   }[];
//   middle_names: {
//     middle_name: string;
//   }[];
//   phone_numbers: {
//     number: string;
//   }[];
// };

// interface UpdateableProfileDetails {
//   first_name: string;
//   last_name: string;
//   first_names: string[];
//   last_names: string[];
//   middle_names: string[];
//   phone_numbers: string[];
//   addresses: ProfileAddress[];
//   middle_name?: string;
// }

// type ShowProfileResponse = CreateProfileRequest & {
//   id: number;
//   status: "active" | "inactive";
//   created_at: ISO8601DateString;
//   updated_at: ISO8601DateString;
//   url: `${string}/profiles/${number}`;
// };
// type CreateScanResponse = {
//   id: number;
//   profile_id: number;
//   status: "in_progress";
//   reason: "manual";
//   created_at: ISO8601DateString;
//   updated_at: ISO8601DateString;
// };
export type Scan = Components["schemas"]["Scan"];
export type ScanResult = Components["schemas"]["ScanResult"];
// type ProfileStats = {
//   created: number;
//   deleted: number;
//   activated: number;
//   reactivated: number;
//   deactivated: number;
//   total_active: number;
//   total_inactive: number;
//   total: number;
// };

// interface LatestBrokerScanData {
//   scan: Scan;
//   results: ScanResult[];
// }

async function moscaryFetch(
  path: `/api/v1/${string}`,
  options: Parameters<typeof fetch>[1] = {},
) {
  const dataBrokerApiBase = process.env.SCAN_REMOVE_API_BASE;
  if (!dataBrokerApiBase) {
    throw new Error("SCAN_REMOVE_API_BASE env var not set");
  }
  const dataBrokerApiKey = process.env.SCAN_REMOVE_API_KEY;
  if (!dataBrokerApiKey) {
    throw new Error("SCAN_REMOVE_API_KEY env var not set");
  }

  const url = new URL(path, dataBrokerApiBase);
  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${dataBrokerApiKey}`);
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  return fetch(url, { ...options, headers });
}

export async function createProfile(profileData: CreateProfileRequest) {
  const requestBody: Components["schemas"]["ProfileInput"] = {
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
  const response = await moscaryFetch("/api/v1/profiles", {
    method: "POST",
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    logger.error(
      `Failed to create profile: [${response.status}] [${
        response.statusText
      }] [${JSON.stringify(await response.json())}]`,
    );
    throw new Error(
      `Failed to create profile: [${response.status}] [${response.statusText}]`,
    );
  }

  const savedProfile: Components["schemas"]["Profile"] = await response.json();

  logger.info("profile_created", { savedProfile });

  return savedProfile.id as NonNullable<SubscriberRow["moscary_id"]>;
}

export async function updateProfile(
  profileId: UUID,
  profileData: Components["schemas"]["ProfileInput"],
) {
  const {
    first_name,
    last_name,
    middle_name,
    first_names,
    last_names,
    middle_names,
    birth_date,
    addresses,
    phone_numbers,
  } = profileData;
  const requestBody: Paths["/profiles/{id}"]["put"]["requestBody"]["content"]["application/json"] =
    {
      first_name,
      last_name,
      middle_name,
      first_names,
      last_names,
      middle_names,
      birth_date,
      addresses,
      phone_numbers,
    };
  const response = await moscaryFetch(`/api/v1/profiles/${profileId}`, {
    method: "PUT",
    body: JSON.stringify(requestBody),
  });
  if (!response.ok) {
    const responseJson: Paths["/profiles/{id}"]["put"]["responses"]["200"]["content"]["application/json"] =
      await response.json();
    logger.error(
      `Failed to update profile: [${response.status}] [${response.statusText}] [${JSON.stringify(responseJson)}]`,
    );
    throw new Error(
      `Failed to update profile: [${response.status}] [${response.statusText}]`,
    );
  }

  logger.info("profile_updated");
}

export async function getProfile(
  profileId: UUID,
): Promise<Components["schemas"]["Profile"]> {
  const response: Response = await moscaryFetch(
    `/api/v1/profiles/${profileId}`,
    {
      method: "GET",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to fetch profile: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to fetch profile: [${response.status}] [${response.statusText}]`,
    );
  }

  const profile: Paths["/profiles/{id}"]["get"]["responses"]["200"]["content"]["application/json"] =
    await response.json();
  return profile;
}

// export async function activateProfile(profileId: UUID): Promise<void> {
//   const response: Response = await internalFetch(
//     `/api/v1/profiles/${profileId}/activate`,
//     {
//       method: "PUT",
//     },
//   );
//   if (!response.ok) {
//     logger.error(
//       `Failed to activate profile: [${response.status}] [${response.statusText}]`,
//     );
//     throw new Error(
//       `Failed to activate profile: [${response.status}] [${response.statusText}]`,
//     );
//   }
// }

// export async function deactivateProfile(profileId: number): Promise<void> {
//   const response: Response = await internalFetch(
//     `/api/v1/profiles/${profileId}/deactivate`,
//     {
//       method: "PUT",
//     },
//   );
//   if (!response.ok) {
//     logger.error(
//       `Failed to deactivate profile: [${response.status}] [${response.statusText}]`,
//     );
//     throw new Error(
//       `Failed to deactivate profile: [${response.status}] [${response.statusText}]`,
//     );
//   }
// }

// export async function optoutProfile(profileId: UUID): Promise<void> {
//   const response = await internalFetch(`/api/v1/profiles/${profileId}/optout`, {
//     method: "POST",
//   });
//   if (!response.ok) {
//     logger.error(
//       `Failed to opt-out profile: [${response.status}] [${
//         response.statusText
//       }] [${JSON.stringify(await response.json())}]`,
//     );
//     throw new Error(
//       `Failed to opt-out profile: [${response.status}] [${
//         response.statusText
//       }] [${JSON.stringify(await response.json())}]`,
//     );
//   }
// }

// export async function activateAndOptoutProfile({
//   profileId,
//   forceActivation = false,
// }: {
//   profileId: UUID;
//   forceActivation?: boolean;
// }): Promise<void> {
//   try {
//     const scan = await fetchLatestScanForProfile(profileId, "initial");
//     if (scan && !forceActivation) {
//       return;
//     }

//     const { status: profileStatus } = await getProfile(profileId);
//     if (profileStatus === "inactive" && !forceActivation) {
//       await activateProfile(profileId);
//     }

//     await optoutProfile(profileId);
//   } catch (error) {
//     logger.error("Failed to activate and optout profile:", error);
//   }
// }

export async function createScan(
  profileId: UUID,
): Promise<Components["schemas"]["Scan"]> {
  const response = await moscaryFetch(`/api/v1/profiles/${profileId}/scans`, {
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

  return response.json() as Promise<Components["schemas"]["Scan"]>;
}

export async function listScans(
  profileId: SubscriberRow["moscary_id"],
  options: Partial<{ page: number; per_page: number }> = {},
): Promise<
  Paths["/profiles/{profile_id}/scans"]["get"]["responses"]["200"]["content"]["application/json"]
> {
  const queryParams = new URLSearchParams();
  if (options.page) {
    queryParams.set("page", options.page.toString());
  }
  if (options.per_page) {
    queryParams.set("per_page", options.per_page.toString());
  }
  const response = await moscaryFetch(
    `/api/v1/profiles/${profileId}/scans?${queryParams.toString()}`,
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
  return response.json() as Promise<
    Paths["/profiles/{profile_id}/scans"]["get"]["responses"]["200"]["content"]["application/json"]
  >;
}

export async function listScanResults(
  profileId: NonNullable<SubscriberRow["moscary_id"]>,
  options: Partial<{
    page: number;
    per_page: number;
    status: ScanResult["status"];
  }> = {},
): Promise<
  Paths["/scan-results"]["get"]["responses"]["200"]["content"]["application/json"]
> {
  const queryParams = new URLSearchParams({
    profile_id: profileId,
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
  const response = await moscaryFetch(
    `/api/v1/scan-results/?${queryParams.toString()}`,
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
  return response.json() as Promise<
    Paths["/scan-results"]["get"]["responses"]["200"]["content"]["application/json"]
  >;
}

// export async function isEligibleForFreeScan(
//   user: Session["user"],
//   countryCode: string,
// ) {
//   if (countryCode !== "us") {
//     return false;
//   }

//   if (!user?.subscriber?.id) {
//     throw new Error("No session with a known subscriber found");
//   }

//   const profileId = await getProfileId(user.subscriber.id);
//   if (!profileId) {
//     return true;
//   }

//   const scan = await fetchLatestScanForProfile(profileId, "manual");

//   if (scan) {
//     logger.warn("User has already used free scan");
//     return false;
//   }

//   return true;
// }

// export async function getScanDetails(
//   profileId: number,
//   scanId: number,
// ): Promise<Scan> {
//   const response = await internalFetch(
//     `/api/v1/profiles/${profileId}/scans/${scanId}`,
//     {
//       method: "GET",
//     },
//   );
//   if (!response.ok) {
//     logger.error(
//       `Failed to fetch scan details: [${response.status}] [${response.statusText}]`,
//     );
//     throw new Error(
//       `Failed to fetch scan details: [${response.status}] [${response.statusText}]`,
//     );
//   }
//   return response.json() as Promise<Scan>;
// }

export type ScanData = {
  scan: null | Components["schemas"]["Scan"];
  results: NonNullable<Components["schemas"]["ScanResult"][]>;
};

export async function getScanAndResults(
  profileId: NonNullable<SubscriberRow["moscary_id"]>,
): Promise<ScanData> {
  const scan = (await fetchLatestScanForProfile(profileId, "manual")) ?? null;
  const results = scan ? ((await getAllScanResults(profileId)) ?? []) : [];

  return { scan, results };
}

export async function getAllScanResults(
  profileId: NonNullable<SubscriberRow["moscary_id"]>,
): Promise<
  Paths["/scan-results"]["get"]["responses"]["200"]["content"]["application/json"]["data"]
> {
  return fetchAllPages((page: number) =>
    listScanResults(profileId, { per_page: 100, page: page }),
  );
}

// export async function getAllDataBrokers() {
//   return fetchAllPages(async (page: number) => {
//     const response = await internalFetch(
//       "/api/v1/data-brokers?per_page=100&page=" + page.toString(),
//     );
//     const data: MetaResponse<
//       Array<{
//         id: number;
//         data_broker: string;
//         url: string;
//         status:
//           | "active"
//           | "scan_under_maintenance"
//           | "removal_under_maintenance"
//           | "on_hold"
//           | "ceased_operation";
//       }>
//     > = await response.json();
//     return data;
//   });
// }

export async function fetchAllPages<Data>(
  fetchFunction: (
    _page: number,
  ) => Promise<{ data?: Data[]; meta?: Components["schemas"]["Meta"] }>,
): Promise<Data[]> {
  const firstPage = await fetchFunction(1);
  const dataList: Data[][] = firstPage.data ? [firstPage.data] : [];
  // Results are paginated, use per_page maximum and collect all pages into one result.
  for (
    let currentPage = 2;
    currentPage <= (firstPage.meta?.last_page ?? 0);
    currentPage++
  ) {
    const nextPage = await fetchFunction(currentPage);
    if (nextPage.data) {
      dataList.push(nextPage.data);
    }
  }

  return dataList.flat();
}

// // Local instance map to cache results to prevent excessive API requests
// // Would be nice to share this cache with other pod via Redis in the future
// const profileStatsCache = new Map<string, ProfileStats>();
// export async function getProfilesStats(
//   from?: Date,
//   to?: Date,
// ): Promise<ProfileStats | undefined> {
//   const queryParams = new URLSearchParams();
//   if (from) queryParams.set("from", from.toISOString().substring(0, 10));
//   if (to) queryParams.set("to", to.toISOString().substring(0, 10));
//   const queryParamsString = queryParams.toString();

//   // check for cache map first
//   if (profileStatsCache.has(queryParamsString))
//     return profileStatsCache.get(queryParamsString);

//   const response: Response = await internalFetch(
//     `/api/v1/stats/profiles?${queryParamsString}`,
//     {
//       method: "GET",
//     },
//   );
//   console.debug(response);
//   if (!response.ok) {
//     logger.error(
//       `Failed to fetch profile stats: [${response.status}] [${response.statusText}]`,
//     );
//     // throw new Error(
//     //   `Failed to fetch profile stats: [${response.status}] [${response.statusText}]`,
//     // );
//   }

//   try {
//     const profileStats: ProfileStats = await response.json();

//     // cache results in map, with a flush hack to keep the size low
//     if (profileStatsCache.size > 5) profileStatsCache.clear();
//     profileStatsCache.set(queryParamsString, profileStats);
//     return profileStats;
//   } catch (e) {
//     if (e instanceof Error) {
//       logger.error("failed_fetching_stats", {
//         stack: e.stack,
//         message: e.message,
//       });
//     } else {
//       logger.error("failed_fetching_stats", { e });
//     }
//   }
// }

export async function fetchLatestScanForProfile(
  profileId: SubscriberRow["moscary_id"],
  reason: Scan["reason"],
): Promise<
  | Paths["/profiles/{profile_id}/scans"]["get"]["responses"]["200"]["content"]["application/json"]["data"][0]
  | undefined
> {
  const scans = await listScans(profileId);
  // TODO MOSCARY: ensure we're getting the latest and check reason
  const latestScan = scans.data[0];
  if (latestScan.reason === reason) {
    console.debug("reason matches:", reason);
  }

  return latestScan;
}

export async function getScansCountForProfile(
  profileId: SubscriberRow["moscary_id"],
) {
  // React memoises server-side fetch calls with the same parameters per user request,
  // so calling this in the same response handler as `listScans` should only result in a single call.
  // See https://nextjs.org/docs/14/app/building-your-application/caching#request-memoization
  const scans = await listScans(profileId);
  return scans.data.length;
}
