/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { CONST_DAY_MILLISECONDS } from "../../../constants";
import { getAllScanResults } from "../../../db/tables/onerep_scans";
import { getAllDataBrokers } from "./onerep";
import { refreshStoredScanResults } from "./refreshStoredScanResults";

export async function getStuckRemovals(
  days: number,
  page: number | null,
  perPage: number | null,
) {
  const age = new Date();
  const dateOffset = CONST_DAY_MILLISECONDS * days;
  age.setTime(age.getTime() - dateOffset);

  const { totalPages, scanResults } = await getAllScanResults(
    age,
    ["waiting_for_verification", "optout_in_progress"],
    page,
    perPage,
  );

  const brokersArray = await getAllDataBrokers();
  const brokers = new Map(
    brokersArray.map(
      (broker: {
        id: number;
        status:
          | "active"
          | "scan_under_maintenance"
          | "removal_under_maintenance"
          | "on_hold"
          | "ceased_operation";
      }) => [broker.id, broker.status],
    ),
  );

  return { totalPages, scanResults, brokers };
}

export async function refreshStuckRemovals(days: number) {
  const age = new Date();
  const dateOffset = CONST_DAY_MILLISECONDS * days;
  age.setTime(age.getTime() - dateOffset);

  // Retreive all results from our local database and refresh them against the OneRep API.
  const refreshResults = await getAllScanResults(
    age,
    ["waiting_for_verification", "optout_in_progress"],
    null,
    null,
  );

  for (const result of refreshResults.scanResults) {
    await refreshStoredScanResults(result.onerep_profile_id);
  }
}
