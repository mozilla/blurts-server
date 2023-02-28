/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Capitalize the first letter of a string, taking into account localization
 *
 * @param {string} str
 * @example
 * capitalFirstLetter ('carte di credito')
 * // returns 'Carte di credito'
 * @example
 * capitalFirstLetter ('账户余额')
 * // returns '账户余额'
 */

function capitalFirstLetter (str) {
  return str[0].toLocaleUpperCase() + str.slice(1)
}

export { capitalFirstLetter }
