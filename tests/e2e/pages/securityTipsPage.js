exports.SecurityPage = class SecurityPage {
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
    this.SecurityPageUI = page.locator('.security-tips .no-vertical-padding');
  }

  async open() {
    await this.page.goto('/security-tips', {
      waitUntil: 'networkidle'
    });
    await this.SecurityPageUI.elementHandle();
  }

  async allBreachCards() {
    return this.BreachCards;
  }

  async breachPageUI() {
    return this.breachUI;
  }
};
