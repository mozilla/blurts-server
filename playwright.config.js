/* eslint-disable semi */
// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  /* Max time in milliseconds the whole test suite can to prevent CI breaking. */
  globalTimeout: process.env.CI ? 360000 : undefined,

  /* Global setup */
  globalSetup: require.resolve('./tests/e2e/global-setup.ts'),

  updateSnapshots: 'missing',

  /* Add location of specs. */
  testDir: 'tests/e2e/specs',

  /* Maximum time one test can run for. */
  timeout: process.env.CI ? 180000 : 50 * 1000,

  // fullyParallel: true,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
    toMatchSnapshot: {
      threshold: 0.3,
      maxDiffPixels: 250,
      maxDiffPixelRatio: 0.2
    }
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 4 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [process.env.CI ? 'github' : 'html']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.TEST_BASE_URL || 'https://stage.firefoxmonitor.nonprod.cloudops.mozgcp.net',

    // failure behavior
    screenshot: 'only-on-failure',

    // viewport
    viewport: { width: 1980, height: 1080 },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    }
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari']
    //   }
    // }
    // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5']
    //   }
    // }
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/'

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

module.exports = config;
