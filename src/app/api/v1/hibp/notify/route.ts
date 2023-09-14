/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { PubSub, Topic } from "@google-cloud/pubsub";

import { captureException, captureMessage } from "@sentry/node";

import { NextRequest, NextResponse } from "next/server";
import { bearerToken } from "../../../utils/auth";

const projectId = process.env.GCP_PUBSUB_PROJECT_ID;
const topicName = process.env.GCP_PUBSUB_TOPIC_NAME;
const subscriptionName = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME;

type BreachAlert = {
  breachName: string;
  hashPrefix: string;
  hashSuffixes: string[];
};

// Cache the PubSub connection and Topic.
let pubsub: PubSub;
let topic: Topic;

/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * The payload is checked for validity, and immediately queued if it is valid.
 *
 * @param req {NextRequest} - application/x-www-form-urlencoded POST request containing JSON.
 */
export async function POST(req: NextRequest) {
  const headerToken = bearerToken(req);
  if (headerToken !== process.env.HIBP_NOTIFY_TOKEN) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const breachAlert: BreachAlert = await req.json();

  if (
    !(
      breachAlert.breachName &&
      breachAlert.hashPrefix &&
      breachAlert.hashSuffixes
    )
  ) {
    console.error(
      "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes."
    );
    return NextResponse.json({ success: false }, { status: 400 });
  }

  // Skip pubsub altogether for Heroku, process breach and send email immediately.
  if (process.env.APP_ENV === "heroku") {
    const receivedMessages = [
      {
        message: {
          data: Buffer.from(JSON.stringify(breachAlert)),
        },
      },
    ];
    const { poll } = await import("../../../../../scripts/emailBreachAlerts");
    const subClient = {
      subscriptionPath: () => "",
      acknowledge: (ackId: string) => console.log("acknowledged:", ackId),
    };

    // @ts-expect-error Mocking SubscriberClient
    await poll(subClient, receivedMessages);

    return NextResponse.json({ success: true }, { status: 200 });
  }

  // Otherwise, use pubub or emulator (@see README)
  if (!projectId) {
    const message = `GCP_PUBSUB_PROJECT_ID env var not set, message not queued: ${JSON.stringify(
      breachAlert
    )}`;
    captureMessage(message);
    throw new Error(message);
  }
  if (!topicName) {
    const message = `GCP_PUBSUB_TOPIC_NAME env var not set, message not queued: ${JSON.stringify(
      breachAlert
    )}`;
    captureMessage(message);
    throw new Error(message);
  }

  if (!subscriptionName) {
    const message = `GCP_PUBSUB_SUBSCRIPTION_NAME env var not set, message not queued: ${JSON.stringify(
      breachAlert
    )}`;
    captureMessage(message);
    throw new Error(message);
  }

  if (!pubsub) {
    pubsub = new PubSub({ projectId });
  }

  if (!topic) {
    const [topics] = await pubsub.getTopics();
    [topic] = topics.filter(
      (a) => a.name === `projects/${projectId}/topics/${topicName}`
    );
  }

  if (!topic || topic.name !== `projects/${projectId}/topics/${topicName}`) {
    if (process.env.NODE_ENV === "development") {
      // Try to use emulator for local development.
      try {
        if (!subscriptionName) {
          throw new Error("No subscr");
        }

        await pubsub.createTopic(topicName);
        await pubsub.topic(topicName).createSubscription(subscriptionName);
      } catch (ex) {
        const message = `Could not create topic and subscription, message not queued ${JSON.stringify(
          breachAlert
        )}`;
        console.error(message);
        captureMessage(message);
        captureException(ex);
        throw ex;
      }
    } else {
      const message = `Topic not found, message not queued: ${topicName}, ${JSON.stringify(
        breachAlert
      )}`;
      console.error(message);
      captureMessage(message);

      return NextResponse.json({ success: false }, { status: 500 });
    }
  }

  try {
    // Publish message to GCP PubSub.
    const json = JSON.stringify(breachAlert);
    await topic.publishMessage({ data: Buffer.from(json) });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    const message = `Error queueing HIBP breach, message not queued ${JSON.stringify(
      breachAlert
    )}`;
    console.error(message, ex);
    captureMessage(message);
    captureException(ex);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
