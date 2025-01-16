/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { SubscriberChurnRow } from "knex/types/tables";

const knex = createDbConnection();

async function upsertSubscriberChurns(
  churningSubscribers: SubscriberChurnRow[],
): Promise<SubscriberChurnRow[]> {
  logger.info("upsert_subscriber_churns", {
    count: churningSubscribers.length,
  });

  try {
    const res = await knex("onerep_subscriber_churns")
      .insert(churningSubscribers)
      .onConflict("userid")
      .merge(["intervl", "current_period_end"])
      .returning("*");

    logger.info("upsert_subscriber_churns_success", { count: res.length });
    return res as SubscriberChurnRow[];
  } catch (e) {
    logger.error("upsert_subscriber_churns_error", {
      error: JSON.stringify(e),
    });
    throw e;
  }
}

export { upsertSubscriberChurns };
