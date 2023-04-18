/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from '../fixtures/basePage.js'

// bypass login
test.use({ storageState: './e2e/storageState.json' })
test.describe('Settings Page', () => {
  test('Verify settings page loads', async ({
    page,
    settingsPage
  }, testInfo) => {
    // should go directly to data breach page
    await settingsPage.open()
    await expect(settingsPage.settingsHeader).toBeVisible()
    await expect(settingsPage.prefHeader).toBeVisible()
    await expect(settingsPage.emailHeader).toBeVisible()
    await expect(settingsPage.deactivateHeader).toBeVisible()
    await expect(settingsPage.addEmailButton).toBeVisible()

    await testInfo.attach(`${process.env.E2E_TEST_ENV}-monitor-settings.png`, {
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  })
})
