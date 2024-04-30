/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "server-only";

import { Session } from "next-auth";
import { getLatestScanForProfileByReason } from "../../../db/tables/onerep_scans";
import { CONST_DAY_MILLISECONDS } from "../../../constants";

export async function getElapsedTimeInDaysSinceInitialScan(
  user: Session["user"],
) {
  const onerepProfileId = user.subscriber?.onerep_profile_id;
  if (!onerepProfileId) {
    return;
  }

  const latestScan = await getLatestScanForProfileByReason(
    onerepProfileId,
    "initial",
  );
  if (!latestScan) {
    return;
  }

  return Math.floor(
    (Date.now() - new Date(latestScan.created_at).getTime()) /
      CONST_DAY_MILLISECONDS,
  );
}
