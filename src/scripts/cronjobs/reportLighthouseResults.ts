/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFile } from "node:fs/promises";
import { BigQuery } from "@google-cloud/bigquery";
import { logger } from "../../app/functions/server/logging";

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

async function getLighthouseResults() {
  if (
    !process.env.BQ_LIGHTHOUSE_PROJECT ||
    !process.env.BQ_LIGHTHOUSE_DATASET ||
    !process.env.BQ_LIGHTHOUSE_TABLE
  ) {
    return null;
  }

  try {
    const bigQueryClient = new BigQuery({
      projectId: process.env.BQ_LIGHTHOUSE_PROJECT,
    });

    const table = bigQueryClient
      .dataset(process.env.BQ_LIGHTHOUSE_DATASET)
      .table(process.env.BQ_LIGHTHOUSE_TABLE);
    const [metadata] = await table.getMetadata();

    console.log(
      `Table description: ${metadata.description || "No description"}`,
    );
    return table;
  } catch (error) {
    console.error("Error querying Lighthouse results", error);
  }
}

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
        const fullReport = JSON.parse(
          await readFile(new URL(jsonPath, import.meta.url), {
            encoding: "utf8",
          }),
        );
        const audits = AUDITS_TO_INCLUDE.map((auditId) => {
          const { id, score, numericValue } = fullReport.audits[auditId];
          return { id, score, numericValue };
        });

        return { url, summary, audits };
      }),
  );

  const transformedData = lighthouseReport.map((item) => {
    return {
      url: item.url,
      ...item.summary,
    };
  });
  console.table(transformedData);
  logger.info("lighthouse_report", lighthouseReport);

  const results = await getLighthouseResults();
  console.info("BigQuery dataset", results);
}

try {
  run();
} catch (error) {
  logger.error("lighthouse_report", {
    exception: error,
  });
} finally {
  setTimeout(process.exit, 1000);
}
