/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

import { logger } from "../../../../../functions/server/logging";

import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  getOnerepProfileId,
  getSubscriberByFxaUid,
} from "../../../../../../db/tables/subscribers";

import {
  addOnerepScanResults,
  getScanResultsWithBroker,
} from "../../../../../../db/tables/onerep_scans";
import {
  ListScanResultsResponse,
  Scan,
  getScanDetails,
  getAllScanResults,
} from "../../../../../functions/server/onerep";
import { hasPremium } from "../../../../../functions/universal/user";

export interface ScanProgressBody {
  success: boolean;
  scan?: Scan;
  results?: ListScanResultsResponse;
}

// Periodically checking the scan progress and set the result if finished.
// A webhook is used as well, but this ensures that we get the latest data.
// @see the onerep-events route and https://docs.onerep.com/#section/Webhooks-Endpoints
export async function GET(
  _req: NextRequest,
): Promise<NextResponse<ScanProgressBody> | NextResponse<unknown>> {
  const session = await getServerSession();
  if (typeof session?.user?.subscriber?.fxa_uid === "string") {
    try {
      const subscriber = await getSubscriberByFxaUid(
        session.user.subscriber?.fxa_uid,
      );
      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      const profileId = await getOnerepProfileId(subscriber.id);

      const latestScan = await getScanResultsWithBroker(
        profileId,
        hasPremium(session.user),
      );
      const latestScanId = latestScan.scan?.onerep_scan_id;

      if (
        typeof latestScanId !== "undefined" &&
        typeof profileId === "number"
      ) {
        const scan = await getScanDetails(profileId, latestScanId);

        // Store scan results.
        if (scan.status === "finished") {
          const allScanResults = await getAllScanResults(profileId);
          await addOnerepScanResults(profileId, allScanResults);
        }

        return NextResponse.json(
          { success: true, status: scan.status },
          { status: 200 },
        );
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
