/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 import { test, expect } from '../fixtures/basePage.js'

 // showing use of authenticated state below, no login required in spec with that state
 test.use({ storageState: 'state.json' })
 test.describe('Check landing page', () => {
   test.beforeEach(async ({ landingPage }) => {
     await landingPage.open()
   })

   test('Verify sign up with new user', async ({
     page,
     dashboardPage,
   }) => {
     // should go directly to dashboard page
    await dashboardPage.open()

    await page.pause()

   })
 })
