/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file will be removed when we've fully transitioned to React:
/* c8 ignore start */

/**
 * @param {any} breach
 * @returns {string} HTML for a breach logo (either an `img`, or a `span.breach-logo` containing the breached company's first letter)
 */
export function getBreachLogo (breach) {
  if (breach.FaviconUrl) {
    return `<img src='${breach.FaviconUrl}' alt='' loading="lazy" class='breach-logo' height='32' />`
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
 * @returns {{ className: string, variableName: string }} CSS variable for a string-specific color
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
    // @ts-ignore This shouldn't be undefined
    .reduce((sum, codePoint) => sum + codePoint)

  // @ts-ignore charValue shouldn't be undefined
  return logoColors[charValue % logoColors.length]
}
