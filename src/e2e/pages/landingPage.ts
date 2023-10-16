/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";

export class LandingPage {
  readonly page: Page;
  readonly signUpButton: Locator;
  readonly signInButton: Locator;
  readonly firefoxLogo: Locator;
  readonly whyUseMonitorSec: Locator;
  readonly howItWorksSec: Locator;
  readonly questionsAboutSec: Locator;
  readonly seeIfDataBreachSec: Locator;
  readonly MozillaFooterLogoImage: Locator;
  readonly MozillaFooterLogoLink: Locator;
  readonly AllBreachesLink: Locator;
  readonly FAQLink: Locator;
  readonly TermsLink: Locator;
  readonly GithubLink: Locator;
  readonly landingFooter: Locator;
  readonly ourMissionLink: Locator;
  readonly seeAllFAQsLink: Locator;
  readonly falseDoorBanner: Locator;
  readonly falseBannerCloseButton: Locator;
  readonly scanEmailAddressInput: Locator;
  readonly checkForBreachesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = page.getByRole("button", { name: "Get Started" });
    this.signInButton = page.getByRole("button", { name: "Sign In" });
    this.firefoxLogo = page.locator(
      '//img[starts-with(@class, "monitor-logo")]',
    );
    this.whyUseMonitorSec = page.locator(".why-use-monitor");
    this.howItWorksSec = page.locator(".how-it-works");
    this.questionsAboutSec = page.locator(".top-questions-about-monitor");
    this.seeIfDataBreachSec = page.locator(".see-if-data-breach");
    this.MozillaFooterLogoImage = page.getByAltText("Mozilla");
    this.MozillaFooterLogoLink = page.locator("footer a").first();
    this.AllBreachesLink = page.getByRole("link", { name: "All Breaches" });
    this.FAQLink = page.locator('footer a:has-text("faq")');
    this.TermsLink = page.getByRole("link", { name: "Terms & Privacy" });
    this.GithubLink = page.getByRole("link", { name: "Github" });
    this.landingFooter = page.locator(".site-footer");
    this.ourMissionLink = page.locator(
      'footer a:has-text("Learn more about our mission")',
    );
    this.seeAllFAQsLink = page.locator('footer a:has-text("See all FAQs")');
    this.falseDoorBanner = page.locator(
      '//div[starts-with(@class, "FalseDoorBanner_falseDoorTest")]',
    );
    this.falseBannerCloseButton = page.locator("#close-button");
    this.scanEmailAddressInput = page.locator("#scan-email-address");
    this.checkForBreachesButton = page.getByRole("button", {
      name: "Check for breaches",
    });
  }

  async open() {
    await this.page.goto(process.env.E2E_TEST_BASE_URL as string);
  }

  async goToSignUp() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.signUpButton.click(),
      // FxA can take a while to load on stage:
      this.page.waitForURL("**/oauth/**", { timeout: 120 * 1000 }),
    ]);
  }

  links() {
    return {
      // identify expected URLs
      mozillaLogoUrl: "https://www.mozilla.org",
      allBreachesUrl: "/breaches",
      FAQUrl: "/firefox-monitor-faq",
      TermsUrl: "/privacy/firefox-monitor",
      GithubUrl: "https://github.com/mozilla/blurts-server",
    };
  }

  async goToSignIn() {
    await this.signInButton.click();
    // FxA can take a while to load on stage:
    await this.page.waitForURL("**/oauth/**", { timeout: 120 * 1000 });
  }

  async clickFirefoxLogo() {
    await this.firefoxLogo.click();
  }

  async maybeClearBanner() {
    if (await this.falseDoorBanner.isVisible()) {
      await this.falseBannerCloseButton.click();
    }
  }

  async enterScanEmail(email: string) {
    await this.scanEmailAddressInput.fill(email);
    await this.checkForBreachesButton.click();
  }
}
