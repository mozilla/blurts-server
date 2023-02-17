/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from '../fixtures/basePage.js'

test.describe('Check landing page', () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open()
  })

  test('Verify landing page elements', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Breaches' }).click()
    await page.waitForTimeout(2000)

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/breaches/)
  })
})
