/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as Sentry from "@sentry/nextjs";
export async function register() {
  console.log(
    "[INSTRUMENTATION] register() called, runtime:",
    process.env.NEXT_RUNTIME,
  );
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // NOTE: Sentry MUST be initialized first (with skipOpenTelemetrySetup = true)
    // If not, then there will be issues with otel and sentry registering duplicate
    // providers
    console.log("[INSTRUMENTATION] Initializing Sentry...");
    Sentry.init({
      environment: process.env.APP_ENV,
      dsn: process.env.SENTRY_DSN,
      // Enables sending logs through winston transport,
      // to send errors to Sentry and GCP without duplicate calls
      enableLogs: true,

      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: ["local", "heroku"].includes(process.env.NODE_ENV)
        ? 1.0
        : 0.1,

      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,

      // Disable Sentry's automatic OTEL instrumentation since we're managing it ourselves
      skipOpenTelemetrySetup: true,
    });
    const { nodeSDKBuilder } = await import("./instrumentation.node");
    const { config } = await import("./config");
    console.log("[INSTRUMENTATION] Initializing OTEL...");
    await nodeSDKBuilder({
      collectorUrl: config.otel.endpoint,
      protocol: config.otel.exporterProtocol,
    });
  }
}

export const onRequestError = Sentry.captureRequestError;
