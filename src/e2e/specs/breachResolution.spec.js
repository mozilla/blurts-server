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
    await dataBreachPage.breachesResolvedTab.waitFor()
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
    if (firstBreachResolveCount >= 1) {
      console.log('Items to be resolved: ', firstBreachResolveCount)
      for (const r of await firstBreachResolveListItems.all()) {
        await r.locator('input').check()
        // prevent rate limiting
        page.waitForTimeout(1000)
      }
    }

    const updatedResolvedBreachTab = await page.getByText(/1Resolved breaches/)
    await expect(async () => {
      await expect(updatedResolvedBreachTab).toBeTruthy()
    }).toPass({
      timeout: 2000
    })

    await testInfo.attach(`${process.env.E2E_TEST_ENV}-breach-resolve-monitor-dashboard.png`, {
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  })
})

test.describe('Breaches Dashboard - Headers', () => {
  test('Verify that the site header is displayed correctly for signed in users', async ({
    dataBreachPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description: "https://testrail.stage.mozaws.net/index.php?/cases/view/2095101",
    });

    // should go directly to data breach page
    await dataBreachPage.open()

    // verify logo and profile button
    await expect(async () => {
      await expect(await dataBreachPage.dataBreachesLogo).toBeVisible()
      await expect(await dataBreachPage.dataBreachesNavbarProfile).toBeVisible()
    }).toPass({
      timeout: 2000
    })
  })

  test('Verify that the site header options work correctly for a signed in user', async ({
    dataBreachPage,
    settingsPage,
    page
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description: "https://testrail.stage.mozaws.net/index.php?/cases/view/2095102",
    });

    // should go directly to data breach page
    await settingsPage.open()

    // verify logo and profile button
    await expect(async () => {
      expect(await dataBreachPage.dataBreachesLogoLink.first().getAttribute('href')).toBe("/user/breaches")
    }).toPass({
      timeout: 2000
    })

    await page.waitForLoadState( "networkidle" )
    await dataBreachPage.dataBreachesNavbarProfile.click()

    // verify mnanage your ff account link, settings option, help and support option, sign out option
    await expect(async () => {
      // menu is open
      expect(await dataBreachPage.profileMenuExpanded()).toBeTruthy()

      // menu header
      await expect(await dataBreachPage.dataBreachesNavbarProfileMenuHeader).toBeVisible()

      // head text
      expect(await dataBreachPage.dataBreachesNavbarProfileMenuHeaderSubtitle.textContent()).toEqual('Manage your ⁨Firefox account⁩')

      // check settings
      await expect(await dataBreachPage.dataBreachesNavbarProfileMenuSettings).toBeVisible()

      // help and support
      await expect(await dataBreachPage.dataBreachesNavbarProfileMenuHelpAndSupport).toBeVisible()

      // sign out
      await expect(await dataBreachPage.dataBreachesNavbarProfileMenuSignOut).toBeVisible()
    }).toPass({
      timeout: 2000
    })
  })

  test(' Verify that the user can navigate through the Monitor dashboard', async ({
    dataBreachPage,
  }) => {
    // link to testrail
    test.info().annotations.push({
      type: "testrail",
      description: "https://testrail.stage.mozaws.net/index.php?/cases/view/2095103",
    });

    // should go directly to data breach page
    await dataBreachPage.open()

    // get expected links
    const links = await dataBreachPage.dashboardLinks()

    // verify the navigation within monitor
    await expect(async () => {
      // settings button redirects the user to "Settings" tab
      expect(await dataBreachPage.settingsNavButton.getAttribute('href')).toBe(links.settingsNavButtonLink)

      // redirects the user to the "Resolve data breaches" tab
      expect(await dataBreachPage.resolveDataBreachesNavButton.getAttribute('href')).toContain(links.resolveDataBreachesNavButtonLink)

      // opens a new tab in which user is redirected to the "Monitor Help" page
      expect(await dataBreachPage.helpAndSupportNavButton.getAttribute('href')).toContain(links.helpAndSupportNavButtonLink)
    }).toPass({
      timeout: 2000
    })
  })
})
