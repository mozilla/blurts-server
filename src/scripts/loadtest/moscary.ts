/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * NOTE: This is a k6 loadtest script, see https://k6.io/ for more information.
 *
 * In particular, k6 supports JS but is not a Node package: https://k6.io/docs/get-started/installation/
 * This is why import/no-unresolved and no-undef are ignored.
 *
 * @see https://grafana.com/docs/k6/latest/get-started/running-k6
 */

import * as http from "k6/http";
import { type Options } from "k6/options";
import { getEnvVars } from "./envvars.ts";
import type { MoscaryData } from "../../app/functions/server/moscary.ts";
import { group } from "k6";

const envVars = getEnvVars();

const VIRTUAL_USERS =
  typeof envVars.K6_VIRTUAL_USERS === "string"
    ? parseInt(envVars.K6_VIRTUAL_USERS, 10)
    : typeof envVars.K6_VUS === "string"
      ? parseInt(envVars.K6_VUS, 10)
      : 20;
const DURATION =
  typeof envVars.K6_DURATION === "string" ? envVars.K6_DURATION : "2m";

export const options: Options = {
  thresholds: {
    // During the whole test execution, the error rate must be lower than 1%:
    http_req_failed: [{ threshold: "rate<0.01", abortOnFail: false }],
    // 90% of requests must finish within 200ms, 95% within 400ms, and 99% within a second:
    http_req_duration: [
      { threshold: "p(90) < 300", abortOnFail: false },
      { threshold: "p(95) < 500", abortOnFail: false },
      { threshold: "p(99) < 1000", abortOnFail: false },
    ],
  },
  scenarios:
    getDurationInMs(DURATION) > 60 * 1000
      ? {
          "ramp-up": {
            executor: "ramping-vus",
            startVUs: 0,
            stages: [
              { duration: "1m", target: VIRTUAL_USERS },
              { duration: DURATION, target: VIRTUAL_USERS },
              { duration: "1m", target: 0 },
            ],
          },
        }
      : {
          constant: {
            executor: "constant-vus",
            vus: VIRTUAL_USERS,
            duration: DURATION,
          },
        },
};

const apiOrigin = envVars.MOSCARY_API_BASE;
if (!apiOrigin) {
  throw new Error(
    "Environment variable $MOSCARY_API_BASE is not set. Please set it to the Moscary origin, e.g. `http://localhost:3001`.",
  );
}
const apiToken = envVars.MOSCARY_API_BEARER_TOKEN;
if (!apiToken) {
  throw new Error(
    "Environment variable $MOSCARY_API_BEARER_TOKEN is not set. Please set it to the API key for the Moscary API, e.g. `1234567890abcdef`.",
  );
}
const adminApiToken = envVars.MOSCARY_ADMIN_BEARER_TOKEN;
if (!adminApiToken) {
  throw new Error(
    "Environment variable $MOSCARY_ADMIN_BEARER_TOKEN is not set. Please set it to the admin API key for the Moscary API, e.g. `1234567890abcdef`.",
  );
}

const featuresToTest = envVars.LOAD_TEST_FEATURES?.split(",") ?? [];

const virtualUserRun = () => {
  const profileData: MoscaryData["ProfileInput"] = {
    addresses: [
      {
        state: "NY",
        city: "New York",
      },
    ],
    birth_date: "1990-01-01",
    first_name: "John",
    last_name: "Doe",
  };

  let createdProfile: MoscaryData["Profile"];
  group(
    "Create a new profile, run its first scan (optional) and activate it (optional)",
    () => {
      const createProfileResponse = http.post(
        `${apiOrigin}/api/v1/profiles/`,
        JSON.stringify(profileData),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        },
      );

      createdProfile = createProfileResponse.json() as MoscaryData["Profile"];

      if (featuresToTest.includes("scan")) {
        http.post(
          `${apiOrigin}/api/v1/profiles/${createdProfile.id}/scans/`,
          null,
          {
            tags: { name: "POST /api/v1/profiles/{{profile_id}}/scans/" },
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          },
        );
      }

      if (featuresToTest.includes("activate")) {
        http.put(
          `${apiOrigin}/api/v1/profiles/${createdProfile.id}/activate/`,
          null,
          {
            tags: { name: "PUT /api/v1/profiles/{{profile_id}}/activate/" },
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          },
        );
      }
    },
  );

  group("Clean up", () => {
    http.del(`${apiOrigin}/api/v1/profiles/${createdProfile!.id}`, null, {
      tags: { name: "DELETE /api/v1/profiles/{{profile_id}}/" },
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
  });
};
export default virtualUserRun;

type Summary = {
  root_group: {
    name: string;
    path: string;
  };
  options: Options;
  state: {
    isStdOutTTY: boolean;
    isStdErrTTY: boolean;
    testRunDurationMs: number;
  };
  metrics: Record<
    string,
    | {
        type: "trend";
        contains: "time";
        values: Record<
          "avg" | "min" | "med" | "max" | "p(90)" | "p(95)",
          number
        >;
        thresholds?: Record<string, { ok: boolean }>;
      }
    | {
        type: "counter";
        contains: "data";
        values: Record<"count" | "rate", number>;
        thresholds?: Record<string, { ok: boolean }>;
      }
    | {
        type: "gauge";
        contains: "default";
        values: Record<"value" | "min" | "max", number>;
        thresholds?: Record<string, { ok: boolean }>;
      }
  >;
};
export function handleSummary(data: Summary) {
  console.log("Summary:", JSON.stringify(data, null, 2));
  console.log("Enabled features:", featuresToTest);
}

function getDurationInMs(duration: string): number {
  if (duration.endsWith("m")) {
    return Number.parseInt(duration.slice(0, -1), 10) * 60 * 1000;
  }
  if (duration.endsWith("s")) {
    return Number.parseInt(duration.slice(0, -1), 10) * 1000;
  }
  if (duration.endsWith("ms")) {
    return Number.parseInt(duration.slice(0, -2), 10);
  }
  throw new Error(`Invalid duration format: [${duration}]`);
}
