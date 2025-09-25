/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/baseTest";
import { test as authenticatedTest } from "../fixtures/authenticatedTest";
import { getBaseTestEnvUrl } from "../utils/environment";
import { FeatureFlagName } from "../../src/db/tables/featureFlags";

// extend enabled local feature flags for testing purposes
const extraFeatureFlags: FeatureFlagName[] = ["Moscary"];
test.use({ extraLocalForcedFeatureFlags: extraFeatureFlags });

test.describe(`Verify authentication [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    // speed up test by ignoring non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });
    await page.goto(`${getBaseTestEnvUrl()}/`);
  });

  authenticatedTest(
    "non-US users are sent to the dashboard on first loding",
    async ({ page }, testInfo) => {
      if (testInfo.project.use.countryCode === "us") {
        return;
      }

      const heading = page.getByRole("heading", {
        name: "Alle websites waarop uw gegevens zijn gelekt bekijken",
      });
      expect(heading).toBeVisible();
    },
  );

  authenticatedTest(
    "US users go through an onboarding flow in which they enter details that we'll scan for at data brokers",
    async ({ page }, testInfo) => {
      if (testInfo.project.use.countryCode !== "us") {
        return;
      }
      if (process.env.CI && process.env.E2E_TEST_ENV === "local") {
        console.log(
          "Skipping onboarding test; backend is not set up in CI when running against a local server.",
        );
        return;
      }

      await page.getByRole("button", { name: "Start my free scan" }).click();
      await page.getByLabel("First name").fill("John");
      await page.getByLabel("Last name").fill("Doe");
      await page.getByLabel("Date of birth").fill("1990-01-01");
      await page
        .getByRole("combobox", { name: "City and state" })
        .fill("New York");
      await page.getByRole("option", { name: "New YorkNY, USA" }).click();
      await page.getByRole("button", { name: "Find exposures" }).click();
      await page.getByRole("button", { name: "Confirm" }).press("Enter");

      const progressBarRuntime = 60 * 1000;
      test.setTimeout(progressBarRuntime + 30 * 1000);
      // A scan takes 60 seconds, plus 25 seconds for the navigation back to the dashboard:
      await page.waitForURL("**/user/dashboard*", {
        timeout: progressBarRuntime + 25 * 1000,
      });
      await expect(
        page.getByRole("heading", {
          name: "View all sites where your",
          exact: false,
        }),
      ).toBeVisible();
    },
  );
});
