/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  Exposure,
  isScanResult,
} from "../../../../../components/client/ExposureCard";
import { FilterState } from "../../../../../components/client/ExposuresFilter";
import { StatusPillType } from "../../../../../components/server/StatusPill";

export function filterExposures(
  exposures: Exposure[],
  filters: FilterState
): Exposure[] {
  return exposures.filter((exposure) => {
    const status = getExposureStatus(exposure);
    if (filters.status === "action-needed" && status !== "needAction") {
      return false;
    }
    if (filters.status === "fixed" && status !== "fixed") {
      return false;
    }
    if (filters.status === "in-progress" && status !== "progress") {
      return false;
    }

    if (filters.exposureType === "data-breach" && isScanResult(exposure)) {
      return false;
    }
    if (filters.exposureType === "data-broker" && !isScanResult(exposure)) {
      return false;
    }

    const exposureDate = isScanResult(exposure)
      ? new Date(exposure.created_at)
      : exposure.AddedDate;

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

    return true;
  });
}

const getExposureStatus = (exposure: Exposure): StatusPillType => {
  if (isScanResult(exposure)) {
    switch (exposure.status) {
      case "removed":
        return "fixed";
      case "waiting_for_verification":
        return "progress";
      default:
        return "needAction";
    }
  }

  return exposure.IsResolved ? "fixed" : "needAction";
};

const getDaysAgoTimestamp = (numOfDays: number) => {
  return Date.now() - numOfDays * 24 * 60 * 60 * 1000;
};
