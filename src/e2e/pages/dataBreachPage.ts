/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";

export class DataBreachPage {
  readonly page: Page;
  readonly dataBreachesNavbar: Locator;
  readonly dataBreachesLogo: Locator;
  readonly dataBreachesLogoLink: Locator;
  readonly dataBreachesNavbarProfile: Locator;
  readonly dataBreachesNavbarProfileButton: Locator;
  readonly dataBreachesNavbarProfileMenu: Locator;
  readonly dataBreachesNavbarProfileMenuHeader: Locator;
  readonly dataBreachesNavbarProfileMenuHeaderSubtitle: Locator;
  readonly dataBreachesNavbarProfileMenuSettings: Locator;
  readonly dataBreachesNavbarProfileMenuHelpAndSupport: Locator;
  readonly dataBreachesNavbarProfileMenuSignOut: Locator;
  readonly breachesFilter: Locator;
  readonly dataBreachesHeader: Locator;
  readonly breachesResolvedRadio: Locator;
  readonly breachesUnresolvedRadio: Locator;
  readonly breachRows: Locator;
  readonly breachesResolvedTab: Locator;
  readonly breachesUnresolvedTab: Locator;
  readonly resolveDataBreachesNavButton: Locator;
  readonly settingsNavButton: Locator;
  readonly helpAndSupportNavButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // navbar
    this.dataBreachesNavbar = page.locator(".header-wrapper");
    this.dataBreachesLogo = page.getByRole("link", { name: "Home" });
    this.dataBreachesLogoLink = page.locator(".header-wrapper a");
    this.dataBreachesNavbarProfile = page.getByRole("button", {
      name: "Open user menu",
    });
    this.dataBreachesNavbarProfileButton = page.locator(".nav-toggle");

    // profile menu items
    this.dataBreachesNavbarProfileMenu = page.locator(".nav-wrapper menu");
    this.dataBreachesNavbarProfileMenuHeader =
      page.locator(".user-menu-header");
    this.dataBreachesNavbarProfileMenuHeaderSubtitle = page.locator(
      ".user-menu-subtitle",
    );
    this.dataBreachesNavbarProfileMenuSettings = page
      .getByLabel("Account menu")
      .getByRole("link", { name: "Settings" });
    this.dataBreachesNavbarProfileMenuHelpAndSupport = page.getByRole("link", {
      name: "Help and support",
      exact: true,
    });
    this.dataBreachesNavbarProfileMenuSignOut = page.getByRole("button", {
      name: "Sign out",
    });

    // dashboard
    this.breachesFilter = page.locator(".breaches-filter");
    this.dataBreachesHeader = page.locator(".breaches-header");
    this.breachesResolvedRadio = page.locator("input#breaches-resolved");
    this.breachesUnresolvedRadio = page.locator("input#breaches-unresolved");
    this.breachRows = page.locator(".breach-row");
    this.breachesResolvedTab = page.getByText(/Resolved breaches/);
    this.breachesUnresolvedTab = page.getByText(/Unresolved breaches/);

    // side nav
    this.resolveDataBreachesNavButton = page.getByRole("link", {
      name: "Resolve Data Breaches",
    });
    this.settingsNavButton = page.getByRole("link", { name: "Settings" });
    this.helpAndSupportNavButton = page.getByRole("link", {
      name: "Help and Support",
    });
  }

  async open() {
    await this.page.goto("/user/breaches");
  }

  async profileMenuExpanded() {
    return this.dataBreachesNavbarProfileMenu.getAttribute("aria-expanded");
  }
}
