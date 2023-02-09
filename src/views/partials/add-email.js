/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const addEmail = data => `
<header>
  <h1>Add another email address</h1>
  <button class='close'></button>
</header>
<section>
  <p>Your account includes monitoring of up to ${data.emailLimit} email addresses. Add a new email address to see if it’s been involved in a breach.</p>
  <form>
    <input type='hidden' name='csrf-token' value='${data.csrfToken}'>
    <label>Email address<input type='email' name='email-address'></label>
    <button class='primary' type='submit'>Send verification link</button>
  </form>
</section>
`
