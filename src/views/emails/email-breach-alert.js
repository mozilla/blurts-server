/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { breachCardPartial } from './email-breach-card.js'
import { styles } from './resources/index.js'
import { getMessage } from '../../utils/fluent.js'

const breachAlertEmailPartial = data => {
  const { breachData, breachedEmail, ctaHref } = data

  return `
    <tr>
      <td style='${styles.alert.breachAlertContainerStyle}'>
        <p>
          ${getMessage('email-breach-detected', {
            'email-address': `<strong>${breachedEmail}</strong>`
          })}
        </p>
        ${breachCardPartial(breachData)}
        <a
          href='${ctaHref}'
          style='${styles.alert.breachAlertCtaStyle}'
        >
          ${getMessage('email-dashboard-cta')}
        </a>
      </td>
    </tr>
  `
}

export { breachAlertEmailPartial }
