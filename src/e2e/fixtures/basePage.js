/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test as base, expect } from '@playwright/test'
import { LandingPage } from '../pages/landingPage.js'
import { AuthPage } from '../pages/authPage.js'
import { DashboardPage } from '../pages/dashboardPage.js'

const test = base.extend({
  authPage: async ({ page }, use) => {
    await use(new AuthPage(page))
  },
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page))
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page))
  }
})

export { test, expect }
