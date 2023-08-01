/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { captureException } from "@sentry/node";
import {
  FeatureFlag,
  getFeatureFlagByName,
} from "../../../db/tables/featureFlags";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/utils/auth";

export async function isFlagEnabled(name: string): Promise<boolean> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    throw new Error("No session");
  }

  if (!name) {
    const err = new Error("No name provided to isFlagEnabled");
    captureException(err);
    throw err;
  }

  const data = await getFeatureFlagByName(name);

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

  if (!flag.isEnabled) {
    console.warn("Flag is not enabled:", flag.name);
    return false;
  }

  if (!flag.allowList?.length) {
    console.info("Flag does not have an allow list, enabling:", flag.name);
  }

  if (flag.allowList?.length && !flag.allowList?.includes(session.user.email)) {
    console.warn("User is not on allow list for flag:", flag.name);
    return false;
  }

  return true;
}
