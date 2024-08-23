/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logger } from "../../../../functions/server/logging";
import { verifyUnsubscribeToken } from "../../../utils/email";
import { unsubscribeMonthlyMonitorReportForEmail } from "../../../../../db/tables/subscribers";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const unsubToken = searchParams.get("token");

    if (!email || !unsubToken) {
      return NextResponse.json(
        {
          success: false,
          message: "email and token are required url parameters.",
        },
        { status: 400 },
      );
    }

    const tokenVerified = verifyUnsubscribeToken(email, unsubToken);
    if (tokenVerified) {
      await unsubscribeMonthlyMonitorReportForEmail(email);
      logger.debug("unsubscribe_email_success");
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      logger.warn("unsubscribe_email_unauthorized_token", {
        email,
        unsubToken,
      });
      return NextResponse.json(
        { success: false, message: "Unauthorized unsubscribe token" },
        { status: 401 },
      );
    }
  } catch (e) {
    logger.error("unsubscribe_email", {
      exception: e as string,
    });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
