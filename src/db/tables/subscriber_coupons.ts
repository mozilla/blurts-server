/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";
import { logger } from "../../app/functions/server/logging";
import { SubscriberCouponRow } from "knex/types/tables";

const knex = createDbConnection();

async function checkCouponForSubscriber(
  subscriberId: number,
  couponCode: string,
) {
  logger.info("checkCouponForSubscriber", subscriberId);
  return (
    (
      await knex("subscriber_coupons")
        .orderBy("created_at")
        .where("subscriber_id", subscriberId)
        .andWhere("coupon_code", couponCode)
        .returning("*")
    ).length > 0
  );
}

async function addCouponForSubscriber(
  subscriberId: number,
  couponCode: string,
) {
  logger.info("addCouponForSubscriber", { subscriberId, couponCode });

  let res;
  try {
    res = await knex("subscribers_coupon")
      .insert({
        subscriber_id: subscriberId,
        coupon_code: couponCode,
      })
      .returning("*");
  } catch (e) {
    if ((e as Error).message.includes("violates unique constraint")) {
      logger.info("addCouponForSubscriber", {
        subscriberId,
        error: (e as Error).message,
      });
    } else {
      logger.error(e);
    }
  }
  return res?.[0] as SubscriberCouponRow;
}

export { checkCouponForSubscriber, addCouponForSubscriber };
