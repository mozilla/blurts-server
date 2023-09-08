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

  test('Verify that a user can select between the Breach alert preferences', async ({
    page,
    settingsPage,
  }) => {
    test.info().annotations.push({
      type: "issue",
      description: "https://testrail.stage.mozaws.net/index.php?/cases/view/2095115",
    });

    // go to monitor settings page
    await settingsPage.open()

    // select "send breach alerts to the affected email address" option
    await settingsPage.sendToAffectedEmailRadioButton.click()
    await expect(async () => {
      // verify option is selected
      await expect(page.locator('input[data-alert-option="0"]')).toBeChecked()
    }).toPass({
      timeout: 2000
    })

    // select "send asll breach alerts to the primary email address"
    await settingsPage.sendToPrimaryEmailRadioButton.click()
    await expect(async () => {
      // verify option is selected
      await expect(page.locator('input[data-alert-option="1"]')).toBeChecked()
    }).toPass({
      timeout: 2000
    })
  })
})
