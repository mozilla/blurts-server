/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import { checkAuthState, setEnvVariables } from "../utils/helpers.js";

test.describe(`${process.env.E2E_TEST_ENV} - Breach Scan, Monitor Plus Purchase Flow`, () => {
  test.skip(
    process.env.E2E_TEST_ENV !== "stage",
    "Skip: Testing payment methods is only available on stage",
  );

  test.beforeEach(async ({ page, authPage, landingPage, welcomePage }) => {
    test.info().annotations.push({
      type: "testrail id",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463564",
    });

    test.slow(
      true,
      "this test runs through the welcome scan flow, increasing timeout to address it",
    );

    setEnvVariables(process.env.E2E_TEST_ACCOUNT_EMAIL as string);

    // speed up test by ignoring non necessary requests
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
    await welcomePage.goThroughFirstScan({ skipLoader: true });

    expect(page.url()).toContain("/user/dashboard");
  });

  test("Verify that the user can purchase the plus subscription with a Stripe card", async ({
    purchasePage,
    dashboardPage,
    page,
  }) => {
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
    await purchasePage.authorizationCheckbox.waitFor();
    await purchasePage.authorizationCheckbox.check();
    await purchasePage.fillOutStripeCardInfo();
    await purchasePage.payNowButton.click({ force: true });
    await page.getByText("Subscription confirmation").waitFor();
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
