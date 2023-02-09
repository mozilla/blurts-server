const form = document.querySelector('input[name="email-address"]')?.closest('form')

function init () {
  console.log('add email init')
  form.addEventListener('submit', e => console.log(e))
}

if (form) init()

// const settingsAddVerification = document.getElementById('js-settings-modal-send-verification')
// if (settingsAddVerification) {
//   settingsAddVerification.addEventListener('click', async _ => {
//     const email = document.getElementById('js-settings-email-modal-input').value
//     const csrfToken = document
//       .querySelector('.js-settings[data-csrf-token]')
//       .getAttribute('data-csrf-token')

//     const response = await fetch('/api/v1/user/email', {
//       headers: {
//         'Content-Type': 'application/json',
//         'x-csrf-token': csrfToken
//       },
//       mode: 'same-origin',
//       method: 'POST',
//       body: JSON.stringify({ email })
//     })

//     if (!response?.ok) {
//       throw new Error(`Sending verification email failed: ${response?.error}`)
//     }

//     const addEmailDialogContent = document.getElementById('js-settings-modal-content')
//     // TODO: Localize string below
//     addEmailDialogContent.textContent = `Verify the link sent to ${email} to add it to Firefox Monitor. Manage all email addresses in Settings.`

//     const addEmailDialogControls = document.getElementById('js-settings-modal-controls')
//     addEmailDialogControls.hidden = true

//     const addEmailDialog = document.getElementById('js-settings-modal')
//     addEmailDialog.addEventListener('close', _ => {
//       addEmailDialogControls.hidden = false
//       return window.location.reload(true)
//     }, { once: true })
//   })
// }
