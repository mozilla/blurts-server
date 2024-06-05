/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";

export class DataBrokersPage {
  readonly page: Page;
  readonly removeThemForMeButton: Locator;
  readonly xButton: Locator;
  readonly forwardArrowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.removeThemForMeButton = page.getByText("Remove them for me");
    this.xButton = page.getByLabel("Return to dashboard");
    this.forwardArrowButton = page.getByLabel("Go to next step");
  }

  async open() {
    await this.page.goto(
      "/user/dashboard/fix/data-broker-profiles/view-data-brokers",
    );
  }
}
