/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import initKnex from "knex";
import knexConfig from "../knexfile.js";

import { logger } from "../../app/functions/server/logging";

import { ScanResult, Scan } from "../../app/functions/server/onerep.js";
import { Subscriber } from "../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js";
import { OnerepScanResultRow, OnerepScanRow } from "knex/types/tables";

const knex = initKnex(knexConfig);
export interface LatestOnerepScanData {
  scan: OnerepScanRow | null;
  results: OnerepScanResultRow[];
}

async function getAllScansForProfile(
  onerepProfileId: number,
): Promise<OnerepScanRow[]> {
  const scans = await knex("onerep_scans")
    .where("onerep_profile_id", onerepProfileId)
    .orderBy("created_at", "desc");

  return scans;
}

async function getScanResults(
  onerepScanId: number,
): Promise<OnerepScanResultRow[]> {
  const scanResults = await knex("onerep_scan_results").where(
    "onerep_scan_id",
    onerepScanId,
  );

  return scanResults;
}

async function getLatestOnerepScanResults(
  onerepProfileId: number,
): Promise<LatestOnerepScanData> {
  const scan = await knex("onerep_scans")
    .first()
    .where("onerep_profile_id", onerepProfileId)
    .orderBy("created_at", "desc");

  const results =
    typeof scan === "undefined"
      ? []
      : await knex("onerep_scan_results")
          .select()
          .where("onerep_profile_id", onerepProfileId)
          .innerJoin(
            "onerep_scans",
            "onerep_scan_results.onerep_scan_id",
            "onerep_scans.onerep_scan_id",
          );

  return {
    scan: scan ?? null,
    results,
  };
}

async function setOnerepProfileId(
  subscriber: Subscriber,
  onerepProfileId: number,
) {
  await knex("subscribers").where("id", subscriber.id).update({
    onerep_profile_id: onerepProfileId,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    updated_at: knex.fn.now(),
  });
}

async function setOnerepScan(
  onerepProfileId: number,
  onerepScanId: number,
  onerepScanStatus: Scan["status"],
  oneRepScanReason: "manual" | "initial" | "monitoring",
) {
  await knex("onerep_scans")
    .insert({
      onerep_profile_id: onerepProfileId,
      onerep_scan_id: onerepScanId,
      onerep_scan_reason: oneRepScanReason,
      onerep_scan_status: onerepScanStatus,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      created_at: knex.fn.now(),
    })
    .onConflict("onerep_scan_id")
    .merge({
      onerep_scan_status: onerepScanStatus,
      updated_at: knex.fn.now(),
    });
}

async function addOnerepScanResults(
  onerepProfileId: number,
  onerepScanResults: Array<ScanResult>,
) {
  const scanResultsMap = onerepScanResults.map((scanResult) => ({
    onerep_scan_result_id: scanResult.id,
    onerep_scan_id: scanResult.scan_id,
    link: scanResult.link,
    age:
      typeof scanResult.age === "string"
        ? Number.parseInt(scanResult.age, 10)
        : undefined,
    data_broker: scanResult.data_broker,
    data_broker_id: scanResult.data_broker_id,
    emails: JSON.stringify(scanResult.emails),
    phones: JSON.stringify(scanResult.phones),
    addresses: JSON.stringify(scanResult.addresses),
    relatives: JSON.stringify(scanResult.relatives),
    first_name: scanResult.first_name,
    middle_name: scanResult.middle_name,
    last_name: scanResult.last_name,
    status: scanResult.status,
  }));

  // Only log metadata. This is used for reporting purposes.
  logger.info("scan_result", {
    onerepProfileId,
    scan: scanResultsMap.map((result) => {
      return {
        onerepScanId: result.onerep_scan_id,
        onerepScanResultId: result.onerep_scan_result_id,
        onerepScanStatus: result.status,
        dataBrokerId: result.data_broker_id,
      };
    }),
  });

  await knex("onerep_scan_results")
    .insert(scanResultsMap)
    .onConflict("onerep_scan_result_id")
    .ignore();
}

async function isOnerepScanResultForSubscriber(params: {
  onerepScanResultId: number;
  subscriberId: number;
}): Promise<boolean> {
  const result = await knex("onerep_scan_results")
    .innerJoin(
      "onerep_scans",
      "onerep_scan_results.onerep_scan_id",
      "onerep_scans.onerep_scan_id",
    )
    .innerJoin(
      "subscribers",
      "onerep_scans.onerep_profile_id",
      "subscribers.onerep_profile_id",
    )
    .where(
      "onerep_scan_results.onerep_scan_result_id",
      params.onerepScanResultId,
    )
    .andWhere("subscribers.id", params.subscriberId)
    .first("onerep_scan_result_id");

  return typeof result?.onerep_scan_result_id === "number";
}

async function markOnerepScanResultAsResolved(
  onerepScanResultId: number,
): Promise<void> {
  logger.info("scan_resolved", {
    onerepScanResultId,
  });

  await knex("onerep_scan_results")
    .update({
      manually_resolved: true,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    })
    .where("onerep_scan_result_id", onerepScanResultId);
}

async function getScansCount(
  startDate: string,
  endDate: string,
  scanReason: Scan["reason"],
) {
  return await knex("onerep_scans")
    .count("id")
    .whereBetween("created_at", [startDate, endDate])
    .andWhere("onerep_scan_reason", scanReason);
}

async function getScansCountForProfile(
  onerepProfileId: number,
): Promise<number> {
  return parseInt(
    ((
      await knex("onerep_scans")
        .count("id")
        .where("onerep_profile_id", onerepProfileId)
    )?.[0]?.["count"] as string) || "0",
  );
}

export {
  getAllScansForProfile,
  getScanResults,
  getLatestOnerepScanResults,
  setOnerepProfileId,
  setOnerepScan,
  addOnerepScanResults,
  getScansCount,
  isOnerepScanResultForSubscriber,
  markOnerepScanResultAsResolved,
  getScansCountForProfile,
};
