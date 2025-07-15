/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/baseTest";
import { getBaseTestEnvUrl } from "../utils/environment";
import { FeatureFlagName } from "../../src/db/tables/featureFlags";

// extend enabled local feature flags for testing purposes
const extraFeatureFlags: FeatureFlagName[] = ["GA4SubscriptionEvents"];
test.use({ extraLocalForcedFeatureFlags: extraFeatureFlags });

// General tests to confirm the E2E test setup works as expected
test.describe(`Verify subscription flows [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    // speed up test by ignoring non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });
  });

  test("user can initiate subscribing to Monitor Plus from the pricing grid on the landing page", async ({
    page,
  }, testInfo) => {
    await page.goto(`${getBaseTestEnvUrl()}/`);
    const productCard = page.locator('dl[aria-label="Monitor Plus"]');

    if (testInfo.project.use.countryCode === "us") {
      await expect(productCard).toBeVisible();

      const ctaButton = productCard.getByRole("link", { name: "Get started" });
      await ctaButton.click();
      await page.waitForURL(/monitorplus/, { waitUntil: "domcontentloaded" });
    } else {
      await expect(productCard).not.toBeVisible();
    }
  });

  test("user can initiate subscribing to the Privacy Protection Plan from the pricing grid on the landing page", async ({
    page,
  }, testInfo) => {
    await page.goto(`${getBaseTestEnvUrl()}/`);
    const productCard = page.locator(
      'dl[aria-label="Privacy Protection Plan"]',
    );

    if (testInfo.project.use.countryCode === "us") {
      const ctaButton = productCard.getByRole("link", { name: "Get started" });
      await ctaButton.click();
      await page.waitForURL(/privacyprotectionplan/, {
        waitUntil: "domcontentloaded",
      });
    } else {
      await expect(productCard).not.toBeVisible();
    }
  });

  test("user can initiate subscribing to Monitor Plus from the pricing grid on the subscription plans page", async ({
    page,
  }, testInfo) => {
    await page.goto(`${getBaseTestEnvUrl()}/subscription-plans`);
    const productCard = page.locator('dl[aria-label="Monitor Plus"]');

    if (testInfo.project.use.countryCode === "us") {
      const ctaButton = productCard.getByRole("link", { name: "Get started" });
      await ctaButton.click();
      await page.waitForURL(/monitorplus/, { waitUntil: "domcontentloaded" });
    } else {
      await page.waitForURL(`${process.env.SUBPLAT_SUBSCRIPTIONS_URL}/`);
    }
  });

  test("user can initiate subscribing to the Privacy Protection Plan from the pricing grid on the subscription plans page", async ({
    page,
  }, testInfo) => {
    await page.goto(`${getBaseTestEnvUrl()}/subscription-plans`);
    const productCard = page.locator(
      'dl[aria-label="Privacy Protection Plan"]',
    );

    if (testInfo.project.use.countryCode === "us") {
      const ctaButton = productCard.getByRole("link", { name: "Get started" });
      await ctaButton.click();
      await page.waitForURL(/privacyprotectionplan/, {
        waitUntil: "domcontentloaded",
      });
    } else {
      await page.waitForURL(`${process.env.SUBPLAT_SUBSCRIPTIONS_URL}/`);
    }
  });
});
