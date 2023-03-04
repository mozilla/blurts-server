/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { styles } from './resources/index.js'
import { getLocale, getMessage } from '../../utils/fluent.js'
import { formatDate } from '../../utils/format-date.js'

const breachCardPartial = breachData => {
  const {
    LogoPath,
    AddedDate,
    DataClasses,
    Title
  } = breachData

  return `
    <table style='${styles.alert.breachAlertTableStyle}'>
      <tr>
        <td>
          <table style='${styles.alert.breachAlertCardsContainerStyle}'>
            <tr>
              <td style='${styles.alert.breachAlertCardsTitleStyle}'>
                <img
                  height='25'
                  src='${LogoPath}'
                  style='${styles.alert.breachAlertCardsTitleImageStyle}'
                  width='25'
                >
                ${Title}
              </td>
            </tr>
            <tr>
              <td style='padding: 24px;'>
                <p style='${styles.alert.breachAlertLabelStyle}'>
                  ${getMessage('breach-added-label')}
                </p>
                <p style='${styles.alert.breachAlertValueStyle}'>
                  ${formatDate(AddedDate, getLocale())}
                </p>

                ${DataClasses?.length
                  ? `
                      <p style='${styles.alert.breachAlertLabelStyle}'>
                        ${getMessage('compromised-data')}
                      </p>
                      <span style='${styles.alert.breachAlertValueStyle}'>
                        ${DataClasses.map(classKey => getMessage(classKey))
                          .join(', ')
                          .trim()}
                      </span>
                    `
                  : ''}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `
}

export { breachCardPartial }
