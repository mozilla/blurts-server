/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Cron: Daily
 * Fetches the list of data brokers and their statuses from OneRep, sync database with the latest data brokers list
 *
 * Usage:
 * node src/scripts/syncOnerepDataBrokers.js
 */

import Sentry from "@sentry/nextjs";
import { getAllDataBrokers } from "../../app/functions/server/onerep";
import { upsertDataBrokers } from "../../db/tables/onerep_data_brokers.js";
import {
  redisClient,
  REDIS_ALL_DATA_BROKERS_KEY,
  BREACHES_EXPIRY_SECONDS,
} from "../../db/redis/client.js";

const SENTRY_SLUG = "cron-sync-onerep-data-brokers";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

// Get data brokers and upserts to DB
const dataBrokersResponse = await getAllDataBrokers();

console.log("Data brokers found: ", dataBrokersResponse.length);

const insertedBrokers = await upsertDataBrokers(dataBrokersResponse);
// try to refresh Redis cache of all data brokers
try {
  const rClient = redisClient();
  await rClient.set(
    REDIS_ALL_DATA_BROKERS_KEY,
    JSON.stringify(insertedBrokers),
    "EX",
    BREACHES_EXPIRY_SECONDS, // 12 hours
  );
} catch (e) {
  Sentry.captureMessage(
    `Update Redis failed for syncOnerepDataBrokers.ts: ${e as string}`,
  );
  console.error(
    `Update Redis failed for syncOnerepDataBrokers.ts: ${(e as Error).stack}`,
  );
}

Sentry.captureCheckIn({
  checkInId,
  monitorSlug: SENTRY_SLUG,
  status: "ok",
});
setTimeout(process.exit, 1000);
