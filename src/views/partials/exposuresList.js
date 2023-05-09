/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @typedef {object} PartialParameters
 * @property {string} csrfToken
 * @property {import("../../external/onerep").ListScanResultsResponse} scanResults
 */

/**
 * @type {ViewPartial<PartialParameters>}
 */
export const exposuresList = data => `
  This page will show the user's exposures dashboard, when they have already set up exposure scanning.
  <pre>${JSON.stringify(data.scanResults, null, 2)}</pre>
`
