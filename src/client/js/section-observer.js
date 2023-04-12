/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const classNameToObserve = 'section-transition'
const classNameEntered = `${classNameToObserve}-entered`

const CUE_INTERVAL = 150
const SECTION_SCROLL_THRESHOLD = 0.1

let observers
let cueInterval
const entryCue = []

function handleShowSection () {
  if (!entryCue?.length && cueInterval) {
    clearInterval(cueInterval)
    cueInterval = null
    return
  }

  const nextEntry = entryCue.shift()
  nextEntry.target.classList.add(classNameEntered)
}

function setCueInterval () {
  cueInterval = setInterval(handleShowSection, CUE_INTERVAL)
}

function handleScroll (entries) {
  entries.forEach(entry => {
    const sectionElement = entry.target
    const hasEntered = sectionElement.classList.contains(classNameEntered)

    if (hasEntered) {
      return
    }

    const isInViewport = entry.isIntersecting
    if (isInViewport) {
      entryCue.push(entry)
    }

    if (!cueInterval) {
      setCueInterval()
    }
  })
}

function init (sections) {
  const observer = new IntersectionObserver(handleScroll, {
    threshold: SECTION_SCROLL_THRESHOLD
  })

  observers = [...sections].map(section => {
    observer.observe(section)
    return observer
  })

  setCueInterval()
}

if (!observers) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)')
  const allowMotion = mediaQuery && mediaQuery.matches

  const sections = document.getElementsByClassName(classNameToObserve)
  mediaQuery.addEventListener('change', () => {
    [...sections].forEach(section => section.classList.add(classNameEntered))
  })

  if (allowMotion) {
    init(sections)
  }
}
