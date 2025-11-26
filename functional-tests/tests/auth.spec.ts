/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/baseTest";
import { test as authenticatedTest } from "../fixtures/authenticatedTest";
import { getBaseTestEnvUrl } from "../utils/environment";
import { goToFxA, signInUser } from "../utils/fxa";
import { getTestUserEmailByCountryCode } from "../utils/user";

test.describe(`Verify authentication [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    // speed up test by ignoring non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });
    await page.goto(`${getBaseTestEnvUrl()}/`);
  });

  test("user sign-in flow from landing page", async ({ page }, testInfo) => {
    await goToFxA(page, {
      countryCode: testInfo.project.use.countryCode,
      isMobile: testInfo.project.use.isMobile,
    });
    const userEmail = getTestUserEmailByCountryCode(testInfo.project);
    await signInUser(
      page,
      userEmail,
      process.env.E2E_TEST_ACCOUNT_BASE_PASSWORD as string,
    );
    await page.waitForURL("**/user/**");
  });

  authenticatedTest(
    "user is signed in via session storage",
    async ({ page }) => {
      await page.waitForURL("**/user/**");
    },
  );

  authenticatedTest(
    "new users are redirected to the expected page",
    async ({ page }, testInfo) => {
      if (testInfo.project.use.countryCode === "us") {
        // shows the onboarding flow
        const heading = page.locator("h2", {
          hasText: "View all sites where your info is exposed",
        });
        expect(heading).toBeVisible();
      } else {
        // shows the dashboard
        const heading = page.locator("h2", {
          hasText: "Alle websites waarop uw gegevens zijn gelekt bekijken",
        });
        expect(heading).toBeVisible();
      }
    },
  );
});
