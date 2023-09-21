/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export class LandingPage {
  constructor (page) {
    this.page = page
    this.signUpButton = page.getByRole('button', { name: 'Get Started' })
    this.signInButton = page.getByRole('button', { name: 'Sign In' })
    this.firefoxLogo = page.locator('//img[starts-with(@class, "monitor-logo")]')
    this.whyUseMonitorSec = page.locator('.why-use-monitor')
    this.howItWorksSec = page.locator('.how-it-works')
    this.questionsAboutSec = page.locator('.top-questions-about-monitor')
    this.seeIfDataBreachSec = page.locator('.see-if-data-breach')
    this.falseBannerOpenButton = page.locator('#open-button')

    // footer section
    this.MozillaFooterLogoImage = page.getByAltText("Mozilla")
    this.MozillaFooterLogoLink = page.locator('footer a').first()
    this.AllBreachesLink = page.getByRole('link', { name: 'All Breaches' })
    this.FAQLink = page.locator('footer a:has-text("faq")')
    this.TermsLink = page.getByRole('link', { name: 'Terms & Privacy' })
    this.GithubLink = page.getByRole('link', { name: 'Github' })
    this.landingFooter = page.locator('.site-footer')
    this.ourMissionLink = page.locator('footer a:has-text("Learn more about our mission")')
    this.seeAllFAQsLink = page.locator('footer a:has-text("See all FAQs")')
    this.falseDoorBanner = page.locator('//div[starts-with(@class, "FalseDoorBanner_falseDoorTest")]')
    this.falseBannerCloseButton = page.locator('#close-button')
    this.scanEmailAddressInput = page.locator('#scan-email-address')
    this.checkForBreachesButton =  page.getByRole('button', {name: 'Check for breaches'})

    // hero section
    this.heroHeader = page.locator('.hero div h1').innerText()
    this.heroDescription = page.locator('.hero p').innerText()
    this.heroEmailInput = page.locator('#scan-email-address')
    this.heroCTAButton = page.locator('form button:has-text("Check for breaches")')
    this.heroImage = page.locator('.hero figure img')
    this.whyUseMonitorSection = page.locator('.why-use-monitor')
    this.howItWorksSection = page.locator('.how-it-works')
    this.yourPrivacyIsSafeWithUsSection = page.locator('.safe-with-us')
    this.landingFAQSection = page.locator('.top-questions-about-monitor')
    this.seeIfDataBreachSection = page.locator('.see-if-data-breach')
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
      this.signUpButton.click(),
      // FxA can take a while to load on stage:
      this.page.waitForURL('**/oauth/**', { timeout: 120 * 1000 })
    ])
  }

  async links(){
    return {
      // identify expected URLs
      mozillaLogoUrl: "https://www.mozilla.org",
      allBreachesUrl: "/breaches",
      FAQUrl: "/firefox-monitor-faq",
      TermsUrl: "/privacy/firefox-monitor",
      GithubUrl: "https://github.com/mozilla/blurts-server",
    }
  }

  async goToSignIn () {
    this.signInButton.click()
    // FxA can take a while to load on stage:
    await this.page.waitForURL('**/oauth/**', { timeout: 120 * 1000 })
  }

  async openFirefoxAppsServices () {
    await this.firefoxAppsServices.click()
  }

  async clickFirefoxLogo () {
    await this.firefoxLogo.click()
  }

  async heroSectionTexts(){
    return {
      heroHeaderText: "Find out if your personal information has been compromised",
      heroDescriptionText: "Stay safe with privacy tools from the makers of Firefox that protect you from hackers and companies that publish and sell your personal information. We'll alert you of any known data breaches, find and remove your exposed info and continually watch for new exposures.",
      heroEmailInputPlaceholder: "Enter email address",
    }
  }

  async checkBanner(){
    await this.page.waitForSelector('//div[class^="FalseDoorBanner_falseDoorTest"]',{
      state: "visible"
  });

    if(await this.falseBannerOpenButton.isVisible()){
      await this.falseBannerCloseButton.click({ force: true })
    }
  }

  async enterScanEmail(email){
    await this.scanEmailAddressInput.fill(email)
    await this.checkForBreachesButton.click()
  }
}
