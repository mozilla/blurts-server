exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.avatar = page.locator('#avatar-wrapper');
    this.dashboardText = page.locator('.dashboard-summary').textContent();
    this.breachSummary = page.locator('.dash-stats .breach-stat-row').count();
    this.verificationLink = page.locator('#dashboard > div.row.jst-cntr');
    this.emailAddresses = page
      .locator('//*[@id="dashboard"]/div[2]');
    this.inviteEmailInput = page.locator('#email-add');
    this.manageAccountButton = page.locator('text=Manage Email Addresses');
    this.summaryDashBoard = page.locator('.dashboard-summary');
    this.summaryDashBoardEmail = page.locator('.welcome-back');
    this.numberOfEmailsMonitoredCount = page.locator(
      '//div[contains(@class, "breach-stat-number") and contains(@class, "monitoredEmails")]'
    );
    this.numberOfKnownBreachesCount = page.locator(
      '//div[contains(@class, "breach-stat-number") and contains(@class, "numBreaches")]'
    );
    this.numberOfPasswordsExposedCount = page.locator(
      '//div[contains(@class, "breach-stat-number") and contains(@class, "passwords")]'
    );
    this.email = page.locator('.e-info-content span').first();
    this.addAnotherEmailInput = page.locator('#dashboard-add-email');
    this.takeBackControlDiv = page.locator(
      '.take-back-control-gradient .take-back-control-banner'
    );
    this.footer = page.locator('footer .row-full-width');
  }

  async open() {
    await this.page.goto('/user/dashboard');
  }

  async goToManageAccount() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.manageAccountButton.click()
    ]);
  }
};
