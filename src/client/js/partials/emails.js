/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const breachesPartial = document.querySelector("[data-partial='emails']")
let emailsSection
let sendAlertTestButton

function init () {
  sendAlertTestButton = document.getElementById('sendAlertTestButton')
  emailsSection = breachesPartial.querySelector('.emails-section')

  sendAlertTestButton.addEventListener('click', sendBreachAlertEmail)
}

async function sendBreachAlertEmail () {
  try {
    const res = await fetch('/api/v1/hibp/notify', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer <HIBP_NOTIFY_TOKEN>',
        'Content-Type': 'application/json',
        'x-csrf-token': emailsSection.dataset.token
      },
      body: JSON.stringify({
        breachName: 'Adobe',
        hashPrefix: '365050',
        hashSuffixes: ['53cbb89874fc738c0512daf12bc4d91765']
      })
    })

    if (!res.ok) throw new Error('Bad fetch response')

    console.log('Sent breach alert email')
  } catch (e) {
    console.error('Could not send breach alert email:', e)
  }
}

if (breachesPartial) init()
