/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const runtime = "nodejs";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";

import { bearerToken } from "../../../utils/auth";
import { logger } from "../../../../functions/server/logging";

import { PubSub } from "@google-cloud/pubsub";
import { isValidBearer } from "../../../../../utils/hibp";
import { config } from "../../../../../config";
import {
  incHibpNotifyRequest,
  incHibpNotifyFailure,
} from "../../../../../utils/metrics";

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

  let pubsub: PubSub;
  let json: PostHibpNotificationRequestBody;
  const hibpNotifyToken = config.hibpNotifyToken;
  const projectId = config.gcp.projectId;
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
    incHibpNotifyFailure("server-error");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    pubsub = new PubSub({ projectId, enableOpenTelemetryTracing: true });
  } catch (ex) {
    logger.error("error_connecting_to_pubsub:", { exception: ex as string });
    incHibpNotifyFailure("pubsub-error");
    return NextResponse.json({ success: false }, { status: 429 });
  }

  try {
    const topic = pubsub.topic(topicName);
    const [exists] = await topic.exists();
    if (!exists) {
      logger.error("error_connecting_to_pubsub: topic does not exist", {
        topic: topicName,
      });
      incHibpNotifyFailure("pubsub-error");
      return NextResponse.json({ success: false }, { status: 500 });
    }
    await topic.publishMessage({ json });
    logger.info("queued_breach_notification_success", {
      json,
      topic: topicName,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    logger.error("error_queuing_hibp_breach:", { topicName });
    incHibpNotifyFailure("pubsub-error");
    return NextResponse.json({ success: false }, { status: 429 });
  }
}
