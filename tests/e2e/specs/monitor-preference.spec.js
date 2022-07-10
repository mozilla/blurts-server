const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { LandingPage } = require('../pages/landingPage');
const { LoginPage } = require('../pages/LoginPage');
const { PreferencePage } = require('../pages/prefPage');

test.describe('Monitor Preference page', () => {
  test.skip(
    ({ browserName }) => browserName !== 'chromium' && browserName !== 'webkit',
    'Chromium and webkit only!'
  );

  test.beforeEach(async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.open();
    await landingPage.goToLogin();

    const loginPage = new LoginPage(page);
    await loginPage.login(
      process.env.TESTACCOUNT_EMAIL,
      process.env.TESTACCOUNT_PASSWORD
    );

    const homePage = new HomePage(page);
    await homePage.goToManageAccount();
  });

  test('Verify account preference breach alert notifications and email addresses appearance', async ({
    page
  }) => {
    const prefPage = new PreferencePage(page);

    await expect(prefPage.breachAlertNotifications).toHaveScreenshot(
      'breachAlertNotifications.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02,
        mask: [prefPage.emailName]
      }
    );

    await expect(prefPage.breachEmailAddresses).toHaveScreenshot(
      'breachEmailAddresses.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02,
        mask: [prefPage.accountPreferenceBreachCount]
      }
    );

    await expect(prefPage.footer).toHaveScreenshot('footer.png', {
      animations: 'disabled'
    });
  });
});
