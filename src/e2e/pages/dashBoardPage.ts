/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page, expect } from "@playwright/test";
import { PurchasePage } from "./purchasePage";
export class DashboardPage {
  readonly page: Page;
  readonly dataBreachEmailDropdown: Locator;
  readonly siteFoundImage: Locator;
  readonly breachStats: Locator;

  readonly fireFoxMonitorLogoImgButton: Locator;
  readonly fireFoxMonitorLogoAtag: Locator;
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
  readonly settingsPageNofificationsLink: Locator;
  readonly settingsPageManageAccountLink: Locator;
  readonly faqsPageLink: Locator;

  readonly servicesVpn: Locator;
  readonly servicesRelay: Locator;
  readonly servicesPocket: Locator;
  readonly servicesFirefoxDesktop: Locator;
  readonly servicesFirefoxMobile: Locator;
  readonly servicesMozilla: Locator;
  readonly appsAndServicesMenu: Locator;

  readonly profileSettings: Locator;
  readonly profileSignOut: Locator;
  readonly profileEmail: Locator;
  readonly manageProfile: Locator;
  readonly helpAndSupport: Locator;
  readonly closeAppsAndServices: Locator;
  readonly signOut: Locator;

  readonly allExposures: Locator;
  readonly fixExposureButton: Locator;
  readonly removeExposuresManually: Locator;
  readonly reviewAndRemoveProfiles: Locator;
  readonly markAsFixed: Locator;
  readonly skipExposureRemoval: Locator;
  readonly continuousProtectionButton: Locator;
  readonly numExposures: Locator;
  readonly numFixed: Locator;
  readonly mozillaLogoFooter: Locator;
  readonly allBreachesFooter: Locator;
  readonly faqsFooter: Locator;
  readonly termsOfServiceFooter: Locator;
  readonly privacyNoticeFooter: Locator;
  readonly githubFooter: Locator;

  readonly overviewCard: Locator;
  readonly overviewCardSummary: Locator;
  readonly overviewCardFindings: Locator;
  readonly chartSvgExposuresCount: Locator;

  readonly upsellScreenButton: Locator;
  readonly urlRegex: RegExp;

  constructor(page: Page) {
    this.page = page;
    this.allExposures = page.locator(
      '//button[starts-with(@class, "ExposureCard_chevron")]',
    );
    this.fixExposureButton = page.getByRole("link", {
      name: "Resolve exposures",
    });
    this.removeExposuresManually = page.getByRole("link", {
      name: "I’ll remove them manually",
    });
    this.reviewAndRemoveProfiles = page.getByText(
      "Review & remove your profiles",
    );
    this.markAsFixed = page.getByRole("button", { name: "Resolve exposures" });
    this.skipExposureRemoval = page.getByRole("link", { name: "Skip for now" });
    this.continuousProtectionButton = page.getByRole("button", {
      name: "Get continuous protection",
    });

    this.dataBreachEmailDropdown = page.locator("custom-select");
    this.siteFoundImage = page.locator("figure img");
    this.breachStats = page.locator("breach-stats");
    this.numExposures = page.locator(
      '//*[starts-with(@class, "Chart_headingNr")]',
    );
    this.numFixed = page
      .locator('//div[starts-with(@class, "ProgressCard_progressStat_")]/span')
      .first();

    //footer
    this.mozillaLogoFooter = page.locator(
      '//a[starts-with(@class, "Shell_mozillaLink")]',
    );
    this.allBreachesFooter = page.locator("footer a", {
      hasText: "Recent data breaches",
    });
    this.faqsFooter = page.locator("footer a", { hasText: "FAQs" });
    this.termsOfServiceFooter = page.locator("footer a", {
      hasText: "Terms of Service",
    });
    this.privacyNoticeFooter = page.locator("footer a", {
      hasText: "Privacy Notice",
    });
    this.githubFooter = page.locator("footer a", { hasText: "GitHub" });

    // top nav
    this.fireFoxMonitorLogoImgButton = page.locator(
      '//a[starts-with(@class, "ShellRedesign_homeLink_")]/img',
    );
    this.fireFoxMonitorLogoAtag = page.locator("nav a:has(> img)");
    this.actionNeededTab = page.getByRole("tab", { name: "Action needed" });
    this.fixedTab = page.getByRole("tab", { name: "Fixed" });
    this.profileButton = page.getByTitle("Profile").nth(1);

    this.profileSettings = page.locator(
      'a[title*="Configure"][title*="Mozilla Monitor"]',
    );
    this.profileSignOut = page.locator(
      'button[title*="Sign out of"][title*="Mozilla Monitor"]',
    );
    this.profileEmail = page
      .locator('//li[starts-with(@class, "UserMenu_menuItemWrapper")]/b')
      .first();
    this.manageProfile = page.getByRole("link", {
      name: "Manage your ⁨Mozilla account⁩",
    });
    this.helpAndSupport = page.getByRole("link", { name: "Help and support" });
    this.signOut = page.getByRole("button", { name: "Sign out" });
    this.appsAndServices = page.getByRole("button", {
      name: "⁨Mozilla⁩ apps and services",
    });
    this.appsAndServicesMenu = page.locator("div[class*='AppPicker_popup']");
    this.servicesVpn = page.getByRole("link", { name: "Mozilla VPN" });
    this.servicesRelay = page.getByRole("link", { name: "Firefox Relay" });
    this.servicesPocket = page.getByRole("link", { name: "Pocket" });
    this.servicesFirefoxDesktop = page.getByRole("link", {
      name: "⁨Firefox⁩ for Desktop",
    });
    this.servicesFirefoxMobile = page.getByRole("link", {
      name: "⁨Firefox⁩ for Mobile",
    });
    this.servicesMozilla = page.locator('[data-key="mozilla"] > a');
    this.closeAppsAndServices = page.locator(
      '//div[starts-with(@class, "Popover_underlay")]',
    );
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
    this.yearlyTab = page.getByText("Yearly", { exact: true });
    this.monthlyTab = page.getByText("Monthly", { exact: true });

    // nav menu
    this.settingsPageLink = page.getByRole("link", {
      name: "Settings",
    });
    this.settingsPageNofificationsLink = page.getByRole("link", {
      name: "Set notifications",
    });
    this.settingsPageManageAccountLink = page.getByRole("link", {
      name: "Manage account",
    });
    this.dashboardPageLink = page.getByRole("link", { name: "Dashboard" });

    this.faqsPageLink = page.getByTitle("Frequently asked questions").first();

    //upsell button
    this.upsellScreenButton = page
      .locator("a")
      .getByText(/Let’s (keep going|fix it)/);
    this.overviewCard = page.locator("[class*='DashboardTopBanner_container']");
    this.overviewCardSummary = page.locator(
      "[aria-label='Dashboard summary'] > div > p",
    );
    this.overviewCardFindings = page.locator(
      "[aria-label='Dashboard summary'] > div > h3",
    );
    this.chartSvgExposuresCount =
      this.overviewCard.locator("figure > div > svg");

    //regex
    this.urlRegex = /\/dashboard\/(fixed|action-needed)\/?/;
  }

  dashboardLinks() {
    return {
      // identify expected URLs
      settingsNotificationNavButtonLink: "/user/settings/notifications",
      resolveDataBreachesNavButtonLink: "/user/dashboard",
      helpAndSupportNavButtonLink:
        "https://support.mozilla.org/kb/firefox-monitor-faq",
    };
  }

  async open() {
    await this.page.goto("/user/dashboard");
  }

  async goToNotificationsSettings() {
    await this.settingsPageNofificationsLink.click();
    await this.page.waitForURL("**/settings/notifications");
  }

  async goToManageAccountSettings() {
    await this.settingsPageManageAccountLink.click();
    await this.page.waitForURL("**/settings/manage-account");
  }

  async goToDashboard() {
    await this.dashboardPageLink.click();
    await this.page.waitForURL("**/dashboard");
  }

  async goToFAQs() {
    await this.faqsPageLink.click();
    await this.page.waitForURL(/.*firefox-monitor-faq.*/);
  }

  async verifyPremiumUpsellModalOptions() {
    // verify subscription dialog elements
    await expect(this.subscribeDialogCloseButton).toBeVisible();
    await expect(this.yearlyMonthlyTablist).toBeVisible();

    // verify user purchase choices
    await this.yearlyTab.click();
    await expect(this.subscribeDialogSelectYearlyPlanLink).toBeVisible();

    await this.monthlyTab.click();
    await expect(this.subscribeDialogSelectMonthlyPlanLink).toBeVisible();

    // Check monthly redirection
    await this.subscribeDialogSelectMonthlyPlanLink.click();
    const purchasePage = new PurchasePage(this.page);
    await purchasePage.verifyMonthlyPlanDetails();
    await expect(purchasePage.subscriptionHeader).toBeVisible();

    // Check yearly redirection
    await this.page.goto(`${process.env.E2E_TEST_BASE_URL}`);
    await this.subscribeButton.waitFor();
    await this.subscribeButton.click();
    await this.subscribeDialogSelectYearlyPlanLink.click();
    await purchasePage.verifyYearlyPlanDetails();

    // Go back to dashboard.
    await this.page.goto(`${process.env.E2E_TEST_BASE_URL}`);
    await this.subscribeButton.waitFor();
  }
}
