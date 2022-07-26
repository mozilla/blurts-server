const { test, expect } = require('@playwright/test');
const { defaultScreenshotOpts } = require('../utils/helpers');
const { goToManageAccount } = require('../utils/pageNavigation');

test.describe('Monitor Preference page', () => {
  test.skip(({ browserName }) => browserName !== 'webkit', 'Webkit only image comparisons!');
  test.use({ storageState: 'state.json' })  

  test('Verify account preference breach alert notifications and email addresses appearance', async ({
    page
  }) => {
    const prefPage = await goToManageAccount(page)

    await expect(prefPage.breachAlertNotifications).toHaveScreenshot(
      'breachAlertNotifications.png',
      {...defaultScreenshotOpts, mask: [prefPage.emailName]}
    );

    await expect(prefPage.breachEmailAddresses).toHaveScreenshot(
      'breachEmailAddresses.png',
      {...defaultScreenshotOpts, mask: [prefPage.accountPreferenceBreachCount]}
    );

    await expect(prefPage.footer).toHaveScreenshot('footer.png', defaultScreenshotOpts);
  });
});
