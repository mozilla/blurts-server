/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const unsubscribeButton = document.querySelector('.js-unsubscribe-button')

unsubscribeButton.addEventListener('click', async event => {
  // TODO: Localize success/error messages
  const errorMessage = 'Unsubscribing failed.'
  const successMessage = 'Unsubscribed successfully.'

  try {
    const target = event.target
    const csrfToken = target.getAttribute('data-csrf-token')
    const queryParams = target.getAttribute('data-query-params')

    const response = await fetch('/user/unsubscribe-monthly', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken
      },
      mode: 'same-origin',
      method: 'POST',
      body: queryParams
    })

    if (response?.redirected) {
      throw response.error
    }

    let toast
    if (!response.ok) {
      toast = document.createElement('toast-alert')
      toast.textContent = errorMessage
    } else {
      toast = document.createElement('toast-alert')
      toast.setAttribute('type', 'success')
      toast.textContent = successMessage
    }

    document.body.append(toast)
  } catch (error) {
    throw new Error(errorMessage)
  }
})
