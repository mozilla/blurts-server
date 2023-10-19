/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  addOnerepScanResults,
  getLatestOnerepScanResults,
} from "../../../db/tables/onerep_scans";
import { ScanResult, getAllScanResults, getScanDetails } from "./onerep";
import { logger } from "./logging";

/**
 * Attempt to fetch the current scan results from the provider.
 * If anything is newer, add it to the database.
 *
 * Continue if there are any errors.
 *
 * @param profileId {number} OneRep Profile ID to refresh.
 */
export async function refreshStoredScanResults(profileId: number) {
  // This contains the latest scan results in our database.
  const latestScan = await getLatestOnerepScanResults(profileId);

  let scanId = latestScan.scan?.onerep_scan_id;
  let reason = latestScan.scan?.onerep_scan_reason;
  let status = latestScan.scan?.onerep_scan_status;

  try {
    const currentScan = await getAllScanResults(profileId);
    let newScanResults: ScanResult[] = [];

    if (!latestScan.results.length) {
      newScanResults = currentScan;
    } else {
      currentScan.forEach((current) => {
        latestScan.results.forEach((latest) => {
          if (
            current.id === latest.onerep_scan_result_id &&
            current.scan_id === latest.onerep_scan_id &&
            new Date(current.updated_at) > latest.updated_at
          ) {
            newScanResults.push(current);
          }
        });
      });
    }

    if (newScanResults.length > 0) {
      scanId = newScanResults[0].scan_id;
      const details = await getScanDetails(profileId, scanId);
      reason = details.reason;
      status = details.status;

      if (!scanId && typeof scanId === "number") {
        throw new Error("No current scan ID");
      }

      if (!latestScan?.scan?.onerep_scan_reason) {
        throw new Error("No scan reason");
      }

      if (!latestScan?.scan?.onerep_scan_reason) {
        throw new Error("No scan status");
      }

      await addOnerepScanResults(
        profileId,
        scanId,
        newScanResults,
        reason,
        status,
      );
    }
  } catch (ex) {
    logger.warn("Could not fetch current OneRep results:", ex);
  }
}
