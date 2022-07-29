const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');
const {
  deleteEmailAddress,
  generateRandomEmail,
  getVerificationCode,
} = require('../utils/helpers');
const { RegisterPage } = require('../pages/registerPage');

test.describe('Monitor e2e check for breaches', () => {  
  let landingPage;
  let testEmail;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    testEmail = await generateRandomEmail();
    await landingPage.open();
  });

  test.afterEach(async () => {
    await deleteEmailAddress(testEmail);
  });

  test('Verify breach details are returned correctly and user can sign up', async ({ page, request }) => {    
      await page.type(landingPage.checkForBreachesEmailInput, testEmail);
      await Promise.all([
        page.waitForNavigation(),
        landingPage.checkForBreachesButton.click()
      ]);

      expect(page.url()).toContain('/scan');
      expect(await landingPage.emailScannedForBreaches.textContent()).toContain(testEmail)      
      expect(await landingPage.breachResults.textContent()).toContain('This email appeared in 0 known data breaches');

      await landingPage.alertAboutNewBreachesButton.click();
      const registerPage = new RegisterPage(page);
      await registerPage.createAccount();

      const verificationCode = await getVerificationCode(request, testEmail, page)
      await registerPage.verifyCodeInputField.fill(verificationCode);
      await registerPage.continue();

      expect(page.url()).toContain('/user/dashboard');
    
  });

  test('Verify Get email alerts when your info appears in a known breach check box', async ({ page }) => {
      await page.type(landingPage.checkForBreachesEmailInput, testEmail);
      await landingPage.newsLetterCheckBox.check();      
      await Promise.all([
        page.waitForNavigation(),
        landingPage.checkForBreachesButton.click()
      ]);

      const registerPage = new RegisterPage(page);
      await expect(registerPage.passwordConfirmInputField).toBeVisible()
  });
});
