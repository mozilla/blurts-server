/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { breachCardPartial } from './email-breach-card.js'
import { getMessage } from '../../utils/fluent.js'

const breachAlertContainerStyle = `
  background: #f9f9fa;
  color: black;
  padding: 36px 0 24px;
`

const breachAlertCtaStyle = `
  background: #0060df;
  border-radius: 4px;
  color: white;
  display: inline-block;
  margin: 24px 0;
  margin: auto;
  padding: 12px 24px;
`

const breachAlertEmailPartial = data => {
  const { breachData, breachedEmail, ctaHref } = data

  return `
    <tr>
      <td style='${breachAlertContainerStyle}'>
        <p>
          ${getMessage('email-breach-detected', {
            'email-address': `<strong>${breachedEmail}</strong>`
          })}
        </p>
        ${breachCardPartial(breachData)}
        <a
          href='${ctaHref}'
          style='${breachAlertCtaStyle}'
        >
          ${getMessage('email-dashboard-cta')}
        </a>
      </td>
    </tr>
  `
}

export { breachAlertEmailPartial }
