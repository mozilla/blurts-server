/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { DataBrokerRow } from "../../knex-tables";

const knex = createDbConnection();

async function upsertDataBrokers(
  databrokers: Array<{
    dataBroker: string;
    status: string;
    url: string;
  }>,
): Promise<DataBrokerRow[]> {
  logger.info("upsert_data_brokers", { count: databrokers.length });

  try {
    const res = await knex("onerep_data_brokers")
      .insert(
        databrokers.map(({ dataBroker, status, url }) => ({
          data_broker: dataBroker,
          status,
          url,
        })),
      )
      .onConflict("data_broker")
      .merge(["status", "url"])
      .returning("*");

    logger.info("upsert_data_brokers_success", { count: res.length });
    return res;
  } catch (e) {
    logger.error("upsert_data_brokers_error", { error: JSON.stringify(e) });
    throw e;
  }
}

export { upsertDataBrokers };
