exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.passwordInputField = page.locator('#password');
    this.passwordConfirmInputField = page.locator('#vpassword');
    this.ageInputField = page.locator('#age');
    this.testFirefoxProductsOption = '#test-pilot';
    this.createAccountButton = page.locator('#submit-btn');
    this.verifyCodeInputField = page.locator(
      '//div[@id="main-content"]/section/form/div[1]/input'
    );
  }

  async continue() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.createAccountButton.click()
    ]);
  }

  async enterPassword(password) {
    await this.passwordInputField.type(password);
  }

  async enterPasswordConfirmation(password) {
    await this.passwordConfirmInputField.type(password);
  }

  async enterAge() {
    const randomAge = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
    await this.ageInputField.type(randomAge.toString());
  }

  async createAccount() {
    await this.enterPassword(process.env.TESTACCOUNT_PASSWORD);
    await this.enterPasswordConfirmation(process.env.TESTACCOUNT_PASSWORD);
    await this.enterAge();
    await this.page.check(this.testFirefoxProductsOption);
    await this.continue();
  }
};
