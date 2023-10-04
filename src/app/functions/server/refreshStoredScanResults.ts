/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  addOnerepScanResults,
  getLatestOnerepScanResults,
} from "../../../db/tables/onerep_scans";
import { ScanResult, getAllScanResults } from "./onerep";

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

  try {
    const currentScan = await getAllScanResults(profileId);
    const newScanResults: ScanResult[] = [];

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

    if (newScanResults.length > 0) {
      const scanId = latestScan?.scan?.id;
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
        scanId as number,
        newScanResults,
        latestScan.scan.onerep_scan_reason,
        latestScan.scan.onerep_scan_status
      );
    }
  } catch (ex) {
    console.warn("Could not fetch current OneRep results:", ex);
  }
}
