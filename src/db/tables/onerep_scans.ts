/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import initKnex from "knex";
import knexConfig from "../knexfile.js";
import { ScanResult } from "../../app/functions/server/onerep.js";
import { Subscriber } from "../../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js";
const knex = initKnex(knexConfig);

async function getOnerepScanResults(
  onerepProfileId: number,
  onerepScanId: number
): Promise<ScanResult[]> {
  return (await knex("onerep_scans")
    .select("onerep_scan_results")
    .where("onerep_profile_id", onerepProfileId)
    .andWhere("onerep_scan_id", onerepScanId)) as unknown as Promise<
    ScanResult[]
  >;
}

export interface GetLatestOnerepScanResult {
  onerep_scan_id: number;
  created_at: number;
  updated_at: number;
  onerep_scan_results: { data: ScanResult[] } | null;
  onerep_scan_reason: string;
}

async function getLatestOnerepScan(
  onerepProfileId: number
): Promise<GetLatestOnerepScanResult | null> {
  return (
    await knex("onerep_scans")
      .select(
        "onerep_scan_id",
        "created_at",
        "updated_at",
        "onerep_scan_results",
        "onerep_scan_reason"
      )
      .where("onerep_profile_id", onerepProfileId)
      .orderBy("created_at", "desc")
      .limit(1)
  )[0] as unknown as Promise<{
    onerep_scan_id: number;
    created_at: number;
    updated_at: number;
    onerep_scan_results: { data: ScanResult[] };
    onerep_scan_reason: "manual" | "initial" | "monitoring";
  }>;
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
  onerepScanResults: object,
  onerepScanReason: "manual" | "initial" | "monitoring"
) {
  if (onerepScanReason === "manual") {
    // Manual scans update an existing row.
    await knex("onerep_scans")
      .where("onerep_profile_id", onerepProfileId)
      .andWhere("onerep_scan_id", onerepScanId)
      .update({
        onerep_scan_results: onerepScanResults as ScanResult,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: knex.fn.now(),
      });
  } else {
    // Initial and Monitoring scans always create a new row.
    await knex("onerep_scans").insert({
      onerep_profile_id: onerepProfileId,
      onerep_scan_id: onerepScanId,
      onerep_scan_results: onerepScanResults as ScanResult,
      onerep_scan_reason: onerepScanReason,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      created_at: knex.fn.now(),
    });
  }
}

async function getScansCount(startDate: string, endDate: string) {
  return await knex("onerep_scans")
    .count("id")
    .whereBetween("created_at", [startDate, endDate]);
}

export {
  getLatestOnerepScan,
  getOnerepScanResults,
  setOnerepProfileId,
  setOnerepManualScan,
  setOnerepScanResults,
  getScansCount,
};
