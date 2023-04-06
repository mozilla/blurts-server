/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

/**
 * @typedef {object} PartialData
 * @property {string} csrfToken
 */

/**
 * @param {PartialData} data
 * @returns string
 */
const unsubscribe = data => `
  <section class="unsubscribe">
    <h1>${getMessage('unsub-headline')}</h1>
    <p>${getMessage('unsub-blurb')}</p>
    <button
      class='primary js-unsubscribe-button'
      data-csrf-token='${data.csrfToken}'
    >
      ${getMessage('unsub-button')}
    </button>
  </section>
`

const unsubscribeMonthly = () => `
  <section class="unsubscribe">
    <h1>${getMessage('unsub-headline')}</h1>
    <p>${getMessage('changes-saved')}</p>
  </section>
`

export {
  unsubscribe,
  unsubscribeMonthly
}
