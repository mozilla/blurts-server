/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import AppConstants from "../../../appConstants.js";
import mozlog from "../../../utils/log.js";
import {
  parseE164PhoneNumber,
  parseIso8601Datetime,
} from "../../../utils/parse.js";
import { usStates } from "../../../utils/states.js";
const log = mozlog("external.onerep");
import type {
  CreateScanResponse,
  ListScanResultsResponse,
  ListScansResponse,
  ScanResult,
  ProfileData,
  Scan,
  RemovalStatus,
} from "./onerep.d";
import { authOptions } from "../../api/utils/auth";
import {
  getLatestOnerepScan,
  getOnerepProfileId,
} from "../../../db/tables/subscribers.js";

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
  const requestBody: ScanResult = {
    first_name: profileData.first_name,
    last_name: profileData.last_name,
    addresses: [
      {
        state: profileData.state,
        city: profileData.city,
      },
    ],
  };
  if (profileData.birth_date) {
    requestBody.birth_date = profileData.birth_date;
  }
  if (profileData.phone_number) {
    requestBody.phone_numbers = [{ number: profileData.phone_number }];
  }
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
    created_at: import("../../../utils/parse.js").ISO8601DateString;
    updated_at: import("../../../utils/parse.js").ISO8601DateString;
    url: string;
  } = await response.json();
  return savedProfile.id;
}

export function parseExposureScanData(body: ScanResult): ProfileData | null {
  const state = usStates.find(
    (state) => typeof body === "object" && state === body.state
  );
  if (
    typeof body !== "object" ||
    typeof body.first_name !== "string" ||
    body.first_name.length === 0 ||
    typeof body.last_name !== "string" ||
    body.last_name.length === 0 ||
    typeof body.city !== "string" ||
    body.city.length === 0 ||
    typeof body.state !== "string" ||
    typeof state !== "string" ||
    (typeof body.birth_date !== "string" &&
      typeof body.birth_date !== "undefined") ||
    (typeof body.phone_number !== "string" &&
      typeof body.phone_number !== "undefined")
  ) {
    return null;
  }

  return {
    first_name: body.first_name,
    last_name: body.last_name,
    city: body.city,
    state,
    birth_date: parseIso8601Datetime(body.birth_date)?.toISOString(),
    phone_number: parseE164PhoneNumber(body.phone_number) ?? undefined,
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
  return response.json();
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
  return response.json();
}

export async function showScanDetails(
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
  return response.json();
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
  return response.json();
}

export async function isEligible() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.subscriber?.id) {
    throw new Error("No session");
  }

  const result = await getOnerepProfileId(session.user.subscriber.id);
  const profileId = result[0]["onerep_profile_id"];
  const scanResult = await getLatestOnerepScan(profileId);

  if (scanResult.length) {
    const latestScanDate = new Date(scanResult[0]["created_at"]);
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    // FIXME only premium users get once monthly
    if (latestScanDate > lastMonth) {
      return false;
    }
  }

  return true;
}
