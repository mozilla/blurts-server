/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  FeatureFlag,
  getFeatureFlagByName,
} from "../../../db/tables/featureFlags";
import { Session } from "next-auth";

export type FeatureFlagsEnabled = {
  FreeBrokerScan: boolean;
  PremiumBrokerRemoval: boolean;
  FalseDoorTest: boolean;
};

export async function isFlagEnabled(
  name: keyof FeatureFlagsEnabled,
  user?: Session["user"]
): Promise<boolean> {
  const data = await getFeatureFlagByName(name);

  // TODO: Add unit test when changing this code:
  /* c8 ignore next 4 */
  if (!data) {
    console.warn("Feature flag does not exist:", name);
    return false;
  }

  const flag: FeatureFlag = {
    name: data.name,
    isEnabled: data.is_enabled,
    description: data.description,
    dependencies: data.dependencies,
    allowList: data.allow_list,
    waitList: data.wait_list,
    expiredAt: data.expired_at,
    deletedAt: data.deleted_at,
    owner: data.owner,
  };

  if (flag.deletedAt) {
    console.warn("Flag has been deleted:", flag.name);
    return false;
  }

  if (flag.expiredAt) {
    console.warn("Flag has expired:", flag.name);
    return false;
  }

  if (!flag.isEnabled) {
    console.warn("Flag is not enabled:", flag.name);
    return false;
  }

  if (!user) {
    return true;
  } else if (flag.allowList?.includes(user.email)) {
    return true;
  } else {
    console.warn("User is not on the allow list for flag:", flag.name);
    return false;
  }
}
