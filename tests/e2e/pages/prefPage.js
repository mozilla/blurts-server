exports.PreferencePage = class PreferencePage {
  constructor(page) {
    this.page = page;
    this.accountPreferenceUI = page.locator('section.flx:nth-child(4)');
    this.breachAlertNotifications = page.locator('((//section)[6]/div)[1]');
    this.breachEmailAddresses = page.locator('((//section)[6]/div)[2]');
    this.accountPreferenceBanner = page.locator('.clear-header');
    this.accountPreferenceBreachCount = page.locator('.e-info');
    this.emailName = page.locator('.radio-label span');
    this.changePrimaryEmailButton = page.locator('.e-toggle-info-wrapper a');
    this.footer = page.locator('footer .row-full-width');
  }
};
