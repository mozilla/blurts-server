/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createLogger, transports } from "winston";
import { LoggingWinston } from "@google-cloud/logging-winston";

// Explicitly not run in tests (and other non-gcpdev environments)
/* c8 ignore next 7 */
const getLoggingWinston = () =>
  new LoggingWinston({
    labels: {
      name: "monitor-stats",
      version: "0.1.0",
    },
  });

export const logger = createLogger({
  level: "info",
  // In GCP environments, use cloud logging instead of stdout.
  // FIXME https://mozilla-hub.atlassian.net/browse/MNTOR-2401 - enable for stage and production
  /* c8 ignore next 3 - cannot test this outside of GCP currently */
  transports: ["gcpdev"].includes(process.env.APP_ENV ?? "local")
    ? [getLoggingWinston()]
    : [new transports.Console()],
});
