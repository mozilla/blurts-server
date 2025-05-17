/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";

export class AutomaticRemovePage {
  readonly page: Page;
  readonly planToggle0: Locator;
  readonly planToggle1: Locator;
  readonly price: Locator;
  readonly plan: Locator;
  readonly xButton: Locator;
  readonly forwardArrowButton: Locator;
  readonly subplatButton: Locator;

  readonly bulletPointsExpected: string[];

  constructor(page: Page) {
    this.page = page;

    //labels that allow toggles
    this.planToggle0 = page.locator("div > label").nth(0);
    this.planToggle1 = page.locator("div > label").nth(1);

    //displayed price and plan
    this.price = page.locator("div > strong + span");
    this.plan = page.locator("div > strong + span + a");

    //expected contents of the bullet points on page
    this.bulletPointsExpected = [
      "Monthly scan of ⁨190⁩ data broker sites that may be selling your personal info",
      "Automatic data removal from sites that are selling your personal info",
      "Guided experience through high risk data breaches that require manual steps",
      "Continuous monitoring for new exposures",
      "Alerts when your data has been breached",
    ];

    this.xButton = page.getByLabel("Return to dashboard");
    this.forwardArrowButton = page.getByLabel("Go to next step");
    this.subplatButton = page.locator("div > strong + span + a");
  }

  async open() {
    await this.page.goto(
      "/user/dashboard/fix/data-broker-profiles/automatic-remove",
    );
  }
}
