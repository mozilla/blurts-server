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
export const cancelSubscriptionSurvey = data => `
<div class='dialog'>
<header>
  <button class='close'></button>
  <img src='/images/dialog-unsubscribe-plane.svg'>
  <h2>${getMessage('settings-unsubscribe-dialog-title')}</h2>
</header>
<form>
  <p>${getMessage('settings-unsubscribe-dialog-info')}</p>
  <input type='hidden' name='csrf-token' value='${data.csrfToken}'>
  <textarea id="unsubscribe-feedback" placeholder='${getMessage('settings-unsubscribe-dialog-message-placeholder')}'></textarea>
  <p class='warning'>${getMessage('settings-unsubscribe-dialog-confirmation', {
      faq_href: 'href="https://support.mozilla.org/en-US/kb/how-do-i-opt-out-firefox-monitor"'
    })}
  </p>
  <button class='primary' type='submit' name='email-submit'>${getMessage('settings-unsubscribe-dialog-continue')}</button>
  <a href="/user/breaches">${getMessage('settings-unsubscribe-dialog-cancel')}</a>
</form>
</div>
`
