/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

let dialogEl, form, continue_btn

function init () {
  dialogEl = document.querySelector('dialog[data-partial="cancelSubscriptionSurvey"]')
  if (!dialogEl) return
  continue_btn = dialogEl.querySelector('#continue-to-unsubscribe-flow-btn')
  
  form = dialogEl.querySelector('form')
  continue_btn.addEventListener("click", function() {
    form.addEventListener('submit', handleSubmit)
    window.open("https://accounts.firefox.com/subscriptions", "_blank");
  })
  dialogEl.addEventListener('close', kill)
}

async function handleSubmit (e) {
  e.preventDefault()

  try {
    // Add network request here
  } catch (e) {
    const toast = document.createElement('toast-alert')
    toast.textContent = 'Could not submit survey'
    dialogEl.append(toast)
    console.error('Could not submit downgrade survey.', e)
  }
}

function kill () {
  form.removeEventListener('submit', handleSubmit)
  dialogEl.removeEventListener('close', kill)
}

export default init
