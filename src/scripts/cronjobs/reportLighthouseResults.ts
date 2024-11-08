/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import Sentry from "@sentry/nextjs";
import { logger } from "../../app/functions/server/logging";
// The location autocomplete data will be created during the build step.
// eslint-disable-next-line import/no-unresolved
import lighthouseResults from "../../../.lighthouseci/manifest.json";

const SENTRY_SLUG = "cron-report-lighthouse-results";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const checkInId = Sentry.captureCheckIn({
  monitorSlug: SENTRY_SLUG,
  status: "in_progress",
});

async function run() {
  logger.info("Run report Lighthouse results");
  if (
    !lighthouseResults ||
    (lighthouseResults && lighthouseResults.length === 0)
  ) {
    throw new Error("No available Lighthouse reports");
  }
  // Get the median run results.
  // For more info on the structure of `manifest.json` see:
  // https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#outputdir
  const medianResults = lighthouseResults.filter(
    (result) => result.isRepresentativeRun === true,
  );
  console.log("Result", medianResults);
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
