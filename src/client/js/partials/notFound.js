/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

if (window.history.length > 1) {
  const backCta = document.getElementById('back-cta')
  backCta?.addEventListener('click', () => {
    window.history.back()

    gtag('event', 'click', { event_category: 'button', event_label: 'not found back' })

    // The call to `window.history.back()` might do nothing; for example, if the
    // user has clicked Back to get to the 404 page: while there might not be
    // another page to go back to, window.history.length will still be > 1
    // because of the page the user can go forward to.
    // Unfortunately there's no way to check whether it's possible to go back,
    // or to check whether `.back()` succeeded, so we just use the fallback
    // after half a second as passed:
    setTimeout(() => {
      document.location = '/'
    }, 500)
  })
  document.getElementById('home-cta')?.toggleAttribute('hidden', true)
  backCta?.toggleAttribute('hidden', false)
}
