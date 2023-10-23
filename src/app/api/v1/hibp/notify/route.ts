/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { bearerToken } from "../../../utils/auth";
import { logger } from "../../../../functions/server/logging";

import { PubSub } from "@google-cloud/pubsub";
import { getEnabledFeatureFlags } from "../../../../../db/tables/featureFlags";

const projectId = process.env.GCP_PUBSUB_PROJECT_ID;
const topicName = process.env.GCP_PUBSUB_TOPIC_NAME;
const subscriptionName = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME;

/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * The payload is checked for validity, and immediately queued if it is valid.
 *
 * @param req
 */
export async function POST(req: NextRequest) {
  let pubsub;
  let json;
  const enabledFlags = await getEnabledFeatureFlags({ ignoreAllowlist: true });
  try {
    if (!enabledFlags.includes("HibpBreachNotifications")) {
      logger.info("Feature flag not enabled: HibpBreachNotifications");
      return NextResponse.json({}, { status: 429 });
    }
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

    json = await req.json();

    if (!(json.breachName && json.hashPrefix && json.hashSuffixes)) {
      logger.error(
        "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
      );
      return NextResponse.json({ success: false }, { status: 400 });
    }

    pubsub = new PubSub({ projectId });
  } catch (ex) {
    logger.error("Error connecting to PubSub:", ex);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  let topic;
  try {
    topic = pubsub.topic(topicName);
    await topic.publishMessage({ json });
    logger.info("Successfully queued breach notification", json);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    if (process.env.NODE_ENV === "development") {
      if (!subscriptionName) {
        throw new Error("GCP_PUBSUB_SUBSCRIPTION_NAME env var not set");
      }
      await pubsub.createTopic(topicName);
      await pubsub.topic(topicName).createSubscription(subscriptionName);
    } else {
      logger.error("Topic not found:", topicName);
      return NextResponse.json({ success: false }, { status: 500 });
    }
    logger.error("Error queuing HIBP breach:", topicName);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
