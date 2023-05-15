/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import styles from './BreachLogo.module.css'
import AppConstants from '../../../appConstants'
import { LogoMap } from '../../functions/server/getBreaches'
import { Breach } from '../../transitionTypes'

/**
 * @param props
 * @param {object} breach
 * @param {Map<string, string>} logos Map of URLs to logos indexed by the domain name of the respective company
 * @param props.breach
 * @param props.logos
 * @returns {string} HTML for a breach logo (either an `img`, or a `span.breach-logo` containing the breached company's first letter)
 */
export function BreachLogo (props: { breach: Breach, logos: LogoMap }) {
  const logoIsAvailable = props.logos?.has(props.breach.Domain)

  if (logoIsAvailable) {
    return <img src={AppConstants.SERVER_URL + props.logos.get(props.breach.Domain)} alt='' loading="lazy" className={styles.breachLogo} height={32} />
  }

  // Add CSS variable and a dedicated class for the logo placeholder
  // as fallback for emails
  const { className, variableName } = getColorForName(props.breach.Name)
  const classNames = `${styles.breachLogo} ${className}`

  return <span role="img" aria-hidden='true' className={classNames} style={{ backgroundColor: `var(${variableName})` }}>{props.breach.Name.substring(0, 1)}</span>
}

/**
 * @param {string} name
 * @returns {string} CSS variable for a string-specific color
 */
function getColorForName (name: string) {
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .reduce((sum, codePoint) => sum! + codePoint!) as number

  return logoColors[charValue % logoColors.length]
}
