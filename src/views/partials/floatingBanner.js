/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../../appConstants.js'
import { getMessage } from '../../utils/fluent.js'

/**
 * @param {{ pathname: string; }} options
 * @returns { string } banner
 */
export const floatingBanner = ({ pathname }) => {
  const pageHasFloatingBanner = AppConstants.FLOATING_BANNER_PAGES?.split(',').includes(pathname)
  if (!pageHasFloatingBanner) {
    return ''
  }

  return `
    <link rel='stylesheet' href='/css/partials/floatingBanner.css' type='text/css'>
    <script src='/js/partials/floatingBanner.js' type='module'></script>
    <div class='floating-banner' data-type='${AppConstants.FLOATING_BANNER_TYPE ?? ''}' data-delay='${AppConstants.FLOATING_BANNER_DELAY ?? ''}' hidden>
      <img class='floating-banner-image' src='/images/banner-icon.svg' alt='' />
      <p class='floating-banner-content'>${getMessage('floating-banner-text')}</p>
      <div class='floating-banner-buttons'>
        <a href='${AppConstants.FLOATING_BANNER_LINK}' target='_blank' class='button primary'>${getMessage('floating-banner-link-label')}</a>
        <button class='floating-banner-dismiss secondary'>${getMessage('floating-banner-dismiss-button-label')}</button>
      </div>
    </div>
  `
}
