/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../../fixtures/basePage.js";
import { checkAuthState, clickOnATagCheckDomain } from "../../utils/helpers.js";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });

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
