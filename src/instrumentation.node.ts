/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const runtime = "nodejs";

import client from "prom-client";

type MetricsState = {
  registry: Readonly<client.Registry>;
  hibpNotifyRequestsTotal: client.Counter;
  hibpNotifyRequestFailuresTotal: client.Counter<"error">;
};

declare global {
  var metrics: Readonly<MetricsState>;
}

function getOrInitMetrics(): MetricsState {
  // Return cached state
  if (globalThis.metrics !== undefined) return globalThis.metrics;
  const registry = new client.Registry();
  client.collectDefaultMetrics({ register: registry });

  /**
   * hibp_notify_requests_total
   * Metric to instrument the number of requests from HIBP notifying of breaches
   * Scope: "/hibp/notify"
   */
  const hibpNotifyRequestsTotal = new client.Counter({
    name: "hibp_notify_requests_total",
    help: "Metric to instrument the number of requests from HIBP notifying of breaches",
    registers: [registry],
  });

  /**
   * hibp_notify_request_failures_total{error="..."}
   * Metric to instrument the number of failed requests on HIBP notify endpoint
   * Labels:
   *  - error: one of "timeout", "bad-request", "rate-limited"
   * Scope: "/hibp/notify"
   */
  const hibpNotifyRequestFailuresTotal = new client.Counter<"error">({
    name: "hibp_notify_request_failures_total",
    help: "Metric to instrument the number of failed requests on HIBP notify endpoint",
    labelNames: ["error"],
    registers: [registry],
  });

  const state: MetricsState = {
    registry,
    hibpNotifyRequestFailuresTotal,
    hibpNotifyRequestsTotal,
  };

  // Make it readonly
  Object.defineProperty(globalThis, "metrics", {
    value: state,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  return state;
}

export const {
  registry,
  hibpNotifyRequestsTotal,
  hibpNotifyRequestFailuresTotal,
} = getOrInitMetrics();

export type HibpNotifyFailureError =
  | "server-error"
  | "pubsub-error"
  | "bad-request"
  | "rate-limited"
  | "unauthorized"
  | "invalid-config";

/**
 * Increment helper to keep label values consistent
 * on hibpNotifyRequestFailuresTotal
 */
export function incHibpNotifyFailure(error: HibpNotifyFailureError, by = 1) {
  hibpNotifyRequestFailuresTotal.inc({ error }, by);
}
