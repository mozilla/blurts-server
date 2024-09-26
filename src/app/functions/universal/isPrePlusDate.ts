/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { parseIso8601Datetime } from "../../../utils/parse";

export function isPrePlusDate(
  plusReleaseDateString: string,
  dateStringToCompare: string,
) {
  const brokerScanReleaseDateParts = plusReleaseDateString.split("-");
  if (brokerScanReleaseDateParts[0] === "") {
    brokerScanReleaseDateParts[0] = "2023";
  }
  const brokerScanReleaseDate = new Date(
    Date.UTC(
      Number.parseInt(brokerScanReleaseDateParts[0], 10),
      Number.parseInt(brokerScanReleaseDateParts[1] ?? "12", 10) - 1,
      Number.parseInt(brokerScanReleaseDateParts[2] ?? "05", 10),
    ),
  );

  return (
    (parseIso8601Datetime(dateStringToCompare)?.getTime() ?? 0) <
    brokerScanReleaseDate.getTime()
  );
}
