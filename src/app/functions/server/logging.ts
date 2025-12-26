/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "./notInClientComponent";

import { createLogger, transports, LoggerOptions } from "winston";
import Transport from "winston-transport";
import { LoggingWinston } from "@google-cloud/logging-winston";
import * as Sentry from "@sentry/node";
import { config } from "../../../config";

// Explicitly not run in tests (and other non-gcpdev environments)
/* c8 ignore next 7 */
const getLoggingWinston = () =>
  new LoggingWinston({
    labels: {
      name: "monitor-stats",
      version: "0.1.0",
    },
  });

// Automatically capture logger error, warn and forward to Sentry
// Avoids double-logging
/* c8 ignore start  */
// can't be used in tests due to jsdom environment
// [MNTOR-1880]
const SentryWinstonTransport = Sentry.createSentryWinstonTransport(Transport, {
  levels: ["error", "warn"],
});
const logTransports: LoggerOptions["transports"] = [
  ["gcpdev"].includes(config.appEnv)
    ? getLoggingWinston()
    : new transports.Console(),
];
if (Sentry.isInitialized()) {
  logTransports.push(new SentryWinstonTransport());
}

export const logger = createLogger({
  level: "info",
  // In GCP environments, use cloud logging instead of stdout.
  // FIXME https://mozilla-hub.atlassian.net/browse/MNTOR-2401 - enable for stage and production
  transports: logTransports,
});

/* c8 ignore stop */
