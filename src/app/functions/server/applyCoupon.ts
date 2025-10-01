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
import { applyCoupon } from "../../../utils/fxa";

export async function applyChurnCouponCode(subscriber: SubscriberRow) {
  logger.info("fxa_apply_churn_coupon_code", {
    subscriber: subscriber.id,
  });

  const churnEmailCouponCode = process.env.CHURN_EMAIL_COUPON_CODE_ID;
  if (!churnEmailCouponCode) {
    logger.error(
      "fxa_apply_churn_coupon_code_failed",
      "Coupon code ID is not set. Please set the env var: CHURN_EMAIL_COUPON_CODE_ID",
    );
    return {
      success: false,
      message: "Churn coupon code not set",
    };
  }
  return await applyCouponWithCode(subscriber, churnEmailCouponCode);
}

export async function checkCurrentCouponCode(
  subscriber: SubscriberRow | SerializedSubscriber,
) {
  logger.info("fxa_check_current_coupon", {
    subscriber: subscriber.id,
  });

  const currentCouponCode = process.env.CURRENT_COUPON_CODE_ID;
  if (!currentCouponCode) {
    logger.error("fxa_check_current_coupon_failed", {
      exception:
        "Coupon code ID is not set. Please set the env var: CURRENT_COUPON_CODE_ID",
    });
    return {
      success: false,
    };
  }

  return await checkCouponWithCode(subscriber, currentCouponCode);
}

export async function checkChurnCouponCode(
  subscriber: SubscriberRow | SerializedSubscriber,
) {
  logger.info("fxa_check_churn_coupon", {
    subscriber: subscriber.id,
  });

  const currentCouponCode = process.env.CHURN_EMAIL_COUPON_CODE_ID;
  if (!currentCouponCode) {
    logger.error("fxa_check_churn_coupon_failed", {
      exception:
        "Coupon code ID is not set. Please set the env var: CHURN_EMAIL_COUPON_CODE_ID",
    });
    return {
      success: false,
    };
  }

  return await checkCouponWithCode(subscriber, currentCouponCode);
}

export async function applyCouponWithCode(
  subscriber: SubscriberRow,
  couponCode: string,
) {
  if (!couponCode) {
    logger.error("fxa_apply_coupon_code_failed", "Coupon code is not passed.");
    return {
      success: false,
      message: "Coupon code not set",
    };
  }

  try {
    if (
      !(await checkCouponForSubscriber(subscriber.id, couponCode)) &&
      subscriber.fxa_access_token
    ) {
      await applyCoupon(subscriber.fxa_access_token, couponCode);
      await addCouponForSubscriber(subscriber.id, couponCode);
      logger.info("fxa_apply_coupon_code_success");
      return {
        success: true,
      };
    }
    return {
      success: false,
      message: "Coupon code already applied for subscriber",
    };
  } catch (ex) {
    logger.error("fxa_apply_coupon_code_failed", {
      subscriber_id: subscriber.id,
      exception: ex,
    });
    return {
      success: false,
    };
  }
}

export async function checkCouponWithCode(
  subscriber: SubscriberRow | SerializedSubscriber,
  couponCode: string,
) {
  if (!couponCode) {
    logger.error("fxa_check_coupon_failed", {
      exception: "Coupon code is not passed in",
    });
    return {
      success: false,
    };
  }

  try {
    return {
      success: await checkCouponForSubscriber(subscriber.id, couponCode),
    };
  } catch (ex) {
    logger.error("fxa_check_coupon_failed", {
      subscriber_id: subscriber.id,
      exception: ex,
    });
    return {
      success: false,
    };
  }
}
