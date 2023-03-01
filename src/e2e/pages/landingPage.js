/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class LandingPage {
  constructor (page) {
    this.page = page
    this.signUpButton = page.getByRole('link', { name: 'Get Started' })
    this.signInButton = page.getByRole('link', { name: 'Sign In' })
    this.firefoxLogo = page.locator('//img[starts-with(@class, "monitor-logo")]')
    this.whyUseMonitorSec = page.locator('.why-use-monitor')
    this.howItWorksSec = page.locator('.how-it-works')
    this.questionsAboutSec = page.locator('.top-questions-about-monitor')
    this.seeIfDataBreachSec = page.locator('.see-if-data-breach')
  }

  async open () {
    await this.page.goto(process.env.E2E_TEST_BASE_URL)
  }

  async goHome () {
    await Promise.all([
      this.page.waitForNavigation(),
      this.homeButton.click()
    ])
  }

  async goToSignUp () {
    await Promise.all([
      this.page.waitForNavigation(),
      this.signUpButton.click()
    ])
  }

  async goToSignIn () {
    this.signInButton.click()
  }

  async openFirefoxAppsServices () {
    await this.firefoxAppsServices.click()
  }

  async clickFirefoxLogo () {
    await this.firefoxLogo.click()
  }
}
