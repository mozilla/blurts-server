/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";

test.describe(`${process.env.E2E_TEST_ENV} - Authentication flow verification @smoke`, () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test("Verify sign up with new user", async ({
    page,
    authPage,
    landingPage,
  }, testInfo) => {
    // speed up test by ignoring non-necessary requests
    await page.route(/(analytics)/, async (route) => {
      await route.abort();
    });

    // start authentication flow
    await landingPage.goToSignIn();

    // Fill out sign up form
    const currentTimestamp = Date.now();
    const randomEmail = `${currentTimestamp}_tstact@restmail.net`;
    await authPage.signUp(randomEmail, page);

    // assert successful login
    expect(page.url()).toBe(`${process.env.E2E_TEST_BASE_URL}/user/welcome`);

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
