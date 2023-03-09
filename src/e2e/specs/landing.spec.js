/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from '../fixtures/basePage.js'

test.describe('Landing Page element verification', () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open()
  })

  test('Verify landing page elements', async ({ page, landingPage }) => {
    // confirm landing page elements are visible
    await expect(async () => {
      await expect(landingPage.whyUseMonitorSec).toBeVisible()
      await expect(landingPage.howItWorksSec).toBeVisible()
      await expect(landingPage.questionsAboutSec).toBeVisible()
      await expect(landingPage.seeIfDataBreachSec).toBeVisible()
    }).toPass({
      timeout: 2000
    })
  })
})
