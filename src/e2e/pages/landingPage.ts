/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";
import { waitForUrlOrTimeout } from "../utils/helpers";

export class LandingPage {
  readonly page: Page;
  readonly reuseButton: Locator;
  readonly reuseEmailInputField: Locator;
  readonly reuseParagraph: Locator;
  readonly signInButton: Locator;

  readonly scanEmailAddressInput: Locator;
  readonly getFreeScanButton: Locator;

  // landing page redesign
  readonly monitorLandingHeader: Locator;
  readonly monitorHeroTitle: Locator;
  readonly monitorHeroSubtitle: Locator;
  readonly monitorHeroFormEmailInputField: Locator;
  readonly monitorHeroFormInputSubmitButton: Locator;
  readonly monitorHeroExposuresGraphic: Locator;
  readonly monitorExposuresGraphicNumber: Locator;
  readonly monitorLandingMidHeading: Locator;

  // we'll help you fix your exposures section
  readonly landingFixExposuresSection: Locator;
  readonly fixExposuresTitle: Locator;
  readonly fixExposuresSubtitle: Locator;
  readonly fixExposuresFormEmailInputField: Locator;
  readonly fixExposuresFormInputSubmitButton: Locator;
  readonly fixExposuresGraphic: Locator;

  // what info could be at risk section
  readonly couldBeAtRiskSection: Locator;
  readonly couldBeAtRiskTitle: Locator;
  readonly couldBeAtRiskSubtitle: Locator;
  readonly couldBeAtRiskFormEmailInputField: Locator;
  readonly couldBeAtRiskFormInputSubmitButton: Locator;
  readonly couldBeAtRiskGraphic: Locator;

  // scan your email to get started section
  readonly getStartedScanSection: Locator;
  readonly getStartedScanTitle: Locator;
  readonly getStartedScanFormEmailInputField: Locator;
  readonly getStartedScanFormSubmitButton: Locator;

  // choose your level of protection section
  readonly chooseLevelSection: Locator;

  // FAQ section
  readonly faqSection: Locator;

  // take back control of your data section
  readonly takeBackControlSection: Locator;
  readonly takeBackControlTitle: Locator;
  readonly takeBackControlFormEmailInputField: Locator;
  readonly takeBackControlFormSubmitButton: Locator;

  // landing footer
  readonly footerSection: Locator;
  readonly mozillaFooterLogoLink: Locator;
  readonly faqLink: Locator;
  readonly termsLink: Locator;
  readonly privacyLink: Locator;
  readonly githubLink: Locator;

  // Choose your level of protection
  readonly startFreeMonitoringButton: Locator;
  readonly getDataRemoval: Locator;
  readonly getDataRemovalYearly: Locator;
  readonly getDataRemovalMonthly: Locator;

  readonly freeMonitoringTooltipTrigger: Locator;
  readonly freeMonitoringTooltipText: Locator;
  readonly monitorPlusTooltipTrigger: Locator;
  readonly monitorPlusTooltipText: Locator;
  readonly closeTooltips: Locator;

  // Landing-page-free-scan-cta experiment enabled
  readonly emailInputPrompt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.freeMonitoringTooltipTrigger = page
      .getByRole("gridcell", { name: "Manual removal" })
      .getByLabel("Open tooltip");
    this.freeMonitoringTooltipText = page.getByText(
      "We’ll let you know which data brokers are selling your info so you can contact them to request removal.",
    );
    this.monitorPlusTooltipTrigger = page
      .getByRole("gridcell", { name: "Automatic removal" })
      .getByLabel("Open tooltip");
    this.monitorPlusTooltipText = page.getByText(
      "We’ll automatically request removal of your private info across more than ⁨190⁩ data broker sites.",
    );
    this.closeTooltips = page.locator(
      '//div[starts-with(@class, "PlansTable_popoverUnderlay")]',
    );
    this.getDataRemoval = page.getByRole("link", { name: "Get data removal" });
    this.getDataRemovalYearly = page.getByLabel("Price").getByText("Yearly");
    this.getDataRemovalMonthly = page.getByLabel("Price").getByText("Monthly");
    this.reuseButton = page.locator('button[type="submit"]');
    this.reuseEmailInputField = page.locator('input[type="email"]');
    this.reuseParagraph = page.getByRole("paragraph");
    this.scanEmailAddressInput = page.locator("#scan-email-address");
    this.getFreeScanButton = page
      .getByRole("button", {
        name: "Get free scan",
      })
      .first();

    // redesign landing page
    this.monitorLandingHeader = page.getByRole("heading", {
      name: "Mozilla Monitor",
    });
    this.signInButton = page.getByRole("button", { name: "Sign In" }).first();

    // hero section
    this.monitorHeroTitle = page.getByRole("heading", {
      name: "Find where your private info is exposed — and take it back",
    });
    this.monitorHeroSubtitle = page.getByRole("paragraph").first();
    this.monitorHeroFormEmailInputField = page
      .locator('input[type="email"]')
      .first();
    this.monitorHeroFormInputSubmitButton = page
      .getByRole("button", { name: "Get free scan" })
      .first();
    this.monitorHeroExposuresGraphic = page.locator("header svg");
    this.monitorExposuresGraphicNumber = page.getByRole("img").first();
    this.monitorLandingMidHeading = page.getByRole("heading", {
      name: "There’s a $240 billion industry of data brokers selling your private information for profit. It’s time to take back your privacy.",
    });

    // fix exposures section
    this.landingFixExposuresSection = page
      .locator("span")
      .filter({ has: page.getByText("We’ll help you fix your exposures") });
    this.fixExposuresTitle = this.landingFixExposuresSection.filter({
      has: page.getByRole("heading", {
        name: "We’ll help you fix your exposures",
      }),
    });
    this.fixExposuresSubtitle = this.landingFixExposuresSection.filter({
      has: this.reuseParagraph,
    });
    this.fixExposuresFormEmailInputField =
      this.landingFixExposuresSection.filter({
        has: this.reuseEmailInputField,
      });
    this.fixExposuresFormInputSubmitButton =
      this.landingFixExposuresSection.filter({ has: this.reuseButton });
    this.fixExposuresGraphic = page.getByRole("img", {
      name: "Progress card delineating exposures that are fixed, in progress or manually fixed",
    });

    // What info could be at risk?
    this.couldBeAtRiskSection = page
      .locator("span")
      .filter({ has: page.getByText("What info could be at risk?") });
    this.couldBeAtRiskTitle = this.couldBeAtRiskSection.filter({
      has: page.getByRole("heading", { name: "What info could be at risk?" }),
    });
    this.couldBeAtRiskSubtitle = this.couldBeAtRiskSection.filter({
      has: this.reuseParagraph,
    });
    this.couldBeAtRiskFormEmailInputField = this.couldBeAtRiskSection.filter({
      has: this.reuseEmailInputField,
    });
    this.couldBeAtRiskFormInputSubmitButton = this.couldBeAtRiskSection.filter({
      hasText: "Get free scan",
    });
    this.couldBeAtRiskGraphic = page.locator(
      'img[data-testid="leaked-password-example"]',
    );

    // scan your email to get started section
    this.getStartedScanSection = page
      .locator("div")
      .filter({ has: page.getByText("Scan your email to get started") })
      .last();
    this.getStartedScanTitle = this.getStartedScanSection.filter({
      has: page.getByText("Scan your email to get started"),
    });
    this.getStartedScanFormEmailInputField = this.getStartedScanSection.filter({
      has: this.reuseEmailInputField,
    });
    this.getStartedScanFormSubmitButton = this.getStartedScanSection.filter({
      hasText: "Get free scan",
    });

    // choose your level of protection section
    this.chooseLevelSection = page
      .locator("div")
      .filter({ has: page.getByText("Choose your level of protection") })
      .last();

    // FAQ section
    this.faqSection = page
      .locator("div")
      .filter({ has: page.getByText("Frequently asked questions") })
      .last();

    // take back control of your data section
    this.takeBackControlSection = page
      .locator("div")
      .filter({ has: page.getByText("Take back control of your data") })
      .last();
    this.takeBackControlTitle = this.takeBackControlSection.filter({
      has: page.getByText("Take back control of your data"),
    });
    this.takeBackControlFormEmailInputField =
      this.takeBackControlSection.filter({ has: this.reuseEmailInputField });
    this.takeBackControlFormSubmitButton = this.takeBackControlSection.filter({
      has: this.reuseButton,
    });

    // footer section
    this.footerSection = page.locator("footer");
    this.mozillaFooterLogoLink = page
      .locator("footer")
      .filter({ has: page.getByRole("link", { name: "Mozilla" }) });
    this.faqLink = page
      .locator("footer")
      .filter({ has: page.getByRole("link", { name: "FAQs" }) });
    this.termsLink = page
      .locator("footer")
      .filter({ has: page.getByRole("link", { name: "Terms of Service" }) });
    this.privacyLink = page
      .locator("footer")
      .filter({ has: page.getByRole("link", { name: "Privacy Notice" }) });
    this.githubLink = page
      .locator("footer")
      .filter({ has: page.getByRole("link", { name: "Github" }) });

    // Choose your level of protection
    this.startFreeMonitoringButton = page.getByRole("button", {
      name: "Start free monitoring",
    });

    // Landing-page-free-scan-cta experiment enabled
    this.emailInputPrompt = page.locator(
      '//label[text()="Enter your email address to check for data breach exposures and sites selling your info."]',
    );
  }

  async open() {
    await this.page.goto(process.env.E2E_TEST_BASE_URL as string);
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
    await this.page.waitForTimeout(500); // sign in button may not be loaded at this point.
    await this.signInButton.click({ force: true });
    // FxA can take a while to load on stage:
    await this.page.waitForURL("**/oauth/**", { timeout: 60_000 });
  }

  async enterFreeScanEmail(email: string) {
    await this.scanEmailAddressInput.fill(email);
    await this.getFreeScanButton.click();

    return await waitForUrlOrTimeout(this.page, "/scan", 5000);
  }
}
