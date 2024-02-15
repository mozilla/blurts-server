/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import {
  defaultScreenshotOpts,
  getVerificationCode,
} from "../utils/helpers.js";

test.describe.configure({ mode: "parallel" });
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
    await page.waitForURL("**/oauth/**", { timeout: 120 * 1000 });
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
    await expect(landingPage.monitorHeroFormEmailInputField).toBeVisible();
    await expect(landingPage.monitorHeroFormInputSubmitButton).toBeVisible();
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
    await expect(landingPage.fixExposuresFormEmailInputField).toBeVisible();
    await expect(landingPage.fixExposuresFormInputSubmitButton).toBeVisible();
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
    await expect(landingPage.couldBeAtRiskFormEmailInputField).toBeVisible();
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
    await expect(landingPage.getStartedScanFormEmailInputField).toBeVisible();
    await expect(landingPage.getStartedScanFormSubmitButton).toBeVisible();
  });

  test('Observe "Choose your level of protection" section', async ({
    landingPage,
    page,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463517",
    });

    // temp fix to clear rebrand banner before image comparison
    try {
      const rebrandBanner = page.getByTitle("dismiss");
      if (rebrandBanner) {
        await rebrandBanner.click();
      }
    } catch (error) {
      console.log("[E2E_Log - No Rebrand Banner, continuing...]");
    }

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
    await expect(landingPage.takeBackControlFormEmailInputField).toBeVisible();
    await expect(landingPage.takeBackControlFormSubmitButton).toBeVisible();
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
});

test.describe(`${process.env.E2E_TEST_ENV} - Verify the Landing Page Functionality - without existing Account`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test('Verify "Get free scan" buttons functionality without existing account', async ({
    landingPage,
    page,
    authPage,
  }) => {
    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463502",
    });

    // fill out free scan form
    const randomEmail = `${Date.now()}_tstact@restmail.net`;
    await landingPage.monitorHeroFormEmailInputField.fill(randomEmail);
    await landingPage.monitorHeroFormInputSubmitButton.click();
    await page.waitForURL("**/oauth/**", { timeout: 120 * 1000 });

    // complete registration form
    await authPage.passwordInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await authPage.passwordConfirmInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await authPage.ageInputField.fill("31");
    await authPage.continueButton.click();

    // enter registration verification code
    const vc = await getVerificationCode(randomEmail, page);
    await authPage.enterVerificationCode(vc);

    // verify dashboard redirect
    const successUrl = process.env.E2E_TEST_BASE_URL + "/user/welcome";
    expect(page.url()).toBe(successUrl);
  });
});

test.describe(`${process.env.E2E_TEST_ENV} - Verify the Landing Page Functionality - with existing account`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test('Verify "Get free scan" buttons functionality with existing account', async ({
    landingPage,
    page,
    authPage,
  }) => {
    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463503",
    });

    // fill out free scan form
    await landingPage.monitorHeroFormEmailInputField.fill(
      process.env.E2E_TEST_ACCOUNT_EMAIL as string,
    );
    await landingPage.monitorHeroFormInputSubmitButton.click();
    await page.waitForURL("**/oauth/**", { timeout: 120 * 1000 });

    // complete sign in form
    await authPage.enterPassword();

    // verify dashboard redirect
    const successUrl =
      process.env.E2E_TEST_BASE_URL +
      `${
        process.env.E2E_TEST_ENV === "local"
          ? "/user/welcome"
          : "/user/dashboard"
      }`;
    expect(page.url()).toBe(successUrl);
  });
});
