/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

export const unsubscribe = data => `
  <section class="unsubscribe">
    <h1>${getMessage('unsub-headline')}</h1>
    <p>
      ${getMessage('unsub-blurb')}
    </p>
    <button
      class='primary js-unsubscribe-button'
      data-csrf-token='${data.csrfToken}'
      data-query-params='${JSON.stringify(data.queryParams)}'
    >
      ${getMessage('unsub-button')}
    </button>
  </section>
`
