/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { logger } from "./logging";
import { SerializedSubscriber } from "../../../next-auth";
import {
  addCouponForSubscriber,
  checkCouponForSubscriber,
} from "../../../db/tables/subscriber_coupons";

export async function applyCurrentCouponCode(
  subscriber: SubscriberRow | SerializedSubscriber,
) {
  logger.info("fxa_apply_coupon_code", {
    subscriber: subscriber.id,
  });

  // current coupon
  const currentCouponCode = process.env.CURRENT_COUPON_CODE;
  if (!currentCouponCode) {
    logger.error(
      "fxa_apply_coupon_code",
      "Coupon code not set. Please set the env var: CURRENT_COUPON_CODE",
    );
    return {
      success: false,
    };
  }

  try {
    if (!(await checkCouponForSubscriber(subscriber.id, currentCouponCode))) {
      await addCouponForSubscriber(subscriber.id, currentCouponCode);
      return {
        success: true,
      };
    }
  } catch (ex) {
    logger.error("fxa_apply_coupon_code", {
      subscriber_id: subscriber.id,
      exception: ex,
    });
    return {
      success: false,
    };
  }
}
