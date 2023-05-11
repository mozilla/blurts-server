/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

export const cancelSubscriptionSurvey = () =>
`
  <div class='dialog'>
  <header>
    <button class='close'></button>
    <img alt='' src='/images/dialog-unsubscribe-plane.svg'>
    <h2>${getMessage('settings-unsubscribe-dialog-title')}</h2>
  </header>
  <form id='unsubscribe-feedback-form' action='' method=''>
  <!-- TODO: Needs a submit endpoint for the form --->
    <p>${getMessage('settings-unsubscribe-dialog-info')}</p>
    <textarea rows='4' id='unsubscribe-feedback' placeholder='${getMessage('settings-unsubscribe-dialog-message-placeholder')}'></textarea>
    <p class='warning'>${getMessage('settings-unsubscribe-dialog-confirmation', { faq_href: 'href="https://support.mozilla.org/kb/general-questions-about-privacy-protection-scans#w_what-happens-when-i-unsubscribe-from-premium" target="_blank"' })}
    </p>
    <!-- TODO: Network request for form submission & toast notification --> 
      <button aria-label='${getMessage('settings-unsubscribe-dialog-continue')}' id='continue-to-unsubscribe-flow-btn' type='submit' class='primary'>
        ${getMessage('settings-unsubscribe-dialog-continue')}
      </button>
    <a href="/user/breaches">${getMessage('settings-unsubscribe-dialog-cancel')}</a>
  </form>
  </div>
`
