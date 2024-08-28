/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator } from "@playwright/test";
import { test, expect } from "../fixtures/basePage.js";
import { DashboardPage } from "../pages/dashBoardPage.js";
import {
  checkAuthState,
  removeUnicodeChars,
  clickOnATagCheckDomain,
  escapeRegExp,
  forceLoginAs,
  resetTestData,
} from "../utils/helpers.js";
import {
  isUsingMockHIBPEndpoint,
  isUsingMockONEREPEndpoint,
} from "../../app/functions/universal/mock.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });
test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Headers @smoke`, () => {
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
    expect(page.url()).toMatch(/.*dashboard\/fixed\/?/);
    await dashboardPage.actionNeededTab.click();
    expect(page.url()).toMatch(/.*dashboard\/action-needed\/?/);

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
        await page.goto(href!);
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

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Content @smoke`, () => {
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
});

test.describe(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Overview Card`, () => {
  test.beforeEach(async ({ dashboardPage, page }) => {
    await dashboardPage.open();

    try {
      await checkAuthState(page);
    } catch {
      console.log("[E2E_LOG] - No fxa auth required, proceeding...");
    }
  });

  test("Verify that the Premium upsell screen is displayed correctly - overview card", async ({
    dashboardPage,
    automaticRemovePage,
    dataBrokersPage,
    page,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463625",
    });

    //checking that the user can reach upsell page
    await dashboardPage.goToDashboard();
    await expect(dashboardPage.upsellScreenButton).toBeVisible();
    await dashboardPage.upsellScreenButton.click();
    await page.waitForURL(/.*\/fix\/.*\/view-data-brokers\/?/);
    await dataBrokersPage.removeThemForMeButton.click();
    await page.waitForURL(/.*\/fix\/.*\/automatic-remove\/?/);

    //checking the bullet points
    await expect(automaticRemovePage.ulElement).toBeVisible();

    for (const itemText of automaticRemovePage.bulletPointsExpected) {
      const liElement = automaticRemovePage.liElements.getByText(itemText);
      await expect(liElement).toBeVisible();
    }

    //testing that toggles work
    await automaticRemovePage.planToggle0.click();
    const price0 = await automaticRemovePage.price.textContent();
    const plan0 = await automaticRemovePage.plan.textContent();
    await automaticRemovePage.planToggle1.click();
    const price1 = await automaticRemovePage.price.textContent();
    const plan1 = await automaticRemovePage.plan.textContent();
    expect(price0).not.toEqual(price1);
    expect(plan0).not.toEqual(plan1);
  });

  test("Verify that the navigation of the Premium upsell screen works correctly - from overview card", async ({
    dashboardPage,
    automaticRemovePage,
    dataBrokersPage,
    page,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463626",
    });

    await dashboardPage.open();
    await page.waitForURL("**/dashboard/**");

    //get the number of exposures count
    const overviewCardSummary =
      await dashboardPage.overviewCardSummary.textContent();
    const overviewCardFindings =
      await dashboardPage.overviewCardFindings.textContent();
    expect(overviewCardFindings).not.toContain("No exposures found");
    expect(overviewCardSummary).not.toBeNull();
    const exposuresCountMatches = overviewCardSummary!.match(/\d+/);
    expect(exposuresCountMatches).toBeTruthy();
    expect(exposuresCountMatches!.length).toBeGreaterThan(0);
    const exposuresCount = parseInt(exposuresCountMatches![0]);

    //check that premium upsell screen loads
    await dashboardPage.upsellScreenButton.click();
    await page.waitForURL(/.*\/fix\/.*\/view-data-brokers\/?/);
    await dataBrokersPage.removeThemForMeButton.click();
    await page.waitForURL(/.*\/fix\/.*\/automatic-remove\/?/);

    //check that X returns back to /dashboard
    await expect(automaticRemovePage.xButton).toBeVisible();

    await automaticRemovePage.xButton.click();
    await page.waitForURL(dashboardPage.urlRegex);

    //forward arrow checks
    await automaticRemovePage.open();
    await expect(automaticRemovePage.forwardArrowButton).toBeVisible();

    const breachString0 = "high-risk-data-breaches";
    const breachString1 = "leaked-passwords";
    const breachString2 = "security-recommendations";

    const breachOrDashboard = (excludeThis: string) => {
      const escapedExclude = escapeRegExp(excludeThis);
      const pattern = [
        dashboardPage.urlRegex.source,
        breachString0,
        breachString1,
        breachString2,
      ]
        .map((s) => `.*${s}.*`)
        .join("|");

      return new RegExp(`^(?!.*${escapedExclude})(${pattern})`);
    };

    const checkBreachLink = async () => {
      const currentUrl = page.url();
      await automaticRemovePage.forwardArrowButton.click();
      await page.waitForURL(breachOrDashboard(currentUrl));
      const urlToCheck = page.url();
      const breachStringRE = new RegExp(
        `.*(${[breachString0, breachString1, breachString2].join("|")}).*`,
      );
      return breachStringRE.test(urlToCheck);
    };

    let iter = 0;
    while (await checkBreachLink()) iter++;
    const visitedBreachPages = iter !== 0;
    const exposuresExist = exposuresCount !== 0;
    expect(visitedBreachPages).toBe(exposuresExist);

    //price&plan toggle checks
    await automaticRemovePage.open();
    const subplatRegex = /\/products\/prod_/;

    const checkToggleButtonWorks = async (toggleButton: Locator) => {
      await automaticRemovePage.open();
      await expect(toggleButton).toBeVisible();
      await toggleButton.click();
      const toggleText = await toggleButton.textContent();
      expect(toggleText).not.toBeNull();
      await automaticRemovePage.subplatButton.click();
      await page.waitForURL(subplatRegex);
      return page.url();
    };

    const subplat0 = await checkToggleButtonWorks(
      automaticRemovePage.planToggle0,
    );
    const subplat1 = await checkToggleButtonWorks(
      automaticRemovePage.planToggle1,
    );
    expect(subplat0).not.toBe(subplat1);
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

    expect(process.env["E2E_TEST_BASE_URL"]).toBeTruthy();
    const baseUrl = process.env["E2E_TEST_BASE_URL"]!;
    await dashboardPage.goToDashboard();
    await expect(page.locator("footer a >> img")).toBeVisible();
    await clickOnATagCheckDomain(
      dashboardPage.mozillaLogoFooter,
      "www.mozilla.org",
      /^(\/en-US\/)?$/,
      page,
    );
    await clickOnATagCheckDomain(
      dashboardPage.allBreachesFooter,
      baseUrl,
      "/breaches",
      page,
    );
    await clickOnATagCheckDomain(
      dashboardPage.faqsFooter,
      "support.mozilla.org",
      /.*\/kb.*\/mozilla-monitor-faq.*/,
      page,
    );
    await clickOnATagCheckDomain(
      dashboardPage.termsOfServiceFooter,
      "www.mozilla.org",
      "/about/legal/terms/subscription-services/",
      page,
    );
    await clickOnATagCheckDomain(
      dashboardPage.privacyNoticeFooter,
      "www.mozilla.org",
      "/privacy/subscription-services/",
      page,
    );
    await clickOnATagCheckDomain(
      dashboardPage.githubFooter,
      "github.com",
      "/mozilla/blurts-server",
      page,
    );
  });
});

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

// These tests rely heavily on mocks
test.skip(`${process.env.E2E_TEST_ENV} - Breaches Dashboard - Data Breaches`, () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test("Verify that the High risk data breaches step is displayed correctly", async ({
    dashboardPage,
    dataBrokersPage,
    page,
    landingPage,
    authPage,
  }) => {
    if (!isUsingMockHIBPEndpoint() || !isUsingMockONEREPEndpoint()) return;
    const emailToUse = process.env.E2E_TEST_ACCOUNT_EMAIL_EXPOSURES_STARTED!;
    const pwdToUse = process.env.E2E_TEST_ACCOUNT_PASSWORD!;
    expect(emailToUse).not.toBeUndefined();
    expect(pwdToUse).not.toBeUndefined();
    await forceLoginAs(emailToUse, pwdToUse, page, landingPage, authPage);
    await resetTestData(page, true, true);
    await dashboardPage.open();

    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463592",
    });

    await expect(dashboardPage.upsellScreenButton).toBeVisible();
    await dashboardPage.upsellScreenButton.click();
    await page.waitForURL(/.*\/data-broker-profiles\/view-data-brokers\/?/);
    await expect(dataBrokersPage.forwardArrowButton).toBeVisible();
    await dataBrokersPage.forwardArrowButton.click();
    await page.waitForURL(/.*\/high-risk-data-breaches.*/);
    const highRiskDataBreachLi = page.locator(
      'li:has(div:has-text("High risk data breaches"))',
    );
    await expect(highRiskDataBreachLi).toBeVisible();
    await expect(highRiskDataBreachLi).toHaveAttribute("aria-current", "step");
    await expect(
      highRiskDataBreachLi.locator("div").getByText("High risk data breaches"),
    ).toBeVisible();
  });

  test("Verify that the dashboard is displayed correctly for users with no scan results and no breaches", async ({
    dashboardPage,
    page,
    authPage,
    landingPage,
  }) => {
    if (!isUsingMockHIBPEndpoint() || !isUsingMockONEREPEndpoint()) return;

    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463610",
    });

    const emailToUse =
      process.env.E2E_TEST_ACCOUNT_EMAIL_ZERO_BREACHES_ZERO_BROKERS!;
    const pwdToUse = process.env.E2E_TEST_ACCOUNT_PASSWORD!;
    expect(emailToUse).not.toBeUndefined();
    expect(pwdToUse).not.toBeUndefined();
    await forceLoginAs(emailToUse, pwdToUse, page, landingPage, authPage);
    await resetTestData(page, true, true);
    await dashboardPage.open();

    await expect(dashboardPage.overviewCard).toBeVisible();
    const textArea = dashboardPage.overviewCard.locator("section");
    await expect(textArea.getByText(/No exposures found/)).toBeVisible();
    await expect(
      textArea.getByText(
        /Great news! We searched all known data breaches and .\d+. data broker sites that sell personal info and found no exposures\./,
      ),
    ).toBeVisible();
    await expect(textArea.getByRole("button")).toBeVisible();
    expect(await dashboardPage.overviewCard.locator("svg").count()).toBe(5);
    expect(await dashboardPage.overviewCard.locator("circle").count()).toBe(4);
    await expect(
      dashboardPage.chartSvgExposuresCount.getByText("Exposures"),
    ).toBeVisible();
    await expect(
      dashboardPage.chartSvgExposuresCount.getByText("0"),
    ).toBeVisible();

    await expect(dashboardPage.exposuresHeading).toBeVisible();
    expect(await dashboardPage.exposuresHeading.textContent()).toBe(
      "View all sites where your info is exposed",
    );

    const noExpFoundMsg = page
      .locator("div > strong")
      .getByText("No exposures found");
    await expect(noExpFoundMsg).toBeVisible();
  });

  test("Verify that the dashboard is displayed correctly for users with no scan results and with data breaches", async ({
    dashboardPage,
    page,
    authPage,
    landingPage,
  }) => {
    if (!isUsingMockHIBPEndpoint() || !isUsingMockONEREPEndpoint()) return;

    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463611",
    });

    const emailToUse = process.env.E2E_TEST_ACCOUNT_EMAIL_ZERO_BROKERS!;
    const pwdToUse = process.env.E2E_TEST_ACCOUNT_PASSWORD!;
    expect(emailToUse).not.toBeUndefined();
    expect(pwdToUse).not.toBeUndefined();
    await forceLoginAs(emailToUse, pwdToUse, page, landingPage, authPage);
    await resetTestData(page, true, true);
    await dashboardPage.open();

    // Assertions for the overview card
    await expect(dashboardPage.overviewCard).toBeVisible();
    await expect(
      page.getByText(
        /You still have .\d+. exposures left to fix. Keep going and protect yourself\. We.ll guide you step-by-step\./,
      ),
    ).toBeVisible();
    await expect(dashboardPage.upsellScreenButton).toBeVisible();

    // Chart reflecting results
    await expect(
      dashboardPage.chartSvgExposuresCount.getByText("Exposures"),
    ).toBeVisible();
    await expect(
      dashboardPage.chartSvgExposuresCount.getByText(/\d+/),
    ).toBeVisible();

    // Text above exposures list
    await expect(
      page.getByText("View all sites where your info is exposed"),
    ).toBeVisible();
    await expect(
      page.getByText(
        /We found your information exposed .\d+. times over .\d+. data breaches and .0. data broker sites that are selling your personal info\./,
      ),
    ).toBeVisible();

    // Exposures list
    const exposureList = page.locator('[class*="exposureList"]');
    await expect(exposureList).toBeVisible();
    expect(await exposureList.locator("li").count()).toBeGreaterThan(0);

    // Click the "Let's keep going" button and check the redirection
    await dashboardPage.upsellScreenButton.click();
    await page.waitForURL(/.*\/user\/dashboard\/fix.*/);
    const dataBrokerFixed = page
      .locator('[class*="FixNavigation"][class*="isCompleted"]')
      .getByText("Data broker profiles");
    await expect(dataBrokerFixed).toBeVisible();
  });
});
