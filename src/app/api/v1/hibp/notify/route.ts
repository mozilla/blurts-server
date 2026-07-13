/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

import { bearerToken } from "../../../utils/bearerToken";
import { logger } from "../../../../functions/server/logging";

import { isValidBearer } from "../../../../../utils/hibp";
import { config } from "../../../../../config";
import {
  incHibpNotifyRequest,
  incHibpNotifyFailure,
} from "../../../../../utils/metrics";

import * as Sentry from "@sentry/nextjs";
import { getPubSub } from "../../../../gcp/clients";
import { inspect } from "node:util";

// Dump a full util.inspect of the publish error once per process — it surfaces nested /
// non-enumerable gax fields (cause / statusDetails / the metadata map) the explicit field
// extraction can't. The concise fields (code / details / message / stack) log every failure.
let pubsubErrorInspected = false;

export type PostHibpNotificationRequestBody = {
  breachName: string;
  hashPrefix: string;
  hashSuffixes: string[];
};

/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * The payload is checked for validity, and immediately queued if it is valid.
 *
 * @param req
 */
export async function POST(req: NextRequest) {
  incHibpNotifyRequest();

  const pubsub = getPubSub();
  let json: PostHibpNotificationRequestBody;
  const hibpNotifyToken = config.hibpNotifyToken;
  const topicName = config.gcp.pubsub.hibpTopic;
  try {
    const headerToken = bearerToken(req);
    if (!isValidBearer(headerToken, hibpNotifyToken)) {
      logger.error(`Received invalid header token: [${headerToken}]`);
      incHibpNotifyFailure("unauthorized");
      return NextResponse.json({ success: false }, { status: 401 });
    }

    json = (await req.json()) as PostHibpNotificationRequestBody;

    if (!(json.breachName && json.hashPrefix && json.hashSuffixes)) {
      logger.error(
        "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
      );
      incHibpNotifyFailure("bad-request");
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (ex) {
    logger.error("error_processing_breach_alert_request:", {
      exception: ex as string,
    });
    Sentry.captureException(ex);
    incHibpNotifyFailure("server-error");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    await pubsub.topic(topicName).publishMessage({ json });
    logger.info("queued_breach_notification_success", {
      json,
      topic: topicName,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    // gRPC/gax errors don't JSON-serialize their useful fields (winston's default json format
    // drops non-enumerable Error props like message/stack), so the log used to collapse to an
    // opaque {note, metadata:{}}. Pull the fields onto the top-level object via direct access,
    // and add a rate-limited full inspect to catch anything nested (cause / statusDetails).
    const err = ex as {
      code?: unknown;
      details?: unknown;
      message?: unknown;
      stack?: unknown;
    };
    const fields: Record<string, unknown> = {
      topicName,
      // gRPC status: 7 = PERMISSION_DENIED, 5 = NOT_FOUND, 16 = UNAUTHENTICATED
      code: err?.code,
      details: err?.details,
      message: err?.message,
      stack: err?.stack,
    };
    if (!pubsubErrorInspected) {
      pubsubErrorInspected = true;
      fields.inspect = inspect(ex, { depth: 6, breakLength: Infinity });
    }
    logger.error("error_queuing_hibp_breach:", fields);
    incHibpNotifyFailure("pubsub-error");
    Sentry.captureException(ex);
    return NextResponse.json({ success: false }, { status: 429 });
  }
}
