/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  OnerepScanResultDataBrokerRow,
  OnerepScanResultRow,
} from "knex/types/tables";
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
  optout_attempts: number;
  last_optout_at: string;
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

interface QaToggleRow {
  email_hash: string;
  onerep_profile_id: number;
  show_real_breaches: boolean;
  show_custom_breaches: boolean;
  show_real_brokers: boolean;
  show_custom_brokers: boolean;
}

enum AllowedToggleColumns {
  ShowRealBreaches = "show_real_breaches",
  ShowCustomBreaches = "show_custom_breaches",
  ShowRealBrokers = "show_real_brokers",
  ShowCustomBrokers = "show_custom_brokers",
}

function envIsProd() {
  return process.env.APP_ENV === "production";
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
async function addQaCustomBroker(
  brokerData: OnerepScanResultDataBrokerRow,
): Promise<void> {
  try {
    await knex("qa_custom_brokers").insert({
      ...brokerData,
      emails: JSON.stringify(brokerData.emails),
      phones: JSON.stringify(brokerData.phones),
      addresses: JSON.stringify(brokerData.addresses),
      relatives: JSON.stringify(brokerData.relatives),
    });

    logger.info(`Created a custom broker: ${brokerData.data_broker}`);
  } catch {
    logger.error(`Error creating custom broker: ${brokerData.data_broker}`);
    throw new Error(
      `Failed to insert broker data for ${brokerData.data_broker}`,
    );
  }
}

async function getAllMockedScanResults(
  onerepProfileId: number | null,
): Promise<OnerepScanResultDataBrokerRow[]> {
  if (onerepProfileId === null) {
    logger.error(`onerepProfileId not set`);
  }

  // Using the onerep_scan_id  as a placeholder for the profile ID
  const res = (await knex("qa_custom_brokers")
    .select("*")
    .where(
      "onerep_scan_id",
      onerepProfileId,
    )) as OnerepScanResultDataBrokerRow[];

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
    return formatQaBreach(b) as QaBreachData;
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
  Id: number,
): Promise<void> {
  await knex("qa_custom_breaches").where({ emailHashPrefix, Id }).del();
}

async function getQaToggleRow(emailHashOrOneRepId: string | number | null) {
  if (emailHashOrOneRepId === null || envIsProd()) {
    return null;
  }
  if (typeof emailHashOrOneRepId === "string") {
    return (await knex("qa_custom_toggles")
      .select("*")
      .where("email_hash", emailHashOrOneRepId)
      .first()) as QaToggleRow;
  } else if (typeof emailHashOrOneRepId === "number") {
    return (await knex("qa_custom_toggles")
      .select("*")
      .where("onerep_profile_id", emailHashOrOneRepId)
      .first()) as QaToggleRow;
  }
  return null;
}

async function setQaToggle(
  columnName: string,
  isShown: boolean,
  emailHash: string,
): Promise<void> {
  // List of allowed columns to toggle
  const allowedColumns = [
    "show_real_breaches",
    "show_custom_breaches",
    "show_real_brokers",
    "show_custom_brokers",
  ];

  if (!allowedColumns.includes(columnName)) {
    throw new Error(`Invalid column name: ${columnName}`);
  }

  // Get the current value of the specified column
  const record = await knex("qa_custom_toggles")
    .select(columnName)
    .where("email_hash", emailHash)
    .first();

  if (!record) {
    throw new Error(`No record found with given email_hash`);
  }

  await knex("qa_custom_toggles")
    .update({
      [columnName]: isShown,
    })
    .where("email_hash", emailHash);
}

async function createQaTogglesRow(
  emailHash: string,
  subscriberId: number,
): Promise<QaToggleRow> {
  const onerep_profile_id = await getOnerepProfileId(subscriberId);
  if (onerep_profile_id === null) throw new Error("OneRep profile ID missing!");

  const row = {
    email_hash: emailHash,
    onerep_profile_id,
    show_real_breaches: true,
    show_custom_breaches: true,
    show_real_brokers: true,
    show_custom_brokers: true,
  };

  // Try to insert the row
  const [insertedRow] = await knex("qa_custom_toggles")
    .insert(row)
    .onConflict("email_hash")
    .ignore()
    .returning("*");

  if (insertedRow) {
    return insertedRow as QaToggleRow;
  } else {
    // If insert was ignored due to conflict, fetch the existing row based on email_hash
    const existingRow = await knex("qa_custom_toggles")
      .where({ email_hash: emailHash })
      .first();

    // If an account was deleted and recreated, it has another
    // `onerep_profile_id`. Let’s make sure to update it!
    if (existingRow && existingRow.onerep_profile_id !== onerep_profile_id) {
      await knex("qa_custom_toggles").where({ email_hash: emailHash }).update({
        onerep_profile_id,
      });
    }

    return existingRow as QaToggleRow;
  }
}

export {
  getQaCustomBrokers,
  addQaCustomBroker,
  getAllMockedScanResults,
  deleteQaCustomBrokerRow,
  setQaCustomBrokerStatus,
  markQaCustomBrokerAsResolved,
  getAllQaCustomBreaches,
  addQaCustomBreach,
  deleteQaCustomBreach,
  getQaToggleRow,
  setQaToggle,
  createQaTogglesRow,
  formatQaBreach,
  AllowedToggleColumns,
};
export type { QaBrokerData, QaBreachData, QaToggleRow };
