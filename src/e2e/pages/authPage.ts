/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Locator, Page } from "@playwright/test";
import { getVerificationCode } from "../utils/helpers.js";

export class AuthPage {
  readonly page: Page;
  readonly emailInputField: Locator;
  readonly passwordInputField: Locator;
  readonly passwordConfirmInputField: Locator;
  readonly continueButton: Locator;
  readonly ageInputField: Locator;
  readonly verifyCodeInputField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInputField = page.locator('input[name="email"]');
    this.passwordInputField = page.locator('[type="password"]').nth(0);
    this.passwordConfirmInputField = page.locator('[type="password"]').nth(1);
    this.ageInputField = page.getByLabel("How old are you?");
    this.continueButton = page.locator('[type="submit"]').first();
    this.verifyCodeInputField = page.locator("div.card input");
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

  async enterPassword() {
    await this.passwordInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await this.continue({ waitForURL: "**/user/**" });
  }

  async signIn(email: string) {
    await this.enterEmail(email);
    await this.enterPassword();
  }

  async signUp(email: string, page: Page) {
    await this.enterEmail(email);
    await this.passwordInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await this.passwordConfirmInputField.fill(
      process.env.E2E_TEST_ACCOUNT_PASSWORD as string,
    );
    await this.ageInputField.type("31");
    await this.continue({ waitForURL: "**/oauth/**" });
    const vc = await getVerificationCode(email, page);
    await this.enterVerificationCode(vc);
  }
}
