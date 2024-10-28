/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-disable */
import { SanitizedDataPoints } from "../../app/functions/server/dashboard";

export function calculateSanitizedDataPoints(
  data: SanitizedDataPoints,
): number {
  return data.reduce(
    (accumulatedValue: number, currentDataPoint: Record<string, number>) => {
      const dataPointValue = Object.values(currentDataPoint)[0] as number;
      return accumulatedValue + dataPointValue;
    },
    0,
  );
}
