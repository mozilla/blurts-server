/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

function getPreviewOptions (templateId) {
  const optionsData = [
    {
      label: 'Email verification',
      value: 'verify'
    },
    {
      label: 'Breach notification',
      value: 'notify'
    }
  ]

  const optionsElements = optionsData.map(option => (`
    <option
      value='${option.value}'
      ${templateId === option.value ? 'selected' : ''}
    >
      ${option.label}
    </option>
  `)).join('')

  return optionsElements
}

export const emailPreview = data => `
  <section class='email-preview js-email' data-csrf-token=${data.csrfToken}>
    <h1>
      Email preview:
      <custom-select name='email-template'>
        ${getPreviewOptions(data.email.templateId)}
      </custom-select>
    </h1>
    <button class='primary js-send-email-button'>
      Send test email
    </button>
    <hr class='monitor-gradient'>
    ${data.email.template}
  </section>
`
