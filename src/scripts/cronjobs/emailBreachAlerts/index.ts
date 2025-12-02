/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/**
 * Process messages in the breach alerts topic, emailing
 * affected subscribers to notify them of breach topic.
 */

import * as Sentry from "@sentry/node";

Sentry.init({
  environment: process.env.APP_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

Sentry.setTag("job", "emailBreachAlerts");

import "dotenv-flow/config";
import { sentryLogger } from "../../../app/functions/server/logging";
import { getAllBreachesFromDb } from "../../../utils/hibp";
import { sendEmail, initEmail } from "../../../utils/email";
import { getBreachNotificationSubscribersByHashes } from "../../../db/models/BreachNotificationSubscriber";
import * as NotificationsRepo from "../../../db/tables/email_notifications";
import { runJob } from "./emailBreachAlerts";

start();

async function start() {
  const projectId = process.env.GCP_PUBSUB_PROJECT_ID;
  const subscription = process.env.GCP_PUBSUB_SUBSCRIPTION_NAME;
  if (!projectId) {
    throw new Error("Environment variable [$GCP_PUBSUB_PROJECT_ID] not set.");
  }
  if (!subscription) {
    throw new Error(
      "Environment variable [$GCP_PUBSUB_SUBSCRIPTION_NAME] not set.",
    );
  }
  // Transport must be initialized before sendEmail can be called
  await initEmail();
  runJob({
    gcp: {
      projectId,
      subscription,
    },
    messageFnOpts: [
      sentryLogger,
      getAllBreachesFromDb,
      { findByHashes: getBreachNotificationSubscribersByHashes },
      NotificationsRepo,
      sendEmail,
      Sentry,
    ],
    jobLogger: sentryLogger,
    Sentry,
  });
}
