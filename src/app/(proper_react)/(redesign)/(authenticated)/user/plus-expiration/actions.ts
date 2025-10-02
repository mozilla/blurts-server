/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import { getSubscriberByFxaUid } from "../../../../../../db/tables/subscribers";
import { applyChurnCouponCode } from "../../../../../functions/server/applyCoupon";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { logger } from "../../../../../functions/server/logging";
import { reactivateAccount } from "../../../../../functions/server/reactivateAccount";
export type ApplyRenewalCouponResult =
  | {
      success: false;
      error:
        | "not_applied_yet"
        | "apply_renewal_coupon_no_subscriber"
        | "apply_renewal_coupon_error"
        | "apply_renewal_coupon_no_subscriber_for_session";
    }
  | { success: true };

export async function applyRenewalCoupon(): Promise<ApplyRenewalCouponResult> {
  const session = await getServerSession();
  if (typeof session?.user.subscriber?.fxa_uid !== "string") {
    logger.error("apply_renewal_coupon_no_subscriber");
    return { error: "apply_renewal_coupon_no_subscriber", success: false };
  }

  const subscriber = await getSubscriberByFxaUid(
    session.user.subscriber?.fxa_uid,
  );
  if (!subscriber) {
    logger.warn("apply_renewal_coupon_no_subscriber_for_session");
    return {
      error: "apply_renewal_coupon_no_subscriber_for_session",
      success: false,
    };
  }
  try {
    await applyChurnCouponCode(subscriber);
    await reactivateAccount(subscriber);
    return { success: true };
  } catch (e) {
    logger.error("apply_renewal_coupon_error", { error: e });
    return { error: "apply_renewal_coupon_error", success: false };
  }
}
