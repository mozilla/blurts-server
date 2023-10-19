/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createLogger, transports } from "winston";
import { LoggingWinston } from "@google-cloud/logging-winston";

const loggingWinston = new LoggingWinston({
  labels: {
    name: "monitor-stats",
    version: "0.1.0",
  },
});

export const logger = createLogger({
  level: "info",
  transports: [new transports.Console()],
});

// In GCP environments, use cloud logging instead of stdout.
if (["stage", "production"].includes(process.env.APP_ENV ?? "local")) {
  logger.transports = [loggingWinston];
}
