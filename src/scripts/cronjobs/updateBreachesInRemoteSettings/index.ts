/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/**
 * Cron: Daily
 * From all the HIBP breaches, we parse out the new breaches that are not already present
 * in firefox remote settings, and update the data source accordingly
 */

import * as Sentry from "@sentry/node";

Sentry.init({
  environment: process.env.APP_ENV,
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

Sentry.setTag("job", "updateBreachesInRemoteSettings");

import "dotenv-flow/config";
import { sentryLogger } from "../../../app/functions/server/logging";
import { main } from "./updateBreachesInRemoteSettings";

await main(sentryLogger);
