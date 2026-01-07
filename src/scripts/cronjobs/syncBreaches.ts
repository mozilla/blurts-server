/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Cron: Daily
 * Fetches the list of breaches from HIBP, sync database with the latest breaches list
 *
 * Usage:
 * node src/scripts/syncBreaches.js
 */

import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: config.sentryDsn,
  tracesSampleRate: 1.0,
});

import { readdir } from "node:fs/promises";
import os from "node:os";
import { fetchHibpBreaches, HibpGetBreachesResponse } from "../../utils/hibp";
import {
  getAllBreaches,
  upsertBreaches,
  updateBreachFaviconUrl,
} from "../../db/tables/breaches";
import {
  redisClient,
  REDIS_ALL_BREACHES_KEY,
  BREACHES_EXPIRY_SECONDS,
} from "../../db/redis/client.js";
import { uploadToS3 } from "../../utils/s3.js";
import { config } from "../../config";
import { logger as baseLogger } from "../../app/functions/server/logging";

const SENTRY_SLUG = "cron-sync-breaches";

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

const logger = baseLogger.child({ module: "syncBreaches" });

export async function getBreachIcons(breaches: HibpGetBreachesResponse) {
  // make logofolder if it doesn't exist
  // TODO: clean up unused folder and existing logo logic
  // MNTOR-5166
  const logoFolder = os.tmpdir();
  logger.debug(`Logo folder: ${logoFolder}`);

  // read existing logos
  const existingLogos = await readdir(logoFolder);

  for (const breach of breaches) {
    const breachDomain = breach.Domain;
    const breachName = breach.Name;

    if (!breachDomain || breachDomain.length === 0) {
      logger.info("Breach has empty domain", { breachName });
      await updateBreachFaviconUrl(breachName, null);
      continue;
    }
    const logoFilename = breachDomain.toLowerCase() + ".ico";
    // TODO: Check S3 bucket, not file system, for existing logos
    // MNTOR-5166
    if (existingLogos.includes(logoFilename)) {
      logger.info("skipping ", logoFilename);
      await updateBreachFaviconUrl(
        breachName,
        `https://s3.amazonaws.com/${config.s3Bucket}/${logoFilename}`,
      );
      continue;
    }
    logger.info("Fetching logo", { logoFilename });
    const res = await fetch(
      `https://icons.duckduckgo.com/ip3/${breachDomain}.ico`,
    );
    if (res.status !== 200) {
      // update logo path with null
      logger.info("Logo does not exist", { breachName, breachDomain });
      await updateBreachFaviconUrl(breachName, null);
      continue;
    }

    try {
      // TODO: Do not reupload to S3 if logo already exists
      // MNTOR-5166
      await uploadToS3(logoFilename, Buffer.from(await res.arrayBuffer()));
      await updateBreachFaviconUrl(
        breachName,
        `https://s3.amazonaws.com/${config.s3Bucket}/${logoFilename}`,
      );
    } catch (e) {
      logger.error(e);
      continue;
    }
  }
}
async function run() {
  // Get breaches and upserts to DB
  const breachesResponse = await fetchHibpBreaches();
  const seen = new Set();
  breachesResponse.forEach((breach) => {
    seen.add(breach.Name + breach.BreachDate);

    // sanity check: corrupt data structure
    if (!isValidBreach(breach)) {
      const invalidMsg = "Breach data structure is not valid";
      logger.error(invalidMsg, { breach });
      throw new Error(`${invalidMsg}: ` + JSON.stringify(breach));
    }
  });

  logger.info("Breaches found", {
    total: breachesResponse.length,
    unique: seen.size,
  });

  // sanity check: no duplicate breaches with Name + BreachDate
  if (seen.size !== breachesResponse.length) {
    const dupeMsg = "Breaches contain duplicates";
    logger.error(dupeMsg, {
      unique: seen.size,
      total: breachesResponse.length,
    });
    throw new Error(`${dupeMsg}. Stopping script...`);
  } else {
    await upsertBreaches(breachesResponse);

    // get
    const result = await getAllBreaches();
    logger.info(
      "Number of breaches in the database after upsert:",
      result.length,
    );

    // try to refresh Redis cache of all breaches
    try {
      const rClient = redisClient();
      await rClient.set(
        REDIS_ALL_BREACHES_KEY,
        JSON.stringify(result),
        "EX",
        BREACHES_EXPIRY_SECONDS,
      );
    } catch (e) {
      logger.error("Update Redis failed for syncBreaches.ts", { error: e });
    }
  }
  await getBreachIcons(breachesResponse);
}

try {
  await run();
  Sentry.captureCheckIn({
    checkInId,
    monitorSlug: SENTRY_SLUG,
    status: "ok",
  });
} catch (error) {
  Sentry.captureCheckIn({
    checkInId,
    monitorSlug: SENTRY_SLUG,
    status: "error",
  });
  throw error;
}
setTimeout(process.exit, 1000);

/**
 * Null check for some required field
 *
 * @param breach breach object from HIBP
 * @returns Boolean is it a valid breach
 */
function isValidBreach(breach: HibpGetBreachesResponse[number]) {
  return (
    breach.Name !== undefined &&
    breach.BreachDate !== undefined &&
    breach.Title !== undefined &&
    breach.Domain !== undefined &&
    breach.DataClasses !== undefined
  );
}
