/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logger } from "../../../../functions/server/logging";
import {
  getEmailSubscriptionByToken,
  unsubscribeByToken,
} from "../../../../../db/tables/email_subscriptions";
import * as Sentry from "@sentry/nextjs";

/**
 * Used for email footer unsubscribe
 *
 * @param req
 * @returns
 */
export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const unsubToken = searchParams.get("token");
    if (!unsubToken) {
      return NextResponse.json(
        {
          success: false,
          message: "token is a required url parameter.",
        },
        { status: 400 },
      );
    }
    const subscriptionRecord = await getEmailSubscriptionByToken(unsubToken);
    if (!subscriptionRecord) {
      logger.info("No email_subscription associated with token", {
        token: unsubToken,
      });
      return NextResponse.json({ success: true }, { status: 200 });
    }
    await unsubscribeByToken(subscriptionRecord, "footer", unsubToken);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    logger.error("unsubscribe_email", {
      exception: e as string,
    });
    Sentry.captureException(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
