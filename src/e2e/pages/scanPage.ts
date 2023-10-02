/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";

export class ScanPage {
  readonly page: Page;
  readonly heroHeader: Locator;
  readonly getAlertsAboutBreachesButton: Locator;
  readonly signUpForAlerts: Locator;
  readonly haveIBeenPwnedLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heroHeader = page.locator("header h1");
    this.getAlertsAboutBreachesButton = page.getByRole("link", {
      name: "Get alerts about new breaches",
    });
    this.signUpForAlerts = page.getByRole("link", {
      name: "Sign up for alerts",
    });
    this.haveIBeenPwnedLink = page.getByRole("link", {
      name: "Have I Been Pwned",
    });
  }
}
