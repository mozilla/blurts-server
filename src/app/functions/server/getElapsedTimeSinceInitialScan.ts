/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "server-only";

import { Session } from "next-auth";
import { getLatestScanByReason } from "./onerep";

export async function getElapsedTimeSinceInitialScan(user: Session["user"]) {
  const onerepProfileId = user.subscriber?.onerep_profile_id;
  if (!onerepProfileId) {
    return -1;
  }

  const latestScan = await getLatestScanByReason(onerepProfileId, "initial");
  if (!latestScan) {
    return -1;
  }

  return Date.now() - new Date(latestScan.created_at).getTime();
}
