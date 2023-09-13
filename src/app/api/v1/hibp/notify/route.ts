/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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
    const ex = "GCP_PUBSUB_PROJECT_ID env var not set, message lost";
    captureMessage(JSON.stringify(breachAlert));
    captureException(ex);
    throw new Error(ex);
  }
  if (!topicName) {
    const ex = "GCP_PUBSUB_TOPIC_NAME env var not set, message lost";
    captureMessage(JSON.stringify(breachAlert));
    captureException(ex);
    throw new Error(ex);
  }

  const { PubSub } = await import("@google-cloud/pubsub");
  const pubsub = new PubSub({ projectId });

  const [topics] = await pubsub.getTopics();
  const [topic] = topics.filter(
    (a) => a.name === `projects/${projectId}/topics/${topicName}`
  );

  if (!topic || topic.name !== `projects/${projectId}/topics/${topicName}`) {
    if (process.env.NODE_ENV === "development") {
      // Try to use emulator for local development.
      try {
        if (!subscriptionName) {
          captureMessage(
            `Could not create topic and subscription, message not queued ${JSON.stringify(
              breachAlert
            )}`
          );
          throw new Error(
            "GCP_PUBSUB_SUBSCRIPTION_NAME env var not set, message not queued"
          );
        }
        await pubsub.createTopic(topicName);
        await pubsub.topic(topicName).createSubscription(subscriptionName);
      } catch (ex) {
        console.debug(
          `Could not create topic and subscription, message not queued`,
          ex
        );
        captureMessage(
          `Could not create topic and subscription, message not queued ${JSON.stringify(
            breachAlert
          )}`
        );
        captureException(ex);
      }
    }
  } else {
    console.error("Topic not found, message not queued:", topicName);
    captureMessage(JSON.stringify(breachAlert));
    captureMessage(`Topic not found, message not queued: ${topicName}`);

    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    // Publish message to GCP PubSub.
    const json = JSON.stringify(breachAlert);
    await topic.publishMessage({ json });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    console.error("Error queueing HIBP breach, message not queued:", ex);
    captureMessage(JSON.stringify(breachAlert));
    captureException(ex);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
