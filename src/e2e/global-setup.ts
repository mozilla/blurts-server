/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { setEnvVariables } from "./utils/helpers";
import { AuthPage } from "./pages/authPage.js";
import { LandingPage } from "./pages/landingPage.js";
import { chromium } from "@playwright/test";
import { exec } from "child_process";

async function globalSetup() {
  // start local web server if appropriate env variable supplied
  await maybeStartWebServer();

  // playwright setup
  const browser = await chromium.launch();
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

async function maybeStartWebServer(): Promise<void> {
  if (process.env.E2E_START_LOCAL_SERVER === "true") {
    console.log("[e2e] - Starting the local web server...");

    // define port and timeout
    const timeout = 1_800_000;

    // start the server
    const localWebServerProcess = exec("npm run build; npm start");

    // wait for the server to start with a timeout
    await new Promise<void>((resolve, reject) => {
      localWebServerProcess.stdout?.on("data", (data) => {
        if (data.includes("Ready in")) {
          resolve();
        }
      });

      setTimeout(() => {
        reject(
          new Error(
            "Local Web Server did not start within the specified timeout",
          ),
        );
      }, timeout);
    });
  } else {
    console.log("[e2e] - Skipping local web server start...");
  }
}

export default globalSetup;
