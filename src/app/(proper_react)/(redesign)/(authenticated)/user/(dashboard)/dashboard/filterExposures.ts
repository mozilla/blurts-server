/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  Exposure,
  isScanResult,
} from "../../../../../../components/client/exposure_card/ExposureCard";
import { FilterState } from "../../../../../../components/client/ExposuresFilter";

export function filterExposures(
  exposures: Exposure[],
  filters: FilterState,
): Exposure[] {
  return exposures.filter((exposure) => {
    /* c8 ignore start */
    // Since the Node 20.10 upgrade, it's been marking this  as uncovered, even
    // though it's covered by tests.
    if (filters.exposureType === "data-breach" && isScanResult(exposure)) {
      return false;
    }
    if (filters.exposureType === "data-broker" && !isScanResult(exposure)) {
      return false;
    }

    const exposureDate = isScanResult(exposure)
      ? new Date(exposure.created_at)
      : new Date(exposure.addedDate);

    if (
      filters.dateFound === "seven-days" &&
      exposureDate.getTime() < getDaysAgoTimestamp(7)
    ) {
      return false;
    }
    if (
      filters.dateFound === "thirty-days" &&
      exposureDate.getTime() < getDaysAgoTimestamp(30)
    ) {
      return false;
    }
    if (
      filters.dateFound === "last-year" &&
      exposureDate.getTime() < getDaysAgoTimestamp(365)
    ) {
      return false;
    }
    /* c8 ignore stop */

    return true;
  });
}

const getDaysAgoTimestamp = (numOfDays: number) => {
  return Date.now() - numOfDays * 24 * 60 * 60 * 1000;
};
