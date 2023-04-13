/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const classNameToObserve = 'section-transition'
const classNameEntered = `${classNameToObserve}-entered`
const queueIntervalDuration = 150

// percentage a section that has to be in view in order to appear
const sectionThreshold = 0.1

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
  nextEntry.target.classList.add(classNameEntered)
}

function setQueueInterval () {
  queueInterval = setInterval(handleShowSection, queueIntervalDuration)
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
    observer.observe(section)
    return observer
  })

  setQueueInterval()
}

if (!observers) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)')
  const allowMotion = mediaQuery && mediaQuery.matches

  // Handle the following edge case: A user has the Monitor landing page open
  // and is setting their preferences.
  const sections = document.getElementsByClassName(classNameToObserve)
  mediaQuery.addEventListener('change', () => {
    [...sections].forEach(section => section.classList.add(classNameEntered))
  })

  if (allowMotion) {
    init(sections)
  }
}
