/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import { checkAuthState } from "../utils/helpers.js";
import "../utils/setFeatureFlags";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });
test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Headers`, () => {
  test.beforeEach(async ({ dashboardPage, welcomePage, page }) => {
    await dashboardPage.open();

    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }

    // if we landed on the welcome flow a new user who is eligible for premium
    // and needs to go through their first scan
    const isWelcomeFlow =
      page.url() === `${process.env.E2E_TEST_BASE_URL}/user/welcome`;
    if (isWelcomeFlow) {
      expect(page.url()).toContain("/user/welcome");
      await welcomePage.goThroughFirstScan({ skipLoader: true });
    }
  });

  test("Verify that the site header is displayed correctly for signed in users", async ({
    dataBreachPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2095101",
    });

    // should go directly to data breach page
    await dataBreachPage.open();

    // verify logo and profile button
    await expect(dataBreachPage.dataBreachesLogo).toBeVisible();
    await expect(dataBreachPage.dataBreachesNavbarProfile).toBeVisible();
  });

  // skip as settings dropdown menu is currently wip for redesign TODO: update for redesign when its done
  test.skip("Verify that the site header options work correctly for a signed in user", async ({
    dataBreachPage,
    settingsPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2095102",
    });

    // should go directly to data breach page
    await settingsPage.open();

    // verify logo and profile button
    expect(
      await dataBreachPage.dataBreachesLogoLink.first().getAttribute("href"),
    ).toBe("/user/breaches");

    await page.waitForLoadState("networkidle");
    await dataBreachPage.dataBreachesNavbarProfile.click();

    // verify manage your Mozilla account link, settings option, help and support option, sign out option
    // menu is open
    expect(await dataBreachPage.profileMenuExpanded()).toBe(true);

    // menu header
    await expect(
      dataBreachPage.dataBreachesNavbarProfileMenuHeader,
    ).toBeVisible();

    // head text
    await expect(
      dataBreachPage.dataBreachesNavbarProfileMenuHeaderSubtitle,
    ).toHaveText("Manage your Mozilla account");

    // check settings
    await expect(
      dataBreachPage.dataBreachesNavbarProfileMenuSettings,
    ).toBeVisible();

    // help and support
    await expect(
      dataBreachPage.dataBreachesNavbarProfileMenuHelpAndSupport,
    ).toBeVisible();

    // sign out
    await expect(
      dataBreachPage.dataBreachesNavbarProfileMenuSignOut,
    ).toBeVisible();
  });

  test(" Verify that the user can navigate through the Monitor dashboard", async ({
    dashboardPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2095103",
    });

    // get expected links
    const links = dashboardPage.dashboardLinks();

    // verify the navigation within monitor
    // settings button redirects the user to "Settings" tab
    await expect(dashboardPage.notificationSettingsLink).toHaveAttribute(
      "href",
      links.settingsNavButtonLink,
    );

    // redirects the user to the "Resolve data breaches (dashboard)" tab
    await expect(dashboardPage.dashboardPageLink).toHaveAttribute(
      "href",
      links.resolveDataBreachesNavButtonLink,
    );

    // opens a new tab in which user is redirected to the "Monitor Help (FAQs)" page
    await expect(dashboardPage.faqsPageLink).toHaveAttribute(
      "href",
      links.helpAndSupportNavButtonLink,
    );
  });
});
