/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../../app-constants.js'

export const analytics = `
  if (navigator.doNotTrack === '1') {
    function gtag() {
      console.debug("Google Analytics disabled by DNT")
    }
  } else {
    // Use nonce to load gtag.js, @see https://developers.google.com/tag-platform/tag-manager/web/csp
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtag/js?id='+i+dl;var n=d.querySelector('[nonce]');
    n&&j.setAttribute('nonce',n.nonce||n.getAttribute('nonce'));f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${AppConstants.GA4_MEASUREMENT_ID}');

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '${AppConstants.GA4_MEASUREMENT_ID}', {
      cookie_domain: window.location.hostname,
      cookie_flags: "SameSite=None;Secure",
      debug_mode: '${Boolean(AppConstants.GA4_DEBUG_MODE)}'
    });

    // Detect CTA clicks on public pages.
    document.querySelectorAll('[data-cta-id]').forEach(a =>
      a.addEventListener('click', e => {
        gtag('event', 'clicked_cta', { cta_id: a.dataset.ctaId })
      }
    ))
  }
  window.gtag = gtag
`