/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getMessage } from '../../utils/fluent.js'

/**
 * @typedef {object} PartialParameters
 * @property {string} csrfToken
 */

/**
 * @type {ViewPartial<PartialParameters>}
 */
export const exposureScan = data => `
  <template id="data" data-csrf-token="${data.csrfToken}"/>
`
