/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator } from "@playwright/test";
import { test, expect } from "../../fixtures/basePage.js";
import { checkAuthState } from "../../utils/helpers.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Navigation @smoke`, () => {
  test.beforeEach(async ({ dashboardPage, page }) => {
    await dashboardPage.open();

    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }
  });

  test("Verify that the navigation bar options work correctly", async ({
    dashboardPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463568",
    });

    const goToHrefOf = async (aTag: Locator) => {
      const href = await aTag.getAttribute("href");
      expect(href).toBeTruthy();
      await page.goto(href!);
    };

    //testrail's step 1
    await dashboardPage.goToDashboard();
    await goToHrefOf(dashboardPage.settingsPageNofificationsLink);
    await expect(page).toHaveURL(/.*\/settings.*/);

    //testrail's step 2
    await goToHrefOf(dashboardPage.dashboardPageLink);
    await expect(page).toHaveURL(/.*\/dashboard.*/);

    // testrail's step 3
    await dashboardPage.goToNotificationsSettings();
    await goToHrefOf(dashboardPage.fireFoxMonitorLogoAtag);
    await expect(page).toHaveURL(/.*\/dashboard.*/);

    //testrail's step 4
    await dashboardPage.goToDashboard();
    await goToHrefOf(dashboardPage.faqsPageLink);
    await expect(page).toHaveURL(
      /.*support\.mozilla\.org.*\/kb\/.*firefox-monitor-faq.*/,
    );
  });
});
