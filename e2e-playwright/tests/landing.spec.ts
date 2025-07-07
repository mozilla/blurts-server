/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/baseTest";
import { getBaseTestEnvUrl } from "../utils/helpers";

test.describe(`Verify landing page [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${getBaseTestEnvUrl()}/`);
  });

  test("landing config", async ({ page, enabledFeatureFlags }, testInfo) => {
    const configList = await page.getByTestId("e2e-config");

    if (testInfo.project.use.countryCode === "us") {
      expect(configList.getByRole("listitem")).toHaveText([
        "Country code: us",
        `Feature flags: ${enabledFeatureFlags.join(", ")}`,
      ]);
    }

    if (testInfo.project.use.countryCode === "nl") {
      expect(configList.getByRole("listitem")).toHaveText([
        "Country code: nl",
        `Feature flags: ${enabledFeatureFlags.join(", ")}`,
      ]);
    }
  });

  test("landing page loads", async ({ page }, testInfo) => {
    if (testInfo.project.use.countryCode === "us") {
      const heading = page.locator("h2", {
        hasText: "Find where your personal info is exposed — and take it back",
      });
      await expect(heading).toBeVisible();
    }

    if (testInfo.project.use.countryCode === "nl") {
      const heading = page.locator("h2", {
        hasText: "Find where your personal info is exposed — and take it back",
      });
      await expect(heading).toBeVisible();
    }
  });
});
