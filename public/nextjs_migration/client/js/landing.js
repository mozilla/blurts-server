/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/** @type {HTMLDivElement} */
// @ts-ignore: We guard against a null value by not calling init():
const landingPartial = document.querySelector("[data-partial='landing']")

if (landingPartial) {
  init()
}

async function init () {
  const landingForm = landingPartial.querySelector('form.exposure-scan')
  if (!(landingForm instanceof HTMLFormElement)) {
    return
  }
  landingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const emailField = landingForm.elements.namedItem('email')
    const newLocation = new URL(document.location)
    newLocation.pathname = '/scan/'
    newLocation.hash = `#email=${encodeURIComponent(emailField.value)}`
    document.location = newLocation.href
  })
  landingForm.hidden = false
}
