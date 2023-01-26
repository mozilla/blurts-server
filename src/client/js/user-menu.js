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
