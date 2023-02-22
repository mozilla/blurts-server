/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from '../fixtures/basePage.js'

test.describe('Check landing page', () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open()
  })

  test('Verify sign up with new user', async ({
    page,
    authPage,
    landingPage,
    dashboardPage
  }) => {
    // start authentication flow
    await landingPage.goToSignIn()

    // Fill out sign up form
    const randomEmail = `${Date.now()}_tstact@restmail.net`
    await authPage.signUp(randomEmail, page)
    await page.waitForTimeout(6000)

    // assert successful login
    const dataBreachesHeader = await page.isVisible('.breaches-header')
    expect(dataBreachesHeader).toBeTruthy()

    const breachesFilter = await page.isVisible('.breaches-filter')
    expect(breachesFilter).toBeTruthy()
  })

  // test.only('Verify sign in with existing user', async ({
  //   page,
  //   authPage,
  //   landingPage,
  //   dashboardPage
  // }, testInfo) => {
  //   // speed up test by ignore non necessary requests
  //   await page.route(/(analytics)/, (route) => {
  //     route.abort()
  //   })

  //   // start authentication flow
  //   await landingPage.goToSignIn()

  //   // sign in
  //   await authPage.signIn(process.env.E2E_TEST_ACCOUNT_EMAIL)

  //   // assert successful login
  //   await expect(page).toHaveScreenshot(
  //     `${process.env.E2E_TEST_ENV}-signin-monitor-dashboard.png`,
  //     {
  //       defaultScreenshotOpts,
  //       ...{ fullPage: true },
  //       mask: [
  //         dashboardPage.dataBreachEmailDropdown,
  //         dashboardPage.siteFoundImage,
  //         dashboardPage.breachStats
  //       ]
  //     }
  //   )

  //   await testInfo.attach('signDashboard', {
  //     body: await page.screenshot(),
  //     contentType: 'image/png'
  //   })
  // })
})
