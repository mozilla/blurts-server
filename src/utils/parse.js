/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// The JSDoc plugin for ESLint doesn't understand TypeScripts template literal types:
/* eslint-disable jsdoc/valid-types */
/**
 * @typedef {string} ISO8601DateString See https://en.wikipedia.org/wiki/ISO_8601
 * @typedef {`+${string}`} E164PhoneNumberString See https://en.wikipedia.org/wiki/E.164
 */
/* eslint-enable jsdoc/valid-types */

/**
 * @param {string} phoneNumber
 * @returns {E164PhoneNumberString | null}
 */
export function parseE164PhoneNumber (phoneNumber) {
  if (typeof phoneNumber !== 'string' || phoneNumber.length > 16 || !phoneNumber.startsWith('+')) {
    return null
  }

  const parsedNumber = /** @type {E164PhoneNumberString} */ ('+' + Number.parseInt(phoneNumber.substring(1), 10).toString())
  if (parsedNumber !== phoneNumber) {
    return null
  }

  return parsedNumber
}

/**
 * @param {ISO8601DateString} datetime
 * @returns {Date | null}
 */
export function parseIso8601Datetime (datetime) {
  if (typeof datetime !== 'string') {
    return null
  }

  // Important caveat to keep in mind:
  // > Support for ISO 8601 formats differs in that date-only strings
  // > (e.g. "1970-01-01") are treated as UTC, not local.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#parameters
  try {
    return new Date(datetime)
  } catch (_e) {
    return null
  }
}
