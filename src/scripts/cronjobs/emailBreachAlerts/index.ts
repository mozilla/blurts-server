/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/**
 * Process messages in the breach alerts topic, emailing
 * affected subscribers to notify them of breach topic.
 */

import * as Sentry from "@sentry/node";
import { config } from "../../../config";

Sentry.init({
  environment: config.appEnv,
  dsn: config.sentryDsn,
  tracesSampleRate: 1.0,
});

Sentry.setTag("job", "emailBreachAlerts");

import { fetchHibpBreaches } from "../../../utils/hibp";
import { logger } from "../../../app/functions/server/logging";
import { sendEmail, initEmail } from "../../../utils/email";
import * as NotificationsRepo from "../../../db/tables/email_notifications";
import { createBreachDataService } from "../../../services/BreachDataService";
import { redisClient } from "../../../db/redis/client";
import { createBreachSyncService } from "../../../services/BreachSyncService";
import {
  getAllBreaches as getBreaches,
  upsertBreaches,
} from "../../../db/tables/breaches";
import { runJob } from "./emailBreachAlerts";
import { getBreachNotificationSubscribersByHashes } from "../../../db/models/BreachNotificationSubscriber";

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
  const redis = redisClient();
  const sync = createBreachSyncService({
    redis,
    fetchBreaches: fetchHibpBreaches,
    repo: {
      upsertBreaches,
      getBreaches,
    },
    logger,
  });
  runJob({
    gcp: {
      projectId,
      subscription,
    },
    messageFnOpts: [
      logger,
      createBreachDataService({
        redis,
        sync,
        getBreachesFromDb: getBreaches,
        logger,
      }),
      { findByHashes: getBreachNotificationSubscribersByHashes },
      NotificationsRepo,
      sendEmail,
      Sentry,
    ],
    jobLogger: logger,
    Sentry,
  });
}
