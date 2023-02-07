/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const breachesPartial = document.querySelector("[data-partial='emails']")
let sendAlertTestButton

function init () {
  sendAlertTestButton = document.getElementById('sendAlertTestButton')

  sendAlertTestButton.addEventListener('click', sendBreachAlertEmail)
}

async function sendBreachAlertEmail () {
  const emailId = 'test-email-id'
  try {
    const csrfToken = document
      .querySelector('.js-emails[data-csrf-token]')
      .getAttribute('data-csrf-token')

    const response = await fetch('/user/send-test-email', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ emailId })
    })

    if (response?.redirected) {
      throw response.error
    }
  } catch (err) {
    throw new Error(`Sending test email (${emailId}) failed: ${err}`)
  }
}

if (breachesPartial) init()
