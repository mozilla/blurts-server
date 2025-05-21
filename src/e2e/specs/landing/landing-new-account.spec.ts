/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../../fixtures/basePage.js";
import {
  emailInputShouldExist,
  getVerificationCode,
} from "../../utils/helpers.js";
import "../../utils/setFeatureFlags";

test.describe(`${process.env.E2E_TEST_ENV} - Verify the Landing Page Functionality - new account`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test('Verify "Get free scan" buttons functionality with a new account', async ({
    landingPage,
    page,
    authPage,
  }) => {
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463502",
    });

    const randomEmail = `${Date.now()}_tstact@restmail.net`;
    if (await emailInputShouldExist(landingPage)) {
      await landingPage.monitorHeroFormEmailInputField.fill(randomEmail);
      await landingPage.monitorHeroFormInputSubmitButton.click();
      await page.waitForURL("**/oauth**");
    } else {
      await landingPage.monitorHeroFormInputSubmitButton.click();
      await authPage.emailInputField.waitFor({
        state: "visible",
        timeout: 10000,
      });
      await authPage.emailInputField.fill(randomEmail);
      await authPage.continueButton.click();
    }
    // continue with the common steps
    await authPage.passwordInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await authPage.continueButton.click();

    const verificationCode = await getVerificationCode(randomEmail, page);
    expect(verificationCode).toBeDefined();
    await authPage.enterVerificationCode(verificationCode as string);

    const successUrl = `${process.env.E2E_TEST_BASE_URL}/user/welcome`;
    expect(page.url()).toBe(successUrl);
  });

  test('Verify the "Start free monitoring" button UI and functionality with a new account', async ({
    landingPage,
    page,
    authPage,
  }) => {
    test.info().annotations.push(
      {
        type: "testrail id #1",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2463524",
      },
      {
        type: "testrail id #2",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2463564",
      },
    );

    await landingPage.startFreeMonitoringButton.click();

    const randomEmail = `${Date.now()}_tstact@restmail.net`;
    await authPage.signUp(randomEmail, page);

    const successUrl = `${process.env.E2E_TEST_BASE_URL}/user/welcome`;
    expect(page.url()).toBe(successUrl);
  });
});
