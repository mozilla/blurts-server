/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { breachCardPartial } from './email-breach-card.js'
import { styles } from './resources/index.js'
import { getMessage } from '../../utils/fluent.js'

const signupReportEmailPartial = data => {
  const {
    breachedEmail,
    emailBreachStats,
    unsafeBreachesForEmail
  } = data

  return `
    <tr>
      <td style='${styles.signup.emailStyle}'>
        <p>
          ${
            unsafeBreachesForEmail?.length
              ? getMessage('email-breach-detected', {
                  'email-address': `<strong>${breachedEmail}</strong>`
                })
              : getMessage('fxm-warns-you-no-breaches')
          }
        </p>
        ${
          emailBreachStats?.length
            ? `
                <table style='${styles.signup.breachSummaryTableStyle}'>
                  <tr>
                    <td>
                      ${emailBreachStats.map(breachStat => `
                        <table style='${styles.signup.breachSummaryCardStyle}'>
                          <tr>
                            <td style='${styles.signup.statNumberStyle}'>
                              ${breachStat.statNumber}
                            </td>
                            <td style=${styles.signup.statTitleStyle}>
                              ${breachStat.statTitle}
                            </td>
                          </tr>
                        </table>
                      `).join('')}
                    </td>
                  </tr>
                </table>
              `
            : ''
        }
        ${
          unsafeBreachesForEmail?.length
            ? unsafeBreachesForEmail.map(unsafeBreach => (
                breachCardPartial(unsafeBreach)
              )).join('')
            : ''
        }
        <a
          href='${data.ctaHref}'
          style='${styles.signup.ctaStyle}'
        >
          ${getMessage('email-dashboard-cta')}
        </a>
      </td>
    </tr>
  `
}

export { signupReportEmailPartial }
