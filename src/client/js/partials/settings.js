/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const settingsPartial = document.querySelector("[data-partial='settings']")

function init () {
  document.body.addEventListener('email-added', handleEvent)
}

function handleEvent (e) {
  switch (true) {
    case e.type === 'email-added':
      document.querySelector('dialog[data-partial="add-email"]')
        .addEventListener('close', () => {
          gtag('event', 'click', { event_category: 'button', event_label: 'add email' })
          window.location.reload()
        }, { once: true })
      break
  }
}

const settingsAlertOptionsInputs = document.getElementsByClassName('js-settings-alert-options-input')
if (settingsAlertOptionsInputs?.length) {
  for (const inputElement of settingsAlertOptionsInputs) {
    inputElement.addEventListener('change', async event => {
      try {
        const communicationOption = event.target.getAttribute('data-alert-option')
        const csrfToken = document
          .querySelector('.js-settings[data-csrf-token]')
          .getAttribute('data-csrf-token')

        const response = await fetch('/api/v1/user/update-comm-option', {
          headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          mode: 'same-origin',
          method: 'POST',
          body: JSON.stringify({ communicationOption })
        })

        if (response && response.redirected === true) {
          throw response.error
        }
      } catch (err) {
        throw new Error(`Updating communication option failed: ${err}`)
      }
      event.preventDefault()
      gtag('event', 'click', { event_category: 'button', event_label: 'change email preference' })
      return false
    })
  }
}

const settingsRemoveEmailButtons = document.getElementsByClassName('js-remove-email-button')
if (settingsRemoveEmailButtons?.length) {
  for (const removeEmailButton of settingsRemoveEmailButtons) {
    removeEmailButton.addEventListener('click', async event => {
      try {
        const subscriberId = event.target.getAttribute('data-subscriber-id')
        const emailId = event.target.getAttribute('data-email-id')
        const csrfToken = document
          .querySelector('.js-settings[data-csrf-token]')
          .getAttribute('data-csrf-token')

        const response = await fetch('/api/v1/user/remove-email', {
          headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken
          },
          mode: 'same-origin',
          method: 'POST',
          body: JSON.stringify({ emailId, subscriberId })
        })

        if (response && response.redirected === true) {
          return window.location.reload(true)
        }

        gtag('event', 'click', { event_category: 'button', event_label: 'remove email' })
      } catch (err) {
        console.error(`Error: ${err}`)
      }
    })
  }
}

const settingsResendEmailLinks = document.getElementsByClassName('js-settings-resend-email')
if (settingsResendEmailLinks?.length) {
  for (const resendEmailLink of settingsResendEmailLinks) {
    resendEmailLink.addEventListener('click', async event => {
      try {
        const emailId = event.target.getAttribute('data-email-id')
        const csrfToken = document
          .querySelector('.js-settings[data-csrf-token]')
          .getAttribute('data-csrf-token')

        const response = await fetch('/api/v1/user/resend-email', {
          headers: {
            'Content-Type': 'application/json',
            'x-csrf-token': csrfToken,
            Accept: 'text/html' // set to request localized response
          },
          mode: 'same-origin',
          method: 'POST',
          body: JSON.stringify({ emailId })
        })

        if (!response.ok) {
          // TODO: localize error messages
          const toast = document.createElement('toast-alert')
          toast.textContent = `Re-sending verification email failed. ${response.statusText}`
          document.body.append(toast)
        }

        if (response?.redirected) {
          throw response.error
        }
      } catch (err) {
        throw new Error(`Re-sending verification email failed. ${err}`)
      }
      event.preventDefault()
      gtag('event', 'click', { event_category: 'button', event_label: 'resend email' })
      return false
    })
  }
}

if (settingsPartial) init()
