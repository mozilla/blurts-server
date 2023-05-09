/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * @typedef {object} PartialParameters
 * @property {string} csrfToken
 */

/**
 * @type {ViewPartial<PartialParameters>}
 */
export const exposuresSetup = data => `
<template id="data" data-csrf-token="${data.csrfToken}"></template>
 This page will allow the user to enter their information to do a scan for public data exposures.
 <button id='storeMockData' class='primary'>Store mock data</button>
`
