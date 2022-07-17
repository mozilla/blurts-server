const { test, expect } = require('@playwright/test');
const { defaultScreenshotOpts } = require('../utils/helpers');
const { goToDashboard } = require('../utils/pageNavigation');

test.describe('Monitor home page', () => {
  test.use({ storageState: 'state.json' })
  
  test('Verify elements exist in DOM', async ({ page }) => {
    const homePage = await goToDashboard(page);
      
    expect(page.url()).toContain(`${process.env.TEST_BASE_URL}/user/dashboard`);
    expect(await homePage.dashboardText).toContain(
      process.env.TESTACCOUNT_EMAIL
    );
    expect(await homePage.breachSummary).toEqual(3);
    expect(await homePage.emailAddresses.textContent()).toContain(
      process.env.TESTACCOUNT_EMAIL
    );
  });

  test('Visually compare', async ({ page }) => {    
    const homePage = await goToDashboard(page);    

    await expect(homePage.summaryDashBoard).toHaveScreenshot(
      'summaryDashBoard.png',      
      {...defaultScreenshotOpts, mask: [
        homePage.numberOfEmailsMonitoredCount,
        homePage.numberOfKnownBreachesCount,
        homePage.numberOfPasswordsExposedCount,
        homePage.summaryDashBoardEmail
      ]}
    );

    await expect(homePage.emailAddresses).toHaveScreenshot(
      'emailAddressesContentField.png',      
      {...defaultScreenshotOpts,mask: [homePage.email] }
    );

    await expect(homePage.addAnotherEmailInput).toHaveScreenshot(
      'addAnotherEmailInput.png',
      defaultScreenshotOpts
    );

    await expect(homePage.takeBackControlDiv).toHaveScreenshot(
      'takeBackControlDiv.png',
      defaultScreenshotOpts
    );
  });
});
