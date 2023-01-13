const settingsUpdateCommOption = document.getElementsByClassName(
  'radio-comm-option'
)
if (settingsUpdateCommOption.length) {
  console.log('settings update comm option')
  for (const el of settingsUpdateCommOption) {
    el.addEventListener('click', async (event) => {
      try {
        const communicationOption = event.target.getAttribute('data-comm-option')
        const csrfToken = document
          .getElementById('settings')
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

const settingsAddEmail = document.getElementById('settings-add-email')
if (settingsAddEmail) {
  console.log('settings add email')
  settingsAddEmail.addEventListener('click', async (_) => {
    try {
      const addEmailDialog = document.getElementById('add-email-modal')
      addEmailDialog.showModal()
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })
}

const settingsClose = document.getElementById('settings-close')
if (settingsClose) {
  console.log('settings close')
  settingsAddEmail.addEventListener('click', async (_) => {
    try {
      const addEmailDialog = document.getElementById('add-email-modal')
      addEmailDialog.close()
    } catch (err) {
      console.error(`Error: ${err}`)
    }
  })
}

const settingsAddVerification = document.getElementById('send-verification')
if (settingsAddVerification) {
  console.log('settings send verification email')
  settingsAddVerification.addEventListener('click', async (_) => {
    const email = document.getElementById('email').value
    const csrfToken = document
      .getElementById('settings')
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

    if (!response || !response.ok) {
      throw new Error(`sending verification email failed: ${response.error}`)
    }

    const addEmailDialogContent = document.getElementById('add-email-modal-content')
    addEmailDialogContent.textContent = `Verify the link sent to ${email} to add it to Firefox Monitor. Manage all email addresses in Settings.`

    const addEmailDialogControls = document.getElementById('add-email-modal-controls')
    addEmailDialogControls.hidden = true

    const addEmailDialog = document.getElementById('add-email-modal')
    addEmailDialog.addEventListener('close', _ => {
      addEmailDialogControls.hidden = false
      return window.location.reload(true)
    }, { once: true })
  })
}

const settingsRemoveEmail = document.getElementsByClassName('remove-email')
if (settingsRemoveEmail.length) {
  console.log('settings remove email')
  for (const el of settingsRemoveEmail) {
    el.addEventListener('click', async (event) => {
      try {
        const subscriberId = event.target.getAttribute('data-subscriber-id')
        const emailId = event.target.getAttribute('data-email-id')
        const csrfToken = document
          .getElementById('settings')
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

const settingsResendEmail = document.getElementsByClassName(
  'settings-resend-email'
)
if (settingsResendEmail.length) {
  console.log('settings resend email')
  for (const el of settingsResendEmail) {
    el.addEventListener('click', async (event) => {
      try {
        const emailId = event.target.getAttribute('data-email-id')
        const csrfToken = document
          .getElementById('settings')
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

        if (response && response.redirected === true) {
          throw response.error
        }
      } catch (err) {
        throw new Error(`re-sending verification email failed: ${err}`)
      }
      event.preventDefault()
      return false
    })
  }
}
