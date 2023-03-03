/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class DataBreachPage {
  constructor (page) {
    this.page = page

    this.dataBreachesHeader = page.locator('.breaches-header')
    this.breachesFilter = page.locator('.breaches-filter')
    this.breachesResolvedRadio = page.locator('input#breaches-resolved')
    this.breachesUnresolvedRadio = page.locator('input#breaches-unresolved')
    this.breachRows = page.locator('.breach-row')
  }

  async open () {
    await this.page.goto('/user/breaches')
  }
}
