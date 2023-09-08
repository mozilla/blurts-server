/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import initKnex from "knex";
import knexConfig from "../knexfile.js";
import { ScanResult } from "../../app/functions/server/onerep.js";
import { Subscriber } from "../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js";
import { OnerepScanResultRow, OnerepScanRow } from "knex/types/tables";
const knex = initKnex(knexConfig);

export interface GetLatestOnerepScanResult {
  onerep_scan_id: number;
  created_at: number;
  updated_at: number;
  onerep_scan_results: { data: ScanResult[] } | null;
  onerep_scan_reason: string;
}

async function getLatestOnerepScanResults(
  onerepProfileId: number
): Promise<{ scan: OnerepScanRow | null; results: OnerepScanResultRow[] }> {
  const scan = await knex("onerep_scans")
    .first()
    .where("onerep_profile_id", onerepProfileId)
    .orderBy("created_at", "desc");

  const results =
    typeof scan === "undefined"
      ? []
      : await knex("onerep_scan_results")
          .select()
          .where("onerep_scan_id", scan.onerep_scan_id);
  return {
    scan: scan ?? null,
    results: results,
  };
}

async function setOnerepProfileId(
  subscriber: Subscriber,
  onerepProfileId: number
) {
  await knex("subscribers").where("id", subscriber.id).update({
    onerep_profile_id: onerepProfileId,
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    updated_at: knex.fn.now(),
  });
}

async function setOnerepManualScan(
  onerepProfileId: number,
  onerepScanId: number
) {
  await knex("onerep_scans").insert({
    onerep_profile_id: onerepProfileId,
    onerep_scan_id: onerepScanId,
    onerep_scan_reason: "manual",
    // @ts-ignore knex.fn.now() results in it being set to a date,
    // even if it's not typed as a JS date object:
    created_at: knex.fn.now(),
  });
}

async function setOnerepScanResults(
  onerepProfileId: number,
  onerepScanId: number,
  onerepScanResults: Array<ScanResult>,
  onerepScanReason: "manual" | "initial" | "monitoring"
) {
  await knex.transaction(async (transaction) => {
    if (onerepScanReason === "manual") {
      // Manual scans update an existing scan, replacing the previous results:
      await transaction("onerep_scan_results")
        .delete()
        .where("onerep_scan_id", onerepScanId);
    } else {
      // Initial and Monitoring scans always create a new scan:
      await transaction("onerep_scans").insert({
        onerep_profile_id: onerepProfileId,
        onerep_scan_id: onerepScanId,
        onerep_scan_reason: onerepScanReason,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        created_at: knex.fn.now(),
      });
    }

    await transaction("onerep_scan_results").insert(
      onerepScanResults.map((scanResult) => ({
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
      }))
    );
  });
}

async function getScansCount(startDate: string, endDate: string) {
  return await knex("onerep_scans")
    .count("id")
    .whereBetween("created_at", [startDate, endDate]);
}

export {
  getLatestOnerepScanResults,
  setOnerepProfileId,
  setOnerepManualScan,
  setOnerepScanResults,
  getScansCount,
};
