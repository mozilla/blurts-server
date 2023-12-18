/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { readFileSync, writeFileSync } from "fs";
import { CustomTestResult } from "../../E2EReporter";

function globalTearDown() {
  // check env for cron, teardown is only needed for teardown run
  if (process.env.IS_CRON) {
    // get data from e2e-reports branch files -- these are api calls
    const {
      existingFailedReports,
      existingFlakeReports,
      existingFullReports,
      newFullReportJson,
      newFailReportJson,
      newFlakeReportJson,
    } = getExistingAndNewReports();

    // merge new and existing reports
    existingFullReports.push(newFullReportJson as unknown as CustomTestResult);
    if (newFlakeReportJson.length)
      existingFlakeReports.push(
        newFlakeReportJson as unknown as CustomTestResult,
      );
    if (newFailReportJson.length)
      existingFailedReports.push(
        newFailReportJson as unknown as CustomTestResult,
      );

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
  } else {
    console.log("[e2e_log] - Not a cron json, json report will not be created");
  }
}

function getExistingAndNewReports() {
  let existingFullReports: CustomTestResult[] = [];
  let existingFlakeReports: CustomTestResult[] = [];
  let existingFailedReports: CustomTestResult[] = [];
  let newFullReportJson: CustomTestResult[] = [];
  let newFlakeReportJson: CustomTestResult[] = [];
  let newFailReportJson: CustomTestResult[] = [];

  try {
    // existing files
    const fullData = readFileSync("./full_test_report.json", "utf-8");
    const flakeData = readFileSync("./flake_test_report.json", "utf-8");
    const failData = readFileSync("./failed_test_report.json", "utf-8");

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

    existingFullReports = JSON.parse(fullData ?? "[]");
    existingFlakeReports = JSON.parse(flakeData ?? "[]");
    existingFailedReports = JSON.parse(failData ?? "[]");
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

export default globalTearDown;
