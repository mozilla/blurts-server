/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import { LatestOnerepScanData } from "../../../db/tables/onerep_scans";

interface DataBrokerRemovalTime {
  d: OnerepScanResultRow["data_broker"];
  t: number;
}

export function getDataBrokerRemovalTimeEstimates(
  scanData: LatestOnerepScanData,
) {
  const removalTimeData = JSON.parse(
    process.env.DATA_BROKER_REMOVAL_ESTIMATES_DATA as string,
  ) as DataBrokerRemovalTime[];
  return removalTimeData.filter(({ d }) =>
    scanData.results.find((scan) => scan.data_broker === d),
  );
}