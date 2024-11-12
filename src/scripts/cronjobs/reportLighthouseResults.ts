/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Sentry from "@sentry/nextjs";
import { logger } from "../../app/functions/server/logging";
// The location autocomplete data will be created during the build step.
// @ts-ignore-next-line
// eslint-disable-next-line import/no-unresolved
import lighthouseResults from "../../../.lighthouseci/manifest.json";

const SENTRY_SLUG = "cron-report-lighthouse-results";
const AUDITS_TO_INCLUDE = [
  "first-contentful-paint",
  "largest-contentful-paint",
  "speed-index",
  "total-blocking-time",
  "max-potential-fid",
  "layout-shifts",
  "server-response-time",
  "interactive",
];

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

async function run() {
  if (
    !lighthouseResults ||
    (lighthouseResults && lighthouseResults.length === 0)
  ) {
    throw new Error("No available Lighthouse reports");
  }
  // Get the median run results.
  // For more info on the structure of `manifest.json` see:
  // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#outputdir
  const lighthouseReport = await Promise.all(
    lighthouseResults
      .filter((result) => result.isRepresentativeRun === true)
      .map(async (medianResult) => {
        const { jsonPath, url, summary } = medianResult;
        const fullReport = await import(jsonPath);
        const audits = AUDITS_TO_INCLUDE.map((auditId) => {
          const { id, score, numericValue } = fullReport.audits[auditId];
          return { id, score, numericValue };
        });

        return { url, summary, audits };
      }),
  );

  console.info("lighthouse", lighthouseReport);
}

void run()
  .then(async (_) => {
    Sentry.captureCheckIn({
      checkInId,
      monitorSlug: SENTRY_SLUG,
      status: "ok",
    });
  })
  .catch((error) => {
    logger.error(error);
    Sentry.captureException(error);
  })
  .finally(() => {
    setTimeout(process.exit, 1000);
  });
