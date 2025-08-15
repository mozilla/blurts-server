/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { UUID } from "node:crypto";
import { SubscriberRow } from "knex/types/tables";
import { Session } from "next-auth";
import type {
  components as Components,
  paths as Paths,
} from "./moscary_schema";
import { logger } from "./logging";
import { ISO8601DateString } from "../../../utils/parse";
import { StateAbbr } from "../../../utils/states";
import { getSubscriberByFxaUid } from "../../../db/tables/subscribers";

export const monthlyScansQuota = parseInt(
  (process.env.MONTHLY_SCANS_QUOTA as string) ?? "0",
);
export const monthlySubscribersQuota = parseInt(
  (process.env.MONTHLY_SUBSCRIBERS_QUOTA as string) ?? "0",
);

export type MoscaryData = Components["schemas"];

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
//
// TODO MOSCARY: Replace references to these with MoscaryData["Scan"] and MoscaryData["ScanResult"]
export type Scan = Components["schemas"]["Scan"];
export type ScanResult = Components["schemas"]["ScanResult"];

async function moscaryFetch(
  path: `/api/v1/${string}`,
  options: Parameters<typeof fetch>[1] = {},
) {
  const dataBrokerApiBase = process.env.MOSCARY_API_BASE;
  if (!dataBrokerApiBase) {
    throw new Error("MOSCARY_API_BASE env var not set");
  }
  const dataBrokerApiKey = process.env.MOSCARY_API_BEARER_TOKEN;
  if (!dataBrokerApiKey) {
    throw new Error("MOSCARY_API_BEARER_TOKEN env var not set");
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

export async function activateProfile(profileId: UUID): Promise<void> {
  const response = await moscaryFetch(
    `/api/v1/profiles/${profileId}/activate`,
    {
      method: "PUT",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to activate profile: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to activate profile: [${response.status}] [${response.statusText}]`,
    );
  }
}

export async function deactivateProfile(profileId: UUID): Promise<void> {
  const response = await moscaryFetch(
    `/api/v1/profiles/${profileId}/deactivate`,
    {
      method: "PUT",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to deactivate profile: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to deactivate profile: [${response.status}] [${response.statusText}]`,
    );
  }
}

export async function deleteProfile(profileId: UUID): Promise<void> {
  const response = await moscaryFetch(
    `/api/v1/profiles/${profileId}/deactivate`,
    {
      method: "DELETE",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to delete profile: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to delete profile: [${response.status}] [${response.statusText}]`,
    );
  }
}

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

export async function isEligibleForFreeScan(
  user: Session["user"],
  countryCode: string,
) {
  if (countryCode !== "us") {
    return false;
  }

  if (!user?.subscriber?.fxa_uid) {
    throw new Error("No session with a known subscriber found");
  }
  const subscriber = await getSubscriberByFxaUid(user.subscriber.fxa_uid);
  if (!subscriber) {
    throw new Error("No subscriber found for current user.");
  }

  if (!subscriber.moscary_id) {
    return true;
  }

  const scan = await fetchLatestScanForProfile(subscriber.moscary_id, "manual");

  if (scan) {
    logger.warn("User has already used free scan");
    return false;
  }

  return true;
}

export type ScanData = {
  scan: null | Components["schemas"]["Scan"];
  results: NonNullable<Components["schemas"]["ScanResult"][]>;
};

export async function getScanAndResults(
  profileId: NonNullable<SubscriberRow["moscary_id"]>,
): Promise<ScanData> {
  const scan = (await fetchLatestScanForProfile(profileId)) ?? null;
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

export async function resolveScanResult(
  scanResultId: NonNullable<Components["schemas"]["ScanResult"]["id"]>,
): Promise<
  Paths["/scan-results/{id}/resolve"]["post"]["responses"]["200"]["content"]["application/json"]
> {
  const response = await moscaryFetch(
    `/api/v1/scan-results/${scanResultId}/resolve`,
    {
      method: "POST",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to resolve scan result [${scanResultId}]: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to resolve scan result [${scanResultId}]: [${response.status}] [${response.statusText}]`,
    );
  }
  return response.json() as Promise<
    Paths["/scan-results/{id}/resolve"]["post"]["responses"]["200"]["content"]["application/json"]
  >;
}

export async function unresolveScanResult(
  scanResultId: NonNullable<Components["schemas"]["ScanResult"]["id"]>,
): Promise<
  Paths["/scan-results/{id}/unresolve"]["post"]["responses"]["200"]["content"]["application/json"]
> {
  const response = await moscaryFetch(
    `/api/v1/scan-results/${scanResultId}/unresolve`,
    {
      method: "POST",
    },
  );
  if (!response.ok) {
    logger.error(
      `Failed to unresolve scan result [${scanResultId}]: [${response.status}] [${response.statusText}]`,
    );
    throw new Error(
      `Failed to unresolve scan result [${scanResultId}]: [${response.status}] [${response.statusText}]`,
    );
  }
  return response.json() as Promise<
    Paths["/scan-results/{id}/unresolve"]["post"]["responses"]["200"]["content"]["application/json"]
  >;
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

export async function fetchLatestScanForProfile(
  profileId: SubscriberRow["moscary_id"],
  reason?: Scan["reason"],
): Promise<
  | Paths["/profiles/{profile_id}/scans"]["get"]["responses"]["200"]["content"]["application/json"]["data"][0]
  | undefined
> {
  const scans = await listScans(profileId);
  const filteredScans =
    typeof reason === "string"
      ? scans.data.filter((scan) => scan.reason === reason)
      : scans.data;
  const sortedScans = filteredScans.toSorted((scanA, scanB) => {
    return (
      new Date(scanB.created_at).getTime() -
      new Date(scanA.created_at).getTime()
    );
  });
  const latestScan = sortedScans[0];

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
