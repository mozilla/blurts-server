/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";

export class SettingsPage {
  readonly page: Page;
  readonly settingsHeader: Locator;
  readonly emailPrefHeader: Locator;
  readonly emailHeader: Locator;
  readonly tabNotifications: Locator;
  readonly deleteHeader: Locator;
  readonly deactivateHeader: Locator;
  readonly addEmailButton: Locator;
  readonly settingsEmailSettings: Locator;
  readonly settingsContent: Locator;
  readonly sendToAffectedEmailRadioButton: Locator;
  readonly sendToPrimaryEmailRadioButton: Locator;
  readonly cancelMozillaAccountLink: Locator;
  readonly goToMozillaAccountSettingsLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.settingsHeader = page.locator("h2").first();
    this.emailPrefHeader = page.getByText(/Email preferences/);
    this.emailHeader = page.getByText(/Monitored email addresses/);
    this.tabNotifications = page.getByRole("tab", {
      name: "Set notifications",
    });
    this.deleteHeader = page.getByText(/Delete ⁨Monitor⁩ account/);
    this.deactivateHeader = page.getByText(/Deactivate account/);
    this.addEmailButton = page.getByText(/Add email address/);
    this.settingsEmailSettings = page.locator(".settings-email-item");
    this.settingsContent = page.locator(".settings-content");
    this.sendToAffectedEmailRadioButton = page.getByRole("radio", {
      name: "Send breach alerts to the affected email address",
    });
    this.sendToPrimaryEmailRadioButton = page.getByRole("radio", {
      name: "Send all breach alerts to the primary email address",
    });

    // account management links
    this.cancelMozillaAccountLink = page.getByRole("link", {
      name: "Cancel from your Mozilla account Open link in a new tab",
    });
    this.goToMozillaAccountSettingsLink = page.getByRole("link", {
      name: "Go to Mozilla account settings Open link in a new tab",
    });
  }

  async open() {
    await this.page.goto("/user/settings");
  }
}
