/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

/**
 * @typedef {object} PartialData
 * @property {string} csrfToken
 * @property {number} emailLimit
 */

/**
 * @param {PartialData} data
 * @returns string
 */
export const cancelSubscriptionSurvey = () => `
<div class='dialog'>
<header>
  <button class='close'></button>
  <img src='/images/dialog-unsubscribe-plane.svg'>
  <h2>${getMessage('settings-unsubscribe-dialog-title')}</h2>
</header>
<form>
<!-- TODO: Needs a submit endpoint for the form --->
  <p>${getMessage('settings-unsubscribe-dialog-info')}</p>
  <textarea id='unsubscribe-feedback' placeholder='${getMessage('settings-unsubscribe-dialog-message-placeholder')}'></textarea>
  <p class='warning'>${getMessage('settings-unsubscribe-dialog-confirmation', {faq_href: 'href="https://support.mozilla.org/kb/general-questions-about-privacy-protection-scans#w_what-happens-when-i-unsubscribe-from-premium" target="_blank"'})}
  </p>
  <!-- TODO: Figure out if this button is functioning as a form submission or a link to go to another page --> 
  <a href='#'>
    <button class='primary' type='submit'>
      ${getMessage('settings-unsubscribe-dialog-continue')}
    </button>
  </a>
  <a href="/user/breaches">${getMessage('settings-unsubscribe-dialog-cancel')}</a>
</form>
</div>
`
