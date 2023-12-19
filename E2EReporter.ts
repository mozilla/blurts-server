/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type {
  FullResult,
  Reporter,
  TestCase,
  TestError,
  TestResult,
  TestStatus,
} from "@playwright/test/reporter";
import * as fs from "fs";

export interface CustomTestResult {
  title: string;
  status: TestStatus | "flaky";
  duration: number;
  retries: number;
  errors: TestError[];
  browser: string;
  time?: number;
}

interface CustomSuiteResult {
  title: string;
  tests: CustomTestResult[];
  duration?: number;
  suiteId: string;
  fileName: string;
}

interface CustomReport {
  id: number;
  startTime: Date;
  suites: CustomSuiteResult[];
  totalDuration: number;
  totalTests: number;
  testsPassed: number;
  testsFailed: number;
  testsSkipped: number;
  testsTimedout: number;
  testsFlaky: number;
  averageTestDuration: number;
  endTime: Date;
  status: string;
  environment: string;
  failures: CustomTestResult[];
  skipped: CustomTestResult[];
  flakes: CustomTestResult[];
}

class E2EReporter implements Reporter {
  private suites: CustomSuiteResult[] = [];
  private startTime: number | undefined;
  private endTime: number | undefined;
  private tempData = {
    totalTests: 0,
    totalCompleted: 0,
    testsPassed: 0,
    testsFailed: 0,
    testsSkipped: 0,
    testsTimedout: 0,
    testsFlaky: 0,
    duration: 0,
    numberOfWorkers: 0,
    failures: [] as CustomTestResult[],
    skipped: [] as CustomTestResult[],
    flakes: [] as CustomTestResult[],
  };

  onBegin() {
    this.startTime = Date.now();
  }

  onTestBegin(test: TestCase) {
    const suiteId = test.parent.title.split(" ").join(" ");
    const suiteResult = this.suites.find((s) => s.suiteId === suiteId);

    const data: CustomSuiteResult = {
      title: test.parent.title,
      fileName: test.parent.parent!.title,
      duration: 0,
      tests: [],
      suiteId: suiteId,
    };

    if (!suiteResult) {
      this.suites.push(data);
    }
  }

  onTestEnd(test: TestCase, result: TestResult) {
    // find the suite this test belongs to
    const suiteId = test.parent.title.split(" ").join(" ");
    const suiteResult = this.suites.find((s) => s.suiteId === suiteId);

    // @ts-ignore - using _projectId as projectId is not in the testCase types
    const browserName = test._projectId as string;

    // build test data
    const data: CustomTestResult = {
      title: test.title,
      status: result.status,
      duration: result.duration,
      retries: result.retry,
      errors: result.errors,
      browser: browserName,
    };

    // add this to test to its suite
    suiteResult?.tests.push(data);

    // build test stats
    switch (result.status) {
      case "passed":
        this.tempData.testsPassed++;
        break;

      case "failed":
        this.tempData.testsFailed++;
        this.tempData.failures.push({ ...data, time: Date.now() });
        break;

      case "timedOut":
        this.tempData.testsTimedout++;
        this.tempData.failures.push(data);
        break;

      case "interrupted":
        this.tempData.testsTimedout++;
        this.tempData.failures.push(data);
        break;

      case "skipped":
        this.tempData.testsSkipped++;
        this.tempData.skipped.push(data);
        break;

      default:
        this.tempData.testsFlaky++;
        this.tempData.flakes.push(data);
        break;
    }

    // increase test count
    this.tempData.totalTests++;

    // add duration
    this.tempData.duration = this.tempData.duration + result.duration;
  }

  onEnd(result: FullResult) {
    this.endTime = Date.now();

    // build report
    const report: CustomReport = {
      id: Date.now(),
      suites: this.suites,
      totalDuration: result.duration,
      startTime: new Date(this.startTime!),
      endTime: new Date(this.endTime),
      totalTests: this.tempData.totalTests,
      testsPassed: this.tempData.testsPassed,
      testsFailed: this.tempData.testsFailed,
      testsFlaky: this.tempData.testsFlaky,
      testsSkipped: this.tempData.testsSkipped,
      averageTestDuration: result.duration / this.tempData.totalTests,
      testsTimedout: this.tempData.testsTimedout,
      status: result.status,
      environment: process.env.E2E_TEST_ENV as string,
      failures: this.tempData.failures,
      skipped: this.tempData.skipped,
      flakes: this.tempData.flakes,
    };

    // prepare the different json report
    const reportJson = JSON.stringify(report, null, 2);

    // flaky tests
    const flakeJson = JSON.stringify(this.tempData.flakes, null, 2);

    // failed tests
    const failedJson = JSON.stringify(this.tempData.failures, null, 2);

    try {
      fs.writeFileSync(
        "new_full_test_report.json",
        reportJson ?? "[]",
        "utf-8",
      );
      fs.writeFileSync(
        "new_flake_test_report.json",
        flakeJson ?? "[]",
        "utf-8",
      );
      fs.writeFileSync(
        "new_failed_test_report.json",
        failedJson ?? "[]",
        "utf-8",
      );
    } catch (err) {
      console.error("Error writing to json", err);
    }
  }
}

export default E2EReporter;
