/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getServerSession } from "next-auth";
import { OnerepScanResultRow, OnerepScanRow } from "knex/types/tables";
import { authOptions } from "../../../../utils/auth";
import { NextResponse } from "next/server";

import { logger } from "../../../../../functions/server/logging";

import AppConstants from "../../../../../../appConstants";
import {
  getOnerepProfileId,
  getSubscriberByFxaUid,
} from "../../../../../../db/tables/subscribers";

import { getLatestOnerepScanResults } from "../../../../../../db/tables/onerep_scans";

export type WelcomeScanResultResponse =
  | {
      success: true;
      scan_results: { scan?: OnerepScanRow; results: OnerepScanResultRow[] };
    }
  | { success: false };

export async function GET() {
  const session = await getServerSession(authOptions);
  if (typeof session?.user?.subscriber?.fxa_uid === "string") {
    try {
      const subscriber = await getSubscriberByFxaUid(
        session.user.subscriber?.fxa_uid,
      );
      const profileId = await getOnerepProfileId(subscriber.id);

      const scanResults = await getLatestOnerepScanResults(profileId);
      return NextResponse.json(
        { success: true, scan_results: scanResults },
        { status: 200 },
      );
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not Signed in, redirect to home
    return NextResponse.redirect(AppConstants.SERVER_URL, 302);
  }
}
