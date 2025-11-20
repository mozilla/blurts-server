/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { hasPremium } from "../universal/user";
import { FeatureFlagName } from "../../../db/tables/featureFlags";

export type ShutdownState = {
  currentMoment: "ye-olden-days" | "runup" | "shutdown";
  hasPremium: boolean;
  ranScan: boolean;
};

export function getPlusShutdownState(
  user: SubscriberRow,
  enabledFeatureFlags: FeatureFlagName[],
): ShutdownState {
  return {
    currentMoment: enabledFeatureFlags.includes("PostShutdownBanner")
      ? "shutdown"
      : enabledFeatureFlags.includes("ShutdownBanner")
        ? "runup"
        : "ye-olden-days",
    hasPremium: hasPremium(user),
    ranScan: user.onerep_profile_id !== null,
  };
}
