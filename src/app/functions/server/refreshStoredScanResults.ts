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
 * @param onerepProfileId {number} OneRep Profile ID to refresh.
 */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function refreshStoredScanResults(onerepProfileId: number) {
  try {
    console.log("refresh stored scan results");
    const remoteScans = (await listScans(onerepProfileId)).data;
    const localScans = await getAllScansForProfile(onerepProfileId);
    console.log({ remoteScans });
    console.log({ localScans });

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
        console.log("set one rep scan: ", { scan });

        await setOnerepScan(onerepProfileId, scan.id, scan.status, scan.reason);
      }),
    );

    // Refresh results for all scans, new and existing.
    // The database will ignore any attempt to insert duplicate scan result IDs.
    const allScanResults = await getAllScanResults(onerepProfileId);
    console.log({ allScanResults });
    await addOnerepScanResults(onerepProfileId, allScanResults);
  } catch (ex) {
    logger.warn("Could not fetch current OneRep results:", ex);
  }
}
/* c8 ignore stop */
