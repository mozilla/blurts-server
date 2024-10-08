/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";
import { expect } from "../fixtures/basePage.js";
import { getVerificationCode } from "../utils/helpers.js";

export class AuthPage {
  readonly page: Page;
  readonly emailInputField: Locator;
  readonly passwordInputField: Locator;
  readonly passwordConfirmInputField: Locator;
  readonly continueButton: Locator;
  readonly ageInputField: Locator;
  readonly verifyCodeInputField: Locator;
  readonly useDifferentEmailButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInputField = page.locator('input[name="email"]');
    this.passwordInputField = page.locator('[type="password"]').nth(0);
    this.passwordConfirmInputField = page.locator('[type="password"]').nth(1);
    this.ageInputField = page.getByLabel("How old are you?");
    this.continueButton = page.locator('[type="submit"]').first();
    this.verifyCodeInputField = page.locator("div.card input");
    this.useDifferentEmailButton = page.locator(
      'text="Use a different account"',
    );
  }

  async continue({ waitForURL = "**/*" }) {
    await this.continueButton.click();
    await this.page.waitForURL(waitForURL);
  }

  async enterVerificationCode(code: string) {
    await this.verifyCodeInputField.fill(code);
    await this.continue({ waitForURL: "**/user/**" });
  }

  async enterEmail(email: string) {
    await this.emailInputField.fill(email);
    await this.continue({ waitForURL: "**/oauth/**" });
  }

  async enterPassword(optionalPassword?: string) {
    const password =
      optionalPassword || (process.env.E2E_TEST_ACCOUNT_PASSWORD as string);
    await this.passwordInputField.fill(password);
    await this.continue({ waitForURL: "**/user/**" });
  }

  async signIn(email: string, optionalPassword?: string) {
    await this.enterEmail(email);
    await this.enterPassword(optionalPassword);
  }

  async signUp(email: string, page: Page) {
    await this.enterEmail(email);
    await this.passwordInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await this.passwordConfirmInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await this.ageInputField.fill("31");
    await this.continue({ waitForURL: "**/oauth/**" });

    const verificationCode = await getVerificationCode(email, page);
    expect(verificationCode).toBeDefined();
    await this.enterVerificationCode(verificationCode as string);
  }

  async signInToFxA(email: string, password: string) {
    await this.page.goto(process.env.FXA_SETTINGS_URL as string);
    await this.page.context().clearCookies();
    await this.page
      .locator("//input[@type='password'] | //div/input[@type='email']")
      .waitFor({ state: "visible" });
    const visible = await this.useDifferentEmailButton.isVisible();
    if (visible) {
      await this.useDifferentEmailButton.click();
      await this.page.waitForURL(/^(?!.*signin).*/);
    }

    // enter email
    await this.emailInputField.fill(email);
    await this.continueButton.click();
    await this.page.waitForURL(/^(?!.*signin).*/);

    // enter password
    await this.passwordInputField.fill(password);
    await this.continue({ waitForURL: process.env.FXA_SETTINGS_URL });
  }

  async initSilentAuth() {
    await this.page.goto(
      `${process.env.E2E_TEST_BASE_URL as string}/?utm_source=moz-account&utm_campaign=settings-promo&utm_content=monitor-free`,
    );
    // FxA can take a while to load on stage:
    await this.page.waitForURL("**/oauth/**");
  }
}
