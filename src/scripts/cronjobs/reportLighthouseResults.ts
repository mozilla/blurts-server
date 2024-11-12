/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFile } from "node:fs/promises";
import Sentry from "@sentry/nextjs";
import { logger } from "../../app/functions/server/logging";

const SENTRY_SLUG = "cron-report-lighthouse-results";
const AUDITS_TO_INCLUDE = [
  "first-contentful-paint",
  "largest-contentful-paint",
  "speed-index",
  "total-blocking-time",
  "max-potential-fid",
  "cumulative-layout-shift",
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

type LighthouseResult = {
  url: string;
  isRepresentativeRun: boolean;
  htmlPath: string;
  jsonPath: string;
  summary: {
    performance: number;
    accessibility: number;
    "best-practices": number;
    seo: number;
  };
};

async function run() {
  // The Lighthouse report that will be created by running LHCI.
  const lighthouseResults: LighthouseResult[] =
    JSON.parse(
      await readFile(
        new URL("../../../.lighthouseci/manifest.json", import.meta.url),
        { encoding: "utf8" },
      ),
    ) ?? [];

  if (lighthouseResults.length === 0) {
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
