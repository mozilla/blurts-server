/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/baseTest";
import { getBaseTestEnvUrl } from "../utils/environment";
import { FeatureFlagName } from "../../src/db/tables/featureFlags";

// extend enabled local feature flags for testing purposes
const extraFeatureFlags: FeatureFlagName[] = ["GA4SubscriptionEvents"];
test.use({ extraLocalForcedFeatureFlags: extraFeatureFlags });

const productPlans = ["Monitor Plus", "Privacy Protection Plan"];

// General tests to confirm the E2E test setup works as expected
test.describe(`Verify subscription flows [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    // speed up test by ignoring non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });
  });

  for (const productName of productPlans) {
    test(`user can initiate subscribing to "${productName}" from "/"`, async ({
      page,
    }, testInfo) => {
      const url = `${getBaseTestEnvUrl()}/`;
      const response = await page.goto(url);
      const productCard = page.locator(`dl[aria-label="${productName}"]`);

      if (
        process.env.E2E_TEST_ENV === "local" ||
        testInfo.project.use.countryCode === "us"
      ) {
        await expect(productCard).toBeVisible();
        const cta = productCard.getByRole("link", { name: "Get started" });
        await cta.click();
        expect(response?.ok()).toBe(true);
      } else {
        await expect(productCard).not.toBeVisible();
      }
    });
  }

  for (const productName of productPlans) {
    test(`user can initiate subscribing to "${productName}" from "/subscription-plans"`, async ({
      page,
    }, testInfo) => {
      const url = `${getBaseTestEnvUrl()}/`;
      const response = await page.goto(url);
      const productCard = page.locator(`dl[aria-label="${productName}"]`);

      if (
        process.env.E2E_TEST_ENV === "local" ||
        testInfo.project.use.countryCode === "us"
      ) {
        await expect(productCard).toBeVisible();
        const cta = productCard.getByRole("link", { name: "Get started" });
        await cta.click();
        expect(response?.ok()).toBe(true);
      } else {
        // expect redirect back to the landing page
        await page.waitForURL(`${getBaseTestEnvUrl()}/`);
      }
    });
  }
});
