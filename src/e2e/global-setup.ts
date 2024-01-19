/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { setEnvVariables } from "./utils/helpers";
import { AuthPage } from "./pages/authPage.js";
import { LandingPage } from "./pages/landingPage.js";
import { FullConfig, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  // playwright setup
  const browser = await chromium.launch({
    // If `headless` is set for any `use` parameter in `playwright.config.js`,
    // also use that value here:
    headless: config.projects.reduce(
      (prevValues: undefined | boolean, project) =>
        prevValues ?? project.use.headless,
      undefined,
    ),
  });
  const page = await browser.newPage();

  // generate email and set env variables
  setEnvVariables(process.env.E2E_TEST_ACCOUNT_EMAIL as string);

  // commenting out as this its not needed for now
  // // go to sign up page
  await page.goto(process.env.E2E_TEST_BASE_URL as string);
  const landingPage = new LandingPage(page);
  await landingPage.goToSignIn();

  // // register user with generated email and set as env variable
  const authPage = new AuthPage(page);
  await authPage.signIn(process.env.E2E_TEST_ACCOUNT_EMAIL as string);

  // // // create reuseable state json
  await page.context().storageState({ path: "./e2e/storageState.json" });
  await browser.close();
}

export default globalSetup;
