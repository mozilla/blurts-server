/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow } from "knex/types/tables";
import { NextRequest, NextResponse } from "next/server";
import {
  getStuckRemovals,
  refreshStuckRemovals,
} from "../../../../functions/server/getStuckRemovals";
import { getServerSession } from "../../../../functions/server/getServerSession";
import { isAdmin } from "../../../utils/auth";
import { captureException } from "@sentry/node";
import { logger } from "../../../../functions/server/logging";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  const searchParams = req.nextUrl.searchParams;

  if (!isAdmin(session?.user?.email || "")) {
    return NextResponse.json({ success: false, status: 401 });
  }

  if (!searchParams.has("days")) {
    return NextResponse.json({
      success: false,
      status: 422,
      message: "days parameter is required",
    });
  }

  const days = parseInt(searchParams.get("days") ?? "30");

  if (searchParams.get("refresh") === "true") {
    try {
      await refreshStuckRemovals(days);
      return NextResponse.json({
        success: true,
        status: 200,
        message: "refreshed stored results",
      });
    } catch (e) {
      captureException(e);
      logger.error("error_refreshing_results", { error: JSON.stringify(e) });
      return NextResponse.json({
        success: false,
        status: 500,
      });
    }
  }

  try {
    const { scanResults, brokers } = await getStuckRemovals(days, null, null);
    const csvOutput = exportCsv(scanResults, brokers);

    const headers = new Headers();
    headers.set("Content-Type", "text/csv");
    return new NextResponse(csvOutput, {
      status: 200,
      statusText: "OK",
      headers,
    });
  } catch (e) {
    captureException(e);
    logger.error("error_getting_stuck_removals", { error: JSON.stringify(e) });
    return NextResponse.json({
      success: false,
      status: 500,
    });
  }
}

function exportCsv(
  scanResults: OnerepScanResultRow[],
  brokers: Map<
    number,
    | "active"
    | "scan_under_maintenance"
    | "removal_under_maintenance"
    | "on_hold"
    | "ceased_operation"
  >,
) {
  const csvOutput = [];
  csvOutput.push([
    "Scan Result ID",
    "Removal Status",
    "Created",
    "Last Updated",
    "Broker Name",
    "Broker Status",
  ]);
  scanResults.forEach((scanResult) => {
    const csvRow = [];
    csvRow.push(scanResult.onerep_scan_result_id);
    csvRow.push(scanResult.status);
    csvRow.push(scanResult.created_at.toDateString());
    csvRow.push(scanResult.updated_at.toDateString());
    csvRow.push(scanResult.data_broker);
    csvRow.push(brokers.get(scanResult.data_broker_id));

    csvOutput.push(csvRow);
  });

  const arrayToCSV = (arr: string[][], delimiter = ",") =>
    arr
      .map((v: string[]) => v.map((x: string) => `"${x}"`).join(delimiter))
      .join("\n");

  return arrayToCSV(csvOutput);
}
