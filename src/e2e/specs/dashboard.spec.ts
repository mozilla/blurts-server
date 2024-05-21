/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator } from "@playwright/test";
import { test, expect } from "../fixtures/basePage.js";
import { DashboardPage } from "../pages/dashBoardPage.js";
import { checkAuthState } from "../utils/helpers.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });
test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Headers`, () => {
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

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Content`, () => {
  test.beforeEach(async ({ dashboardPage, page }) => {
    await dashboardPage.open();

    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }
  });

  test("Verify that the exposure list contains action needed", async ({
    dashboardPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301533",
    });

    await expect(dashboardPage.exposuresHeading).toBeVisible();
    const listCount = await page
      .locator('//div[starts-with(@class, "StatusPill_pill")]')
      .count();

    // verify exposure list conatins only exposures that need to be fixed
    if (listCount > 0) {
      for (let i = 0; i < listCount; i++) {
        await expect(
          page.locator(
            `(//div[starts-with(@class, 'StatusPill_pill')])[${i + 1}]`,
          ),
        ).toHaveText("Action needed");
      }
    }
  });

  test("Verify that the exposure list contains only fixed and in progress cards", async ({
    dashboardPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301533",
    });

    await expect(dashboardPage.exposuresHeading).toBeVisible();
    await dashboardPage.fixedTab.click();

    // verify fixed or in-progress
    await expect(dashboardPage.fixedHeading).toBeVisible();

    // TODO: add stub to fill in fixed/in-progress items
    const listCount = await page
      .locator('//div[starts-with(@class, "StatusPill_pill")]')
      .count();
    // verify exposure list contains only exposures that need to be fixed
    if (listCount > 0) {
      for (let i = 0; i < listCount; i++) {
        await expect(
          page.locator(
            `(//div[starts-with(@class, "StatusPill_pill")])[${i + 1}]`,
          ),
        ).toHaveText(/In progress|Fixed/);
      }
    }
  });
});

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard  - Payment`, () => {
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
    purchasePage,
    page,
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

    // verify subscription dialog elements
    await dashboardPage.subscribeButton.click();
    await expect(dashboardPage.subscribeDialogCloseButton).toBeVisible();
    await expect(dashboardPage.yearlyMonthlyTablist).toBeVisible();

    // verify user purchase choices
    await dashboardPage.yearlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectYearlyPlanLink,
    ).toBeVisible();

    await dashboardPage.monthlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectMonthlyPlanLink,
    ).toBeVisible();

    // Check monthly redirection
    await dashboardPage.subscribeDialogSelectMonthlyPlanLink.click();
    await purchasePage.subscriptionHeader.waitFor();
    await expect(purchasePage.planDetails).toContainText("monthly");
    await expect(purchasePage.subscriptionHeader).toBeVisible();

    // Check yearly redirection
    await page.goto(`${process.env.E2E_TEST_BASE_URL}`);
    await dashboardPage.subscribeButton.waitFor();
    await dashboardPage.subscribeButton.click();
    await dashboardPage.subscribeDialogSelectYearlyPlanLink.click();
    await purchasePage.subscriptionHeader.waitFor();
    // Text contains invisible characters which need to be hardcoded in an assertion
    await expect(purchasePage.planDetails).toContainText(
      `${process.env.E2E_TEST_ENV === "prod" ? "yearly" : "every ⁨2⁩ months"}`,
    );
  });
});

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Footer`, () => {
  test.beforeEach(async ({ dashboardPage, page }) => {
    await dashboardPage.open();
    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }
  });

  test("Verify that the site footer is displayed correctly", async ({
    dashboardPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463570",
    });

    const clickOnATagCheckDomain = async (
      aTag: Locator,
      host: string,
      path: string | RegExp = /.*/,
    ) => {
      if (typeof path === "string") path = new RegExp(".*" + path + ".*");
      host = host.replace(/^(https?:\/\/)/, "");

      const href = await aTag.getAttribute("href");
      if (href === null) return false;

      await page.goto(href);
      const currentUrl = new URL(page.url());
      const perceivedHost = currentUrl.hostname;
      const perceivedPath = currentUrl.pathname;
      expect(perceivedHost).toBe(host);
      expect(path.test(perceivedPath)).toBeTruthy();
      await page.goBack();
    };

    expect(process.env["E2E_TEST_BASE_URL"]).toBeTruthy();
    const baseUrl = process.env["E2E_TEST_BASE_URL"]!;
    await dashboardPage.goToDashboard();
    await expect(page.locator("footer a >> img")).toBeVisible();
    await clickOnATagCheckDomain(
      dashboardPage.mozillaLogoFooter,
      "www.mozilla.org",
      /^(\/en-US\/)?$/,
    );
    await clickOnATagCheckDomain(
      dashboardPage.allBreachesFooter,
      baseUrl,
      "/breaches",
    );
    await clickOnATagCheckDomain(
      dashboardPage.faqsFooter,
      "support.mozilla.org",
      /.*\/kb.*\/mozilla-monitor-faq.*/,
    );
    await clickOnATagCheckDomain(
      dashboardPage.termsOfServiceFooter,
      "www.mozilla.org",
      "/about/legal/terms/subscription-services/",
    );
    await clickOnATagCheckDomain(
      dashboardPage.privacyNoticeFooter,
      "www.mozilla.org",
      "/privacy/subscription-services/",
    );
    await clickOnATagCheckDomain(
      dashboardPage.githubFooter,
      "github.com",
      "/mozilla/blurts-server",
    );
  });
});

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Premium Upsell Screen`, () => {
  test.beforeEach(async ({ dashboardPage, page }) => {
    await dashboardPage.open();
    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }
  });

  test("Verify that the navigation of the Premium upsell screen works correctly", async ({
    dashboardPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463570",
    });

    expect(process.env["E2E_TEST_BASE_URL"]).toBeTruthy();
    const baseUrl = process.env["E2E_TEST_BASE_URL"]!;

    const goToUpsell = async () => {
      await dashboardPage.goToDashboard();
      await dashboardPage.letsFixItButton.click();

      let perceivedUrl = page.url();
      expect(
        baseUrl + "/user/dashboard/fix/data-broker-profiles/view-data-brokers",
      ).toBe(perceivedUrl);
      const removeThemForMe = page.locator(
        "//a[@Class='Button_button__iA3wi Button_primary___XZsP']",
      );
      await expect(removeThemForMe).toBeVisible();
      await removeThemForMe.click();

      perceivedUrl = page.url();
      expect(
        baseUrl + "/user/dashboard/fix/data-broker-profiles/automatic-remove",
      ).toBe(perceivedUrl);
    };

    //check that premium upsell screen loads
    await goToUpsell();

    //check that X returns back to /dashboard
    const xButton = page.locator("//a[@Class='fix_navClose__9ZITt']");
    await expect(xButton).toBeVisible();
    await xButton.click();
    expect(/\/dashboard\/?$.*/.test(page.url()));

    await goToUpsell();
    const forwardArrowButton = page.locator("//section//a[img]");
    await expect(forwardArrowButton).toBeVisible();
    await forwardArrowButton.click();
    //TODO: check step 4 criteria

    await goToUpsell();
  });
});
