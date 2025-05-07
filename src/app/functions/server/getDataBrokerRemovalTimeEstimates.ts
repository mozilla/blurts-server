/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import { LatestOnerepScanData } from "../../../db/tables/onerep_scans";
import { logger } from "@sentry/utils";
import { ScanData } from "./moscary";

/**
 * @property {OnerepScanResultRow["data_broker"]} d - Data broker domain.
 * @property {number} t - Estimated data broker removal time in days.
 */
export interface DataBrokerRemovalTime {
  d: OnerepScanResultRow["data_broker"];
  t: number;
}

export function getDataBrokerRemovalTimeEstimates(
  scanData: LatestOnerepScanData | ScanData,
): DataBrokerRemovalTime[] {
  try {
    const removalTimeData = JSON.parse(
      process.env.DATA_BROKER_REMOVAL_ESTIMATES_DATA as string,
    ) as DataBrokerRemovalTime[];
    return removalTimeData.filter(({ d }) =>
      scanData.results.find((scan) => scan.data_broker === d),
    );
  } catch (error) {
    logger.error("could_not_parse_data_broker_removal_estimates_data", {
      message: (error as Error).message,
      stack_trace: (error as Error).stack,
    });
    return [];
  }
}
