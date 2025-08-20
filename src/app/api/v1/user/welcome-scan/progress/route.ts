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
  getScanResultsWithBroker as getOnerepScanResultsWithBroker,
} from "../../../../../../db/tables/onerep_scans";
import {
  Scan as OnerepScan,
  getScanDetails as getOnerepScanDetails,
  getAllScanResults as getAllOnerepScanResults,
} from "../../../../../functions/server/onerep";
import { hasPremium } from "../../../../../functions/universal/user";
import { getScanAndResults } from "../../../../../functions/server/moscary";
import { getEnabledFeatureFlags } from "../../../../../../db/tables/featureFlags";
import { getCountryCode } from "../../../../../functions/server/getCountryCode";
import { headers } from "next/headers";
import { getExperimentationId } from "../../../../../functions/server/getExperimentationId";
import { getExperiments } from "../../../../../functions/server/getExperiments";
import { getLocale } from "../../../../../functions/universal/getLocale";
import { getL10n } from "../../../../../functions/l10n/storybookAndJest";
import { getAcceptLangHeaderInServerComponents } from "../../../../../functions/l10n/serverComponents";

export interface ScanProgressBody {
  success: boolean;
  status?: OnerepScan["status"];
}

// Periodically checking the scan progress and set the result if finished.
// A webhook is used as well, but this ensures that we get the latest data.
// @see the onerep-events route and https://docs.onerep.com/#section/Webhooks-Endpoints
export async function GET(
  _req: NextRequest,
): Promise<NextResponse<ScanProgressBody>> {
  const session = await getServerSession();
  if (typeof session?.user?.subscriber?.fxa_uid === "string") {
    const enabledFeatureFlags = await getEnabledFeatureFlags({
      email: session.user.email,
    });
    try {
      const subscriber = await getSubscriberByFxaUid(
        session.user.subscriber?.fxa_uid,
      );
      if (!subscriber) {
        throw new Error("No subscriber found for current session.");
      }
      const countryCode = getCountryCode(await headers());
      const experimentationId = await getExperimentationId(session.user);
      const experimentData = await getExperiments({
        experimentationId,
        countryCode,
        locale: getLocale(
          getL10n(await getAcceptLangHeaderInServerComponents()),
        ),
      });
      if (
        enabledFeatureFlags.includes("Moscary") ||
        experimentData["Features"]["moscary"].enabled
      ) {
        if (subscriber.moscary_id === null) {
          return NextResponse.json(
            { success: true } satisfies ScanProgressBody,
            {
              status: 200,
            },
          );
        }
        const latestScan = await getScanAndResults(subscriber.moscary_id);
        const latestScanId = latestScan.scan?.id;

        if (typeof latestScanId !== "undefined") {
          return NextResponse.json(
            {
              success: true,
              status: latestScan.scan?.status,
            } satisfies ScanProgressBody,
            { status: 200 },
          );
        }

        return NextResponse.json({ success: true } satisfies ScanProgressBody, {
          status: 200,
        });
      } else {
        const profileId = await getOnerepProfileId(subscriber.id);

        const latestScan = await getOnerepScanResultsWithBroker(
          profileId,
          hasPremium(session.user),
        );
        const latestScanId = latestScan.scan?.onerep_scan_id;

        if (
          typeof latestScanId !== "undefined" &&
          typeof profileId === "number"
        ) {
          const scan = await getOnerepScanDetails(profileId, latestScanId);

          // Store scan results.
          if (scan.status === "finished") {
            const allScanResults = await getAllOnerepScanResults(profileId);
            await addOnerepScanResults(profileId, allScanResults);
          }

          return NextResponse.json(
            { success: true, status: scan.status } satisfies ScanProgressBody,
            { status: 200 },
          );
        }

        return NextResponse.json({ success: true } satisfies ScanProgressBody, {
          status: 200,
        });
      }
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false } satisfies ScanProgressBody, {
        status: 500,
      });
    }
  } else {
    return NextResponse.json({ success: false } satisfies ScanProgressBody, {
      status: 401,
    });
  }
}
