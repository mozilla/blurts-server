/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const unsubscribeButton = document.querySelector('.js-unsubscribe-button')

unsubscribeButton.addEventListener('click', async event => {
  try {
    const csrfToken = event.target.getAttribute('data-csrf-token')
    const response = await fetch('/user/unsubscribe', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ test: 'test' })
    })

    if (!response.ok) {
      const toast = document.createElement('toast-alert')
      toast.textContent = `Unsubscribing failed: ${response.statusText}`
      document.body.append(toast)
    }

    if (response?.redirected) {
      throw response.error
    }
  } catch (err) {
    throw new Error(`Unsubscribing failed: ${err}`)
  }
})
