/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const recruitmentBanner = document.querySelector('.recruitment-banner')
const recruited = document.cookie.split('; ').some((item) => item.trim().startsWith('recruited-2023-05='))

function init () {
  if (!recruitmentBanner) {
    return
  }

  // Only show the banner and set event listeners if the user has not interacted with the survey
  if (!recruited) {
    recruitmentBanner.toggleAttribute('hidden')
    const recruitmentBannerLink = document.getElementById('recruitment-banner-link')
    const recruitmentDismissButton = document.getElementById('recruitment-banner-dimiss')
    recruitmentBannerLink.addEventListener('click', handleEvent)
    recruitmentDismissButton.addEventListener('click', handleEvent)
  }
}

function handleEvent (e) {
  const date = new Date()
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000)
  document.cookie = 'recruited-2023-05=true; expires=' + date.toUTCString() + '; path=/; SameSite=Lax'

  switch (true) {
    case e.target.matches('#recruitment-banner-dimiss'):
      document.getElementById('recruitment-banner-link').parentElement.remove()
      break
  }
}

init()
