/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import appConstants from "../../../appConstants"

type FeatureFlags = {
  [key: string]: FeatureFlag | boolean
}

type FeatureFlag = {
  name?: string
  description?: string
  dependencies?: [string]
}

const featureFlags = JSON.parse(appConstants.FEATURE_FLAGS) as FeatureFlags

export function checkFeatureFlag(flag: string) : (FeatureFlag | boolean) {
  if (featureFlags[flag]) return featureFlags[flag]
  return false
}

export function allFeatureFlags() : FeatureFlags {
  return featureFlags
}