/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { OnerepScanResultRow, OnerepScanRow } from "knex/types/tables";
import { NextResponse } from "next/server";

import { logger } from "../../../../../functions/server/logging";

import { getServerSession } from "../../../../../functions/server/getServerSession";
import {
  getOnerepProfileId,
  getSubscriberByFxaUid,
} from "../../../../../../db/tables/subscribers";

import { getScanResultsWithBroker as getOnerepScanResultsWithBroker } from "../../../../../../db/tables/onerep_scans";
import { hasPremium } from "../../../../../functions/universal/user";

export type WelcomeScanResultResponse =
  | {
      success: true;
      scan_results: { scan?: OnerepScanRow; results: OnerepScanResultRow[] };
    }
  | { success: false };

export async function GET() {
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

      const scanResults = await getOnerepScanResultsWithBroker(
        profileId,
        hasPremium(session.user),
      );
      return NextResponse.json(
        { success: true, scan_results: scanResults },
        { status: 200 },
      );
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
