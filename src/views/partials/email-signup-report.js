/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { breachCardPartial } from './email-breach-card.js'
import { getMessage } from '../../utils/fluent.js'

const emailStyle = `
  color: black;
  background: #f9f9fa;
  padding: 36px 0 24px;
`

const breachSummaryTableStyle = `
  margin: auto;
  max-width: 600px;
`

const breachSummaryCardStyle = `
  background: #eeeeee;
  border-radius: 6px;
  margin: 12px auto;
  padding: 12px;
  table-layout: auto;
  width: 100%;
`

const statNumberStyle = `
  font-size: 48px;
  font-weight: bold;
  width: 72px;
`

const statTitleStyle = `
  text-align: left;
`

const ctaStyle = `
  background-color: #0060DF;
  border-radius: 4px;
  color: white;
  display: inline-block;
  margin: 24px 0;
  padding: 12px 24px;
`

const signupReportEmailPartial = data => {
  const {
    breachedEmail,
    emailBreachStats,
    unsafeBreachesForEmail
  } = data

  return `
    <tr>
      <td style='${emailStyle}'>
        <p>
          ${
            unsafeBreachesForEmail.length
              ? getMessage('fxm-warns-you-no-breaches')
              : getMessage('email-breach-detected', {
                  'email-address': `<strong>${breachedEmail}</strong>`
                })
          }
        </p>
        <table style='${breachSummaryTableStyle}'>
          <tr>
            <td>
              ${emailBreachStats?.map(breachStat => `
                <table style='${breachSummaryCardStyle}'>
                  <tr>
                    <td style='${statNumberStyle}'>
                      ${breachStat.statNumber}
                    </td>
                    <td style=${statTitleStyle}>
                      ${breachStat.statTitle}
                    </td>
                  </tr>
                </table>
              `).join('')}
            </td>
          </tr>
        </table>
        ${
          unsafeBreachesForEmail.map(unsafeBreach => (
            breachCardPartial(unsafeBreach)
          )).join('')
        }
        <a
          href='${data.ctaHref}'
          style='${ctaStyle}'
        >
          ${getMessage('email-dashboard-cta')}
        </a>
      </td>
    </tr>
  `
}

export { signupReportEmailPartial }
