/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const userMenuButton = document.querySelector('.user-menu-button')
const userMenuPopover = document.querySelector('.user-menu-popover')
const userMenuWrapper = document.querySelector('.user-menu-wrapper')

function handleBlur (event, onBlur) {
  const currentTarget = event.currentTarget

  requestAnimationFrame(() => {
    const isChildElement = currentTarget.contains(document.activeElement)

    if (!isChildElement) {
      onBlur()
    }
  })
}

function handleMenuButton () {
  if (!userMenuPopover || !userMenuWrapper) {
    return
  }

  if (userMenuPopover.hasAttribute('hidden')) {
    // Show popover
    userMenuPopover.setAttribute('aria-expanded', true)
    userMenuPopover.removeAttribute('hidden')

    // Handle onblur
    userMenuWrapper.addEventListener('blur', (event) => handleBlur(event, handleMenuButton))
    userMenuWrapper.focus()

    // TODO: Re-enable gtag events
    // window.gtag('event', 'opened_closed_user_menu', { action: 'open' })
  } else {
    // Hide popover
    userMenuPopover.setAttribute('aria-expanded', false)
    userMenuPopover.setAttribute('hidden', '')

    userMenuButton.focus()

    // window.gtag('event', 'opened_closed_user_menu', { action: 'close' })
  }
}

if (userMenuButton) {
  userMenuButton.addEventListener('click', handleMenuButton)
}
