/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../../fixtures/basePage.js";
import { removeUnicodeChars } from "../../utils/helpers.js";
import "../../utils/setFeatureFlags";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Breaches Scan, Continuous Protection, Data Profile Actions`, () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test.beforeEach(async ({ landingPage, page, authPage, welcomePage }) => {
    test.slow(
      true,
      "this test runs through the welcome scan flow, increasing timeout to address it",
    );

    // speed up test by ignoring non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });

    await landingPage.open();
    await landingPage.goToSignIn();

    const randomEmail = `_${Date.now()}@restmail.net`;
    await authPage.signUp(randomEmail, page);

    await page.waitForURL("**/user/welcome");
    await welcomePage.goThroughFirstScan({ skipLoader: true });
    expect(page.url()).toContain("/user/dashboard");
  });

  test("Verify that the Premium upsell modal is displayed correctly - Continuous Protection, verify that the user can mark Data broker profiles as fixed", async ({
    dashboardPage,
  }) => {
    test.info().annotations.push(
      {
        type: "testrail id #1",
        description:
          "(continuous protection step) https://testrail.stage.mozaws.net/index.php?/cases/view/2463623",
      },
      {
        type: "testrail id #2",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2463591",
      },
    );
    let initialExposuresCount =
      (await dashboardPage.numExposures.textContent()) as string;
    initialExposuresCount = removeUnicodeChars(initialExposuresCount);

    if (initialExposuresCount !== "0") {
      await dashboardPage.allExposures.first().click();
      await dashboardPage.fixExposureButton.click();
      await dashboardPage.removeExposuresManually.click();
      await dashboardPage.reviewAndRemoveProfiles.waitFor();

      const count = await dashboardPage.allExposures.count();
      // Fix first exposure
      await dashboardPage.markAsFixed.click();

      for (let i = 1; i < count; i++) {
        const exposure = dashboardPage.allExposures.nth(i);
        await exposure.click();

        if (await dashboardPage.markAsFixed.isVisible()) {
          await dashboardPage.markAsFixed.click();
        }
      }

      await dashboardPage.skipExposureRemoval.click();
    }

    await dashboardPage.continuousProtectionButton.waitFor();
    await expect(dashboardPage.continuousProtectionButton).toBeVisible();
    await dashboardPage.continuousProtectionButton.click();
    await dashboardPage.verifyPremiumUpsellModalOptions();
    // Using toMatch to avoid invisible unicode chars mismatch
    expect(await dashboardPage.numExposures.textContent()).toMatch("0");
    await dashboardPage.fixedTab.click();
    const fixedExposures = await dashboardPage.numFixed.textContent();
    expect(fixedExposures as string).toMatch(initialExposuresCount);
  });
});
