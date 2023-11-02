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
        // @ts-ignore FIXME
        !localScans.some(
          (localScan) => localScan.onerep_scan_id === remoteScan.id,
        ),
    );

    // Record any new scans.
    for (const scan of newScans) {
      await setOnerepScan(profileId, scan.id, scan.status, scan.reason);
    }

    // Refresh results for all scans, new and existing.
    const allScanResults = await getAllScanResults(profileId);
    await addOnerepScanResults(profileId, allScanResults);

    /*


    const newScanResults = remoteScanResults.filter((remoteScanResult) => {
    });

    await addOnerepScanResults(profileId, newScanResults);
    */
  } catch (ex) {
    logger.warn("Could not fetch current OneRep results:", ex);
  }
}
