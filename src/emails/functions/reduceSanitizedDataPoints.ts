/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// data is inteferred from the SanitizedDataPoints type, but we ran into inference issues directly importing it
export function sumSanitizedDataPoints(
  data: Array<Record<string, number>>,
): number {
  return data.reduce((accumulatedValue, currentDataPoint) => {
    const dataPointValue = Object.values(currentDataPoint)[0];
    return accumulatedValue + dataPointValue;
  }, 0);
}
