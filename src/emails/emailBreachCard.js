/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getLocale, getStringLookup } from '../utils/fluent.js'
import { formatDate } from '../utils/formatDate.js'
import { getBreachLogo } from '../utils/breachLogo.js'

const breachAlertTableStyle = `
  margin: auto
`

const breachAlertCardsContainerStyle = `
  background: white;
  border-radius: 6px;
  border-spacing: 0;
  border: 1px solid #eeeeee;
  box-shadow: 0 0 6px #dddddd;
  display: inline-table;
  margin: 12px;
  min-width: 240px;
  width: 30%;
`

const breachAlertCardsTitleStyle = `
  background: #eeeeee;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 12px;
`

const breachAlertCardsTitleImageStyle = `
  display: inline-block;
  font-weight: bold;
  line-height: 2rem;
  overflow: hidden;
  margin-right: 0.5rem;
  text-align: center;
  vertical-align: middle;
  width: 2rem;
`

const breachAlertLabelStyle = `
  color: #5e5e72;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 300;
  margin: 0px;
  padding-bottom: 4px;
`

const breachAlertValueStyle = `
  color: #20123a;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 600;
  margin: 0px;
  padding-bottom: 15px;
`

/**
 * @param {{ AddedDate: any; DataClasses: any[]; Title: any; }} breachData
 * @param {import("@fluent/react").ReactLocalization} [l10n]
 */
const breachCardPartial = (breachData, l10n) => {
  const getMessage = getStringLookup(l10n);
  const {
    AddedDate,
    DataClasses,
    Title
  } = breachData

  return `
    <table style='${breachAlertTableStyle}'>
      <tr>
        <td>
          <table style='${breachAlertCardsContainerStyle}'>
            <tr>
            <td style='${breachAlertCardsTitleStyle}'>
              <span
                class='breachLogoWrapper'
                style='${breachAlertCardsTitleImageStyle}'
              >
                ${getBreachLogo(breachData)}
              </span>
              ${Title}
            </td>
            </tr>
            <tr>
              <td style='padding: 24px;'>
                <p style='${breachAlertLabelStyle}'>
                  ${getMessage('breach-added-label')}
                </p>
                <p style='${breachAlertValueStyle}'>
                  ${formatDate(AddedDate, getLocale())}
                </p>

                ${DataClasses?.length
                  ? `
                      <p style='${breachAlertLabelStyle}'>
                        ${getMessage('compromised-data')}
                      </p>
                      <span style='${breachAlertValueStyle}'>
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
