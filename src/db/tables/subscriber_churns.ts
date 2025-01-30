/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import type { SubscriberChurnRow, SubscriberRow } from "knex/types/tables";

const knex = createDbConnection();

async function upsertSubscriberChurns(
  churningSubscribers: SubscriberChurnRow[],
): Promise<SubscriberChurnRow[]> {
  logger.info("upsert_subscriber_churns", {
    count: churningSubscribers.length,
  });

  try {
    const res = await knex("subscriber_churns")
      .insert(churningSubscribers)
      .onConflict("userid")
      .merge(["intervl", "current_period_end"])
      .returning("*");

    logger.info("upsert_subscriber_churns_success", { count: res.length });
    return res;
  } catch (e) {
    logger.error("upsert_subscriber_churns_error", {
      error: JSON.stringify(e),
    });
    throw e;
  }
}

// function that delete all records from churns table
async function deleteSubscriberChurns() {
  try {
    await knex("subscriber_churns").del();
    logger.info("delete_subscriber_churns_success");
  } catch (e) {
    logger.error("delete_subscriber_churns_error", {
      error: JSON.stringify(e),
    });
    throw e;
  }
}

async function getAllSubscriberChurns(): Promise<SubscriberChurnRow[]> {
  try {
    const res = await knex("subscriber_churns").select("*");

    logger.info("get_all_subscriber_churns_success", { count: res.length });
    return res as SubscriberChurnRow[];
  } catch (e) {
    logger.error("get_all_subscriber_churns_error", {
      error: JSON.stringify(e),
    });
    throw e;
  }
}

async function getChurnsToEmail(): Promise<
  Array<SubscriberChurnRow & SubscriberRow>
> {
  try {
    const res = await knex("subscriber_churns")
      .join("subscribers", "subscriber_churns.userid", "subscribers.fxa_uid")
      .select("*")
      // TODO: Or sent more than a year ago?
      //       (SubPlat is supposed to be doing this a year from now, but if not, we should probably add such a condition.)
      .whereNull("churn_prevention_email_sent_at")
      .where("intervl", "year")
      .whereNotNull("current_period_end")
      .where(knex.raw("current_period_end::timestamptz"), ">=", knex.fn.now())
      .where(
        knex.raw("current_period_end::timestamptz"),
        "<=",
        knex.raw("CURRENT_TIMESTAMP + interval '7 days'"),
      );

    logger.info("get_churns_to_email_success", { count: res.length });
    return res;
  } catch (e) {
    logger.error("get_churns_to_email_error", {
      error: JSON.stringify(e),
    });
    throw e;
  }
}

export {
  upsertSubscriberChurns,
  getAllSubscriberChurns,
  deleteSubscriberChurns,
  getChurnsToEmail,
};
