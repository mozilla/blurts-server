import AppConstants from '../../app-constants.js'
import { getMessage } from '../../utils/fluent.js'

const emailNeedsVerificationSub = email => `
  <span class='verification-required'>
    ${getMessage('settings-email-verification-callout')}
  </span>

  <a class='settings-resend-email' data-email-id='${email.id}' href='#'>
    ${getMessage('settings-resend-email-verification')}
  </a>
`

const deleteButton = email => `
  <button
    data-subscriber-id='${email.subscriber_id}'
    data-email-id='${email.id}'
    class='settings-email-remove-button js-remove-email'
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

// Sort first by presence of `primary` key, then by email address.
const getSortedEmails = emails => [...emails].sort((a, b) => (
  a.primary
    ? -1
    : b.primary
      ? 1
      : 0 || a.email.localeCompare(b.email)
))

const createEmailList = (emails, breachCounts) => `
  <ul class='settings-email-list'>
    ${getSortedEmails(emails)
      .map(email => createEmailItem(email, breachCounts))
      .join('')}
  </ul>
`

const optionInput = (csrfToken, { commOption, name, isChecked }) => `
  <input
    checked='${isChecked}'
    class='radio-comm-option'
    data-comm-option='${commOption}'
    data-csrf-token='${csrfToken}'
    data-form-action='update-comm-option'
    name='${name}'
    type='radio'
  >
`

const alertOptions = csrfToken => `
  <div class='settings-alert-options'>
    <label class='settings-radio-input'>
    ${optionInput(csrfToken, {
      commOption: 0,
      name: '1',
      isChecked: true
    })}
    <span class='settings-radio-label'>
      ${getMessage('settings-alert-preferences-option-one')}
    </span>
  </label>

  <label class='settings-radio-input'>
    ${optionInput(csrfToken, {
      commOption: 1,
      name: '1',
      isChecked: false
    })}
    <span class='settings-radio-label'>
      ${getMessage('settings-alert-preferences-option-two')}
    </span>
  </label>
  </div>
`

const addEmailModal = limit => `
  <dialog id='add-email-modal' class='add-email-modal'>
    <button id='settings-close'>
      <img src='/images/icon-close.svg'>
    </button>
    <img src='/images/settings-dialog-email.svg'>

    <h3 class='settings-section-title'>${getMessage('settings-email-dialog-title')}</h3>
    <div id='add-email-modal-content'>
      ${getMessage('settings-email-limit-info', { limit })}
      ${getMessage('settings-add-email-text')}
    </div>

    <div id='add-email-modal-controls'>
      <label>
        ${getMessage('settings-email-input-label')}
        <input id='email' type='text'>
      </label>
      <button id='send-verification' class='primary'>
        ${getMessage('settings-send-email-verification')}
      </button>
    </div>
  </dialog>
`

export const settings = data => {
  const { breachCounts, csrfToken, emails, limit } = data

  return `
    <div id='settings' class='settings' data-csrf-token='${csrfToken}'>
      <h2 class='settings-title'>${getMessage('settings-page-title')}</h2>

      <div class='settings-content'>
        <!-- Breach alert preferences -->
        <section>
          <h3 class='settings-section-title'>
            ${getMessage('settings-alert-preferences-title')}
          </h3>
          ${alertOptions(csrfToken)}
        </section>

        <hr>

        <!-- Monitored email addresses -->
        <section>
          <h3 class='settings-section-title'>
            ${getMessage('settings-email-list-title')}
          </h3>
          <p>${getMessage('settings-email-limit-info', { limit })}</p>

          ${createEmailList(emails, breachCounts)}
          <button
            id='settings-add-email'
            class='settings-add-email-button primary'
          >
            ${getMessage('settings-add-email-button')}
          </button>

          ${addEmailModal(limit)}
        </section>

        <hr>

        <!-- Deactivate account -->
        <section>
          <h3 class='settings-section-title'>
            ${getMessage('settings-deactivate-account-title')}
          </h3>
          <p>${getMessage('settings-deactivate-account-info')}</p>
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
