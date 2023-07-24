/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";
import {
  FeatureFlag,
  getFeatureFlagByName,
} from "../../../db/tables/featureFlags";

export async function getFlag(name: string): Promise<FeatureFlag | undefined> {
  if (!name) {
    const err = new Error("No name provided to getFlag");
    captureException(err);
    throw err;
  }

  const data = await getFeatureFlagByName(name);

  if (!data) {
    console.warn("Feature flag does not exist:", name);
    return;
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

  return flag;
}
