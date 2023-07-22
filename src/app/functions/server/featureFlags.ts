/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  FeatureFlag,
  getFeatureFlagByName,
} from "../../../db/tables/featureFlags";

export async function getFlag(name: string): Promise<FeatureFlag> {
  const data = await getFeatureFlagByName(name);

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

  return flag;
}
