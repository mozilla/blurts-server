/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param {string} phoneNumber
 * @returns {E164PhoneNumberString | null}
 */
export function parseE164PhoneNumber(
  phoneNumber: string
): E164PhoneNumberString | null;
/**
 * @param {ISO8601DateString} datetime
 * @returns {Date | null}
 */
export function parseIso8601Datetime(datetime: ISO8601DateString): Date | null;
/**
 * See https://en.wikipedia.org/wiki/ISO_8601
 */
export type ISO8601DateString = string;
/**
 * See https://en.wikipedia.org/wiki/E.164
 */
export type E164PhoneNumberString = `+${string}`;
