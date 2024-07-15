/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import { logger } from "../../app/functions/server/logging";
import createDbConnection from "../connect";

const knex = createDbConnection();

interface QaBrokerData {
  onerep_profile_id: number;
  link: string;
  age?: number;
  data_broker: string;
  emails: string;
  phones: string;
  addresses: string;
  relatives: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  status: string;
}

async function getQaCustomBrokers(
  onerepProfileId: number | null,
  onerepScanId: number | undefined | null,
) {
  if (!onerepProfileId) {
    logger.info("getQaCustomBrokers: onerepProfileId was not provided!");
    return [];
  }
  if (!onerepScanId) {
    logger.info("getQaCustomBrokers: onerepScanId was not provided!");
    return [];
  }

  let results: OnerepScanResultRow[] = [];

  // Fetch all results from qa_custom_brokers
  const brokerResults = await knex("qa_custom_brokers")
    .select("*")
    .where("onerep_profile_id", onerepProfileId);

  if (brokerResults.length > 0) {
    /* 
      Since these are fake records, their corresponding scanId will be some 
      existing id, and broker_id will match onerep_scan_result_id for uniqueness 
    */
    brokerResults.forEach((brokerResult) => {
      brokerResult.onerep_scan_id = onerepScanId;
      brokerResult.data_broker_id = brokerResult.onerep_scan_result_id;
    });

    results = [...results, ...brokerResults];
  }
  return results;
}

/**
 * Inserts a new row into the qa_custom_brokers table.
 *
 * @param brokerData This object conforms to QaBrokerData, which is the same as
 * OnerepScanResulsRow with some fields omitted due to them being automaticallty set.
 */
async function addQaCustomBroker(brokerData: QaBrokerData): Promise<number> {
  const [newBrokerId] = (await knex("qa_custom_brokers")
    .insert(brokerData)
    .returning("onerep_scan_result_id")) as [number];
  logger.info(`New broker added with ID: ${newBrokerId}`);
  return newBrokerId;
}

export { getQaCustomBrokers, addQaCustomBroker };
