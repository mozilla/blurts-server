/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator } from "@playwright/test";
import { test, expect } from "../../fixtures/basePage.js";
import { DashboardPage } from "../../pages/dashBoardPage.js";
import { checkAuthState, clickOnATagCheckDomain } from "../../utils/helpers.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Headers @smoke`, () => {
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
    dashboardPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301512",
    });

    await expect(dashboardPage.dashboardNavButton).toHaveAttribute(
      "href",
      "/user/dashboard",
    );
    await expect(dashboardPage.FAQsNavButton).toHaveAttribute(
      "href",
      "https://support.mozilla.org/kb/firefox-monitor-faq",
    );
  });

  test("Verify that the site header and navigation bar is displayed correctly", async ({
    dashboardPage,
  }) => {
    // link to testrail
    test.info().annotations.push(
      {
        type: "testrail",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2301511",
      },
      {
        type: "testrail",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2463567",
      },
    );

    // verify the navigation bar left side elements
    await expect(dashboardPage.fireFoxMonitorLogoImgButton).toBeVisible();
    await expect(dashboardPage.dashboardNavButton).toBeVisible();
    await expect(dashboardPage.exposuresHeading).toBeVisible();
    await expect(dashboardPage.settingsPageLink).toBeVisible();
    await expect(dashboardPage.FAQsNavButton).toBeVisible();

    // verify the site header elements
    await expect(dashboardPage.actionNeededTab).toBeVisible();
    await expect(dashboardPage.fixedTab).toBeVisible();

    // auto data removal button
    await expect(dashboardPage.subscribeButton).toBeVisible();

    // apps and services
    await expect(dashboardPage.appsAndServices).toBeVisible();
    await dashboardPage.appsAndServices.click();
    await expect(dashboardPage.servicesVpn).toBeVisible();
    await expect(dashboardPage.servicesRelay).toBeVisible();
    await expect(dashboardPage.servicesPocket).toBeVisible();
    await expect(dashboardPage.servicesFirefoxDesktop).toBeVisible();
    await expect(dashboardPage.servicesFirefoxMobile).toBeVisible();

    // profile button
    await dashboardPage.closeAppsAndServices.click();
    await expect(dashboardPage.profileButton).toBeVisible();
    await dashboardPage.profileButton.click();
    await expect(dashboardPage.profileEmail).toBeVisible();
    await expect(dashboardPage.manageProfile).toBeVisible();
    await expect(dashboardPage.settingsPageLink).toBeVisible();
    await expect(dashboardPage.helpAndSupport).toBeVisible();
    await expect(dashboardPage.signOut).toBeVisible();
  });

  test("Verify that the correct message is displayed on the Action Needed tab when all the exposures are fixed", async ({
    dashboardPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301511",
    });

    // verify overview card
    await expect(dashboardPage.dashboardMozLogo).toBeVisible();

    // TODO: add verifications for all fixed exposures state
  });

  test("Verify that the Fixed tab layout and tooltips are displayed correctly", async ({
    dashboardPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301532",
    });

    // verify fixed tab's tooltips and popups
    await dashboardPage.fixedTab.click();

    // verify tooltip
    await expect(dashboardPage.fixedHeading).toBeVisible();
    await dashboardPage.chartTooltip.click();
    await expect(dashboardPage.aboutFixedExposuresPopup).toBeVisible();
    await dashboardPage.popupCloseButton.click();
    await expect(dashboardPage.aboutFixedExposuresPopup).toBeHidden();
  });

  test("Verify that the Apps and Services header options work correctly.", async ({
    dashboardPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463569",
    });

    await dashboardPage.fixedTab.click();
    expect(page.url()).toMatch(/.*dashboard\/fixed.*/);
    await dashboardPage.actionNeededTab.click();
    expect(page.url()).toMatch(/.*dashboard\/action-needed.*/);

    //apps and services button check
    const clickOnLinkAndGoBack = async (
      aTag: Locator,
      host: string | RegExp = /.*/,
      path: string | RegExp = /.*/,
    ) => {
      await expect(dashboardPage.appsAndServices).toBeVisible();
      await dashboardPage.appsAndServices.click();
      await expect(dashboardPage.appsAndServicesMenu).toBeVisible();
      await clickOnATagCheckDomain(aTag, host, path, page);
    };

    await clickOnLinkAndGoBack(
      dashboardPage.servicesVpn,
      "www.mozilla.org",
      /.*\/products\/vpn\/?.*/,
    );
    await clickOnLinkAndGoBack(
      dashboardPage.servicesRelay,
      "relay.firefox.com",
    );
    await clickOnLinkAndGoBack(
      dashboardPage.servicesPocket,
      /getpocket\.com|apps\.apple\.com|app\.adjust\.com/,
      /.*(\/pocket-and-firefox\/?).*|.*about.*|.*pocket-stay-informed.*/,
    );
    await clickOnLinkAndGoBack(
      dashboardPage.servicesFirefoxDesktop,
      "www.mozilla.org",
      /.*\/firefox\/new\/?.*/,
    );
    await clickOnLinkAndGoBack(
      dashboardPage.servicesFirefoxMobile,
      "www.mozilla.org",
      /.*\/browsers\/mobile\/?.*/,
    );
    await clickOnLinkAndGoBack(
      dashboardPage.servicesMozilla,
      "www.mozilla.org",
    );

    const openProfileMenuItem = async (
      what: Locator,
      whatUrl: string | RegExp,
    ) => {
      await dashboardPage.open();
      await dashboardPage.profileButton.click();
      await expect(what).toBeVisible();
      if (await what.evaluate((e) => e.hasAttribute("href"))) {
        const href = await what.getAttribute("href");
        expect(href).not.toBeNull();
        await page.goto(href as string);
      } else {
        await what.click();
      }
      await page.waitForURL(whatUrl);
    };

    await openProfileMenuItem(
      dashboardPage.manageProfile,
      /.*accounts.*settings.*/,
    );
    await openProfileMenuItem(
      dashboardPage.profileSettings,
      /.*\/user\/settings.*/,
    );

    const base_url = process.env["E2E_TEST_BASE_URL"];
    expect(base_url).toBeTruthy();
    await openProfileMenuItem(dashboardPage.profileSignOut, base_url!);
  });
});

// fix coming - playwright does not currently have access to the aws headers, skipping for now
test.describe.skip(
  `${process.env.E2E_TEST_ENV} - Breaches Dashboard - Headers - Outside of U.S.`,
  () => {
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
      await expect(dashboardPage.upgradeToPlus).toBeHidden();
    });
  },
);
