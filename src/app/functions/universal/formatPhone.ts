/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export type FormattedPhoneNumber =
  | `(${number}) ${number} - ${number}`
  | `(${number}) ${number}`
  | `(${number}`
  | "";

/**
 * Make sure that when we format phone numbers in a consistent way.
 * phoneNumber: The phone number to format.
 * withCountryCode: Whether to include the country code in the formatted number.
 *
 * This `formatPhone` function is taken from mozilla/fx-private-relay:
 * https://github.com/mozilla/fx-private-relay/blob/main/frontend/src/functions/formatPhone.ts
 */
export function formatPhone(phoneNumber: string): FormattedPhoneNumber {
  // remove country code by default
  // remove all none numeric characters
  // include first 10 digits
  const phone = phoneNumber
    .replace("+1", "")
    .replace(/\D/g, "")
    .substring(0, 10);

  // add country code to zip code block if specified
  const zip = phone.substring(0, 3);
  const middle = phone.substring(3, 6);
  const last = phone.substring(6, 10);

  return (
    phone.length > 6
      ? `(${zip}) ${middle} - ${last}`
      : phone.length > 3
        ? `(${zip}) ${middle}`
        : phone.length > 0
          ? `(${zip}`
          : ""
  ) as FormattedPhoneNumber;
}
