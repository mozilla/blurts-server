/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { logger } from "../../../functions/server/logging";
import { optoutProfile, Scan } from "../../../functions/server/onerep";
import { refreshStoredScanResults } from "../../../functions/server/refreshStoredScanResults";

export interface OnerepWebhookRequest {
  id: number;
  profile_id: number;
  type: "scan.completed";
  data: {
    object: {
      id: number;
      profile_id: number;
      status: "finished";
      reason: Scan["reason"];
      created_at: string;
      updated_at: string;
      url: string;
    };
  };
  created_at: string;
}

export async function processOnerepWebhook(result: OnerepWebhookRequest) {
  const profileId = result.data.object.profile_id;
  const scanId = result.data.object.id;
  const reason = result.data.object.reason;

  logger.info("received_onerep_webhook", { profileId, scanId, reason });

  if (reason === "monitoring") {
    logger.info("auto_opt_out_monitoring_scan", {
      profileId,
      scanId,
      reason,
    });

    // Automatically call opt-out for any new monthly automatic "monitoring" scans.
    // This type of scan will only be called for activated profiles, if the profile isn't activated then this call will fail.
    await optoutProfile(profileId);
  }

  // The webhook just tells us which scan ID finished, we need to fetch the payload and refresh.
  await refreshStoredScanResults(profileId);
}
