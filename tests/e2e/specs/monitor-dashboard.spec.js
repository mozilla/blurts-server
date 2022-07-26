const { test, expect } = require('@playwright/test');
const { defaultScreenshotOpts } = require('../utils/helpers');
const { goToDashboard } = require('../utils/pageNavigation');

test.describe('Monitor dashboard page', () => {
  test.use({ storageState: 'state.json' })
  
  test('Verify elements exist in DOM', async ({ page }) => {
    const dashboardPage = await goToDashboard(page);
      
    expect(page.url()).toContain(`${process.env.TEST_BASE_URL}/user/dashboard`);
    expect(await dashboardPage.dashboardText).toContain(
      process.env.TESTACCOUNT_EMAIL
    );
    expect(await dashboardPage.breachSummary).toEqual(3);
    expect(await dashboardPage.emailAddresses.textContent()).toContain(
      process.env.TESTACCOUNT_EMAIL
    );
  });
});


test.describe('Monitor dashboard page - Visual Regression', () => { 
  test.skip(({ browserName }) => browserName !== 'webkit', 'Webkit only image comparisons!');
  test.use({ storageState: 'state.json' })

  test('Visually compare', async ({ page }) => {    
    const dashboardPage = await goToDashboard(page);    

    await expect(dashboardPage.summaryDashBoard).toHaveScreenshot(
      'summaryDashBoard.png',
      {...defaultScreenshotOpts, mask: [
        dashboardPage.numberOfEmailsMonitoredCount,
        dashboardPage.numberOfKnownBreachesCount,
        dashboardPage.numberOfPasswordsExposedCount,
        dashboardPage.summaryDashBoardEmail
      ]}
    );

    await expect(dashboardPage.emailAddresses).toHaveScreenshot(
      'emailAddressesContentField.png',      
      {...defaultScreenshotOpts,mask: [dashboardPage.email] }
    );

    expect(await dashboardPage.addAnotherEmailInput.screenshot()).toMatchSnapshot('addAnotherEmailInput.png', { ...defaultScreenshotOpts.maxDiffPixelRatio });

    await expect(dashboardPage.takeBackControlDiv).toHaveScreenshot(
      'takeBackControlDiv.png',
      defaultScreenshotOpts
    );
  });
});
