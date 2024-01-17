/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly dataBreachEmailDropdown: Locator;
  readonly siteFoundImage: Locator;
  readonly breachStats: Locator;

  readonly fireFoxMonitorLogoImgButton: Locator;
  readonly actionNeededTab: Locator;
  readonly fixedTab: Locator;
  readonly profileButton: Locator;
  readonly appsAndServices: Locator;
  readonly upgradeToPremium: Locator;

  readonly dashboardNavButton: Locator;
  readonly FAQsNavButton: Locator;

  readonly exposuresHeading: Locator;
  readonly exposuresCardHeading: Locator;
  readonly fixedHeading: Locator;
  readonly toolTip: Locator;
  readonly heresWhatsFixedCardTitle: Locator;

  readonly whatsFixedPopup: Locator;
  readonly popupOkButton: Locator;

  readonly chartTooltip: Locator;
  readonly aboutActiveExposuresPopup: Locator;

  readonly subscribeButton: Locator;
  readonly subscribeDialog: Locator;
  readonly subscribeDialogCloseButton: Locator;
  readonly subscribeDialogSelectYearlyPlanLink: Locator;
  readonly subscribeDialogSelectMonthlyPlanLink: Locator;
  readonly yearlyMonthlyTablist: Locator;
  readonly yearlyTab: Locator;
  readonly monthlyTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dataBreachEmailDropdown = page.locator("custom-select");
    this.siteFoundImage = page.locator("figure img");
    this.breachStats = page.locator("breach-stats");

    // top nav
    this.fireFoxMonitorLogoImgButton = page.locator(
      '//a[starts-with(@class, "Shell_homeLink_")]/img',
    );
    this.actionNeededTab = page.getByRole("tab", { name: "Action needed" });
    this.fixedTab = page.getByRole("tab", { name: "Fixed" });
    this.profileButton = page.getByRole("button", { name: "Profile" });
    this.appsAndServices = page.getByRole("menu", {
      name: "Mozilla apps and services",
    });
    this.upgradeToPremium = page.getByRole("button", {
      name: "Automatic data removal: Off",
    });

    //sidebar nav
    this.dashboardNavButton = page.getByRole("link", { name: "Dashboard" });
    this.FAQsNavButton = page
      .getByLabel("Navigation")
      .getByRole("link", { name: "FAQs" });

    // page elements
    this.exposuresHeading = page.getByRole("heading", {
      name: "View all sites where your info is exposed",
    });

    this.exposuresCardHeading = page.getByRole("heading", {
      name: "Let’s protect your data",
    });

    this.fixedHeading = page.getByRole("heading", {
      name: "View all exposures that are fixed or in progress",
    });

    this.toolTip = page.locator(
      '//div[starts-with(@class, "ProgressCard_header")]/button',
    );
    this.heresWhatsFixedCardTitle = page.locator(
      '//div[starts-with(@class, "ProgressCard_header")]',
    );

    // here's what we fixed popup
    this.whatsFixedPopup = page.getByRole("dialog", {
      name: "About what we fixed",
    });
    this.popupOkButton = page.getByRole("button", { name: "OK" });

    // chartTooltip
    this.chartTooltip = page.locator(
      '//div[starts-with(@class, "DashboardTopBanner_chart")]//button',
    );
    this.aboutActiveExposuresPopup = page.getByRole("dialog", {
      name: "About your number of active exposures",
    });

    this.subscribeButton = page.getByRole("button", {
      name: "Automatic data removal: Off",
    });
    this.subscribeDialog = page.getByRole("dialog", {
      name: "Turn on automatic data removal with Monitor Plus",
    });
    this.subscribeDialogCloseButton = page.getByRole("button", {
      name: "Close",
    });
    this.subscribeDialogSelectYearlyPlanLink = page.getByRole("link", {
      name: "Select yearly plan",
    });
    this.subscribeDialogSelectMonthlyPlanLink = page.getByRole("link", {
      name: "Select monthly plan",
    });
    this.yearlyMonthlyTablist = page.getByText("YearlyMonthly");
    this.yearlyTab = page.getByRole("tab", { name: "Yearly" });
    this.monthlyTab = page.getByRole("tab", { name: "Monthly" });
  }

  async open() {
    await this.page.goto("/redesign/user/dashboard");
  }
}
