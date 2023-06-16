/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import appConstants from "../../../appConstants"

type FeatureFlags = Record<
  "test" |
  "otherFlag" |
  "otherFlag2",
  FeatureFlag | null>;

type FeatureFlag = {
  name: keyof FeatureFlags;
  enabled: boolean;
  description?: string;
  dependencies?: Array<keyof FeatureFlags>;
}

let featureFlags: FeatureFlags
try {
  featureFlags = JSON.parse(appConstants.FEATURE_FLAGS) as FeatureFlags
} catch (e) { console.error(e) }

export function isFeatureEnabled(flag: keyof FeatureFlags): boolean {
  return featureFlags?.[flag]?.enabled || false
}

export function checkFeatureFlag(flag: keyof FeatureFlags): (FeatureFlag | null) {
  if (featureFlags[flag]) return featureFlags[flag]
  return null
}

export function allFeatureFlags(): FeatureFlags {
  return featureFlags
}