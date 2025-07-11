/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, devices, type Project } from "@playwright/test";
import { FeatureFlagName } from "../src/db/tables/featureFlags";
/**
 * Read environment variables from file.
 * https://www.npmjs.com/package/dotenv-flow
 */
import * as dotenvFlow from "dotenv-flow";
dotenvFlow.config();
/**
 * @see https://playwright.dev/docs/test-configuration
 */

const port = parseInt(process.env.PORT || "6060", 10);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helpful for local debugging: Don’t build application if `false`
const forceLocalRebuild = true;
const shouldStartWebServer = process.env.E2E_TEST_ENV === "local";
const webServerConfig = {
  command: `${forceLocalRebuild ? "npm run build; " : ""}npm start`,
  // Building the app can take some time:
  timeout: 600_000,
  port,
};

// Geo locations
export const locations = [
  {
    name: "US",
    geolocation: { latitude: 40.7167, longitude: -74.0 },
    locale: "en-US",
  },
  {
    name: "NL",
    geolocation: { latitude: 52.370216, longitude: 4.895168 },
    locale: "nl-NL",
  },
];

// Devices
const baseDevices = [
  /* Test against desktop browsers */
  {
    name: "chromium",
    use: {
      ...devices["Desktop Chrome"],
      viewport: {
        width: 1920,
        height: 1080,
      },
    },
  },
  // {
  //   name: "firefox",
  //   use: {
  //     ...devices["Desktop Firefox"],
  //     viewport: {
  //       width: 1920,
  //       height: 1080,
  //     },
  //   },
  // },
  // /* Test against mobile viewports. */
  // {
  //   name: "Mobile Chrome",
  //   use: devices["Pixel 5"],
  // },
  // {
  //   name: "Mobile Firefox",
  //   use: {
  //     ...devices["Pixel 5"],
  //     browserName: "firefox",
  //     isMobile: false,
  //   },
  // },
];

export const getEnabledFeatureFlags = () => {
  let enabledFeatureFlags: FeatureFlagName[] = [];
  try {
    const enabledFeatureFlagsJson = fs.readFileSync(
      path.resolve(__dirname, "./storage/enabled-feature-flags.json"),
      "utf-8",
    );
    enabledFeatureFlags = JSON.parse(enabledFeatureFlagsJson).data ?? [];
  } catch (error) {
    console.warn(
      "Could not load enabled feature flags",
      error instanceof Error ? error.message : error,
    );
  }

  return enabledFeatureFlags;
};

const projects: Project[] = locations.flatMap((geo) =>
  baseDevices.map((base) => ({
    name: `${base.name} (${geo.name})`,
    use: {
      ...base.use,
      countryCode: geo.name.toLowerCase(),
      geolocation: geo.geolocation,
      locale: geo.locale,
      permissions: ["geolocation"],
      enabledFeatureFlags: getEnabledFeatureFlags(),
      extraHTTPHeaders: {
        "X-Client-Region": geo.name.toLowerCase(),
        "Accept-Language": `${geo.locale},${geo.name.toLowerCase()};q=1.0`,
      },
    },
  })),
);

export default defineConfig({
  testDir: "./tests",
  /* Global setup */
  globalSetup: "./global-setup.ts",
  /* Global teardown */
  globalTeardown: "./global-teardown.ts",
  /* Maximum time one test can run for. */
  timeout: 60_000,
  /* Max time in milliseconds the whole test suite can run to prevent CI from hanging. */
  globalTimeout: 1_800_000,
  // Only update missing snapshots, good for reviewing regressions later
  updateSnapshots: "missing",
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 2_000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry failed tests on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Use a custom percentage of available workers in CI and default locally */
  workers: process.env.CI ? "75%" : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [["github"], ["html"]] : "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto("/")`. */
    baseURL: process.env.E2E_TEST_BASE_URL,
    /* Automatically take screenshot only on failures */
    screenshot: "only-on-failure",
    /* Automatically record video only on retries */
    video: "retry-with-video",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },
  /* Configure projects for major browsers */
  projects,
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results",
  // Run your local dev server before starting the tests -- only on local environment
  ...(shouldStartWebServer && { webServer: webServerConfig }),
});
