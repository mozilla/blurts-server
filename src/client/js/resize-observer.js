const resizeObserver = new ResizeObserver(handleResize)
const header = document.querySelector('body header')

function handleResize (entries) {
  let h

  entries.forEach((entry) => {
    switch (entry.target) {
      case header:
        h = entry.borderBoxSize[0].blockSize
        if (header.h === h) return
        document.documentElement.style.setProperty('--header-h', `${Math.round(h)}px`)
        header.h = h
        break
    }
  })
}

resizeObserver.observe(header)
