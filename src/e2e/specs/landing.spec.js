/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from '../fixtures/basePage.js'
import { getBaseUrl } from '../utils/helpers.js'

test.describe('Landing Page element verification', () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open()
  })
  test(' Verify that the site footer options work correctly ', async ({ landingPage, page }) => {
    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description: "https://testrail.stage.mozaws.net/index.php?/cases/view/2095095",
    });

    const currentUrl = await getBaseUrl();
    const links = await landingPage.links()

    // verify the actual hrefs in the footer matches expected
    await expect(async () => {
      expect(await landingPage.MozillaFooterLogoLink.getAttribute('href')).toContain(links.mozillaLogoUrl)
      expect(`${currentUrl}${await landingPage.AllBreachesLink.getAttribute('href')}`).toBe(links.allBreachesUrl)
      expect(await landingPage.FAQLink.getAttribute('href')).toContain(links.FAQUrl)
      expect(await landingPage.TermsLink.getAttribute('href')).toContain(links.TermsUrl)
      expect(await landingPage.GithubLink.getAttribute('href')).toBe(links.GithubUrl)
    }).toPass({
      timeout: 2000
    })
  })

  test('Verify landing page elements', async ({ landingPage }) => {
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
