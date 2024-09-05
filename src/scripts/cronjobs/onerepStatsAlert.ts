/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "dotenv-flow/config";
import Sentry from "@sentry/nextjs";
import { addOnerepStats, knexStats } from "../../db/tables/stats";

const SENTRY_SLUG = "cron-onerep-stats-alerts";

const parseEnvVarNr = (value: string | undefined) => parseInt(value ?? "0", 10);
const MAX_MANUAL_SCANS = parseEnvVarNr(process.env.MAX_MANUAL_SCANS);
const MAX_INITIAL_SCANS = parseEnvVarNr(process.env.MAX_INITIAL_SCANS);
const MAX_PROFILES_ACTIVATED = parseEnvVarNr(
  process.env.MAX_PROFILES_ACTIVATED,
);
const MAX_PROFILES_CREATED = parseEnvVarNr(process.env.MAX_PROFILES_CREATED);

Sentry.init({
  environment: process.env.APP_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

/**
 * Fetch the latest usage statistics from OneRep's API.
 *
 * @see https://docs.onerep.com/#tag/Statistics
 */
export async function checkStats() {
  const scans = await (await onerepFetch("/stats/scans")).json();
  const profiles = await (await onerepFetch("/stats/profiles")).json();

  for (const alert of [
    ["free_scans", scans.manual, MAX_MANUAL_SCANS],
    ["paid_scans", scans.initial, MAX_INITIAL_SCANS],
    ["profiles_activated", profiles.activated, MAX_PROFILES_ACTIVATED],
    ["profiles_created", profiles.created, MAX_PROFILES_CREATED],
  ]) {
    const [name, current, max] = alert;

    await addOnerepStats(name, current, max);

    if (current >= max) {
      const msg = `Alert: OneRep scans over limit for ${name}. Current: ${current}, max: ${max}`;
      console.error(msg);
      Sentry.captureMessage(msg);
    }
  }
}

// TODO use the shared version when this is converted to Typescript.
async function onerepFetch(path: string, options: RequestInit = {}) {
  const onerepApiBase = process.env.ONEREP_API_BASE;
  if (!onerepApiBase) {
    throw new Error("ONEREP_API_BASE env var not set");
  }
  const onerepApiKey = process.env.ONEREP_API_KEY;
  if (!onerepApiKey) {
    throw new Error("ONEREP_API_KEY env var not set");
  }
  const url = new URL(path, onerepApiBase);
  const headers = new Headers(options?.headers);
  headers.set("Authorization", `Bearer ${onerepApiKey}`);
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");
  return fetch(url, { ...options, headers });
}

checkStats()
  .then(async (_) => {
    Sentry.captureCheckIn({
      checkInId,
      monitorSlug: SENTRY_SLUG,
      status: "ok",
    });
    knexStats.destroy();
  })
  .catch((err) => {
    console.error(err);
    Sentry.captureException(err);
  });
