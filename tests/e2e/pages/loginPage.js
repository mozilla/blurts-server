exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInputField = page.locator('.email');
    this.passwordInputField = page.locator('#password');
    this.continueButton = page.locator('#submit-btn');
  }

  async continue(email) {
    await Promise.all([
      this.page.waitForNavigation(),
      this.continueButton.click()
    ]);
  }

  async enterEmail(email) {
    await this.emailInputField.fill(email);
    await this.continue();
  }

  async enterPassword(password) {
    await this.passwordInputField.fill(password);
    await this.continue();
  }

  async login(email, password) {
    await this.enterEmail(email);    
    await this.enterPassword(password);
  }
};
