/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logger } from "../../../../functions/server/logging";
import { unsubscribeMonthlyMonitorReportForUnsubscribeToken } from "../../../../../db/tables/subscriber_email_preferences";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "token is a required url parameter.",
        },
        { status: 400 },
      );
    }

    await unsubscribeMonthlyMonitorReportForUnsubscribeToken(token);
    logger.debug("unsubscribe_email_success");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    logger.error("unsubscribe_email", {
      exception: e as string,
    });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
