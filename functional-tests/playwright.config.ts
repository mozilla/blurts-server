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
 */
import "../src/config";
import { createTestClientRegionToken } from "../src/app/functions/server/testCountryCodeToken";
import { getBaseTestEnvUrl } from "./utils/environment";

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
  env: {
    PLAYWRIGHT: "true",
  },
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
const baseDevices: Array<{ name: string; use: (typeof devices)[string] }> = [
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
  {
    name: "firefox",
    use: {
      ...devices["Desktop Firefox"],
      viewport: {
        width: 1920,
        height: 1080,
      },
    },
  },
  /* Test against mobile viewports. */
  {
    name: "Mobile Chrome",
    use: devices["Pixel 5"],
  },
];

export const getEnabledFeatureFlags = () => {
  let enabledFeatureFlags: FeatureFlagName[] = [];
  try {
    const enabledFeatureFlagsJson = fs.readFileSync(
      path.resolve(
        __dirname,
        "./functional-test-cache/enabled-feature-flags.json",
      ),
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

export const projects = locations.flatMap((geo) =>
  baseDevices.map(
    (base) =>
      ({
        name: `${base.name} (${geo.name})`,
        use: {
          ...base.use,
          countryCode: geo.name.toLowerCase(),
          geolocation: geo.geolocation,
          locale: geo.locale,
          permissions: ["geolocation"],
          enabledFeatureFlags: getEnabledFeatureFlags(),
          extraHTTPHeaders: {
            "Accept-Language": `${geo.locale},${geo.name.toLowerCase()};q=1.0`,
            "X-Client-Region": geo.name.toLowerCase(),
            "x-forced-client-region-token": createTestClientRegionToken(
              geo.name.toLowerCase(),
            ),
          },
        },
      }) as const satisfies Project,
  ),
);

export default defineConfig({
  testDir: "./tests",
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
    baseURL: getBaseTestEnvUrl(),
    /* Automatically take screenshot only on failures, or if it's a manually-triggered run */
    screenshot:
      process.env.GITHUB_EVENT_NAME === "workflow_dispatch"
        ? "on"
        : "only-on-failure",
    /* Automatically record video when tests fail */
    video: "retain-on-failure",
    /* Collect trace when tests fail, or if it's a manually-triggered run. See https://playwright.dev/docs/trace-viewer */
    trace:
      process.env.GITHUB_EVENT_NAME === "workflow_dispatch"
        ? "on"
        : "retain-on-failure",
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: "global-setup",
      testMatch: /global\-setup/,
      teardown: "global-teardown",
    },
    ...projects.map(
      (project) =>
        ({
          ...project,
          dependencies: ["global-setup"],
        }) as Project,
    ),
    {
      name: "global-teardown",
      testMatch: /global\-teardown/,
    },
  ],
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "test-results",
  // Run your local dev server before starting the tests -- only on local environment
  ...(shouldStartWebServer && { webServer: webServerConfig }),
});
