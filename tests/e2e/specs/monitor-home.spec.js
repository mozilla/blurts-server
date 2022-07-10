const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { LandingPage } = require('../pages/landingPage');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Monitor home page', () => {
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
  });

  test('Verify elements exist in DOM', async ({ page }) => {
    const homePage = new HomePage(page);

    expect(page.url()).toContain('https://monitor.firefox.com/user/dashboard');
    expect(await homePage.dashboardText).toContain(
      process.env.TESTACCOUNT_EMAIL
    );
    expect(await homePage.breachSummary).toEqual(3);
    expect(await homePage.emailAddresses).toContain(
      process.env.TESTACCOUNT_EMAIL
    );
  });

  test('Visually compare', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.summaryDashBoard).toHaveScreenshot(
      'summaryDashBoard.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02,
        mask: [
          homePage.numberOfEmailsMonitoredCount,
          homePage.numberOfKnownBreachesCount,
          homePage.numberOfPasswordsExposedCount,
          homePage.summaryDashBoardEmail
        ]
      }
    );

    await expect(homePage.emailAddressesContentField).toHaveScreenshot(
      'emailAddressesContentField.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02,
        mask: [homePage.email]
      }
    );

    await expect(homePage.addAnotherEmailInput).toHaveScreenshot(
      'addAnotherEmailInput.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02
      }
    );

    await expect(homePage.takeBackControlDiv).toHaveScreenshot(
      'takeBackControlDiv.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02
      }
    );

    await expect(homePage.footer).toHaveScreenshot('footer.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.02
    });
  });
});
