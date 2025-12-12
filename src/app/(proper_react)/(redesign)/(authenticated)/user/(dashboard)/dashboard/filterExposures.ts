/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FilterState } from "../../../../../../components/client/ExposuresFilter";
import { CONST_DAY_MILLISECONDS } from "../../../../../../../constants";
import { SubscriberBreach } from "../../../../../../../utils/subscriberBreaches";

export function filterExposures(
  exposures: SubscriberBreach[],
  filters: FilterState,
): SubscriberBreach[] {
  return exposures.filter((exposure) => {
    const exposureDate = new Date(exposure.addedDate);

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

const getDaysAgoTimestamp = (numOfDays: number) => {
  return Date.now() - numOfDays * CONST_DAY_MILLISECONDS;
};
