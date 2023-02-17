/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class DashboardPage {
  constructor (page) {
    this.page = page

    this.dataBreachEmailDropdown = page.locator('custom-select')
    this.siteFoundImage = page.locator('figure img')
    this.breachStats = page.locator('breach-stats')
  }

  async open () {
    await this.page.goto('/user/breaches')
  }
}
