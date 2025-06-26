/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test } from "../../fixtures/basePage.js";
import { checkAuthState } from "../../utils/helpers.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Payment`, () => {
  test.beforeEach(async ({ dashboardPage, page }) => {
    await dashboardPage.open();

    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }
  });

  test("Verify that the user can select what type of plan they want, verify that the Premium upsell modal is displayed correctly", async ({
    dashboardPage,
  }) => {
    test.info().annotations.push(
      {
        type: "testrail id #1",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2301529",
      },
      {
        type: "testrail id #2",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2463623",
      },
      {
        type: "testrail id #3",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2463624",
      },
    );

    await dashboardPage.subscribeButton.click();
    await dashboardPage.verifyPremiumUpsellModalOptions();
  });
});
