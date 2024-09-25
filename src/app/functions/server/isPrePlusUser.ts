/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { isPrePlusDate } from "../universal/isPrePlusDate";
import "./notInClientComponent";

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

  return isPrePlusDate(
    process.env.BROKER_SCAN_RELEASE_DATE ?? "",
    user.subscriber.created_at,
  );
}
