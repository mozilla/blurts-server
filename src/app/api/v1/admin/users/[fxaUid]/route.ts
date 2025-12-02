/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { SubscriberRow } from "knex/types/tables";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { logger } from "../../../../../functions/server/logging";
import { isAdmin } from "../../../../utils/auth";
import { getSubscriberByFxaUid } from "../../../../../../db/tables/subscribers";
import { isMozMail } from "../../../../../functions/universal/isMozMail";

export type GetUserStateResponseBody = {
  success: true;
  subscriberId: SubscriberRow["id"];
  createdAt: SubscriberRow["created_at"];
  updatedAt: SubscriberRow["updated_at"];
  signupLanguage: SubscriberRow["signup_language"];
  all_emails_to_primary: SubscriberRow["all_emails_to_primary"];
};

/**
 * Look up a subscriber based on SHA1 hash of their email address.
 *
 * This requires admin privileges, and doesn't return any PII directly, just user state and IDs.
 *
 * @param req
 * @param props
 * @param props.params
 */
export async function GET(
  req: NextRequest,
  props: { params: Promise<{ fxaUid: string }> },
): Promise<NextResponse<GetUserStateResponseBody | { success: false }>> {
  const params = await props.params;
  const session = await getServerSession();
  if (session?.user && isAdmin(session?.user?.email || "")) {
    if (!isMozMail(session?.user?.email ?? "")) {
      logger.info("admin_users_get: [GET] User is not authorized");
      return NextResponse.json({ success: false }, { status: 403 });
    }

    // Signed in as admin
    try {
      if (!params.fxaUid) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const fxaUid = params.fxaUid;
      const subscriber = await getSubscriberByFxaUid(fxaUid);

      if (!subscriber) {
        logger.error("no_subscriber_found", { fxaUid });
        return NextResponse.json({ success: false }, { status: 404 });
      }

      const responseBody: GetUserStateResponseBody = {
        success: true,
        subscriberId: subscriber.id,
        createdAt: subscriber.created_at,
        updatedAt: subscriber.updated_at,
        signupLanguage: subscriber.signup_language,
        all_emails_to_primary: subscriber.all_emails_to_primary,
      };
      return NextResponse.json(responseBody);
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not signed in as admin
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

export type UserStateAction = "subscribe" | "unsubscribe" | "delete_subscriber";
export type PutUserStateRequestBody = {
  actions: UserStateAction[];
};

/**
 * Change user state based on subscriber ID.
 *
 * Multiple actions may be specified in one request:
 * {
 *   "actions":[
 *     "subscribe",
 *     "unsubscribe",
 *     "delete_subscriber"
 *   ]
 * }
 *
 * Actions will be processed in the order specified.
 *
 * NOTE: this will only carry out the server actions that should happen - client
 * state (such as the badge) depends on the FxA `subscriptions` claim in the JWT.
 *
 * @param req
 * @param props
 * @param props.params
 */
export async function PUT(
  req: NextRequest,
  props: { params: Promise<{ fxaUid: string }> },
) {
  const params = await props.params;
  const session = await getServerSession();
  if (session?.user && isAdmin(session?.user?.email || "")) {
    if (!isMozMail(session?.user?.email ?? "")) {
      logger.info("admin_users_get: [PUT] User is not authorized");
      return NextResponse.json({ success: false }, { status: 403 });
    }

    // Signed in as admin
    try {
      const fxaUid = params.fxaUid;
      if (!fxaUid) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const body = await req.json();
      const actions = body.actions;

      const subscriber = await getSubscriberByFxaUid(fxaUid);
      if (!subscriber) {
        logger.error("no_subscriber_found", { fxaUid });
        return NextResponse.json({ success: false }, { status: 404 });
      }

      logger.info("admin_subscription_change", {
        actions,
        subscriberId: subscriber.id,
      });
    } catch (e) {
      if (e instanceof Error) {
        logger.error("error_processing_actions", {
          stack: e.stack,
          message: e.message,
        });
      } else {
        logger.error("error_processing_actions", { error: JSON.stringify(e) });
      }
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    // Not signed in as admin
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
