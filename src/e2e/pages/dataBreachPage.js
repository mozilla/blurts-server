/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class DataBreachPage {
  constructor (page) {
    this.page = page

    // navbar
    this.dataBreachesNavbar = page.locator('.header-wrapper')
    this.dataBreachesLogo = page.getByAltText("Firefox Monitor")
    this.dataBreachesLogoLink = page.locator('.header-wrapper a')
    this.dataBreachesNavbarProfile = page.locator('.user-menu-button')
    this.dataBreachesNavbarProfileButton = page.locator('.nav-toggle')

    // profile menu items
    this.dataBreachesNavbarProfileMenu = page.locator('.nav-wrapper menu')
    this.dataBreachesNavbarProfileMenuHeader = page.locator('.user-menu-header')
    this.dataBreachesNavbarProfileMenuHeaderSubtitle = page.locator('a .user-menu-subtitle')
    this.dataBreachesNavbarProfileMenuSettings = page.getByLabel('Account menu').getByRole('link', { name: 'Settings' })
    this.dataBreachesNavbarProfileMenuHelpAndSupport = page.getByRole('link', { name: 'Help and support', exact: true })
    this.dataBreachesNavbarProfileMenuSignOut = page.getByRole('button', { name: 'Sign out' })

    // dashboard
    this.breachesFilter = page.locator('.breaches-filter')
    this.dataBreachesHeader = page.locator('.breaches-header')
    this.breachesResolvedRadio = page.locator('input#breaches-resolved')
    this.breachesUnresolvedRadio = page.locator('input#breaches-unresolved')
    this.breachRows = page.locator('.breach-row')
    this.breachesResolvedTab = page.getByText(/Resolved breaches/)
    this.breachesUnresolvedTab = page.getByText(/Unresolved breaches/)

    // side nav
    this.resolveDataBreachesNavButton = page.getByRole('link', { name: 'Resolve Data Breaches' })
    this.settingsNavButton = page.getByRole('link', { name: 'Settings' })
    this.helpAndSupportNavButton = page.getByRole('link', { name: 'Help and Support' })
  }

  async dashboardLinks(){
    return {
      // identify expected URLs
      settingsNavButtonLink: "/user/settings",
      resolveDataBreachesNavButtonLink: "/user/breaches",
      helpAndSupportNavButtonLink: "https://support.mozilla.org/kb/firefox-monitor",
    }
  }

  async open () {
    await this.page.goto('/user/breaches')
  }

  async profileMenuExpanded(){
    return await this.dataBreachesNavbarProfileMenu.getAttribute("aria-expanded") === "true"
  }
}
