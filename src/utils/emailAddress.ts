/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Validate an email address against the same RegEx that browsers use on input[type=email]
 */
type ValidatedEmail = {
  isValid: boolean;
  email: string;
};

export function validateEmailAddress(userInput: string): ValidatedEmail | null {
  if (typeof userInput === "string" && emailRegex.test(userInput)) {
    return {
      isValid: true,
      email: userInput,
    };
  }
  return null;
}

/**
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
 */
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
