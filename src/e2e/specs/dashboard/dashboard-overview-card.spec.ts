/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator } from "@playwright/test";
import { test, expect } from "../../fixtures/basePage.js";
import { checkAuthState, escapeRegExp } from "../../utils/helpers.js";
import "../../utils/setFeatureFlags";

// bypass login
test.use({ storageState: "./e2e/storageState.json" });

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
    await page.waitForURL(/.*\/fix\/.*\/view-data-brokers.*/);
    await dataBrokersPage.removeThemForMeButton.click();
    await page.waitForURL(/.*\/fix\/.*\/automatic-remove.*/);

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
    await page.waitForURL(/.*\/fix\/.*\/view-data-brokers.*/);
    await dataBrokersPage.removeThemForMeButton.click();
    await page.waitForURL(/.*\/fix\/.*\/automatic-remove.*/);

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
