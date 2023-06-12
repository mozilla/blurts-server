/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../../appConstants.js'
import { getMessage } from '../../utils/fluent.js'
import { appendUtmParams } from '../../utils/utmParams.js'

/**
 * @param {{ pathname: string; }} options
 * @returns {string} banner
 */
export const getFloatingBanner = ({ pathname }) => {
  const pageHasFloatingBanner = AppConstants.FLOATING_BANNER_PAGES?.split(',').includes(pathname)
  if (!pageHasFloatingBanner) {
    return ''
  }

  const linkHref = appendUtmParams({
    linkUrl: AppConstants.FLOATING_BANNER_LINK,
    utmParams: {
      utm_source: 'fx-monitor',
      utm_medium: 'mozilla-websites',
      utm_content: `${AppConstants.FLOATING_BANNER_TYPE}_${pathname}`
    }
  })

  return `
    <link rel='stylesheet' href='/css/partials/floatingBanner.css' type='text/css'>
    <script src='/js/partials/floatingBanner.js' type='module'></script>
    <div tabindex='-1' class='floating-banner' data-type='${AppConstants.FLOATING_BANNER_TYPE ?? ''}' data-delay='${AppConstants.FLOATING_BANNER_DELAY ?? '0'}'  hidden>
      <img class='floating-banner-image' src='/images/banner-icon.svg' alt='' />
      <p class='floating-banner-content'>${getMessage('floating-banner-text')}</p>
      <div class='floating-banner-buttons'>
        <a href='${linkHref}' target='_blank' class='button primary'>${getMessage('floating-banner-link-label')}</a>
        <button class='floating-banner-dismiss secondary'>${getMessage('floating-banner-dismiss-button-label')}</button>
      </div>
    </div>
  `
}
