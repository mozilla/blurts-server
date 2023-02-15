const { test, expect } = require("../fixtures/basePage");
const { defaultScreenshotOpts } = require("../utils/helpers");

test.describe("Check landing page", () => {
  test.beforeEach(async ({ landingPage }) => {
    await landingPage.open();
  });

  test("Verify sign up with new user", async ({
    page,
    authPage,
    landingPage,
    dashboardPage,
  }) => {
    // start authentication flow
    await landingPage.goToSignIn();

    // Fill out sign up form
    const randomEmail = `${Date.now()}_tstact@restmail.net`;
    await authPage.signUp(randomEmail, page);
    await page.waitForTimeout(6000);

    // assert successful login
    await expect(page).toHaveScreenshot(
      `${process.env.E2E_TEST_ENV}-signup-monitor-dashboard.png`,
      {
        defaultScreenshotOpts,
        ...{ fullPage: true },
        mask: [
          dashboardPage.dataBreachEmailDropdown,
          dashboardPage.siteFoundImage,
          dashboardPage.breachStats,
        ],
      }
    );
  });

  test.only("Verify sign in with existing user", async ({
    page,
    authPage,
    landingPage,
    dashboardPage,
  }, testInfo) => {
    // speed up test by ignore non necessary requests
    await page.route(/(analytics)/, (route) => {
      route.abort()
    })

    // start authentication flow
    await landingPage.goToSignIn();

    // sign in
    await authPage.signIn(process.env.E2E_TEST_ACCOUNT_EMAIL);

    // assert successful login
    await expect(page).toHaveScreenshot(
      `${process.env.E2E_TEST_ENV}-signin-monitor-dashboard.png`,
      {
        defaultScreenshotOpts,
        ...{ fullPage: true },
        mask: [
          dashboardPage.dataBreachEmailDropdown,
          dashboardPage.siteFoundImage,
          dashboardPage.breachStats,
        ],
      }
    );

    await testInfo.attach('signDashboard', {
      body: await page.screenshot(),
      contentType: "image/png"
    })
  });
});
