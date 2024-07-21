/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import { logger } from "../../app/functions/server/logging";
import createDbConnection from "../connect";
import { getOnerepProfileId } from "./subscribers";
import { HibpLikeDbBreach } from "../../utils/hibp";

const knex = createDbConnection();

interface QaBrokerData {
  onerep_profile_id: number;
  link: string;
  age?: number;
  data_broker: string;
  emails: string[];
  phones: string[];
  addresses: { [key: string]: string }[];
  relatives: string[];
  first_name: string;
  middle_name?: string;
  last_name: string;
  status: string;
  manually_resolved: boolean;
}

interface QaBreachData {
  emailHashPrefix: string;
  Id: number;
  Name: string;
  Title: string;
  Domain: string;
  BreachDate: Date | string;
  AddedDate: Date | string;
  ModifiedDate: Date | string;
  PwnCount: number;
  Description: string;
  LogoPath: string;
  DataClasses: Array<string>;
  IsVerified: boolean;
  IsFabricated: boolean;
  IsSensitive: boolean;
  IsRetired: boolean;
  IsSpamList: boolean;
  IsMalware: boolean;
  FaviconUrl?: string | null;
}

interface QaBreachResolution {}

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
async function addQaCustomBroker(brokerData: QaBrokerData): Promise<void> {
  await knex("qa_custom_brokers").insert({
    ...brokerData,
    emails: JSON.stringify(brokerData.emails),
    phones: JSON.stringify(brokerData.phones),
    addresses: JSON.stringify(brokerData.addresses),
    relatives: JSON.stringify(brokerData.relatives),
  });
  logger.info(`Created a custom broker: ${brokerData.data_broker}`);
}

async function getAllQaCustomBrokers(
  onerep_profile_id: number,
): Promise<QaBrokerData[]> {
  const res = (await knex("qa_custom_brokers")
    .where("onerep_profile_id", onerep_profile_id)
    .select("*")) as QaBrokerData[];
  return res;
}

async function deleteQaCustomBrokerRow(onerep_scan_result_id: number) {
  await knex("qa_custom_brokers")
    .where("onerep_scan_result_id", onerep_scan_result_id)
    .del();
}

async function setQaCustomBrokerStatus(
  onerep_scan_result_id: number,
  newStatus: string,
) {
  await knex("qa_custom_brokers")
    .where("onerep_scan_result_id", onerep_scan_result_id)
    .update({ status: newStatus });
}

async function markQaCustomBrokerAsResolved(onerepScanResultId: number) {
  const rowsAffected = await knex("qa_custom_brokers")
    .update({
      manually_resolved: true,
      updated_at: knex.fn.now(),
    })
    .where("onerep_scan_result_id", onerepScanResultId);
  return rowsAffected;
}

async function getAllQaCustomBreaches(emailHashPrefix: string) {
  const res = (
    await knex("qa_custom_breaches")
      .select("*")
      .where("emailHashPrefix", emailHashPrefix.toLowerCase())
  ).map((b) => {
    b.Id = Number(b.Id);
    b.Id = Number(b.Id);
    return b as QaBreachData;
  });
  return res;
}

function formatQaBreach(breach: QaBreachData) {
  const { emailHashPrefix: _, ...rest } = breach;
  return rest as HibpLikeDbBreach;
}

async function addQaCustomBreach(breach: QaBreachData): Promise<void> {
  await knex("qa_custom_breaches").insert({
    ...breach,
  });
}

async function deleteQaCustomBreach(
  emailHashPrefix: string,
  id: number,
): Promise<void> {
  await knex("qa_custom_breaches")
    .where({ emailHashPrefix: emailHashPrefix, Id: id })
    .del();
}

async function setQaToggle(
  columnName: string,
  isShown: boolean,
  emailHashPrefix: string,
): Promise<void> {
  // List of allowed columns to toggle
  const allowedColumns = [
    "showRealBreaches",
    "showCustomBreaches",
    "showRealBrokers",
    "showCustomBrokers",
  ];

  if (!allowedColumns.includes(columnName)) {
    throw new Error(`Invalid column name: ${columnName}`);
  }

  // Get the current value of the specified column
  const record = await knex("qa_custom_toggles")
    .select(columnName)
    .where({ emailHashPrefix })
    .first();

  if (!record) {
    throw new Error(`No record found with given onerep_profile_id`);
  }

  await knex("qa_custom_toggles")
    .update({
      [columnName]: isShown,
    })
    .where({ emailHashPrefix });
}

async function setQaBreachResolution(
  emailHashPrefix: string,
  breachResolution: QaBreachResolution,
): Promise<void> {
  await knex("qa_custom_toggles")
    .update({
      breach_resolution: JSON.stringify(breachResolution),
    })
    .where({ emailHashPrefix });
}

async function createQaTogglesRow(
  emailHashPrefix: string,
  subscriberId: number,
): Promise<void> {
  const onerep_profile_id = await getOnerepProfileId(subscriberId);

  await knex("qa_custom_toggles").insert({
    emailHashPrefix,
    onerep_profile_id,
    showRealBreaches: true,
    showCustomBreaches: false,
    showRealBrokers: true,
    showCustomBrokers: false,
    breach_resolution: null,
  });
}

export {
  getQaCustomBrokers,
  addQaCustomBroker,
  getAllQaCustomBrokers,
  deleteQaCustomBrokerRow,
  setQaCustomBrokerStatus,
  markQaCustomBrokerAsResolved,
  getAllQaCustomBreaches,
  addQaCustomBreach,
  deleteQaCustomBreach,
  setQaToggle,
  setQaBreachResolution,
  createQaTogglesRow,
  formatQaBreach,
};
export type { QaBrokerData, QaBreachData };
