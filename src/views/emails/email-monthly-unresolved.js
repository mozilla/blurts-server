/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { styles } from './resources/index.js'
import { getMessage } from '../../utils/fluent.js'

const monthlyUnresolvedEmailPartial = (data) => `
  <tr>
    <td style='${styles.monthly.emailStyle}'>
      <p>
        ${getMessage('email-is-affected', {
          'email-address': `<strong>${data.breachedEmail}</strong>`
        })}
      </p>
      <p>
        ${getMessage('email-more-detail')}
      </p>
    </td>
  </tr>
  <tr>
    <td style='${styles.monthly.containerStyle}'>
      <p>
        <strong>
          ${getMessage('email-breach-status')}
        </strong>
      </p>
      <table
        border='0'
        cellpadding='0'
        cellspacing='0'
        role='presentation'
        style='${styles.monthly.tableStyle}'
      >
        <tr>
          <td style='${styles.monthly.tableLabelStyle}'>
            ${getMessage('email-monitored')}
          </td>
          <td style='${styles.monthly.tableValueStyle}'>
            ${data.monitoredEmails.count}
          </td>
        </tr>
        <tr>
          <td style='${styles.monthly.tableLabelStyle}'>
            ${getMessage('email-breach-total')}
          </td>
          <td style='${styles.monthly.tableValueStyle}'>
            ${data.numBreaches.count}
          </td>
        </tr>
        <tr>
          <td style='${styles.monthly.tableLabelStyle}'>
            ${getMessage('email-resolved')}
          </td>
          <td style='${styles.monthly.tableValueStyle}'>
            ${data.numBreaches.numResolved}
          </td>
        </tr>
        <tr>
          <td style='${styles.monthly.tableLabelStyle}'>
            ${getMessage('email-unresolved')}
          </td>
          <td style='${styles.monthly.tableValueStyle}'>
            ${data.numBreaches.numUnresolved}
          </td>
        </tr>
      </table>
      <a
        href='${data.ctaHref}'
        style='${styles.monthly.ctaStyle}'
      >
        ${getMessage('email-resolve-cta')}
      </a>
    </td>
  </tr>
`

export { monthlyUnresolvedEmailPartial }
