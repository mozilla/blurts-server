/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import '../../lib/lottie.min.js'

const animationPartial = document.querySelector("[data-partial='animationPreview']")
let animation

function handleOnComplete (loopEvent) {
  const { type } = loopEvent
  console.log(type, animation.isPaused)
}

function loadAnimation (filename) {
  const container = animationPartial.querySelector('.animation-canvas')
  if (!container) {
    return
  }

  if (animation) {
    animation.destroy()
  }

  animation = window.lottie.loadAnimation({
    autoplay: false,
    container,
    loop: true,
    path: `../../animations/${filename}`,
    renderer: 'svg'
  })
  animation.onComplete = handleOnComplete
}

function init () {
  const animationSelect = animationPartial.querySelector('custom-select')
  animationSelect.addEventListener('change', (event) => {
    loadAnimation(event.target.value)
  })
  loadAnimation(animationSelect.value)

  const button = animationPartial.querySelector('.animation-button')
  button.addEventListener('click', () => {
    if (animation.isPaused) {
      animation.play()
    } else {
      animation.pause()
    }
  })
}

const lottieIsAvailable = window && window.lottie
if (animationPartial && lottieIsAvailable) {
  init()
}
