const userMenuButton = document.querySelector('.user-menu-button')
const userMenuPopover = document.querySelector('.user-menu-popover')

function handleMenuButton () {
  if (!userMenuPopover) {
    return
  }

  if (userMenuPopover.hasAttribute('hidden')) {
    // Show popover
    userMenuPopover.setAttribute('aria-expanded', true)
    userMenuPopover.removeAttribute('hidden')

    // Hide popover onblur
    userMenuPopover.addEventListener('blur', handleMenuButton)
    userMenuPopover.focus()
  } else {
    // Hide popover
    userMenuPopover.setAttribute('aria-expanded', false)
    userMenuPopover.setAttribute('hidden', '')

    userMenuButton.focus()
  }
}

if (userMenuButton) {
  userMenuButton.addEventListener('click', handleMenuButton)
}
