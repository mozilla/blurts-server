/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";

const knex = createDbConnection();

async function checkCouponForSubscriber(
  subscriberId: number,
  couponCode: string,
) {
  logger.info("checkCouponForSubscriber", subscriberId);
  return !!(await knex("subscriber_coupons")
    .where({
      subscriber_id: subscriberId,
      coupon_code: couponCode,
    })
    .first());
}

async function addCouponForSubscriber(
  subscriberId: number,
  couponCode: string,
) {
  logger.info("addCouponForSubscriber", { subscriberId, couponCode });

  let res;
  try {
    res = await knex("subscriber_coupons")
      .insert({
        subscriber_id: subscriberId,
        coupon_code: couponCode,
      })
      .returning("*");
  } catch (e) {
    if ((e as Error).message.includes("violates unique constraint")) {
      logger.error("could_not_add_coupon", {
        subscriberId,
        error: (e as Error).message,
      });
    } else {
      logger.error("could_not_add_coupon", { error: JSON.stringify(e) });
    }
    throw e;
  }
  return res?.[0];
}

export { checkCouponForSubscriber, addCouponForSubscriber };
