/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";
import { waitForUrlOrTimeout } from "../utils/helpers";

export class LandingPage {
  readonly page: Page;
  readonly signUpButton: Locator;
  readonly signInButton: Locator;
  readonly firefoxLogo: Locator;
  readonly whyUseMonitorSec: Locator;
  readonly howItWorksSec: Locator;
  readonly questionsAboutSec: Locator;
  readonly seeIfDataBreachSec: Locator;
  readonly mozillaFooterLogoImage: Locator;
  readonly mozillaFooterLogoLink: Locator;
  readonly allBreachesLink: Locator;
  readonly faqLink: Locator;
  readonly termsLink: Locator;
  readonly githubLink: Locator;
  readonly landingFooter: Locator;
  readonly ourMissionLink: Locator;
  readonly seeAllFAQsLink: Locator;
  readonly falseDoorBanner: Locator;
  readonly falseDoorBannerCloseButton: Locator;
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
    this.mozillaFooterLogoImage = page.getByAltText("Mozilla");
    this.mozillaFooterLogoLink = page.locator("footer a").first();
    this.allBreachesLink = page.getByRole("link", { name: "All Breaches" });
    this.faqLink = page.locator('footer a:has-text("faq")');
    this.termsLink = page.getByRole("link", { name: "Terms of Service" });
    this.githubLink = page.getByRole("link", { name: "Github" });
    this.landingFooter = page.locator(".site-footer");
    this.ourMissionLink = page.locator(
      'footer a:has-text("Learn more about our mission")',
    );
    this.seeAllFAQsLink = page.locator('footer a:has-text("See all FAQs")');
    this.falseDoorBanner = page.locator(
      '//div[starts-with(@class, "FalseDoorBanner_falseDoorTest")]',
    );
    this.falseDoorBannerCloseButton = page.locator("#close-button");
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
      faqUrl: "https://support.mozilla.org/kb/firefox-monitor-faq",
      termsUrl:
        "https://www.mozilla.org/about/legal/terms/subscription-services/",
      githubUrl: "https://github.com/mozilla/blurts-server",
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
    if (await this.falseDoorBannerCloseButton.isVisible()) {
      await this.falseDoorBannerCloseButton.click();
    }
  }

  async enterFreeScanEmail(email: string) {
    await this.scanEmailAddressInput.fill(email);
    await this.checkForBreachesButton.click();

    return await waitForUrlOrTimeout(this.page, "/scan", 5000);
  }
}
