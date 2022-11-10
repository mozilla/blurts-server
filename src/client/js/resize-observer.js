const resizeObserver = new ResizeObserver(handleResize)
const mediaQueryMobile = window.matchMedia('(max-width: 480px)') // this breakpoint is also set in variables.css
const header = document.querySelector('body > header')
const footer = document.querySelector('body > footer')
const nav = document.querySelector('body > nav')

function handleResize (entries) {
  let size

  entries.forEach((entry) => {
    switch (entry.target) {
      case header:
        size = entry.borderBoxSize[0].blockSize
        document.documentElement.style.setProperty('--header-h', `${Math.round(size)}px`)
        break
      case footer:
        size = entry.borderBoxSize[0].blockSize
        document.documentElement.style.setProperty('--footer-h', `${Math.round(size)}px`)
        break
      case nav:
        size = entry.borderBoxSize[0].inlineSize
        if (size) {
          document.documentElement.style.setProperty('--nav-w', `${Math.round(size)}px`)
        } else {
          document.documentElement.style.removeProperty('--nav-w')
        }
    }
  })
}

function handleMediaQuery (e = mediaQueryMobile) {
  document.documentElement.classList.toggle('mobile', e.matches)
  if (nav) nav.toggleAttribute('hidden', e.matches)
}

if (header) resizeObserver.observe(header)
if (footer) resizeObserver.observe(footer)
if (nav) resizeObserver.observe(nav)

handleMediaQuery()
mediaQueryMobile.addEventListener('change', handleMediaQuery)
