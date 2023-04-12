/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from './app-constants.js'

const debugMode = AppConstants.NODE_ENV !== 'production'

if (navigator.doNotTrack === '1') {
  window.gtag = function () {
    console.debug('Analytics disabled by DNT')
  }
  window.gtag()
} else {
  await import(`https://www.googletagmanager.com/gtag/js?id=${AppConstants.GA4_MEASUREMENT_ID}`)

  window.dataLayer = window.dataLayer || []

  window.gtag = function () {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', AppConstants.GA4_MEASUREMENT_ID, {
    cookie_domain: window.location.hostname,
    cookie_flags: 'SameSite=None;Secure',
    debug_mode: debugMode
  })

  // Instrument CTA clicks for analytics.
  document.querySelectorAll('[data-cta-id]').forEach(cta =>
    cta.addEventListener('click', () => window.gtag('event', 'clicked_cta', { cta_id: cta.dataset.ctaId })))
}
