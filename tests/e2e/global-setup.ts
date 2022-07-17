import { LandingPage } from "./pages/landingPage";
import { LoginPage } from "./pages/LoginPage";

const { chromium } = require('@playwright/test');

async function globalSetup() {
    console.log('Setting a logged in state...')
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const landingPage = new LandingPage(page);
    await page.goto(process.env.TEST_BASE_URL)
    await landingPage.goToLogin();

    const loginPage = new LoginPage(page);
    await loginPage.login(
      process.env.TESTACCOUNT_EMAIL,
      process.env.TESTACCOUNT_PASSWORD2
    );

    await page.context().storageState({ path: 'state.json' });
    await browser.close();
}

export default globalSetup;