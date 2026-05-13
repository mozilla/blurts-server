/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Page, Route } from "@playwright/test";
import { getBaseTestEnvUrl } from "./environment";
import { fetchRestmailVerificationCode } from "./user";

// Strip fxa-ci from third-party domains to avoid CORS preflight failures.
// extraHTTPHeaders sends fxa-ci on ALL requests (needed because page.route()
// can't intercept navigation requests after server-side redirects).
// FxA domains (accounts, api-accounts, oauth, profile on *.mozaws.net)
// are NOT listed — they need the header to bypass Fastly's CAPTCHA.
const STRIP_FXA_CI_PATTERNS = [
  "**/accounts-cdn*/**",
  "**/*.sentry.io/**",
  "**/*.stripe.com/**",
  "**/*.stripe.network/**",
  "**/www.google-analytics.com/**",
  "**/www.googletagmanager.com/**",
];

export async function setupFxaCiRoutes(page: Page) {
  if (!process.env.FXA_CI_SECRET) return;
  const stripFxaCi = (route: Route) => {
    const headers = { ...route.request().headers() };
    delete headers["fxa-ci"];
    return route.continue({ headers });
  };
  for (const pattern of STRIP_FXA_CI_PATTERNS) {
    await page.route(pattern, stripFxaCi);
  }
}

export function getFxaCiHeaders(): Record<string, string> {
  return process.env.FXA_CI_SECRET
    ? { "fxa-ci": process.env.FXA_CI_SECRET }
    : {};
}

async function waitForFxa(page: Page) {
  // Loading FxA can take a while. FxA uses /authorization for the OAuth flow.
  await page.waitForURL("**/authorization**", { timeout: 60_000 });
}

async function goToFxA(
  page: Page,
  {
    countryCode,
  }: {
    countryCode?: string;
    isMobile?: boolean;
  },
) {
  await page.goto(`${getBaseTestEnvUrl()}/`);

  const signInButtonLabel = countryCode === "nl" ? "Aanmelden" : "Sign In";
  await page.getByRole("button", { name: signInButtonLabel }).first().click();
  await waitForFxa(page);
}

async function fillAndSubmitEmail(page: Page, email: string) {
  const emailInput = page.locator('input[name="email"]');
  const emailForm = page.locator("form").filter({
    has: emailInput,
  });
  await emailInput.fill(email);
  await emailForm.locator('button[type="submit"]').click();
}

async function fillAndSubmitPassword(page: Page, password: string) {
  const passwordInput = page.locator('input[type="password"]');
  const passwordForm = page.locator("form").filter({
    has: passwordInput,
  });
  await passwordInput.fill(password);
  await passwordForm.locator('button[type="submit"]').click();
}

async function fillAndSubmitConfirmationCode(page: Page, email: string) {
  await page.waitForURL("**/confirm_signup_code**");
  const verificationCode = await fetchRestmailVerificationCode(email, page);
  const confirmationCodeInput = page.locator('input[name="code"]');
  const confirmationCodeForm = page.locator("form").filter({
    has: confirmationCodeInput,
  });
  await confirmationCodeInput.fill(verificationCode);
  await confirmationCodeForm.locator('button[type="submit"]').click();
}

async function signUpUser(page: Page, email: string, password: string) {
  // Fill and submit sign-up form
  await fillAndSubmitEmail(page, email);
  await fillAndSubmitPassword(page, password);
  await fillAndSubmitConfirmationCode(page, email);
}

async function signInUser(page: Page, email: string, password: string) {
  // Fill and submit sign-in form
  await fillAndSubmitEmail(page, email);
  await fillAndSubmitPassword(page, password);
}

export { waitForFxa, goToFxA, signUpUser, signInUser };
