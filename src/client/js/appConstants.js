/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// PUBLIC APP CONSTANTS – DO NOT ADD SECRETS HERE

/* During build-phase (npm start), ESBuild creates `buildConstants` as defined in esbuild.js, which include server env vars.
These are merged into client AppConstants and exported.

When app is run via `npm run dev`, ESBuild does not run and `buildConstants` is undefined.
For this case, we can add fallback vars to AppConstants if needed for testing. */

/* global buildConstants */

const AppConstants = {}

if (typeof buildConstants === 'object') {
  // Build-phase has run (npm start) and ESBuild defined `buildConstants` object
  Object.assign(AppConstants, buildConstants)
} else {
  // Build-phase was not run (npm run dev). Assign fallbacks for testing if needed.
  Object.assign(AppConstants, {
    GA4_MEASUREMENT_ID: 'G-CXG8K4KW4P'
  })
  console.log('Running dev-mode with fallback values for AppConstants.')
}

export default Object.freeze(AppConstants)
