/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
        throw new Error(`Re-sending verification email failed: ${err}`)
      }
      event.preventDefault()
      return false
    })
  }
}
