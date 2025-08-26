/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Tests are already submitted in https://github.com/mozilla/blurts-server/pull/3359:
/* c8 ignore start */

/** See https://en.wikipedia.org/wiki/ISO_8601 */
export type ISO8601DateString = string;
/**  See https://en.wikipedia.org/wiki/E.164 */
export type E164PhoneNumberString = `+${string}`;

export function parseE164PhoneNumber(
  phoneNumber: string,
): E164PhoneNumberString | null {
  if (
    typeof phoneNumber !== "string" ||
    phoneNumber.length > 16 ||
    phoneNumber.length <= 2 ||
    !phoneNumber.startsWith("+")
  ) {
    return null;
  }

  const parsedNumber: E164PhoneNumberString = `+${Number.parseInt(phoneNumber.substring(1), 10).toString()}`;
  if (parsedNumber !== phoneNumber) {
    return null;
  }

  return parsedNumber;
}
/* c8 ignore stop */

// Tests are already submitted in https://github.com/mozilla/blurts-server/pull/3359:
/* c8 ignore start */

export function parseIso8601Datetime(datetime: ISO8601DateString | Date): Date {
  if (datetime instanceof Date) {
    return datetime;
  }
  if (typeof datetime !== "string") {
    // This should never happen if the types are correct, hence the `as never`:
    return null as never;
  }

  // Important caveat to keep in mind:
  // > Support for ISO 8601 formats differs in that date-only strings
  // > (e.g. "1970-01-01") are treated as UTC, not local.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters
  const parsedDate = new Date(datetime);

  if (Number.isNaN(parsedDate.valueOf())) {
    // This should never happen if the types are correct, hence the `as never`:
    return null as never;
  }

  return parsedDate;
}
/* c8 ignore stop */
