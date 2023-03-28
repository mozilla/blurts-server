/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

export const addEmail = (/** @type {{ emailLimit: any; csrfToken: any; }} */ data) => `
<header>
  <button class='close'></button>
  <img src='/images/dialog-email-clouds.svg'>
  <h2>${getMessage('add-email-add-another-heading')}</h2>
</header>
<form>
  <p>${getMessage('add-email-your-account-includes', { total: data.emailLimit })}</p>
  <input type='hidden' name='csrf-token' value='${data.csrfToken}'>
  <label class='text-field'>
    <span>${getMessage('add-email-address-input-label')}</span>
    <input type='email' name='email-address' required>
  </label>
  <button class='primary' type='submit' name='email-submit'>${getMessage('add-email-send-verification-button')}</button>
</form>
<template data-success>
  <p class='add-email-success'>${getMessage('add-email-verify-the-link', {
     email: '<b class="current-email"></b>',
     'settings-href': 'href="/user/settings"'
    })}</p>
</template>
`
