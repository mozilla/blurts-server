/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { breachCardPartial } from './emailBreachCard.js'
import { getStringLookup } from '../utils/fluent.js'

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

/**
 * @param {any} data
 * @param {import("@fluent/react").ReactLocalization} [l10n]
 */
const breachAlertEmailPartial = (data, l10n) => {
  const { breachData, breachedEmail, ctaHref } = data
  const getMessage = getStringLookup(l10n);

  return `
    <tr>
      <td style='${breachAlertContainerStyle}'>
        <p>
          ${getMessage('email-breach-detected', {
            'email-address': `<strong>${breachedEmail}</strong>`
          })}
        </p>
        ${breachCardPartial(breachData, l10n)}
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
