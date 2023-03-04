/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from '../fixtures/basePage.js'

// bypass login
test.use({ storageState: './e2e/storageState.json' })
test.describe('Breach Resolution', () => {
  test('Verify breach resolution loads', async ({
    page,
    dataBreachPage
  }, testInfo) => {
    // should go directly to data breach page
    await dataBreachPage.open()
    await expect(dataBreachPage.dataBreachesHeader).toBeVisible()

    // unresolved should be checked, resolved unchecked
    await expect(dataBreachPage.breachesResolvedRadio).not.toBeChecked()
    await expect(dataBreachPage.breachesUnresolvedRadio).toBeChecked()

    // prep for test: clear all resolved
    await page.waitForTimeout(1000)
    await dataBreachPage.breachesResolvedTab.click()
    if (await dataBreachPage.breachRows.count() >= 1) {
      for (const r of (await dataBreachPage.breachRows.all())) {
        if (await r.isVisible()) await r.click()
        if (await r.locator('.resolve-list-item').count() >= 1) {
          for (const li of (await r.locator('.resolve-list-item').all() || [])) {
            if (await li.locator('input').isVisible()) await li.locator('input').uncheck()
          }
        }
      }
    }

    // come back to unresolved breaches tab
    await dataBreachPage.breachesUnresolvedTab.click()
    await dataBreachPage.breachesUnresolvedTab.waitFor()

    // Pick a breach
    await page.locator('.breaches-table').waitFor()
    const firstBreach = await dataBreachPage.breachRows.first()
    await firstBreach.click()

    // find number of items needed to be resolved for first breach
    await page.locator('.resolve-list').first().waitFor()
    const firstBreachResolveListItems = await page.locator('.resolve-list').first().locator('.resolve-list-item')
    const firstBreachResolveCount = await firstBreachResolveListItems.count()
    console.log('Items to be resolved: ', firstBreachResolveCount)
    if (firstBreachResolveCount >= 1) {
      for (const r of await firstBreachResolveListItems.all()) {
        await r.locator('input').check()
      }
    }

    const updatedResolvedBreachTab = await page.getByText(/1Resolved breaches/)
    await expect(async () => {
      await expect(updatedResolvedBreachTab).toBeVisible()
    }).toPass({
      timeout: 5000
    })

    await testInfo.attach(`${process.env.E2E_TEST_ENV}-breach-resolve-monitor-dashboard.png`, {
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  })
})
