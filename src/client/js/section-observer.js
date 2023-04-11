/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const classNameToObserve = 'section-transition'
let observers

function handleScroll (entries) {
  const classNameEntered = `${classNameToObserve}-entered`

  entries.forEach(entry => {
    const sectionElement = entry.target
    const hasEntered = sectionElement.classList.contains(classNameEntered)

    if (hasEntered) {
      return
    }

    const isInViewport = entry.isIntersecting
    if (isInViewport) {
      sectionElement.classList.add(classNameEntered)
    }
  })
}

function init (sections) {
  const observer = new IntersectionObserver(handleScroll)

  observers = [...sections].map(section => {
    observer.observe(section)
    return observer
  })
}

if (!observers) {
  const sections = document.getElementsByClassName(classNameToObserve)

  init(sections)
}
