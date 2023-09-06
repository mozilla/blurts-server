/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class SettingsPage {
  constructor (page) {
    this.page = page

    this.settingsHeader = page.locator('.settings-title')
    this.prefHeader = page.getByText(/Breach alert preferences/)
    this.emailHeader = page.getByText(/Monitored email addresses/)
    this.deactivateHeader = page.getByText(/Deactivate account/)
    this.addEmailButton = page.getByText(/Add email address/)
    this.settingsEmailSettings = page.locator('.settings-email-item')
    this.settingsContent = page.locator('.settings-content')
    this.sendToAffectedEmailRadioButton = page.locator('input[data-alert-option="0"]')
    this.sendToPrimaryEmailRadioButton = page.locator('input[data-alert-option="1"]')
  }

  async open () {
    await this.page.goto('/user/settings')
  }
}
