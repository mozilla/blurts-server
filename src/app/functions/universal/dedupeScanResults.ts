/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { CONST_MAX_SCAN_RESULTS_PER_BROKER } from "../../../constants";
import { parseIso8601Datetime } from "../../../utils/parse";
import { MoscaryData } from "../server/moscary";

export function dedupeScanResults(
  scanResults: MoscaryData["ScanResult"][],
): MoscaryData["ScanResult"][] {
  const scanResultsByBroker: Record<string, MoscaryData["ScanResult"][]> = {};
  scanResults.forEach((scanResult) => {
    scanResultsByBroker[scanResult.data_broker] ??= [];
    scanResultsByBroker[scanResult.data_broker].push(scanResult);
  });

  return Object.values(scanResultsByBroker).flatMap(
    (scanResultsForSingleBroker) =>
      getMostRelevantScanResults(scanResultsForSingleBroker),
  );
}

/**
 * Given a list of results for the broker, returns the most recently-updated Moscary one, falling back to the most recently-updated OneRep result if not available.
 */
function getMostRelevantScanResults(
  scanResultsForSingleBroker: MoscaryData["ScanResult"][],
): MoscaryData["ScanResult"][] {
  const sortedResults = sortByRelevance(scanResultsForSingleBroker);

  const filteredResults = removeIrrelevantResults(sortedResults);

  return filteredResults.slice(0, CONST_MAX_SCAN_RESULTS_PER_BROKER);
}

function sortByRelevance(
  scanResults: MoscaryData["ScanResult"][],
): MoscaryData["ScanResult"][] {
  return scanResults.toSorted((scanResultA, scanResultB) => {
    if (scanResultA.source === "monitor" && scanResultB.source === "onerep") {
      return -1;
    }
    if (scanResultA.source === "onerep" && scanResultB.source === "monitor") {
      return 1;
    }

    const scanResultAUpdated = parseIso8601Datetime(scanResultA.updated_at);
    const scanResultBUpdated = parseIso8601Datetime(scanResultB.updated_at);

    // Newest one first:
    return scanResultBUpdated.getTime() - scanResultAUpdated.getTime();
  });
}

function removeIrrelevantResults(scanResults: MoscaryData["ScanResult"][]) {
  const seenResultLinks = new Set<string>();
  return scanResults.filter((scanResult) => {
    // Only include one scan result per result URL:
    if (scanResult.link) {
      const trimmedLink = scanResult.link.trim();
      if (seenResultLinks.has(trimmedLink)) {
        return false;
      }
      seenResultLinks.add(trimmedLink);
    }
    return true;
  });
}
