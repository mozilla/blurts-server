const userMenuButton = document.querySelector('.user-menu-button')

function handleEvent (e) {
  const popover = document.querySelector('.user-menu-popover')
  if (!popover) {
    return
  }

  if (popover.hasAttribute('hidden')) {
    e.target.setAttribute('aria-expanded', true)
    popover.removeAttribute('hidden')
  } else {
    e.target.setAttribute('aria-expanded', false)
    popover.setAttribute('hidden', '')
  }
}

if (userMenuButton) {
  userMenuButton.addEventListener('click', handleEvent)
}
