/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as Sentry from "@sentry/nextjs";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

export function register() {
  // Initialize Sentry
  Sentry.init({
    environment: process.env.APP_ENV,
    dsn: process.env.SENTRY_DSN,

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: ["local", "heroku"].includes(process.env.NODE_ENV)
      ? 1.0
      : 0.1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });

  // Initialize OpenTelemetry
  const sdk = new NodeSDK({
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: "firefoxmonitor",
    }),
    spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
  });
  sdk.start();
}
