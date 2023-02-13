/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function getPreviewOptions (currentTemplateKey, data) {
  const optionsElements = Object.keys(data).map(templateKey => (`
    <option
      value='${templateKey}'
      ${currentTemplateKey === templateKey ? 'selected' : ''}
    >
      ${data[templateKey].label}
    </option>
  `)).join('')

  return optionsElements
}

function getRecipientInputs (recipients) {
  const recipientInputElements = recipients.map((recipient, index) => (`
    <label>
      <input
        name="email-recipient-option"
        type="radio"
        value="${recipient}"
        ${index === 0 ? 'checked' : ''}
      >
      ${recipient}
    </label>
  `)).join('')

  return `
    <fieldset>
      ${recipientInputElements}
    </fieldset>
  `
}

export const emailPreview = data => {
  const {
    template: currentTemplateKey,
    data: emailTemplates,
    recipients
  } = data.email
  const selectedPreviewTemplate = emailTemplates[currentTemplateKey]?.template

  return `
    <section class='email-preview js-email' data-csrf-token=${data.csrfToken}>
      <h1>Email preview</h1>
      <div class='email-preview-controls'>
        <custom-select name='email-template'>
          ${getPreviewOptions(currentTemplateKey, emailTemplates)}
        </custom-select>

        <form class='js-email-preview-form email-preview-form'>
          ${getRecipientInputs(recipients)}

          <button class='primary' type='submit'>
            Send test email
          </button>
        </form>
      </div>
      <hr class='monitor-gradient'>
      ${selectedPreviewTemplate}
    </section>
  `
}
