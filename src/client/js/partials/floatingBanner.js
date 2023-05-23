/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/** @type {HTMLDivElement} */
// @ts-ignore: We guard against a null value by not calling init():
const floatingBannerElement = document.querySelector('.floating-banner')

if (floatingBannerElement) {
  init()
}

function init () {
  const { type, delay } = floatingBannerElement.dataset
  if (!type || !delay || localStorage.getItem(type)) {
    return
  }

  setTimeout(() => {
    floatingBannerElement.removeAttribute('hidden')
  }, parseInt(delay, 10))

  const buttons = floatingBannerElement.querySelector('.floating-banner-buttons')
  if (!(buttons instanceof HTMLDivElement)) {
    return
  }

  [...buttons.children].forEach(button => {
    button.addEventListener('click', () => {
      localStorage.setItem(type, 1)
      floatingBannerElement.remove()
    })
  })
}
