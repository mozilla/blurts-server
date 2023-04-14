/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// percentage a section that has to be in view in order to appear
const sectionThreshold = 0.1
const queueIntervalDuration = 150

let observers
let queueInterval
// holds the sections so they can appear one after another
const entryQueue = []

function handleShowSection () {
  if (!entryQueue.length && queueInterval) {
    clearInterval(queueInterval)
    queueInterval = null
    return
  }

  const nextEntry = entryQueue.shift()
  nextEntry.target.dataset.enterTransition = 'visible'
}

function setQueueInterval () {
  queueInterval = setInterval(handleShowSection, queueIntervalDuration)
}

function handleScroll (entries) {
  entries.forEach(entry => {
    const sectionElement = entry.target
    const hasEntered = sectionElement.getAttribute('data-enter-transition') === 'visible'

    if (hasEntered) {
      return
    }

    const isInViewport = entry.isIntersecting
    if (isInViewport) {
      entryQueue.push(entry)
    }

    if (!queueInterval) {
      setQueueInterval()
    }
  })
}

function init (sections) {
  const observer = new IntersectionObserver(handleScroll, {
    threshold: sectionThreshold
  })

  observers = [...sections].map(section => {
    section.dataset.enterTransition = 'entering'

    observer.observe(section)
    return observer
  })

  setQueueInterval()
}

if (!observers) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)')
  const allowMotion = mediaQuery && mediaQuery.matches

  const sections = document.querySelectorAll('[data-enter-transition]')

  // Don’t hide elements that are marked for entering transitions
  // while users set their motion preferences.
  mediaQuery.addEventListener('change', () => {
    const documentStyle = document.documentElement.style
    documentStyle.setProperty('--enter-transition-opacity', '1')
    documentStyle.setProperty('--enter-transition-y', '0')
  })

  if (allowMotion) {
    init(sections)
  }
}
