/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../../fixtures/basePage.js";
import { forceLoginAs, resetTestData } from "../../utils/helpers.js";
import {
  isUsingMockHIBPEndpoint,
  isUsingMockONEREPEndpoint,
} from "../../../app/functions/universal/mock.js";
import "../../utils/setFeatureFlags";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });

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
    await page.waitForURL(/.*\/data-broker-profiles\/view-data-brokers.*/);
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
