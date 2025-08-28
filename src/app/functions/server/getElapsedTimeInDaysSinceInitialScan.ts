/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "./notInClientComponent";

import { SubscriberRow } from "knex/types/tables";
import { getLatestScanForProfileByReason } from "../../../db/tables/onerep_scans";
import { CONST_DAY_MILLISECONDS } from "../../../constants";
import { FeatureFlagName } from "../../../db/tables/featureFlags";
import { fetchLatestScanForProfile } from "./moscary";
import { parseIso8601Datetime } from "../../../utils/parse";
import { ExperimentData } from "../../../telemetry/generated/nimbus/experiments";

export async function getElapsedTimeInDaysSinceInitialScan(
  subscriber: SubscriberRow,
  enabledFeatureFlags: FeatureFlagName[],
  experimentData: ExperimentData["Features"],
) {
  if (
    enabledFeatureFlags.includes("Moscary") ||
    experimentData["moscary"].enabled
  ) {
    if (!subscriber.moscary_id) {
      return;
    }

    const latestScan = await fetchLatestScanForProfile(
      subscriber.moscary_id,
      "initial",
    );
    if (!latestScan) {
      return;
    }

    return Math.floor(
      (Date.now() - parseIso8601Datetime(latestScan.created_at).getTime()) /
        CONST_DAY_MILLISECONDS,
    );
  }
  const onerepProfileId = subscriber.onerep_profile_id;
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
