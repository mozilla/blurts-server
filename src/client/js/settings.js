const settingsAlertOptionsInputs = document.getElementsByClassName('js-settings-alert-options-input')

if (settingsAlertOptionsInputs?.length) {
  for (const inputElement of settingsAlertOptionsInputs) {
    inputElement.addEventListener('change', async event => {
      try {
        const communicationOption = event.target.getAttribute('data-alert-option')
        const csrfToken = document
          .getElementById('js-settings')
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

const settingsAddEmail = document.getElementById('js-settings-add-email-opener')
if (settingsAddEmail) {
  settingsAddEmail.addEventListener('click', async _ => {
    try {
      const addEmailDialog = document.getElementById('js-settings-modal')
      addEmailDialog.showModal()
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })
}

const settingsClose = document.getElementById('js-settings-close')
if (settingsClose) {
  settingsClose.addEventListener('click', async _ => {
    try {
      const addEmailDialog = document.getElementById('js-settings-modal')
      addEmailDialog.close()
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })
}

const settingsAddVerification = document.getElementById('js-settings-modal-send-verification')
if (settingsAddVerification) {
  settingsAddVerification.addEventListener('click', async _ => {
    const email = document.getElementById('js-settings-email-modal-input').value
    const csrfToken = document
      .getElementById('js-settings')
      .getAttribute('data-csrf-token')

    const response = await fetch('/api/v1/user/email', {
      headers: {
        'Content-Type': 'application/json',
        'x-csrf-token': csrfToken
      },
      mode: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ email })
    })

    if (!response?.ok) {
      throw new Error(`Sending verification email failed: ${response?.error}`)
    }

    const addEmailDialogContent = document.getElementById('js-settings-modal-content')
    // TODO: Localize string below
    addEmailDialogContent.textContent = `Verify the link sent to ${email} to add it to Firefox Monitor. Manage all email addresses in Settings.`

    const addEmailDialogControls = document.getElementById('js-settings-modal-controls')
    addEmailDialogControls.hidden = true

    const addEmailDialog = document.getElementById('js-settings-modal')
    addEmailDialog.addEventListener('close', _ => {
      addEmailDialogControls.hidden = false
      return window.location.reload(true)
    }, { once: true })
  })
}

const settingsRemoveEmailButtons = document.getElementsByClassName('js-remove-email-button')
if (settingsRemoveEmailButtons?.length) {
  for (const removeEmailButton of settingsRemoveEmailButtons) {
    removeEmailButton.addEventListener('click', async event => {
      try {
        const subscriberId = event.target.getAttribute('data-subscriber-id')
        const emailId = event.target.getAttribute('data-email-id')
        const csrfToken = document
          .getElementById('js-settings')
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
          .getElementById('js-settings')
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
