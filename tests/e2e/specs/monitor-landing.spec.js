const { test, expect } = require('@playwright/test');
const { BreachPage } = require('../pages/breachPage');
const { HomePage } = require('../pages/homePage');
const { LandingPage } = require('../pages/landingPage');
const { LoginPage } = require('../pages/LoginPage');
const { SecurityPage } = require('../pages/securityTipsPage');
const { injectAxe, getViolations, checkA11y } = require('axe-playwright');
const { generateRandomWord, getEmail } = require('../utils/helpers');
const { RegisterPage } = require('../pages/registerPage');

test.describe('Monitor Landing Page', () => {
  let landingPage;
  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.open();
  });

  test('Verify Monitor landing page elements exist in DOM', async ({
    page
  }) => {
    await expect(page).toHaveTitle(/Firefox Monitor/);
    await expect(page.locator('#scan-user-email')).toBeVisible();
    await expect(page.locator('.latest-breach-info')).toBeVisible();
  });

  test('Verify Landing visually', async () => {
    await expect(landingPage.header).toHaveScreenshot('header.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.02
    });

    await expect(landingPage.monitorLanding).toHaveScreenshot(
      'monitorLanding.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02
      }
    );

    await expect(landingPage.footer).toHaveScreenshot('footer.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.02
    });
  });

  test('Verify breaches page', async ({ page }) => {
    await landingPage.goToBreaches();

    const breachPage = new BreachPage(page);
    expect(await breachPage.breachCardsIndividual.count()).toEqual(15);
    await expect(breachPage.showAllbreachesButton).toBeVisible();

    await expect(breachPage.breachPageTitleBanner).toHaveScreenshot(
      'breachPageTitleBanner.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02
      }
    );

    await expect(breachPage.breachPageSearchSection).toHaveScreenshot(
      'breachPageSearchSection.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02,
        mask: [breachPage.breachCards, breachPage.vpnBanner]
      }
    );
  });

  test('Verify security tips page', async ({ page }) => {
    await landingPage.goToSecurityTips();

    const securityPage = new SecurityPage(page);
    await expect(securityPage.SecurityPageUI).toHaveScreenshot(
      'SecurityPageUI.png',
      {
        animations: 'disabled',
        maxDiffPixelRatio: 0.02,
        mask: [securityPage.vpnBanner]
      }
    );
  });

  test('Verify breach check on landing page', async ({ page }) => {
    const testEmail = generateRandomWord(7) + '_testacct2@restmail.net';
    await page.type(landingPage.checkForBreachesEmailInput, testEmail, {
      delay: 50
    });
    await landingPage.CheckForBreachesButton.click();

    expect(page.url()).toContain('/scan');
    expect(await landingPage.emailScannedForBreaches.textContent()).toContain(
      testEmail
    );
    expect(await landingPage.breachResults.textContent()).toContain('0');
  });

  test('Verify login functionality', async ({ page, browserName }) => {
    if (browserName !== 'firefox') {
      await landingPage.goToLogin();

      const loginPage = new LoginPage(page);
      await loginPage.login(
        process.env.TESTACCOUNT_EMAIL,
        process.env.TESTACCOUNT_PASSWORD
      );

      expect(page.url()).toContain(
        'https://monitor.firefox.com/user/dashboard'
      );
    }
  });
});

test.skip('Monitor landing page accessibility check', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/`);
    await injectAxe(page);
  });

  // test('Check entire page accessibility', async ({ page }) => {
  //   await checkA11y(page, null, {
  //     detailedReport: true,
  //     detailedReportOptions: { html: true }
  //   });
  // });

  // test('Accessibility test on Monitor landing page', async ({ page }) => {
  //   // inject the axe-core runtime into the page under test
  //   await injectAxe(page);

  //   const violations = await getViolations(page, null, {
  //     // @ts-ignore
  //     detailedReport: true,
  //     axeOptions: {
  //       runOnly: {
  //         type: 'tag',
  //         values: ['wcag2a', 'best-practice'] // all tags and standards listed here: https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
  //       }
  //     }
  //   });
  //   expect(violations).toEqual([]);
  // });
});
