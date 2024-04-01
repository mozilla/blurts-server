/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getStringLookup } from '../utils/fluent.js'

const emailStyle = `
  color: black;
  background: #f9f9fa;
  padding-top: 36px;
`

const containerStyle = `
  background: #f9f9fa;
  color: black;
  padding: 24px;
`

const tableStyle = `
  background: white;
  border-radius: 8px;
  border: 1px solid #dddddd;
  box-shadow: 0 0 6px #dddddd;
  margin: auto;
  padding: 24px;
  text-align: left;
  width: auto;
`

const tableLabelStyle = `
  padding: 3px 12px;
`

const tableValueStyle = `
  border-left: 1px solid #cccccc;
  padding: 3px 12px;
`

const ctaStyle = `
  background: #0060df;
  border-radius: 4px;
  color: white;
  display: inline-block;
  margin: 24px 0;
  padding: 12px 24px;
`

/**
 * @param {any} data
 * @param {import("@fluent/react").ReactLocalization} [l10n]
 */
const monthlyUnresolvedEmailPartial = (data, l10n) => {
  const getMessage = getStringLookup(l10n);

  return `
    <tr>
      <td style='${emailStyle}'>
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
      <td style='${containerStyle}'>
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
          style='${tableStyle}'
        >
          <tr>
            <td style='${tableLabelStyle}'>
              ${getMessage('email-monitored')}
            </td>
            <td style='${tableValueStyle}'>
              ${data.monitoredEmails.count}
            </td>
          </tr>
          <tr>
            <td style='${tableLabelStyle}'>
              ${getMessage('email-breach-total')}
            </td>
            <td style='${tableValueStyle}'>
              ${data.numBreaches.count}
            </td>
          </tr>
          <tr>
            <td style='${tableLabelStyle}'>
              ${getMessage('email-resolved')}
            </td>
            <td style='${tableValueStyle}'>
              ${data.numBreaches.numResolved}
            </td>
          </tr>
          <tr>
            <td style='${tableLabelStyle}'>
              ${getMessage('email-unresolved')}
            </td>
            <td style='${tableValueStyle}'>
              ${data.numBreaches.numUnresolved}
            </td>
          </tr>
        </table>
        <a
          href='${data.ctaHref}'
          style='${ctaStyle}'
        >
          ${getMessage('email-resolve-cta')}
        </a>
      </td>
    </tr>
`
}

export { monthlyUnresolvedEmailPartial }
