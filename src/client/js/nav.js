const nav = document.querySelector('nav')

function init () {
  if (!nav) return

  nav.toggleAttribute('hidden', document.documentElement.classList.contains('mobile')) // show nav by default for desktop, hide for mobile
  nav.addEventListener('pointerdown', handleEvent)
  document.querySelector('header .nav-toggle').addEventListener('pointerdown', handleEvent)
}

function handleEvent (e) {
  switch (true) {
    case e.target.matches('.nav-toggle'):
      nav.toggleAttribute('hidden')
      break
    case e.target.matches('.nav-item'):
      e.target.style.setProperty('color', 'var(--purple-70)')
      nav.querySelector('.nav-item.current')?.classList.remove('current')
      break
  }
}

init()
