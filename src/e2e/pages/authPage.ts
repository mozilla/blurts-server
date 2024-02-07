/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Page } from "@playwright/test";
import { getVerificationCode } from "../utils/helpers.js";

export class AuthPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async enterEmail(email: string) {
    await this.page
      .getByRole("textbox", { name: "Enter your email" })
      .fill(email);
    await this.page.getByRole("button", { name: "Sign up or sign in" }).click();
  }

  async signIn(email: string) {
    await this.enterEmail(email);
    await this.page
      .getByRole("textbox", { name: "Password" })
      .fill(process.env.E2E_TEST_ACCOUNT_PASSWORD as string);
    await this.page.getByRole("button", { name: "Sign in" }).click();
    await this.page.waitForURL(`${process.env.E2E_TEST_BASE_URL}/**`);
  }

  async signUp(email: string, page: Page) {
    await this.enterEmail(email);
    await this.page
      .getByLabel("Password", { exact: true })
      .fill(process.env.E2E_TEST_ACCOUNT_PASSWORD as string);
    await this.page
      .getByLabel("Repeat password")
      .fill(process.env.E2E_TEST_ACCOUNT_PASSWORD as string);
    await this.page.getByLabel("How old are you?").fill("31");
    await this.page.getByRole("button", { name: "Create account" }).click();
    const vc = await getVerificationCode(email, page);
    await this.page.getByLabel("Enter 6-digit code").fill(vc);
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page.waitForURL(`${process.env.E2E_TEST_BASE_URL}/**`);
  }
}
