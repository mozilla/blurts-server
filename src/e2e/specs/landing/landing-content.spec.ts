/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../../fixtures/basePage.js";
import {
  defaultScreenshotOpts,
  emailInputShouldExist,
} from "../../utils/helpers.js";

test.describe(`${process.env.E2E_TEST_ENV} - Verify the Landing Page content`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test("Observe page header", async ({ landingPage, page }) => {
    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.monitorLandingHeader).toBeVisible();
    await landingPage.signInButton.click();
    await page.waitForURL("**/oauth**");
    expect(page.url()).toContain("oauth");
  });

  test('Observe "Find where your private info is exposed and take it back" section', async ({
    landingPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.monitorHeroTitle).toBeVisible();
    await expect(landingPage.monitorHeroSubtitle).toHaveText(
      "We scan to see if your phone number, passwords or home address have been leaked, and help you make it private again.",
    );
    if (await emailInputShouldExist(landingPage)) {
      await expect(landingPage.monitorHeroFormEmailInputField).toBeVisible();
      await expect(landingPage.monitorHeroFormInputSubmitButton).toBeVisible();
    }
    await expect(landingPage.monitorLandingMidHeading).toBeVisible();
  });

  test('Observe "We will help you fix your exposures" section', async ({
    landingPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.fixExposuresTitle).toBeVisible();
    await expect(landingPage.fixExposuresSubtitle).toBeVisible();
    if (await emailInputShouldExist(landingPage)) {
      await expect(landingPage.fixExposuresFormEmailInputField).toBeVisible();
      await expect(landingPage.fixExposuresFormInputSubmitButton).toBeVisible();
    }
    await expect(landingPage.fixExposuresGraphic).toBeVisible();
  });

  test('Observe "What info could be at risk?" section', async ({
    landingPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.couldBeAtRiskTitle).toBeVisible();
    await expect(landingPage.couldBeAtRiskSubtitle).toBeVisible();
    if (await emailInputShouldExist(landingPage)) {
      await expect(landingPage.couldBeAtRiskFormEmailInputField).toBeVisible();
    }
    await expect(landingPage.couldBeAtRiskFormInputSubmitButton).toBeVisible();
    await expect(landingPage.couldBeAtRiskGraphic).toBeVisible();
  });

  test('Observe "Scan your email to get started" section', async ({
    landingPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.getStartedScanTitle).toBeVisible();
    if (await emailInputShouldExist(landingPage))
      await expect(landingPage.getStartedScanFormEmailInputField).toBeVisible();
    await expect(landingPage.getStartedScanFormSubmitButton).toBeVisible();
  });

  test('Observe "Choose your level of protection" section', async ({
    landingPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.chooseLevelSection).toHaveScreenshot(
      `${process.env.E2E_TEST_ENV}-chooseLevelSection.png`,
      defaultScreenshotOpts,
    );
  });

  test("Observe FAQ section", async ({ landingPage }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.faqSection).toHaveScreenshot(
      `${process.env.E2E_TEST_ENV}-faqSection.png`,
      defaultScreenshotOpts,
    );
  });

  test('Observe "Take back control of your data" section', async ({
    landingPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.takeBackControlTitle).toBeVisible();
    if (await emailInputShouldExist(landingPage)) {
      await expect(
        landingPage.takeBackControlFormEmailInputField,
      ).toBeVisible();
      await expect(landingPage.takeBackControlFormSubmitButton).toBeVisible();
    }
  });

  test("Observe footer section", async ({ landingPage }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    await expect(landingPage.mozillaFooterLogoLink).toBeVisible();
    await expect(landingPage.faqLink).toBeVisible();
    await expect(landingPage.termsLink).toBeVisible();
    await expect(landingPage.privacyLink).toBeVisible();
    await expect(landingPage.githubLink).toBeVisible();
  });

  test("Verify the 'Get data removal' button UI and functionality for both yearly and monthly options", async ({
    landingPage,
    purchasePage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463525",
    });

    await expect(landingPage.getDataRemoval).toBeVisible();
    await expect(landingPage.getDataRemovalMonthly).toBeVisible();
    await expect(landingPage.getDataRemovalYearly).toBeVisible();

    // Monthly
    await landingPage.getDataRemovalMonthly.click();
    await landingPage.getDataRemoval.click();
    await purchasePage.verifyMonthlyPlanDetails();

    // Yearly
    await landingPage.open();
    await landingPage.getDataRemoval.click();
    await purchasePage.verifyYearlyPlanDetails();
  });

  test('Verify the "Get free scan" corresponding email fields', async ({
    landingPage,
    authPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463504",
    });
    if (await emailInputShouldExist(landingPage)) {
      ///free-scan-cta experiment is off
      await landingPage.monitorHeroFormEmailInputField.fill("invalid");
      await landingPage.monitorHeroFormInputSubmitButton.click();
      await expect(landingPage.monitorHeroFormEmailInputField).toBeVisible();

      const randomEmail = `_${Date.now()}_tstact@restmail.net`;
      await landingPage.monitorHeroFormEmailInputField.fill(randomEmail);
      await landingPage.monitorHeroFormInputSubmitButton.click();
      await authPage.passwordInputField.waitFor();
      await expect(authPage.passwordInputField).toBeVisible();
    } else {
      ///free-scan-cta experiment is on
      await landingPage.monitorHeroFormInputSubmitButton.click();
      await authPage.emailInputField.waitFor({
        state: "visible",
        timeout: 10000,
      });
      const randomEmail = `_${Date.now()}_tstact@restmail.net`;
      await authPage.emailInputField.fill(randomEmail);
      await authPage.continueButton.click();
      await authPage.passwordInputField.waitFor();
      await expect(authPage.passwordInputField).toBeVisible();
    }
  });

  test('Verify manual/automatic removal "more info" tips from "Choose your level of protection" section', async ({
    landingPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463504",
    });
    await expect(landingPage.freeMonitoringTooltipTrigger).toBeVisible();
    await landingPage.freeMonitoringTooltipTrigger.click({ force: true });
    await expect(landingPage.freeMonitoringTooltipText).toBeVisible();
    await landingPage.closeTooltips.click({ force: true });
    await landingPage.monitorPlusTooltipTrigger.click({ force: true });
    await expect(landingPage.monitorPlusTooltipText).toBeVisible();
  });
});
