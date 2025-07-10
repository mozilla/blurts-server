/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/baseTest";
import { test as authenticatedTest } from "../fixtures/authenticatedTest";
import { getBaseTestEnvUrl } from "../utils/environment";
import { goToFxA, signInUser } from "../utils/fxa";
import { getTestUserEmail } from "../utils/user";

test.describe(`Verify authentication [${process.env.E2E_TEST_ENV}]`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${getBaseTestEnvUrl()}/`);

    // speed up test by ignoring non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });
  });

  test("user sign-in flow from landing page", async ({ page }, testInfo) => {
    await goToFxA(page, testInfo.project.use.countryCode);
    const userEmail = getTestUserEmail(testInfo.project.use.countryCode);
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
      if (
        process.env.E2E_TEST_ENV !== "local" &&
        testInfo.project.use.countryCode === "nl"
      ) {
        // shows the dashboard
        const heading = page.locator("h2", {
          hasText: "Alle websites waarop uw gegevens zijn gelekt bekijken",
        });
        await expect(heading).toBeVisible();
      } else {
        // shows the onboarding flow
        const heading = page.locator("h1", {
          hasText: "Welcome to ⁨Monitor⁩. Let’s find your exposed information.",
        });
        await expect(heading).toBeVisible();
      }
    },
  );
});
