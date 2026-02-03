/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const runtime = "nodejs";

import { Attributes, Counter, metrics } from "@opentelemetry/api";
import { config as appConfig } from "../config";

// This is primarily a config file with very minimal logic
/* c8 ignore start */
type MetricsState = {
  hibpNotifyRequestsTotal: Counter<Attributes>;
  hibpNotifyRequestFailuresTotal: Counter<Attributes>;
  kanonRequestsTotal: Counter<Attributes>;
  kanonRequestFailuresTotal: Counter<Attributes>;
};

let metricsState: MetricsState | undefined;

// NOTE: OTEL must be initialized before calling any metrics
// or else it will be a No-Op metric
// Done automatically on startup via instrumentation.node.ts
export function getOrInitMetrics(): MetricsState {
  // Return cached state
  if (metricsState !== undefined) return metricsState;
  // Get the pre-registered metrics provider
  // Will be a no-op if otel has not been initialized
  const meter = metrics.getMeter(appConfig.otel.serviceName);
  const hibpNotifyRequestsTotal = meter.createCounter(
    "hibp_notify_requests_total",
    {
      description: "Number of requests from HIBP notifying of breaches",
    },
  );

  const hibpNotifyRequestFailuresTotal = meter.createCounter(
    "hibp_notify_request_failures_total",
    { description: "Number of failed requests on HIBP notify endpoint" },
  );

  const kanonRequestsTotal = meter.createCounter("kanon_requests_total", {
    description: "Number of requests HIBP's k-anonymous range search api",
  });

  const kanonRequestFailuresTotal = meter.createCounter(
    "kanon_request_failures_total",
    {
      description:
        "Number of failed requests HIBP's k-anonymous range search api",
    },
  );

  const state: MetricsState = {
    hibpNotifyRequestFailuresTotal,
    hibpNotifyRequestsTotal,
    kanonRequestsTotal,
    kanonRequestFailuresTotal,
  };
  return state;
}

export type HibpNotifyFailureError =
  | "server-error"
  | "pubsub-error"
  | "bad-request"
  | "rate-limited"
  | "unauthorized"
  | "invalid-config";

/**
 * Increment HIBP notify failure metric
 */
export function incHibpNotifyFailure(error: HibpNotifyFailureError, by = 1) {
  getOrInitMetrics().hibpNotifyRequestFailuresTotal.add(by, { error });
}

/** Increment HIBP notify total count metric */
export function incHibpNotifyRequest(by = 1) {
  getOrInitMetrics().hibpNotifyRequestsTotal.add(by);
}

/**
 * Increment k-anonymous range search request failure metric
 */
export function incKanonFailure(statusCode: number, by = 1) {
  getOrInitMetrics().kanonRequestFailuresTotal.add(by, { statusCode });
}

/** Increment k-anonymous range search request total count metric */
export function incKanonRequest(by = 1) {
  getOrInitMetrics().kanonRequestsTotal.add(by);
}
/* c8 ignore end */
