/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator } from "@playwright/test";
import { test, expect } from "../fixtures/basePage.js";
import { DashboardPage } from "../pages/dashBoardPage.js";
import { checkAuthState, removeUnicodeChars } from "../utils/helpers.js";

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
    test.info().annotations.push(
      {
        type: "testrail",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2301533",
      },
      {
        type: "testrail",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2546463",
      },
    );

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
    await welcomePage.goThroughFirstScan();
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

  test("Verify that the navigation of the Premium upsell screen works correctly - from overview card", async ({
    dashboardPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463626",
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
    //loop througit
    //TODO: check icons are visible too
    /* 

    i = get count on html page

    navigate to upsell page
    verify toggles
    arrow = findArrow()
    page = arrow.click()
    while (page != dashboard and i != 0):
      i -= 1
      arrow = findArrow()
      if arrow == null: error
      perform icon check and/or URL checks
      page = arrow.click()
    
    if i != 0 or page != dashboard: error

    */

    await goToUpsell();
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

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Navigation`, () => {
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
    await goToHrefOf(dashboardPage.settingsPageLink);
    await expect(page).toHaveURL(/\/settings$/);

    //testrail's step 2
    await goToHrefOf(dashboardPage.dashboardPageLink);
    await expect(page).toHaveURL(/.*\/dashboard.*/);

    // testrail's step 3
    await dashboardPage.goToSettings();
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
