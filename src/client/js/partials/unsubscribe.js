/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const unsubscribePartial = document.querySelector('[data-partial="unsubscribe"]')

function init () {
  unsubscribePartial.querySelector('.js-unsubscribe-button').addEventListener('click', handleEvent)
}

async function handleEvent (event) {
  // TODO: Use more specific and localised messages when we reinstate
  // unsubscribing from all emails.
  const errorMessage = 'Unsubscribing failed.'
  const successMessage = 'Unsubscribed successfully.'

  try {
    const target = event.target
    const csrfToken = target.getAttribute('data-csrf-token')
    const unsubscribeParameters = getUnsubscribeParameters()

    if (unsubscribeParameters === null) {
      const missingParametersToast = document.createElement('toast-alert')
      missingParametersToast.textContent = errorMessage
      document.body.append(missingParametersToast)
      return
    }

    const response = await fetch('/user/unsubscribe', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify(unsubscribeParameters)
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

  window.gtag('event', 'unsubscribe', { action: 'click', page_location: location.href })
}

/**
 * @returns { null | { hash: string; token: string; } }
 */
function getUnsubscribeParameters () {
  const queryParams = new URLSearchParams(document.location.search)
  const token = queryParams.get('token')
  const hash = queryParams.get('hash')
  if (typeof token === 'string' && typeof hash === 'string') {
    return { hash, token }
  }
  return null
}

if (unsubscribePartial) init()
