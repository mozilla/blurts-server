/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logger } from "../../../../functions/server/logging";
import {
  getEmailSubscriptionByToken,
  unsubscribeEmailSubscription,
} from "../../../../../db/tables/email_subscriptions";
import * as Sentry from "@sentry/nextjs";

/**
 * One-click unsubscribe endpoint per RFC 8058.
 * https://datatracker.ietf.org/doc/html/rfc8058
 *
 * Email clients that support one-click unsubscribe will POST to this
 * endpoint with a body of `List-Unsubscribe=One-Click` and expect a
 * 200 response with no redirect.
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

    // RFC 8058 §3: the POST body MUST contain a field named "List-Unsubscribe"
    // with value "One-Click". The content type SHOULD be multipart/form-data
    // or MAY be application/x-www-form-urlencoded.
    const contentType = req.headers.get("content-type") ?? "";
    if (
      contentType.includes("multipart/form-data") ||
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      const formData = await req.formData();
      if (formData.get("List-Unsubscribe") !== "One-Click") {
        return NextResponse.json(
          {
            success: false,
            message: "Body must contain List-Unsubscribe=One-Click.",
          },
          { status: 400 },
        );
      }
    }

    const subscriptionRecord = await getEmailSubscriptionByToken(unsubToken);
    if (!subscriptionRecord) {
      logger.info("No email_subscription associated with token", {
        token: unsubToken,
      });
      // Return 200 per RFC 8058 to avoid leaking token validity
      return NextResponse.json({ success: true }, { status: 200 });
    }
    await unsubscribeEmailSubscription(subscriptionRecord, "one-click");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    logger.error("one_click_unsubscribe_email", { error: e });
    Sentry.captureException(e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
