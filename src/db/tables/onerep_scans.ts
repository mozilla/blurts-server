/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect.js";
import { logger } from "../../app/functions/server/logging";

import {
  ScanResult,
  Scan,
  ScanReason,
} from "../../app/functions/server/onerep.js";
import {
  OnerepScanResultRow,
  OnerepScanRow,
  SubscriberRow,
} from "knex/types/tables";
import { RemovalStatus } from "../../app/functions/universal/scanResult.js";
import { MOCK_ONEREP_SCAN_ID } from "../../app/api/mock/onerep/config/config.ts";

const knex = createDbConnection();

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

async function getLatestScanForProfileByReason(
  onerepProfileId: number,
  oneRepScanReason: ScanReason,
): Promise<OnerepScanRow | undefined> {
  const scan = await knex("onerep_scans")
    .where("onerep_profile_id", onerepProfileId)
    .andWhere("onerep_scan_reason", oneRepScanReason)
    .orderBy("created_at", "desc")
    .first();

  return scan;
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

async function getAllScanResults(
  age: Date,
  statuses: RemovalStatus[],
  page: number | null,
  perPage: number | null,
) {
  if (page && perPage) {
    // Our custom knex type doesn't seem to be quite right in this case.
    const countResult = (
      await knex("onerep_scan_results")
        .count("*")
        .whereIn("status", statuses)
        .andWhere("updated_at", "<", age)
    )[0] as unknown as { count: number };

    const count = countResult.count;

    const scanResults = await knex("onerep_scan_results")
      .limit(perPage)
      .offset((page - 1) * perPage)
      .whereIn("onerep_scan_results.status", statuses)
      .andWhere("onerep_scan_results.updated_at", "<", age)
      .join(
        "onerep_scans",
        "onerep_scan_results.onerep_scan_id",
        "=",
        "onerep_scans.onerep_scan_id",
      )
      .join(
        "subscribers",
        "onerep_scans.onerep_profile_id",
        "=",
        "subscribers.onerep_profile_id",
      )
      .orderBy("onerep_scan_result_id");

    let totalPages;

    if (count > 0 && count < perPage) {
      totalPages = 1;
    } else {
      totalPages = Math.ceil(count / perPage);
    }
    return { totalPages, scanResults };
  } else {
    const scanResults = await knex("onerep_scan_results")
      .whereIn("onerep_scan_results.status", statuses)
      .andWhere("onerep_scan_results.updated_at", "<", age)
      .join(
        "onerep_scans",
        "onerep_scan_results.onerep_scan_id",
        "=",
        "onerep_scans.onerep_scan_id",
      )
      .join(
        "subscribers",
        "onerep_scans.onerep_profile_id",
        "=",
        "subscribers.onerep_profile_id",
      )
      .orderBy("onerep_scan_result_id");

    return { scanResults };
  }
}

async function getLatestOnerepScan(
  onerepProfileId: number | null,
): Promise<OnerepScanRow | null> {
  if (onerepProfileId === null) {
    return null;
  }

  const scan = await knex("onerep_scans")
    .first()
    .where("onerep_profile_id", onerepProfileId)
    .orderBy("created_at", "desc");

  return scan ?? null;
}

async function getLatestOnerepScanResults(
  onerepProfileId: number | null,
): Promise<LatestOnerepScanData> {
  const scan = await getLatestOnerepScan(onerepProfileId);

  const results =
    typeof scan === "undefined"
      ? []
      : ((await knex("onerep_scan_results")
          .select("onerep_scan_results.*")
          .distinctOn("link")
          .where("onerep_profile_id", onerepProfileId)
          .innerJoin(
            "onerep_scans",
            "onerep_scan_results.onerep_scan_id",
            "onerep_scans.onerep_scan_id",
          )
          .orderBy("link")
          .orderBy("onerep_scan_result_id", "desc")) as OnerepScanResultRow[]);

  return {
    scan: scan ?? null,
    results,
  };
}

async function setOnerepProfileId(
  subscriber: SubscriberRow,
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
  oneRepScanReason: ScanReason,
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
      onerep_profile_id: onerepProfileId,
      onerep_scan_status: onerepScanStatus,
      updated_at: knex.fn.now(),
    });
}

async function addOnerepScanResults(
  onerepProfileId: number,
  onerepScanResults: Array<ScanResult>,
) {
  let scanResultsMap = onerepScanResults.map((scanResult) => ({
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
    optout_attempts: scanResult.optout_attempts,
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

  // Delete previous records to allow dynamic mock data configuration, maintaining the 'manually_resolved' field.
  if (process.env.ONEREP_API_BASE!.includes("/api/mock")) {
    const scan_id = MOCK_ONEREP_SCAN_ID(onerepProfileId);
    const existingRecords = await knex("onerep_scan_results")
      .where("onerep_scan_id", scan_id)
      .select("onerep_scan_result_id", "manually_resolved");

    const resolvedStatusMap = new Map();
    existingRecords.forEach((record) => {
      resolvedStatusMap.set(
        record.onerep_scan_result_id,
        record.manually_resolved,
      );
    });

    scanResultsMap = scanResultsMap.map((item) => {
      if (resolvedStatusMap.has(item.onerep_scan_result_id)) {
        return {
          ...item,
          manually_resolved: resolvedStatusMap.get(item.onerep_scan_result_id),
        };
      }
      return item;
    });

    await knex("onerep_scan_results").where("onerep_scan_id", scan_id).del();
  }
  if (scanResultsMap.length > 0) {
    await knex("onerep_scan_results")
      .insert(scanResultsMap)
      .onConflict("onerep_scan_result_id")
      .merge();
  }
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

async function deleteScansForProfile(onerepProfileId: number): Promise<void> {
  await knex("onerep_scans")
    .delete()
    .where("onerep_profile_id", onerepProfileId);
}

async function deleteScanResultsForProfile(
  onerepProfileId: number,
): Promise<void> {
  await knex("onerep_scan_results")
    .delete()
    .innerJoin(
      "onerep_scans",
      "onerep_scan_results.onerep_scan_id",
      "onerep_scans.onerep_scan_id",
    )
    .where("onerep_profile_id", onerepProfileId);
}

export {
  getAllScansForProfile,
  getLatestScanForProfileByReason,
  getScanResults,
  getLatestOnerepScan,
  getAllScanResults,
  getLatestOnerepScanResults,
  setOnerepProfileId,
  setOnerepScan,
  addOnerepScanResults,
  getScansCount,
  isOnerepScanResultForSubscriber,
  markOnerepScanResultAsResolved,
  getScansCountForProfile,
  deleteScansForProfile,
  deleteScanResultsForProfile,
};
