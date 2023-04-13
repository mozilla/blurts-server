/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/** @type {HTMLDivElement} */
// @ts-ignore: We guard against a null value by not calling init():
const exposuresSetupPartial = document.querySelector("[data-partial='exposuresSetup']")

if (exposuresSetupPartial) {
  init()
}

async function init () {
  const dataEl = /** @type {HTMLTemplateElement} */ (exposuresSetupPartial.querySelector('#data'))
  const csrfToken = /** @type {string} */ (dataEl.dataset.csrfToken)

  const mockButton = /** @type {HTMLButtonElement} */ (exposuresSetupPartial.querySelector('#storeMockData'))
  mockButton.addEventListener('click', async () => {
    await storeMockData(csrfToken)
    document.location.reload()
  })
}

/**
 * @param {string} csrfToken
 */
async function storeMockData (csrfToken) {
  /** @type {import('../../../external/onerep').ProfileData} */
  const requestBody = {
    city: 'Tulsa',
    first_name: 'John',
    last_name: 'Doe',
    state: 'OK'
  }

  try {
    const res = await fetch('/api/v1/user/exposures/', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken,
        Accept: 'application/json'
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify(requestBody)
    })

    if (!res.ok) {
      throw new Error('Immediately caught to show an error message.')
    }

    /** @type {import("../../../controllers/request-breach-scan").RequestBreachScanResponse} */
    const responseBody = await res.json()

    if (!responseBody.success) {
      throw new Error('Immediately caught to show an error message.')
    }
  } catch (e) {
  }
}
