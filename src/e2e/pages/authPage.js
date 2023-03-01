/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getVerificationCode } from '../utils/helpers.js'

export class AuthPage {
  constructor (page) {
    this.page = page
    this.emailInputField = page.locator('input[name="email"]')
    this.passwordInputField = page.locator('#password')
    this.passwordConfirmInputField = page.locator('#vpassword')
    this.ageInputField = page.locator('#age')
    this.continueButton = page.locator('#submit-btn')
    this.verifyCodeInputField = page.locator('div.card input')
  }

  async continue () {
    await Promise.all([
      this.page.waitForNavigation(),
      this.continueButton.click()
    ])
  }

  async enterVerificationCode (code) {
    await this.verifyCodeInputField.fill(code)
    await this.continue()
  }

  async enterEmail (email) {
    await this.emailInputField.fill(email)
    await this.continue()
  }

  async enterPassword () {
    await this.passwordInputField.fill(process.env.E2E_TEST_ACCOUNT_PASSWORD)
    await this.continue()
  }

  async signIn (email) {
    await this.enterEmail(email)
    await this.enterPassword()
  }

  async signUp (email, page) {
    await this.enterEmail(email)
    await this.passwordInputField.fill(process.env.E2E_TEST_ACCOUNT_PASSWORD)
    await this.passwordConfirmInputField.fill(process.env.E2E_TEST_ACCOUNT_PASSWORD)
    await this.ageInputField.type('31')
    await this.continue()
    const vc = await getVerificationCode(email, page)
    await this.enterVerificationCode(vc)
  }
}
