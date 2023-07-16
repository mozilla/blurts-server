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
  listScanResults,
} from "../../../../../functions/server/onerep";

export interface ScanProgressBody {
  success: boolean;
  scan?: Scan;
  results?: ListScanResultsResponse;
}

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

        if (scan.status === "finished") {
          const results = await listScanResults(profileId, { per_page: 100 });
          await setOnerepScanResults(profileId, scan.id, {
            data: results.data,
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
