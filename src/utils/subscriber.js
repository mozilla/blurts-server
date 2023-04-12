/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../appConstants.js'

const {
  FXA_SUBSCRIPTION_ENABLED,
  FXA_SUBSCRIPTION_KEY
} = AppConstants

/**
 * Checks if a user has a subscription.
 *
 * @param {FxaProfile | undefined} fxaProfile The FxA profile object
 * @returns {boolean} true if the user is subscribed
 */
function isSubscribed (fxaProfile) {
  if (!FXA_SUBSCRIPTION_ENABLED) { return false }

  return fxaProfile?.subscriptions?.includes(FXA_SUBSCRIPTION_KEY) || false
}

export { isSubscribed }
