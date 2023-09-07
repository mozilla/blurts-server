/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import { bearerToken } from "../../../utils/auth";

import { PubSub } from "@google-cloud/pubsub";

const projectId = "rhelmer-monitor-local-dev";
const topicName = "hibp-breaches";
const subscriptionName = "hibp-cron";

/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * The payload is checked for validity, and immediately queued if it is valid.
 *
 * @param req
 */
export async function POST(req: NextRequest) {
  const headerToken = bearerToken(req);
  if (headerToken !== process.env.HIBP_NOTIFY_TOKEN) {
    return NextResponse.json({ success: "false" }, { status: 401 });
  }

  const json = await req.json();

  if (!(json.breachName && json.hashPrefix && json.hashSuffixes)) {
    console.error(
      "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes."
    );
    return NextResponse.json({ success: "false" }, { status: 500 });
  }

  const pubsub = new PubSub({ projectId });

  const [topics] = await pubsub.getTopics();
  const [topic] = topics.filter(
    (a) => a.name === `projects/${projectId}/topics/${topicName}`
  );

  if (topic.name !== `projects/${projectId}/topics/${topicName}`) {
    if (process.env.NODE_ENV === "development") {
      try {
        await pubsub.createTopic(topicName);
        await pubsub.topic(topicName).createSubscription(subscriptionName);
      } catch (ex) {
        console.debug(ex);
      }
    } else {
      console.error("Topic not found:", topicName);
      return NextResponse.json({ success: "false" }, { status: 500 });
    }
  }

  try {
    await topic.publishMessage({ json });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    console.error("Error queueing HIBP breach:", ex);
    return NextResponse.json({ success: "false" }, { status: 500 });
  }
}
