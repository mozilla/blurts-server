/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import { setEnvVariables } from "../utils/helpers.js";

test.describe(`${process.env.E2E_TEST_ENV} - Authentication flow verification @smoke`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test("Verify sign up with new user", async ({
    page,
    authPage,
    landingPage,
  }, testInfo) => {
    // speed up test by ignore non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });

    setEnvVariables(process.env.E2E_TEST_ACCOUNT_EMAIL as string);

    // start authentication flow
    await landingPage.goToSignIn();

    // Fill out sign up form
    const randomEmail = `${Date.now()}_tstact@restmail.net`;
    await authPage.signUp(randomEmail, page);

    // assert successful login
    const successUrl =
      process.env.E2E_TEST_BASE_URL +
      `${
        process.env.E2E_TEST_ENV === "local"
          ? "/user/dashboard"
          : "/user/welcome"
      }`;

    // wait for scanning to complete
    let wait = 0;
    let scanning = page.url() !== successUrl;
    while (wait < 60 && scanning) {
      try {
        scanning = page.url() !== successUrl;
      } catch (error) {
        console.log("line 45");
      }
      await page.waitForTimeout(1000);
      wait++;
    }

    expect(page.url()).toBe(successUrl);

    await testInfo.attach(
      `${process.env.E2E_TEST_ENV}-signup-monitor-dashboard.png`,
      {
        body: await page.screenshot(),
        contentType: "image/png",
      },
    );
  });

  test("Verify sign in with existing user", async ({
    page,
    authPage,
    landingPage,
    dashboardPage,
  }, testInfo) => {
    // speed up test by ignore non necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });

    // start authentication flow
    await landingPage.goToSignIn();

    // sign in
    await authPage.signIn(process.env.E2E_TEST_ACCOUNT_EMAIL as string);

    // assert successful login
    await expect(dashboardPage.fixedTab).toBeVisible();
    await expect(dashboardPage.actionNeededTab).toBeVisible();

    await testInfo.attach(
      `${process.env.E2E_TEST_ENV}-signin-monitor-dashboard.png`,
      {
        body: await page.screenshot(),
        contentType: "image/png",
      },
    );
  });
});
