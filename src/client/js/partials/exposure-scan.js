/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const exposureScanPartial = document.querySelector("[data-partial='exposureScan']")

if (exposureScanPartial) {
  init()
}

async function init () {
  const urlParams = new URLSearchParams(document.location.search)
  const emailFromUrl = urlParams.get('email')
  /** @type {HTMLTemplateElement} */
  const dataEl = exposureScanPartial.querySelector('#data')
  dataEl.dataset.email = emailFromUrl
  const sanitisedEmail = dataEl.dataset.email.trim()

  const res = await fetch('/api/v1/scan/', {
    headers: {
      'Content-Type': 'application/json',
      'x-csrf-token': dataEl.dataset.csrfToken,
      Accept: 'application/json'
    },
    mode: 'same-origin',
    method: 'POST',
    body: JSON.stringify({
      email: sanitisedEmail
    })
  })
}
