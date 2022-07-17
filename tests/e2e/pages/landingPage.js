exports.LandingPage = class LandingPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#sign-in-btn');
    this.vpnBanner = page.locator('.vpn-banner');
    this.header = page.locator('#navigation-wrapper section').first();
    this.monitorLanding = page.locator('.monitor-landing .landing-content');
    this.personalDataBanner = page.locator('.take-back-control-banner');
    this.homePageNavButton = page.locator(
      '.desktop-menu [data-event-label="Home"]'
    );
    this.breachesPageNavButton = page.locator(
      '.desktop-menu [data-event-label="Breaches"]'
    );
    this.secTipsNavButton = page.locator(
      '.desktop-menu [data-event-label="Security Tips"]'
    );
    this.checkForBreachesEmailInput = '#scan-email';
    this.CheckForBreachesButton = page.locator(
      '#scan-user-email [data-entrypoint="fx-monitor-check-for-breaches-blue-btn"]'
    );
    this.newsLetterCheckBox = page.locator('.create-fxa-checkbox-checkmark');
    this.breachCard = page.locator('.latest-breach-info');
    this.monitorAccountFeatures = page.locator(
      '(//section[@id="fx-account-features"]//div)[4]'
    );
    this.monitorAccountFeaturesPane = page.locator(
      '#fx-account-features div'
    );
    this.footer = page.locator('footer ul');
    this.alertAboutNewBreachesButton = page.locator('#new-scan-page');
    this.breachResults = page.locator('.scan-results-headline');
    this.emailScannedForBreaches = page.locator('#scannedEmail');
  }

  async open() {
    await this.page.goto('/', {
      waitUntil: 'networkidle'
    });
    await this.CheckForBreachesButton.elementHandle();
  }

  async goToLogin() {
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async goToBreaches() {
    await Promise.all([
      // Waits for the next navigation.
      // It is important to call waitForNavigation before click to set up waiting.
      this.page.waitForNavigation(),
      // Triggers a navigation after a timeout.
      this.breachesPageNavButton.click()
    ]);
  }

  async goToSecurityTips() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.secTipsNavButton.click()
    ]);
  }

  async isBreachCard() {
    return this.breachCard.isVisible();
  }
};
