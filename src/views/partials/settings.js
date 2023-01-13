import { getMessage } from '../../utils/fluent.js'

const rowHtml = (email, breachCounts) => `
<strong>${email.email} ${email.primary ? '(primary)' : ''}</strong>
<div class="rows">
${
  email.verified
    ? `<div>${getMessage('appears-in-x-breaches', { breachCount: breachCounts.get(email.email) })}}</div>`
    : `<div>
      <img src="/images/required.png">
      <span class="verification-required">${getMessage('email-verification-required')}</span>
      <br />
      <a class="settings-resend-email" data-email-id="${email.id}" href="#">${getMessage('resend-verification')}</a>
    </div>`
}

${
  email.primary
    ? ''
    : `<button data-subscriber-id="${email.subscriber_id}" data-email-id="${email.id}" class="remove-email"><img src="/images/icon-delete.png"></button>`
}
</div>
<br>
`

function createEmailRows (emails, breachCounts) {
  // sort first by presence of `primary` key, then by email address.
  emails.sort((a, b) => a.primary ? -1 : b.primary ? 1 : 0 || a.email.localeCompare(b.email))

  return (
    emails
      .map((email) => rowHtml(email, breachCounts))
      .join('')
  )
}

export const settings = (data) => `
<div id="settings" class="parent" data-csrf-token="${data.csrfToken}">
  <div class="child-left">
    <h2>${getMessage('settings-title')} </h2>
  </div>
  <div class="child-right">
    <section>
      <h3>Breach alert preferences</h3>
      <div>
        <label class="radio-container">
          <input class="radio-comm-option" data-comm-option="0" data-form-action="update-comm-option" data-csrf-token="${data.csrfToken}" type="radio" checked="" name="1">
          <span class="radio-label overflow-break">${getMessage('to-affected-email')}</span>
          <span class="checkmark"></span>
        </label>
        <br>
        <label class="radio-container">
          <input class="radio-comm-option" data-comm-option="1" data-form-action="update-comm-option" data-csrf-token="${data.csrfToken}" type="radio" name="1">
          <span class="radio-label overflow-break">${getMessage('comm-opt-1', { primaryEmail: (data.emails.filter(a => a.primary === true))[0].email })}</span>
          <span class="checkmark"></span>
        </label>
      </div>
    </section>
    <hr>
    <section>
      <div>
        <strong>${getMessage('monitored-email-addresses')}</strong>
      </div>
      <div>
        ${getMessage('email-address-limit', { limit: data.limit })}
      </div>
      <br>
      ${createEmailRows(data.emails, data.breachCounts)}
      <div><button id="settings-add-email" class="monitor-button">+ ${getMessage('add-new-email')}</button></div>
      <dialog id="add-email-modal">
        <!-- FIXME button id="settings-close"><img src="/images/close.png"></button -->
        <img src="/images/email.png">
        <h3>${getMessage('add-another-email')}</h3>
        <div id="add-email-modal-content">
          ${getMessage('email-address-limit', { limit: data.limit })}
          ${getMessage('add-another-email')}
        </div>
        <br>
        <div id="add-email-modal-controls">
          <label>${getMessage('email-address')}<input id="email" type="text"></label>
          <button id="send-verification" class="monitor-button">${getMessage('send-verification')}</button>
        </div>
      </dialog>
    </section>
    <hr>
    <section>
      <h3>${getMessage('deactivate-account-title')}</h3>
      <div>${getMessage('deactivate-account')}.</div>
      <div><a target="_blank" href="https://accounts.firefox.com/settings">${getMessage('firefox-settings')}</a></div>
    </section>
  </div>
</div>
`
