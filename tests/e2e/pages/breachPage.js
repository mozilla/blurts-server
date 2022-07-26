exports.BreachPage = class BreachPage {
  constructor(page) {
    this.page = page;
    this.loginButton = page.locator('#sign-in-btn');
    this.vpnBanner = page.locator('.vpn-banner');
    this.homePageNavButton = page.locator(
      '.desktop-menu [data-event-label="Home"]'
    );
    this.SecTipsNavButton = page.locator(
      '.desktop-menu [data-event-label="Security Tips"]'
    );
    this.breachCards = page.locator('#all-breaches');
    this.breachCardsIndividual = page.locator('#all-breaches a');
    this.searchBreachInput = page.locator('#fuzzy-find-input');
    this.breachPageSearchSection = page.locator('.all-breaches-main');
    this.breachPageTitleBanner = page.locator('.all-breaches-main div').first();
    this.showAllbreachesButton = page.locator('#show-hidden-breaches');
  }

  async open() {
    await this.page.goto('/breaches', {
      waitUntil: 'networkidle'
    });
  }

  async countCards() {
    return await this.breachCardsIndividual.count();
  }
};
