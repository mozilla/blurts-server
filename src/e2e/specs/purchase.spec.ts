/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import { checkAuthState, setEnvVariables } from "../utils/helpers.js";

test.describe(`${process.env.E2E_TEST_ENV} - Monitor Plus Purchase Flow Yearly`, () => {
  test.beforeEach(async ({ page, authPage, landingPage, welcomePage }) => {
    // this test runs through the welcome scan flow, increasing timeout to address it
    test.slow();

    setEnvVariables(process.env.E2E_TEST_ACCOUNT_EMAIL as string);

    // speed up test by ignore non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });

    // start authentication flow
    await landingPage.open();
    await landingPage.goToSignIn();

    // Fill out sign up form
    const randomEmail = `_${Date.now()}@restmail.net`;
    await authPage.signUp(randomEmail, page);

    // wait for welcome page
    await page.waitForURL("**/user/welcome");

    // confirm get started step elements
    expect(await welcomePage.getStartedStep.count()).toEqual(3);

    // navigate to enter info step
    await welcomePage.startFreeScanButton.click();

    // confirm enter info step
    await welcomePage.firstNameInputField.fill("Monitor");
    await welcomePage.lastNameInputField.fill("Automation1");
    await welcomePage.cityStateInputField.pressSequentially("Atlanta, GA, USA");
    await page.getByText("AtlantaGA, USA", { exact: true }).click();
    await welcomePage.dobInputField.pressSequentially("01011992");
    await welcomePage.findExposuresButton.click();

    // expect(welcomePage.modalEditButton).toBeVisible()
    await welcomePage.modalConfirmButton.click();

    // wait for scanning to complete
    let wait = 0;
    let scanning =
      page.url() === `${process.env.E2E_TEST_BASE_URL}/user/welcome`;
    // using 5 mins as waiting time because the scanning process may take sometime
    while (wait < 300 && scanning) {
      scanning = page.url() === `${process.env.E2E_TEST_BASE_URL}/user/welcome`;
      await page.waitForTimeout(1000);
      wait++;
    }
  });

  test("Verify that the user can purchase the plus subscription with a Stripe card - Yearly", async ({
    dashboardPage,
    purchasePage,
    page,
  }) => {
    test.skip(
      process.env.E2E_TEST_ENV === "production",
      "payment method test not available in production",
    );

    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463627",
    });

    try {
      await checkAuthState(page);
    } catch {
      console.log(
        "[E2E_LOG] - No fxa auth required, proceeding... with stripe yearly",
      );
    }

    // navigate to subscription
    await dashboardPage.open();
    await dashboardPage.subscribeButton.click();
    await dashboardPage.subscribeDialogSelectYearlyPlanLink.click();
    await purchasePage.subscriptionHeader.waitFor();

    // fill out subscription payment
    await purchasePage.authorizationCheckbox.check();
    await purchasePage.fillOutStripeCardInfo();
    await purchasePage.payNowButton.click();

    // navigate to confirmation
    await purchasePage.getStartedButton.click();
    await purchasePage.goToNextStep.click();

    // confirm successful payment
    await dashboardPage.plusSubscription.waitFor({
      state: "attached",
      timeout: 5000,
    });
    await expect(dashboardPage.plusSubscription).toBeVisible();
  });
});

test.describe(`${process.env.E2E_TEST_ENV} - Monitor Plus Purchase Flow Monthly`, () => {
  test.beforeEach(async ({ page, authPage, landingPage, welcomePage }) => {
    // this test runs through the welcome scan flow, increasing timeout to address it
    test.setTimeout(120000);

    setEnvVariables();

    // speed up test by ignore non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });

    // start authentication flow
    await landingPage.open();
    await landingPage.goToSignIn();

    // Fill out sign up form
    const randomEmail = `_${Date.now()}@restmail.net`;
    await authPage.signUp(randomEmail, page);

    // wait for welcome page
    await page.waitForURL("**/user/welcome");

    // confirm get started step elements
    expect(await welcomePage.getStartedStep.count()).toEqual(3);

    // navigate to enter info step
    await welcomePage.startFreeScanButton.click();

    // confirm enter info step
    await welcomePage.firstNameInputField.fill("Monitor");
    await welcomePage.lastNameInputField.fill("Automation1");
    await welcomePage.cityStateInputField.pressSequentially("Atlanta, GA, USA");
    await page.getByText("AtlantaGA, USA", { exact: true }).click();
    await welcomePage.dobInputField.pressSequentially("01011992");
    await welcomePage.findExposuresButton.click();
    await welcomePage.modalConfirmButton.click();

    // wait for scanning to complete
    let wait = 0;
    let scanning =
      page.url() === `${process.env.E2E_TEST_BASE_URL}/user/welcome`;
    // using 5 mins as waiting time because the scanning process may take sometime
    while (wait < 300 && scanning) {
      scanning = page.url() === `${process.env.E2E_TEST_BASE_URL}/user/welcome`;
      await page.waitForTimeout(1000);
      wait++;
    }
  });

  test(" Verify that the user can purchase the plus subscription with a Stripe card - Monthly", async ({
    purchasePage,
    dashboardPage,
    page,
  }) => {
    test.skip(
      process.env.E2E_TEST_ENV === "production",
      "payment method test not available in production",
    );

    // link to multiple testrail cases
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463627",
    });

    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301529",
    });

    try {
      await checkAuthState(page);
    } catch {
      console.log(
        "[E2E_LOG] - No fxa auth required, proceeding... with stripe monthly",
      );
    }

    // navigate to subscription
    await dashboardPage.open();
    await dashboardPage.subscribeButton.click();

    // verify user purchase choices
    await expect(dashboardPage.subscribeDialogCloseButton).toBeVisible();
    await expect(dashboardPage.yearlyMonthlyTablist).toBeVisible();
    await dashboardPage.yearlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectYearlyPlanLink,
    ).toBeVisible();

    await dashboardPage.monthlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectMonthlyPlanLink,
    ).toBeVisible();

    await dashboardPage.monthlyTab.click();
    await dashboardPage.subscribeDialogSelectMonthlyPlanLink.click();
    await purchasePage.subscriptionHeader.waitFor();

    // fill out subscription payment
    await purchasePage.authorizationCheckbox.check();
    await purchasePage.fillOutStripeCardInfo();
    await purchasePage.payNowButton.click();

    // navigate to confirmation
    await purchasePage.getStartedButton.click();
    await purchasePage.goToNextStep.click();

    // confirm successful payment
    await dashboardPage.plusSubscription.waitFor({
      state: "attached",
      timeout: 5000,
    });
    await expect(dashboardPage.plusSubscription).toBeVisible();
  });
});
