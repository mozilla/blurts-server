/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Cron: Daily
 * Fetches the list of breaches from HIBP, sync database with the latest breaches list
 *
 * Usage:
 * node src/scripts/syncBreaches.js
 */

import {
  fetchHibpBreaches,
  HibpGetBreachesResponse,
} from "../../../utils/hibp";
import {
  getAllBreaches,
  upsertBreaches,
  updateBreachFaviconUrl,
  getBreachFaviconUrl,
} from "../../../db/tables/breaches";
import {
  redisClient,
  REDIS_ALL_BREACHES_KEY,
  BREACHES_EXPIRY_SECONDS,
} from "../../../db/redis/client";
import { uploadToS3, checkS3ObjectExists } from "../../../utils/s3";
import { config } from "../../../config";
import { logger as baseLogger } from "../../../app/functions/server/logging";

const logger = baseLogger.child({ module: "syncBreaches" });

export async function getBreachIcons(breaches: HibpGetBreachesResponse) {
  for (const breach of breaches) {
    const breachDomain = breach.Domain;
    const breachName = breach.Name;

    // Skip breaches without domains
    if (!breachDomain || breachDomain.length === 0) {
      logger.info("Breach has empty domain", { breachName });
      await updateBreachFaviconUrl(breachName, null);
      continue;
    }

    const logoFilename = breachDomain.toLowerCase() + ".ico";
    const s3LogoUrl = `https://s3.amazonaws.com/${config.s3Bucket}/${logoFilename}`;

    try {
      // Check if logo exists in S3 and get its metadata
      const exists = await checkS3ObjectExists(logoFilename, config.s3Bucket);
      const dbFaviconUrl = await getBreachFaviconUrl(breachName);

      if (exists && dbFaviconUrl === s3LogoUrl) {
        logger.info("Logo already exists in S3. Skipping", { logoFilename });
        continue;
        // S3 record exists but db does not have the same URI
      } else if (exists && dbFaviconUrl !== s3LogoUrl) {
        logger.info("Logo exists in S3, but is not linked in DB. Updating", {
          breachName,
          s3LogoUrl,
        });
        await updateBreachFaviconUrl(breachName, s3LogoUrl);
        continue;
      }
      // Fetch logo from DuckDuckGo
      const iconUri = `https://icons.duckduckgo.com/ip3/${breachDomain}.ico`;
      const res = await fetch(iconUri);

      if (res.status !== 200) {
        logger.warn("Logo does not exist or is inaccessible", {
          breachName,
          breachDomain,
          iconUri,
          status: res.status,
        });
        await updateBreachFaviconUrl(breachName, null);
        continue;
      }

      // Upload logo to S3
      const logoBuffer = Buffer.from(await res.arrayBuffer());
      await uploadToS3(logoFilename, logoBuffer, config.s3Bucket);

      // Update database with S3 URL
      await updateBreachFaviconUrl(breachName, s3LogoUrl);

      logger.info("Successfully uploaded logo", {
        logoFilename,
        breachName,
      });
    } catch (error) {
      // Log error but continue processing other breaches
      logger.error("Failed to process breach icon", {
        error,
        breachName,
        breachDomain,
        logoFilename,
      });
      continue;
    }
  }
}

// TODO: MNTOR-5188
/* c8 ignore start */
export async function run() {
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
  logger.info("Starting breach icon sync");
  await getBreachIcons(breachesResponse);
  logger.info("Completed breach icon sync");
}

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
/* c8 ignore end */
