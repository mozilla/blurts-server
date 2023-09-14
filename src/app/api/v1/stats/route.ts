/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getScansCount } from "../../../../db/tables/onerep_scans";
import { bearerToken } from "../../utils/auth";

export async function GET(req: NextRequest) {
  const headerToken = bearerToken(req);
  if (headerToken !== process.env.STATS_TOKEN) {
    return NextResponse.json({ success: "false" }, { status: 401 });
  }

  const monthlyScanQuota = parseInt(
    (process.env.MONTHLY_SCANS_QUOTA as string) || "0"
  );
  const monthlySubscriberQuota = parseInt(
    (process.env.MONTHLY_SUBSCRIBERS_QUOTA as string) || "0"
  );

  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const manualScansCount =
    ((
      await getScansCount(
        firstDayOfMonth.toDateString(),
        now.toDateString(),
        "manual"
      )
    )?.[0]?.["count"] as number) || 0;

  const initialScansCount =
    ((
      await getScansCount(
        firstDayOfMonth.toDateString(),
        now.toDateString(),
        "initial"
      )
    )?.[0]?.["count"] as number) || 0;

  const message = {
    scans: {
      quota: monthlyScanQuota,
      count: manualScansCount,
    },
    subscribers: {
      quota: monthlySubscriberQuota,
      count: initialScansCount,
    },
  };

  return NextResponse.json({ success: true, message }, { status: 200 });
}
