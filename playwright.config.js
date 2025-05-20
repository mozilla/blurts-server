/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { defineConfig, devices } from "@playwright/test";
/**
 * Read environment variables from file.
 * https://www.npmjs.com/package/dotenv-flow
 */
import * as dotenvFlow from "dotenv-flow";
dotenvFlow.config();
/**
 * @see https://playwright.dev/docs/test-configuration
 */

const webServerConfig = {
  command: "npm run build; npm start",
  // Building the app can take some time:
  timeout: 600_000,
  port: 6060,
};

const shouldStartWebServer = process.env.E2E_TEST_ENV === "local";

export default defineConfig({
  testDir: "src/e2e/specs",
  /* Maximum time one test can run for. */
  timeout: 60_000,

  /* Global setup */
  globalSetup: "src/e2e/global-setup.ts",

  /* Max time in milliseconds the whole test suite can to prevent CI breaking. */
  globalTimeout: 1_800_000,

  // adding missing snapshots for later comparison
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

  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,

  /* Use a custom percentage of available wokers in CI and use default locally. */
  workers: process.env.CI ? "75%" : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [["github"], ["html"]] : "html",

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.E2E_TEST_BASE_URL,

    /* automatically take screenshot only on failures */
    screenshot: "only-on-failure",

    /* automatically record video on retry  */
    video: "retry-with-video",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
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
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] }
    // }
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "src/e2e/test-results/",

  // Run your local dev server before starting the tests -- should run only on PRs or when prompted
  ...(shouldStartWebServer && { webServer: webServerConfig }),
});
