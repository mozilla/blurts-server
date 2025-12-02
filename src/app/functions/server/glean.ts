/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createLogger, transports } from "winston";
import { LoggingWinston } from "@google-cloud/logging-winston";
import { v4 as uuidv4 } from "uuid";
import { config } from "../../../config";

const GLEAN_EVENT_MOZLOG_TYPE = "glean-server-event";

const getLoggingWinston = () =>
  new LoggingWinston({
    labels: {
      name: GLEAN_EVENT_MOZLOG_TYPE,
      version: "0.1.0",
    },
  });

export function record(
  category: string,
  name: string,
  metrics: { string: { monitorUserId: string } } | undefined,
  metadata?: { userAgent: string; ipAddress: string } | undefined,
) {
  const logger = createLogger({
    level: "info",
    // In GCP environments, use cloud logging instead of stdout.
    // FIXME https://mozilla-hub.atlassian.net/browse/MNTOR-2401 - enable for stage and production
    transports: ["gcpdev"].includes(config.appEnv)
      ? [getLoggingWinston()]
      : [new transports.Console()],
  });

  const event = { category, name };
  const payload = constructPayload(event, metrics);
  const eventPayloadSerialized = JSON.stringify(payload);

  // This is the message structure that Decoder expects: https://github.com/mozilla/gcp-ingestion/pull/2400
  const ping = {
    document_namespace: "mozilla_monitor",
    document_type: "events",
    document_version: "1",
    document_id: uuidv4(),
    user_agent: metadata?.userAgent,
    ip_address: metadata?.ipAddress,
    payload: eventPayloadSerialized,
  };

  logger.info(ping);
}

// @ts-ignore TODO generate Glean types like we do for client.
export function constructPayload(event, metrics) {
  const now = new Date();
  const timestamp = now.getTime();

  event.timestamp = timestamp;

  const payload = {
    metrics,
    events: [event],
    ping_info: {
      seq: 0, // this is required, however doesn't seem to be useful in server context
      start_time: timestamp,
      end_time: timestamp,
    },
    // `Unknown` fields below are required in the Glean schema, however they are not useful in server context
    client_info: {
      telemetry_sdk_build: "glean_parser v14.1.2",
      first_run_date: "Unknown",
      os: "Unknown",
      os_version: "Unknown",
      architecture: "Unknown",
      app_build: "Unknown",
      app_display_version: "0.1", // TODO get current version.
      app_channel: config.appEnv,
    },
  };

  return payload;
}
