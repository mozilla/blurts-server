/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../../fixtures/basePage.js";
import { emailInputShouldExist } from "../../utils/helpers.js";

test.describe(`${process.env.E2E_TEST_ENV} - Verify the Landing Page Functionality - existing account`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test('Verify "Get free scan" buttons functionality with an existing account', async ({
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

    const existingEmail = process.env.E2E_TEST_ACCOUNT_EMAIL as string;

    if (await emailInputShouldExist(landingPage)) {
      // Scenario where the form is still used
      await landingPage.monitorHeroFormEmailInputField.fill(existingEmail);
      await landingPage.monitorHeroFormInputSubmitButton.click();
      await page.waitForURL("**/oauth**");
    } else {
      // Scenario where direct redirection happens
      await landingPage.monitorHeroFormInputSubmitButton.click();
      await authPage.emailInputField.waitFor({
        state: "visible",
        timeout: 10000,
      });
      await authPage.emailInputField.fill(existingEmail);
      await authPage.continueButton.click();
    }

    // complete sign in form
    await authPage.enterPassword();

    // verify dashboard redirect
    const successUrl = `${process.env.E2E_TEST_BASE_URL}/user/dashboard`;
    expect(page.url()).toBe(successUrl);
  });

  test('Verify the "Start free monitoring" button UI and functionality with an existing account', async ({
    landingPage,
    page,
    authPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463524",
    });

    await landingPage.startFreeMonitoringButton.click();

    await authPage.enterEmail(process.env.E2E_TEST_ACCOUNT_EMAIL as string);
    await authPage.enterPassword();

    // verify dashboard redirect
    const successUrl = `${process.env.E2E_TEST_BASE_URL}/user/dashboard`;
    expect(page.url()).toBe(successUrl);
  });
});
