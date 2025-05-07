/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  OnerepScanResultDataBrokerRow,
  OnerepScanResultRow,
  OnerepScanRow,
} from "knex/types/tables";

export function isOneRepScan<T>(
  data: T | OnerepScanRow,
): data is OnerepScanRow {
  return typeof (data as OnerepScanRow)?.onerep_scan_status === "string";
}

export function isOneRepScanResult<T>(
  data: T | OnerepScanResultRow,
): data is OnerepScanResultRow {
  return (
    typeof (data as OnerepScanResultRow)?.onerep_scan_result_id === "number"
  );
}

export function isOneRepScanResultDataBroker<T>(
  data: T | OnerepScanResultDataBrokerRow,
): data is OnerepScanResultDataBrokerRow {
  return (
    isOneRepScanResult(data) &&
    typeof (data as OnerepScanResultDataBrokerRow)?.broker_status === "string"
  );
}
