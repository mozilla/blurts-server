/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "server-only";
import { Session } from "next-auth";
import { parseIso8601Datetime } from "../../../utils/parse";

/**
 * Determine whether the user's account predates Monitor Plus
 *
 * This influences what we show to them. Specifically, we won't have them go
 * through onboarding again.
 *
 * @param user
 * @returns Whether the given user already had an account when we released Monitor Plus
 */
export function isPrePlusUser(user: Session["user"]): boolean {
  if (typeof user.subscriber?.id === "undefined") {
    return false;
  }

  const brokerScanReleaseDateParts = (
    process.env.BROKER_SCAN_RELEASE_DATE ?? ""
  ).split("-");
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
    (parseIso8601Datetime(user.subscriber.created_at)?.getTime() ?? 0) <
    brokerScanReleaseDate.getTime()
  );
}
