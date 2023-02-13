/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const emailsPartial = document.querySelector("[data-partial='emailPreview']")
let sendAlertTestButton
let emailTemplateSelect

function init () {
  sendAlertTestButton = document.querySelector('.js-send-email-button')
  emailTemplateSelect = emailsPartial.querySelector('.js-email custom-select')

  sendAlertTestButton.addEventListener('click', sendBreachAlertEmail)
  emailTemplateSelect.addEventListener('change', handleEvent)
}

function handleEvent (event) {
  const templateSelectChanged = event.target.matches(
    'custom-select[name="email-template"]'
  )

  if (templateSelectChanged) {
    const updatedPath = `/admin/emails/${event.target.value}`
    if (window.location.pathname !== updatedPath) {
      window.location.replace(updatedPath)
    }
  }
}

async function sendBreachAlertEmail () {
  try {
    const csrfToken = document
      .querySelector('.js-email[data-csrf-token]')
      .getAttribute('data-csrf-token')

    const response = await fetch('/admin/send-test-email', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ emailId: emailTemplateSelect.value })
    })

    if (response?.redirected) {
      throw response.error
    }
  } catch (err) {
    throw new Error(`Sending test email failed: ${err}`)
  }
}

if (emailsPartial) init()
