/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { expect, request, Page, Locator, test } from "@playwright/test";
import { LandingPage } from "../pages/landingPage.js";
import { AuthPage } from "../pages/authPage.js";

enum ENV {
  local = "local",
  stage = "stage",
  prod = "prod",
  heroku = "heroku",
}

interface DefaultScreenshotOpts {
  animations: "disabled" | "allow";
  maxDiffPixelRatio: number;
  timeout: number;
  caret?: "hide" | "initial" | undefined;
  fullPage?: boolean;
}

export const defaultScreenshotOpts: Partial<DefaultScreenshotOpts> = {
  animations: "disabled",
  maxDiffPixelRatio: 0.04,
  timeout: 5_000,
};

export const ENV_URLS = {
  local: "http://localhost:6060",
  heroku: "https://fx-breach-alerts.herokuapp.com",
  stage: "https://monitor-stage.allizom.org",
  prod: "https://monitor.mozilla.org",
};

export const setEnvVariables = (
  email = process.env.E2E_TEST_ACCOUNT_EMAIL as string,
) => {
  process.env["E2E_TEST_ENV"] =
    (process.env.E2E_TEST_ENV as string) ?? ENV.stage;
  process.env["E2E_TEST_ACCOUNT_EMAIL"] = email;
  process.env["E2E_TEST_BASE_URL"] =
    ENV_URLS[process.env.E2E_TEST_ENV as ENV] ?? ENV_URLS.stage;
};

export const getBaseUrl = () => {
  return ENV_URLS[process.env.E2E_TEST_ENV as ENV] || ENV_URLS.local;
};

export const delay = async (time: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

// this is particular to the free email scan behavior -- fast follow to optimize
export const waitForUrlOrTimeout = async (
  page: Page,
  urlSubstring: string,
  timeout: number,
) => {
  let tries = 0;
  const startTime = Date.now();
  while (Date.now() - startTime > timeout || tries < 10) {
    if (page.url().includes(urlSubstring)) {
      return true;
    }

    tries++;
    await delay(500);
  }
};

export const getVerificationCode = async (
  testEmail: string,
  page: Page,
  attemptsRemaining = 5,
): Promise<string | undefined> => {
  try {
    const context = await request.newContext();
    const restmailUrl = `http://restmail.net/mail/${testEmail}`;
    const res = await context.get(restmailUrl, {
      failOnStatusCode: false,
    });
    const resJson = await res.json();

    if (resJson.length === 0) {
      throw new Error("Data is not available on restmail, yet");
    }

    const verificationCode = resJson[0].headers["x-verify-short-code"];
    return verificationCode as string;
  } catch (error) {
    console.error("Error fetching verification code from restmail", error);

    const retryTimeout = (5 - attemptsRemaining) * 1500;
    console.log(`Trying again in ${retryTimeout}ms`);
    if (attemptsRemaining === 0) {
      throw new Error("Unable to retrieve restmail data");
    }
    await page.waitForTimeout(retryTimeout);
    return getVerificationCode(testEmail, page, attemptsRemaining - 1);
  }
};

const enterYourEmail = async (page: Page) => {
  const maybeEmailInput = 'input[name="email"]';
  await page.waitForSelector(maybeEmailInput, { timeout: 2000 });
  const signInButton = page.locator("#submit-btn");
  await page
    .locator(maybeEmailInput)
    .fill(process.env.E2E_TEST_ACCOUNT_EMAIL_FREE as string);

  // force is needed when another element intercepts pointer events
  await signInButton.click({ force: true });
  await page.waitForTimeout(500);
  await checkAuthState(page);
};

const enterYourPassword = async (page: Page) => {
  await page
    .locator("#password")
    .fill(process.env.E2E_TEST_ACCOUNT_PASSWORD as string);

  // using force here due to fxa issue with playwright
  await page.locator("#submit-btn").click();
  await page.waitForTimeout(500);
  await checkAuthState(page);
};

export const checkAuthState = async (page: Page) => {
  const authStateTitleString = await page
    .locator(".card-header")
    .textContent({ timeout: 1000 });

  if (authStateTitleString) {
    const checkIfTitleContains = (potentialTitle: string) => {
      return authStateTitleString?.includes(potentialTitle);
    };

    switch (true) {
      case checkIfTitleContains("Enter your email"):
        await enterYourEmail(page);
        break;
      case checkIfTitleContains("Enter your password"):
        await enterYourPassword(page);
        break;
      // case checkIfTitleContains('Set your password'):
      //   await setYourPassword(page)
      //   break
      // case checkIfTitleContains('Enter confirmation code'):
      //   await enterConfirmationCode(page)
      //   break
      // case checkIfTitleContains('Sign in'):
      //   await signIn(page)
      //   break
      default:
        break;
    }
  }
};

/**
 * Strings may sometimes contain invisible unicode char's that make it hard to do assertions.
 *
 * @param text
 */
export function removeUnicodeChars(text: string): string {
  return text.replace(/[^\x00-\x7F]/g, "");
}

export const clickOnATagCheckDomain = async (
  aTag: Locator,
  host: string | RegExp = /.*/,
  path: string | RegExp = /.*/,
  page: Page,
) => {
  if (typeof host === "string")
    host = new RegExp(
      escapeRegExp(host.replace(/^(https?:\/\/)/, "").replace(/:\d+$/, "")),
    );
  if (typeof path === "string") path = new RegExp(".*" + path + ".*");

  const href = await aTag.getAttribute("href");
  if (href === null) return false;

  await page.goto(href);
  const currentUrl = new URL(page.url());
  const perceivedHost = currentUrl.hostname;
  const perceivedPath = currentUrl.pathname;
  expect(host.test(perceivedHost)).toBeTruthy();
  expect(path.test(perceivedPath)).toBeTruthy();
  await page.goBack();
};

export const escapeRegExp = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export const forceLoginAs = async (
  email: string,
  password: string,
  page: Page,
  landingPage: LandingPage,
  authPage: AuthPage,
) => {
  test.slow(
    true,
    "this test runs through the welcome scan flow, increasing timeout to address it",
  );

  // speed up test by ignoring non necessary requests
  await page.route(/(analytics)/, async (route) => {
    await route.abort();
  });
  await page.context().clearCookies();
  await landingPage.open();
  await landingPage.goToSignIn();
  await page
    .locator("//input[@type='password'] | //div/input[@type='email']")
    .waitFor({ state: "visible" });
  const visible = await authPage.useDifferentEmailButton.isVisible();
  if (visible) {
    await authPage.useDifferentEmailButton.click();
    await page.waitForURL(/^(?!.*signin).*/);
  }
  await authPage.signIn(email, password);
  await page.waitForURL("**/user/dashboard");
  await expect(page).toHaveURL(/.*\/user\/dashboard.*/);
};

export async function emailInputShouldExist(landingPage: LandingPage) {
  return 0 < (await landingPage.emailInputPrompt.count());
}

export const resetTestData = async (
  page: Page,
  hibp: boolean,
  onerep: boolean,
) => {
  const baseUrl = process.env.SERVER_URL!;
  const param1 = `${hibp ? "hibp=true" : ""}`;
  const param2 = `${onerep ? "onerep=true" : ""}`;
  let delim = "";
  if (param1 && param2) delim = "&";
  const params = param1 + delim + param2;
  const completeUrl = baseUrl + "/api/mock/resetTestData?" + params;
  const res = await page.request.get(completeUrl);
  expect(res.ok()).toBeTruthy();
};
