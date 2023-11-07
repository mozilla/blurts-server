/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* Cron: Daily
 * Fetches the list of breaches from HIBP, sync database with the latest breaches list
 *
 * Usage:
 * node src/scripts/syncBreaches.js
 */

import { readdir } from "node:fs/promises";
import os from "node:os";
import Sentry from "@sentry/nextjs";
import { req, formatDataClassesArray } from "../utils/hibp.js";
import {
  getAllBreaches,
  upsertBreaches,
  updateBreachFaviconUrl,
} from "../db/tables/breaches.js";
import { uploadToS3 } from "./s3.js";

const SENTRY_SLUG = "cron-sync-breaches";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

export async function getBreachIcons(breaches) {
  // make logofolder if it doesn't exist
  const logoFolder = os.tmpdir();
  console.log(`Logo folder: ${logoFolder}`);

  // read existing logos
  const existingLogos = await readdir(logoFolder);

  await Promise.allSettled(
    breaches.map(async ({ Domain: breachDomain, Name: breachName }) => {
      if (!breachDomain || breachDomain.length == 0) {
        console.log("empty domain: ", breachName);
        await updateBreachFaviconUrl(breachName, null);
        return;
      }
      const logoFilename = breachDomain.toLowerCase() + ".ico";
      if (existingLogos.includes(logoFilename)) {
        console.log("skipping ", logoFilename);
        await updateBreachFaviconUrl(
          breachName,
          `https://s3.amazonaws.com/${process.env.S3_BUCKET}/${logoFilename}`,
        );
        return;
      }
      console.log(`fetching: ${logoFilename}`);
      const res = await fetch(
        `https://icons.duckduckgo.com/ip3/${breachDomain}.ico`,
      );
      if (res.status !== 200) {
        // update logo path with null
        console.log(`Logo does not exist for: ${breachName} ${breachDomain}`);
        await updateBreachFaviconUrl(breachName, null);
        return;
      }

      try {
        await uploadToS3(logoFilename, Buffer.from(await res.arrayBuffer()));
        await updateBreachFaviconUrl(
          breachName,
          `https://s3.amazonaws.com/${process.env.S3_BUCKET}/${logoFilename}`,
        );
      } catch (e) {
        console.error(e);
        return;
      }
    }),
  );
}

// Get breaches and upserts to DB
const breachesResponse = await req("/breaches");
const breaches = [];
const seen = new Set();
for (const breach of breachesResponse) {
  breach.DataClasses = formatDataClassesArray(breach.DataClasses);
  breach.LogoPath = /[^/]*$/.exec(breach.LogoPath)[0];
  breaches.push(breach);
  seen.add(breach.Name + breach.BreachDate);

  // sanity check: corrupt data structure
  if (!isValidBreach(breach))
    throw new Error(
      "Breach data structure is not valid",
      JSON.stringify(breach),
    );
}

console.log("Breaches found: ", breaches.length);
console.log("Unique breaches based on Name + BreachDate", seen.size);

// sanity check: no duplicate breaches with Name + BreachDate
if (seen.size !== breaches.length) {
  throw new Error("Breaches contain duplicates. Stopping script...");
} else {
  await upsertBreaches(breaches);

  // get
  const result = await getAllBreaches();
  console.log(
    "Number of breaches in the database after upsert:",
    result.length,
  );
}

await getBreachIcons(breaches);

Sentry.captureCheckIn({
  checkInId,
  monitorSlug: SENTRY_SLUG,
  status: "ok",
});
setTimeout(process.exit, 1000);

/**
 * Null check for some required field
 *
 * @param {object} breach breach object from HIBP
 * @returns Boolean is it a valid breach
 */
function isValidBreach(breach) {
  return (
    breach.Name !== undefined &&
    breach.BreachDate !== undefined &&
    breach.Title !== undefined &&
    breach.Domain !== undefined &&
    breach.DataClasses !== undefined
  );
}
