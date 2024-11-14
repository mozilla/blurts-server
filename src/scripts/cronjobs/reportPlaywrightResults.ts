/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFile } from "node:fs/promises";
import Sentry from "@sentry/nextjs";
import type { JSONReport as PlaywrightJsonReport } from "@playwright/test/reporter";
import { logger } from "../../app/functions/server/logging";

async function run() {
  // The Playwright report that will be created by running the Playwright E2E tests.
  const playwrightReport: PlaywrightJsonReport = JSON.parse(
    await readFile(
      new URL("../../../playwright-report.json", import.meta.url),
      { encoding: "utf8" },
    ),
  );

  const playwrightReportParsed = playwrightReport;

  logger.info("playwright_report", playwrightReportParsed);
}

try {
  run();
} catch (error) {
  logger.error("playwright_report", {
    exception: error,
  });
  Sentry.captureException(error);
} finally {
  setTimeout(process.exit, 1000);
}
