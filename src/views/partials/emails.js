/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const emails = data => `
  <section class="emails-section" data-token=${data.csrfToken}>
    <h1>Emails partial</h1>
    <button id='sendAlertTestButton' class='primary'>
      Send test breach alert
    </button>
  </section>
`
