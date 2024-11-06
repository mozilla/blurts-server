/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { DataBrokerRow } from "../../knex-tables";

const knex = createDbConnection();

async function addDataBroker(
  dataBroker: string,
  status: string,
  url: string,
): Promise<DataBrokerRow | undefined> {
  logger.info("addDataBroker", { dataBroker, status, url });

  let res;
  try {
    res = await knex("onerep_data_brokers")
      .insert({
        data_broker: dataBroker,
        status,
        url,
      })
      .returning("*");
  } catch (e) {
    logger.error("could_not_add_data_broker", { error: JSON.stringify(e) });
    throw e;
  }
  return res?.[0];
}

export { addDataBroker };
