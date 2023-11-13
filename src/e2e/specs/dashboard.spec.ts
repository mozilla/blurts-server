/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import { DashboardPage } from "../pages/dashBoardPage.js";
import { checkAuthState } from "../utils/helpers.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });
test.describe("Breaches Dashboard - Headers", () => {
  test.beforeEach(async ({ dashboardPage, page }) => {
    await dashboardPage.open();

    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }
  });

  test("Verify that the site header is displayed correctly for signed in users", async ({
    dashboardPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301512",
    });

    expect(await dashboardPage.dashboardNavButton.getAttribute("href")).toEqual(
      "/redesign/user/dashboard",
    );
    expect(await dashboardPage.FAQsNavButton.getAttribute("href")).toEqual(
      "https://support.mozilla.org/kb/firefox-monitor-faq",
    );
  });

  test("Verify that the site header and navigation bar is displayed correctly", async ({
    dashboardPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301511",
    });

    // verify the navigation bar left side elements
    expect(
      await dashboardPage.fireFoxMonitorLogoImgButton.isVisible(),
    ).toBeTruthy();
    expect(await dashboardPage.dashboardNavButton.isVisible()).toBeTruthy();
    expect(await dashboardPage.exposuresHeading.isVisible()).toBeTruthy();
    expect(await dashboardPage.FAQsNavButton.isVisible()).toBeTruthy();

    // verify the site header elements
    expect(await dashboardPage.actionNeededTab.isVisible()).toBeTruthy();
    expect(await dashboardPage.fixedTab.isVisible()).toBeTruthy();
  });
});

test.describe("Breaches Dashboard - Headers - Outside of U.S.", () => {
  test("Verify that the site header and navigation bar is displayed correctly", async ({
    context,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301511",
    });

    const page = await context.newPage();
    await context.grantPermissions(["geolocation"]);
    await context.setGeolocation({ latitude: 55.9533, longitude: -3.1883 }); // Set location to Edinburgh

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.open();

    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }

    // verify the site header elements
    expect(await dashboardPage.upgradeToPremium.isHidden()).toBeTruthy();
  });
});
