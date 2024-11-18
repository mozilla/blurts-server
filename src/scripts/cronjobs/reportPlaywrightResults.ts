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

  const { stats, suites } = playwrightReport;
  const playwrightReportParsed = {
    stats,
    suites: suites.map((suite) => {
      const { title, file, suites: subsuites } = suite;

      const subsuitesParsed = subsuites?.map((subsuite) => {
        const { title, file, specs } = subsuite;
        const specsParsed = specs.map((spec) => {
          const { id, title, ok } = spec;
          return { id, title, ok };
        });
        return {
          title,
          file,
          specs: specsParsed,
        };
      });

      return {
        title,
        file,
        subsuites: subsuitesParsed,
      };
    }),
  };

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
