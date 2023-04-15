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
      document.querySelector('dialog[data-partial="addEmail"]')
        .addEventListener('close', () => {
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
        } else {
          window.gtag('event', 'changed_email_preference', { action: 'click', page_location: location.href, result: 'success' })
        }
      } catch (err) {
        window.gtag('event', 'changed_email_preference', { action: 'click', page_location: location.href, result: 'fail' })
        throw new Error(`Updating communication option failed: ${err}`)
      }
      event.preventDefault()
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

        window.gtag('event', 'removed_email', { action: 'click', page_location: location.href })
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
          window.gtag('event', 'resend_email', { action: 'click', page_location: location.href, result: 'success' })
        }

        if (response?.redirected) {
          throw response.error
        }
      } catch (err) {
        window.gtag('event', 'resend_email', { action: 'click', page_location: location.href, result: 'fail' })
        throw new Error(`Re-sending verification email failed. ${err}`)
      }
      event.preventDefault()
      return false
    })
  }
}

if (settingsPartial) init()
