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

import { post } from "k6/http";
import crypto from "k6/crypto";
import { getEnvVars } from "./envvars.ts";

const envVars = getEnvVars();

const HIBP_NOTIFY_TOKEN = envVars.HIBP_NOTIFY_TOKEN;
if (typeof HIBP_NOTIFY_TOKEN !== "string") {
  throw new Error(
    "Make sure to set the following environment variable: HIBP_NOTIFY_TOKEN",
  );
}

const VIRTUAL_USERS =
  typeof envVars.K6_VIRTUAL_USERS === "string"
    ? parseInt(envVars.K6_VIRTUAL_USERS, 10)
    : typeof envVars.K6_VUS === "string"
      ? parseInt(envVars.K6_VUS, 10)
      : 1000;
const DURATION =
  typeof envVars.K6_DURATION === "string" ? envVars.K6_DURATION : "30s";

export const options = {
  vus: VIRTUAL_USERS,
  duration: DURATION,
};

const url = `${envVars.SERVER_URL ?? "https://monitor-stage.allizom.org"}/api/v1/hibp/notify`;
const mockedBreachedEmailHash =
  typeof envVars.LOADTEST_BREACHED_EMAIL === "string"
    ? crypto.sha1(envVars.LOADTEST_BREACHED_EMAIL, "hex")
    : "1c48923da9f6f17165711712d11bc104087444cc";

export const virtualUserRun = () => {
  /** @type {import("../../app/api/v1/hibp/notify/route").PostHibpNotificationRequestBody} */
  const data = {
    breachName: "ApexSMS",
    // NOTE: modify this hash range if you want to receive email to specific test account(s).
    // This example should only email an address that is a sha1 hash for 1c48923da9f6f17165711712d11bc104087444cc.
    // See https://www.troyhunt.com/understanding-have-i-been-pwneds-use-of-sha-1-and-k-anonymity/ for more information.
    hashPrefix: mockedBreachedEmailHash.substring(0, 6),
    hashSuffixes: [mockedBreachedEmailHash.substring(6)],
  };

  // Using a JSON string as body
  const res = post(url, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HIBP_NOTIFY_TOKEN}`,
    },
  });

  try {
    const result = res.json();
    // @ts-ignore TODO: Add `PostHibpNotificationResponseBody` type to `src/app/api/v1/hibp/notify/route`, and use it.
    if (result.success !== true) {
      throw new Error(`Non-success result: ${JSON.stringify(result)}`);
    }
  } catch {
    throw new Error(`Failed to parse result: ${res.status}`);
  }
};
export default virtualUserRun;
