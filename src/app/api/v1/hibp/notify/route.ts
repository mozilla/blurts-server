/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { captureMessage } from "@sentry/node";

import { bearerToken } from "../../../utils/auth";
import { logger } from "../../../../functions/server/logging";

import { PubSub } from "@google-cloud/pubsub";

const projectId = process.env.GCP_PUBSUB_PROJECT_ID;
const topicName = process.env.GCP_PUBSUB_TOPIC_NAME;
const subscriptionName = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME;

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
  let pubsub: PubSub;
  let json: PostHibpNotificationRequestBody;

  try {
    if (!projectId) {
      throw new Error("GCP_PUBSUB_PROJECT_ID env var not set");
    }
    if (!topicName) {
      throw new Error("GCP_PUBSUB_TOPIC_NAME env var not set");
    }

    const headerToken = bearerToken(req);
    if (headerToken !== process.env.HIBP_NOTIFY_TOKEN) {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    json = (await req.json()) as PostHibpNotificationRequestBody;

    if (!(json.breachName && json.hashPrefix && json.hashSuffixes)) {
      logger.error(
        "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
      );
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (ex) {
    logger.error("error_processing_breach_alert_request:", {
      exception: ex as string,
    });
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    pubsub = new PubSub({ projectId });
  } catch (ex) {
    logger.error("error_connecting_to_pubsub:", { exception: ex as string });
    captureMessage(`error_connecting_to_pubsub:  ${ex as string}`);
    return NextResponse.json({ success: false }, { status: 429 });
  }

  try {
    const topic = pubsub.topic(topicName);
    await topic.publishMessage({ json });
    logger.info("queued_breach_notification_success", { json });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    if (process.env.NODE_ENV === "development") {
      if (!subscriptionName) {
        throw new Error("GCP_PUBSUB_SUBSCRIPTION_NAME env var not set");
      }
      await pubsub.createTopic(topicName);
      await pubsub.topic(topicName).createSubscription(subscriptionName);
    } else {
      logger.error("pubsub_topic_not_found:", { topicName });
      captureMessage(`pubsub_topic_not_found:  ${topicName}`);
      return NextResponse.json({ success: false }, { status: 429 });
    }
    logger.error("error_queuing_hibp_breach:", { topicName });
    return NextResponse.json({ success: false }, { status: 429 });
  }
}
