/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../../app-constants.js'

export const analytics = nonce => `
<script nonce='${nonce}' async
  src="https://www.googletagmanager.com/gtag/js?id=${AppConstants.GA4_MEASUREMENT_ID}">
</script>
<script nonce='${nonce}'>
  if (navigator.doNotTrack === '1') {
    function gtag() {
      console.debug("Google Analytics disabled by DNT")
    }
  } else {
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', '${AppConstants.GA4_MEASUREMENT_ID}', {
      cookie_domain: window.location.hostname,
      cookie_flags: "SameSite=None;Secure",
      debug_mode: '${Boolean(AppConstants.GA4_DEBUG_MODE)}'
    })

    // Instrument CTA clicks for analytics.
    document.querySelectorAll('[data-cta-id]').forEach(a =>
      a.addEventListener('click', e => {
        gtag('event', 'clicked_cta', { cta_id: a.dataset.ctaId })
      }
    ))
  }
  window.gtag = gtag
</script>
`