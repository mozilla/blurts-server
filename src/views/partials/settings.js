import { getMessage } from '../../utils/fluent.js'

const breachAlertTitle = 'Breach alert preferences'
const primaryEmailLabel = email => `${email} (primary)`

const emailNeedsVerificationSub = email => `
  <img src='/images/required.png'>
  <span class='verification-required'>
    ${getMessage('email-verification-required')}
  </span>
  <a class='settings-resend-email' data-email-id='${email.id}' href='#'>
    ${getMessage('resend-verification')}
  </a>
`

const deleteButton = email => `
  <button
    data-subscriber-id='${email.subscriber_id}'
    data-email-id='${email.id}'
    class='remove-email'
  >
    <img src='/images/icon-delete.png'>
  </button>
`

const createEmailItem = (email, breachCounts) => `
  <li class='settings-emails-item'>
    <strong>
      ${email.primary ? `${primaryEmailLabel(email.email)}` : email.email}
    </strong>
    ${email.verified
        ? getMessage('appears-in-x-breaches', {
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
  <ul class='settings-emails-list'>
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

const alertOptions = (csrfToken, emails) => `
  <label class='radio-container'>
    ${optionInput(csrfToken, {
      commOption: 0,
      name: '1',
      isChecked: true
    })}
    <span class='radio-label'>
      ${getMessage('to-affected-email')}
    </span>
    <span class='checkmark'></span>
  </label>

  <label class='radio-container'>
    ${optionInput(csrfToken, {
      commOption: 1,
      name: '1',
      isChecked: false
    })}
    <span class='radio-label'>
      ${getMessage('comm-opt-1', {
        primaryEmail: emails.find(a => a.primary === true)?.email
      })}
    </span>
    <span class='checkmark'></span>
  </label>
`

export const settings = data => {
  const { breachCounts, csrfToken, emails, limit } = data

  return `
    <div id='settings' class='parent' data-csrf-token='${csrfToken}'>
      <h2 class='settings-title'>${getMessage('settings-title')}</h2>

      <div class='settings-content'>
        <section>
          <h3>${breachAlertTitle}</h3>
          ${alertOptions(csrfToken, emails)}
        </section>

        <hr>

        <section>
          <div>
            <strong>${getMessage('monitored-email-addresses')}</strong>
          </div>
          <div>
            ${getMessage('email-address-limit', { limit })}
          </div>

          ${createEmailList(emails, breachCounts)}

          <button id='settings-add-email' class='monitor-button-primary'>
            ${getMessage('add-new-email')}
          </button>

          <dialog id='add-email-modal'>
            <button id='settings-close'>
              <img src='/images/close.png'>
            </button>
            <img src='/images/email.png'>

            <h3>${getMessage('add-another-email')}</h3>
            <div id='add-email-modal-content'>
              ${getMessage('email-address-limit', { limit })}
              ${getMessage('add-another-email')}
            </div>

            <div id='add-email-modal-controls'>
              <label>${getMessage('email-address')}<input id='email' type='text'></label>
              <button id='send-verification' class='monitor-button-primary'>
                ${getMessage('send-verification')}
              </button>
            </div>
          </dialog>
        </section>

        <hr>

        <section>
          <h3>${getMessage('deactivate-account-title')}</h3>
          <p>${getMessage('deactivate-account')}</p>
          <a target='_blank' href='https://accounts.firefox.com/settings'>
            ${getMessage('firefox-settings')}
          </a>
        </section>
      </div>
    </div>
  `
}
