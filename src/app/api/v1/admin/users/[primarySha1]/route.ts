/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { logger } from "../../../../../functions/server/logging";
import { isAdmin, authOptions } from "../../../../utils/auth";
import {
  getOnerepProfileId,
  getSubscribersByHashes,
} from "../../../../../../db/tables/subscribers";
import {
  activateProfile,
  deactivateProfile,
  optoutProfile,
} from "../../../../../functions/server/onerep";
import { captureException } from "@sentry/node";

/**
 * Look up a subscriber based on SHA1 hash of their email address.
 *
 * This requires admin privileges, and doesn't return any PII directly, just user state and IDs.
 *
 * @param req
 * @param root0
 * @param root0.params
 * @param root0.params.primarySha1
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { primarySha1: string } },
) {
  const session = await getServerSession(authOptions);
  if (isAdmin(session?.user?.email || "")) {
    // Signed in as admin
    try {
      if (!params.primarySha1) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const primarySha1 = params.primarySha1;
      const subscriber = (await getSubscribersByHashes([primarySha1]))[0];
      return NextResponse.json({
        subscriberId: subscriber.id,
        onerepProfileId: subscriber.onerep_profile_id,
        createdAt: subscriber.created_at,
        updatedAt: subscriber.updated_at,
        signupLanguage: subscriber.signup_language,
        all_emails_to_primary: subscriber.all_emails_to_primary,
      });
    } catch (e) {
      logger.error(e);
      return NextResponse.json({ success: false }, { status: 500 });
    }
  } else {
    // Not signed in as admin
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

/**
 * Change user state based on subscriber ID.
 *
 * Current supported actions are subscribe and unsubscribe.
 * NOTE: this will only carry out the server actions that should happen - client
 * state (such as the badge) depends on the FxA `subscriptions` claim in the JWT.
 *
 * @param {NextRequest} req
 * @param root0
 * @param root0.params
 * @param root0.params.primarySha1
 * @param root0.params.action
 */
export async function PUT(
  req: NextRequest,
  { params }: { params: { primarySha1: string } },
) {
  const session = await getServerSession(authOptions);
  if (isAdmin(session?.user?.email || "")) {
    // Signed in as admin
    try {
      const primarySha1 = params.primarySha1;
      if (!params.primarySha1) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const body = await req.json();
      const action = body.action;

      if (!primarySha1) {
        return NextResponse.json({ success: false }, { status: 400 });
      }

      const subscriber = (await getSubscribersByHashes([primarySha1]))[0];
      const result = await getOnerepProfileId(subscriber.id);
      const oneRepProfileId = result?.[0]?.["onerep_profile_id"] as number;

      logger.debug("fxa_subscription_change", JSON.stringify(result));

      // MNTOR-2103: if one rep profile id doesn't exist in the db, fail silently
      if (!oneRepProfileId) {
        logger.error("No OneRep profile Id found", {
          subscriberId: subscriber.id,
        });

        captureException(
          new Error(
            `No OneRep profile Id found, subscriber ID: ${subscriber.id})}`,
          ),
        );

        switch (action) {
          case "subscribe": {
            // activate and opt out profiles
            await activateProfile(oneRepProfileId);
            await optoutProfile(oneRepProfileId);
            logger.info("force_user_subscribe", {
              oneRepProfileId,
              primarySha1,
            });
            break;
          }
          case "unsubscribe": {
            await deactivateProfile(oneRepProfileId);
            logger.info("force_user_unsubscribe", {
              oneRepProfileId,
              primarySha1,
            });
            break;
          }
          default: {
            logger.error("Unknown action:", action);
            return NextResponse.json({ success: true }, { status: 500 });
          }
        }
      }
    } catch (ex) {
      captureException(ex);
      return NextResponse.json({ success: true }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    // Not signed in as admin
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
