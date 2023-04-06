/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'

/**
 * @param {object} breach
 * @param {Map<string, string>} logos Map of URLs to logos indexed by the domain name of the respective company
 * @returns {string} HTML for a breach logo (either an `img`, or a `span.breach-logo` containing the breached company's first letter)
 */
export function getBreachLogo (breach, logos) {
  const logoIsAvailable = logos?.has(breach.Domain)

  if (logoIsAvailable) {
    return `<img src='${AppConstants.SERVER_URL}${logos.get(breach.Domain)}' alt='' loading="lazy" class='breach-logo' height='32' />`
  }

  // Add CSS variable and a dedicated class for the logo placeholder
  // as fallback for emails
  const { className, variableName } = getColorForName(breach.Name)
  const classNames = `breach-logo breach-logo-email ${className}`
  const backgroundStyle = `background-color: var(${variableName});`

  return `<span role="img" aria-hidden='true' class='${classNames}' style='${backgroundStyle}'>${breach.Name.substring(0, 1)}</span>`
}

/**
 * @param {string} name
 * @returns {string} CSS variable for a string-specific color
 */
function getColorForName (name) {
  const logoColors = [
    {
      className: 'bg-blue-5',
      variableName: '--blue-5'
    },
    {
      className: 'bg-purple-5',
      variableName: '--purple-5'
    },
    {
      className: 'bg-green-05',
      variableName: '--green-05'
    },
    {
      className: 'bg-violet-5',
      variableName: '--violet-5'
    },
    {
      className: 'bg-orange-5',
      variableName: '--orange-5'
    },
    {
      className: 'bg-yellow-5',
      variableName: '--yellow-5'
    },
    {
      className: 'bg-red-5',
      variableName: '--red-5'
    },
    {
      className: 'bg-pink-5',
      variableName: '--pink-5'
    }
  ]

  const charValue = name
    .split('')
    .map(letter => letter.codePointAt(0))
    .reduce((sum, codePoint) => sum + codePoint)

  return logoColors[charValue % logoColors.length]
}
