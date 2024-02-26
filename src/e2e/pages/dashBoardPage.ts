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
  readonly upgradeToPlus: Locator;
  readonly plusSubscription: Locator;
  readonly startAFreeScanLink: Locator;

  readonly dashboardNavButton: Locator;
  readonly FAQsNavButton: Locator;

  readonly exposuresHeading: Locator;
  readonly dashboardMozLogo: Locator;
  readonly fixedHeading: Locator;
  readonly toolTip: Locator;

  readonly popupOkButton: Locator;
  readonly popupCloseButton: Locator;

  readonly chartTooltip: Locator;
  readonly aboutFixedExposuresPopup: Locator;

  readonly subscribeButton: Locator;
  readonly subscribeDialog: Locator;
  readonly subscribeDialogCloseButton: Locator;
  readonly subscribeDialogSelectYearlyPlanLink: Locator;
  readonly subscribeDialogSelectMonthlyPlanLink: Locator;
  readonly yearlyMonthlyTablist: Locator;
  readonly yearlyTab: Locator;
  readonly monthlyTab: Locator;

  readonly dashboardPageLink: Locator;
  readonly settingsPageLink: Locator;
  readonly faqsPageLink: Locator;

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
    this.upgradeToPlus = page.getByRole("button", {
      name: "Automatic data removal: Off",
    });
    this.plusSubscription = page.getByRole("button", {
      name: "Automatic data removal: On",
    });
    this.startAFreeScanLink = page.getByRole("link", {
      name: "Start a free scan",
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

    this.dashboardMozLogo = page.getByRole("link", { name: "Home" });

    this.fixedHeading = page.getByRole("heading", {
      name: "View all exposures that are fixed or in progress",
    });

    this.toolTip = page.locator(
      '//div[starts-with(@class, "ProgressCard_header")]/button',
    );

    // here's what we fixed popup
    this.popupOkButton = page.getByRole("button", { name: "OK" });
    this.popupCloseButton = page.getByRole("button", { name: "Close" });

    // chartTooltip
    this.chartTooltip = page
      .getByRole("figure", { name: "This chart shows the total" })
      .getByRole("button");
    this.aboutFixedExposuresPopup = page.getByRole("dialog", {
      name: "About your number of fixed exposures",
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

    // nav menu
    this.settingsPageLink = page.getByRole("link", { name: "Settings" });
    this.dashboardPageLink = page.getByRole("link", { name: "Dashboard" });
    this.faqsPageLink = page.getByTitle("Frequently asked questions").first();
  }

  dashboardLinks() {
    return {
      // identify expected URLs
      settingsNavButtonLink: "/user/settings",
      resolveDataBreachesNavButtonLink: "/user/dashboard",
      helpAndSupportNavButtonLink:
        "https://support.mozilla.org/kb/firefox-monitor-faq",
    };
  }

  async open() {
    await this.page.goto("/user/dashboard");
  }

  async goToSettings() {
    await this.settingsPageLink.click();
    await this.page.waitForURL("**/settings");
  }

  async goToDashboard() {
    await this.dashboardPageLink.click();
    await this.page.waitForURL("**/dashboard");
  }

  async goToFAQs() {
    await this.faqsPageLink.click();
    await this.page.waitForURL("**/firefox-monitor-faq");
  }
}
