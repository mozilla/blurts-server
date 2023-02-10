/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
* convert kebab-case to camelCase
* @param {string} str - a kebab-case string
* @example
* camelize ('two-hump-camel')
* // returns 'twoHumpCamel'
*/

function camelize (str) {
  return str.replace(/-./g, substr => substr[1].toUpperCase())
}

export { camelize }
