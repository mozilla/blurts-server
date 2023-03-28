/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @param {object} breach
 * @param {Map<string, string>} logos Map of URLs to logos indexed by the domain name of the respective company
 * @returns {string} HTML for a breach logo (either an `img`, or a `span.breach-logo` containing the breached company's first letter)
 */
export function getBreachLogo (breach, logos) {
  const logo = logos.has(breach.Domain)
    ? `<img src='${logos.get(breach.Domain)}' alt='' loading="lazy" class='breach-logo' height='32' />`
    : `<span role="img" aria-hidden='true' class='breach-logo' style='background-color: var(${getColorForName(breach.Name)});'>${breach.Name.substring(0, 1)}</span>`

  return logo
}

/**
 * @param {string} name
 * @returns string CSS variable for a string-specific color
 */
function getColorForName (name) {
  const logoColors = [
    '--blue-5',
    '--purple-5',
    '--green-05',
    '--violet-5',
    '--orange-5',
    '--yellow-5',
    '--red-5',
    '--pink-5'
  ]

  const charValue = name
    .split('')
    .map(letter => letter.codePointAt(0))
    .reduce((sum, codePoint) => (sum || 0) + (codePoint || 0))

  return logoColors[(charValue || 0) % logoColors.length]
}
