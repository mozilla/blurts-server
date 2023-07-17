/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { authOptions } from "../../../../utils/auth";
import { NextRequest, NextResponse } from "next/server";

import AppConstants from "../../../../../../appConstants";
import {
  getOnerepProfileId,
  getSubscriberByEmail,
} from "../../../../../../db/tables/subscribers";

import {
  getLatestOnerepScan,
  setOnerepScanResults,
} from "../../../../../../db/tables/onerep_scans";
import {
  ListScanResultsResponse,
  Scan,
  getScanDetails,
  getAllScanResults,
} from "../../../../../functions/server/onerep";

export interface ScanProgressBody {
  success: boolean;
  scan?: Scan;
  results?: ListScanResultsResponse;
}

// For development we are periodically checking the scan progress and set the
// result if finished. Polling the OneRep API is only necessary in development
// environments - a webhook is used elsewhere.
// @see the onerep-events route and https://docs.onerep.com/#section/Webhooks-Endpoints
export async function GET(
  _req: NextRequest
): Promise<NextResponse<ScanProgressBody | unknown>> {
  const session = await getServerSession(authOptions);
  if (typeof session?.user?.email === "string") {
    try {
      const subscriber = await getSubscriberByEmail(session.user.email);
      const profileId = (await getOnerepProfileId(subscriber.id))[0][
        "onerep_profile_id"
      ] as number;

      const latestScans = await getLatestOnerepScan(profileId);
      const latestScanId = latestScans[0]?.onerep_scan_id;

      if (latestScanId) {
        const scan = await getScanDetails(profileId, latestScanId);

        // Store scan results only for development environments.
        if (
          scan.status === "finished" &&
          process.env.NODE_ENV === "development"
        ) {
          const allScanResults = await getAllScanResults(profileId);
          await setOnerepScanResults(profileId, scan.id, {
            data: allScanResults[0],
          });
        }

        return NextResponse.json(
          { success: true, status: scan.status },
          { status: 200 }
        );
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 302);
  }
}
