/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../../appConstants.js'
import { getMessage } from '../../utils/fluent.js'

const emailNeedsVerificationSub = email => `
  <span class='verification-required'>
    ${getMessage('settings-email-verification-callout')}
  </span>

  <a class='js-settings-resend-email' data-email-id='${email.id}' href='#'>
    ${getMessage('settings-resend-email-verification-link')}
  </a>
`

const deleteButton = email => `
  <button
    data-subscriber-id='${email.subscriber_id}'
    data-email-id='${email.id}'
    class='settings-email-remove-button js-remove-email-button'
  >
    <img src='/images/icon-delete.svg'>
  </button>
`

const createEmailItem = (email, breachCounts) => `
  <li class='settings-email-item'>
    <strong>
      ${email.primary
          ? `${getMessage('settings-email-label-primary', { email: email.email })}`
          : email.email}
    </strong>
    ${email.verified
        ? getMessage('settings-email-number-of-breaches-info', {
            breachCount: breachCounts.get(email.email)
          })
        : emailNeedsVerificationSub(email)}

    ${email.primary ? '' : deleteButton(email)}
  </li>
`

// Moves the primary email to the front and sorts the rest alphabeticaly.
const getSortedEmails = emails => [...emails].sort((a, b) => {
  if (a.primary) {
    return -1
  }

  if (b.primary) {
    return 1
  }

  return a.email.localeCompare(b.email)
})

const createEmailList = (emails, breachCounts) => `
  <ul class='settings-email-list'>
    ${getSortedEmails(emails)
      .map(email => createEmailItem(email, breachCounts))
      .join('')}
  </ul>
`

/**
 * @param {string} csrfToken
 * @param {{ isChecked: boolean; option: unknown; }} options
 * @returns string
 */
const optionInput = (csrfToken, { isChecked, option }) => `
  <input
    ${isChecked ? 'checked' : ''}
    class='js-settings-alert-options-input'
    data-alert-option='${option}'
    data-csrf-token='${csrfToken}'
    name='settings-alert-options'
    type='radio'
  >
`

/**
 * @param {{ csrfToken: string; allEmailsToPrimary: boolean }} options
 * @returns string
 */
const alertOptions = ({ csrfToken, allEmailsToPrimary }) => `
  <div class='settings-alert-options'>
    <label class='settings-radio-input'>
    ${optionInput(csrfToken, {
      isChecked: !allEmailsToPrimary,
      option: 0
    })}
    <span class='settings-radio-label'>
      ${getMessage('settings-alert-preferences-option-one')}
    </span>
  </label>

  <label class='settings-radio-input'>
    ${optionInput(csrfToken, {
      isChecked: allEmailsToPrimary,
      option: 1
    })}
    <span class='settings-radio-label'>
      ${getMessage('settings-alert-preferences-option-two')}
    </span>
  </label>
  </div>
`
const cancelPremiumSubscription = () => `
  <hr>
  <section>
    <h3 class='settings-section-title'>
      ${getMessage('settings-cancel-premium-subscription-title')}
    </h3>
    <p class='settings-section-info'>${getMessage('settings-cancel-premium-subscription-info')}</p>
    <a
      class='settings-link-fxa'
      href='${AppConstants.FXA_SETTINGS_URL}'
      target='_blank'
    >
      ${getMessage('settings-cancel-premium-subscription-link-label')}
    </a>
  </section>
`

/**
 * @typedef {object} PartialData
 * @property {string} csrfToken
 * @property {boolean} allEmailsToPrimary
 */

/**
 * @param {PartialData} data
 * @returns string
 */
export const settings = data => {
  const { allEmailsToPrimary, breachCounts, csrfToken, emails, limit } = data

  return `
    <div class='settings js-settings' data-csrf-token='${csrfToken}'>
      <h2 class='settings-title'>${getMessage('settings-page-title')}</h2>
      
      <div class='settings-content'>
        <!-- Monitored email addresses -->
        <section>
          <h3 class='settings-section-title'>
            ${getMessage('settings-email-list-title')}
          </h3>
          <p class='settings-section-info'>${getMessage('settings-email-limit-info', { limit })}</p>

          ${createEmailList(emails, breachCounts)}
          <button
            class='primary settings-add-email-button' 
            data-dialog='addEmail' 
            ${emails.length >= limit ? 'disabled' : ''}
          >${getMessage('settings-add-email-button')}</a>
        </section>

        <hr>

        <!-- Breach alert preferences -->
        <section>
          <h3 class='settings-section-title'>
            ${getMessage('settings-alert-preferences-title')}
          </h3>
          ${alertOptions({ csrfToken, allEmailsToPrimary })}
        </section>

        ${AppConstants.CANCEL_SUBSCRIPTION_FLOW ? cancelPremiumSubscription() : '<hr>'}

        <!-- Deactivate account -->
        <section>
          <h3 class='settings-section-title'>
            ${getMessage('settings-deactivate-account-title')}
          </h3>
          <p class='settings-section-info'>${getMessage('settings-deactivate-account-info')}</p>
          <a
            class='settings-link-fxa'
            href='${AppConstants.FXA_SETTINGS_URL}'
            target='_blank'
          >
            ${getMessage('settings-fxa-link-label')}
          </a>
        </section>
      </div>
    </div>
  `
}
