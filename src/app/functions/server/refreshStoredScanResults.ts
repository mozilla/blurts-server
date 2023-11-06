/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  addOnerepScanResults,
  getAllScansForProfile,
  setOnerepScan,
} from "../../../db/tables/onerep_scans";
import { getAllScanResults, listScans } from "./onerep";
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
  try {
    const remoteScans = (await listScans(profileId)).data;
    const localScans = await getAllScansForProfile(profileId);

    const newScans = remoteScans.filter(
      (remoteScan) =>
        !localScans.some(
          (localScan) => localScan.onerep_scan_id === remoteScan.id,
        ),
    );

    newScans.forEach((scan) =>
      logger.info("scan_created_or_updated", {
        onerepScanId: scan.id,
        onerepScanStatus: scan.status,
        onerepScanReason: scan.reason,
      }),
    );

    // Record any new scans, or change in existing scan status.
    await Promise.all(
      remoteScans.map(async (scan) => {
        await setOnerepScan(profileId, scan.id, scan.status, scan.reason);
      }),
    );

    // Refresh results for all scans, new and existing.
    // The database will ignore any attempt to insert duplicate scan result IDs.
    const allScanResults = await getAllScanResults(profileId);
    await addOnerepScanResults(profileId, allScanResults);
  } catch (ex) {
    logger.warn("Could not fetch current OneRep results:", ex);
  }
}
