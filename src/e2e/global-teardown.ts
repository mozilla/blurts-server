/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import https from "https";
import { readFileSync, writeFileSync } from "fs";
import { CustomTestResult } from "../../E2EReporter";

async function globalTearDown() {
  if (!process.env.IS_CRON) {
    console.log("[e2e_log] - Not a cron json, json report will not be created");
    return;
  }

  // check env for cron, teardown is only needed for teardown run
  // get data from e2e-reports branch files -- these are api calls
  const {
    existingFailedReports,
    existingFlakeReports,
    existingFullReports,
    newFailReportJson,
    newFlakeReportJson,
    newFullReportJson,
  } = await getExistingAndNewReports();

  // merge new and existing reports
  existingFullReports.push(newFullReportJson as unknown as CustomTestResult);

  if (newFlakeReportJson.length) {
    existingFlakeReports.push(
      newFlakeReportJson as unknown as CustomTestResult,
    );
  }

  if (newFailReportJson.length) {
    existingFailedReports.push(
      newFailReportJson as unknown as CustomTestResult,
    );
  }

  // convert the merged reports
  const existingFull = JSON.stringify(existingFullReports);
  const existingFlake = JSON.stringify(existingFlakeReports);
  const existingFailed = JSON.stringify(existingFailedReports);

  try {
    writeFileSync("full_test_report.json", existingFull, "utf-8");
    writeFileSync("flake_test_report.json", existingFlake, "utf-8");
    writeFileSync("failed_test_report.json", existingFailed, "utf-8");
  } catch (err) {
    console.error("Error writing to json", err);
  }
}

async function getExistingAndNewReports() {
  let existingFullReports: CustomTestResult[] = [];
  let existingFlakeReports: CustomTestResult[] = [];
  let existingFailedReports: CustomTestResult[] = [];
  let newFullReportJson: CustomTestResult[] = [];
  let newFlakeReportJson: CustomTestResult[] = [];
  let newFailReportJson: CustomTestResult[] = [];

  try {
    // fetch existing reports from repo
    existingFullReports = (await fetchExistingReport(
      "https://raw.githubusercontent.com/mozilla/blurts-server/e2e-report/full_test_report.json",
    )) as CustomTestResult[];
    existingFlakeReports = (await fetchExistingReport(
      "https://raw.githubusercontent.com/mozilla/blurts-server/e2e-report/flake_test_report.json",
    )) as CustomTestResult[];
    existingFailedReports = (await fetchExistingReport(
      "https://raw.githubusercontent.com/mozilla/blurts-server/e2e-report/failed_test_report.json",
    )) as CustomTestResult[];

    // new test generated files
    const newFullReport = readFileSync("./new_full_test_report.json", "utf-8");
    const newFlakeReport = readFileSync(
      "./new_flake_test_report.json",
      "utf-8",
    );
    const newFailReport = readFileSync(
      "./new_failed_test_report.json",
      "utf-8",
    );

    // parse new test reports
    newFullReportJson = JSON.parse(newFullReport ?? "[]");
    newFlakeReportJson = JSON.parse(newFlakeReport ?? "[]");
    newFailReportJson = JSON.parse(newFailReport ?? "[]");

    return {
      existingFullReports,
      existingFlakeReports,
      existingFailedReports,
      newFullReportJson,
      newFlakeReportJson,
      newFailReportJson,
    };
  } catch (err) {
    console.log("[e2e_log] - error reading report files", err);
    return {
      existingFullReports,
      existingFlakeReports,
      existingFailedReports,
      newFullReportJson,
      newFlakeReportJson,
      newFailReportJson,
    };
  }
}

async function fetchExistingReport(url: string) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData);
          } catch (err) {
            reject(err);
          }
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

export default globalTearDown;
