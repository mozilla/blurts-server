/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const runtime = "nodejs";

import { Attributes, Counter, Histogram, metrics } from "@opentelemetry/api";
import { config as appConfig } from "../config";

// This is primarily a config file with very minimal logic
/* c8 ignore start */
type MetricsState = {
  hibpNotifyRequestsTotal: Counter<Attributes>;
  hibpNotifyRequestFailuresTotal: Counter<Attributes>;
  kanonRequestsTotal: Counter<Attributes>;
  kanonRequestFailuresTotal: Counter<Attributes>;
  firefoxApiAuthTotal: Counter<Attributes>;
  firefoxApiRateLimitTotal: Counter<Attributes>;
  hibpRangeSearchTotal: Counter<Attributes>;
  firefoxApiHandlerResponseTotal: Counter<Attributes>;
  firefoxApiUnknownParamTotal: Counter<Attributes>;
  firefoxApiResolutionTotal: Counter<Attributes>;
  firefoxApiRequestDuration: Histogram<Attributes>;
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

  const firefoxApiAuthTotal = meter.createCounter("firefox_api_auth_total", {
    description: "Firefox API auth attempts, by outcome",
  });

  const firefoxApiRateLimitTotal = meter.createCounter(
    "firefox_api_rate_limit_total",
    { description: "Firefox API rate limit checks, by outcome" },
  );

  const hibpRangeSearchTotal = meter.createCounter("hibp_range_search_total", {
    description: "Strict HIBP range searches, by outcome",
  });

  const firefoxApiHandlerResponseTotal = meter.createCounter(
    "firefox_api_handler_response_total",
    { description: "Firefox API route handler responses, by status" },
  );

  const firefoxApiUnknownParamTotal = meter.createCounter(
    "firefox_api_unknown_param_total",
    { description: "Firefox API requests with unknown params" },
  );

  const firefoxApiResolutionTotal = meter.createCounter(
    "firefox_api_resolution_total",
    { description: "Firefox API breach resolutions, by data class" },
  );

  const firefoxApiRequestDuration = meter.createHistogram(
    "firefox_api_request_duration_seconds",
    {
      description: "Firefox API request duration, auth included",
      unit: "s",
      advice: {
        // 5s per upstream timeout, two upstreams
        explicitBucketBoundaries: [
          0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 7.5, 10,
        ],
      },
    },
  );

  const state: MetricsState = {
    hibpNotifyRequestFailuresTotal,
    hibpNotifyRequestsTotal,
    kanonRequestsTotal,
    kanonRequestFailuresTotal,
    firefoxApiAuthTotal,
    firefoxApiRateLimitTotal,
    hibpRangeSearchTotal,
    firefoxApiHandlerResponseTotal,
    firefoxApiUnknownParamTotal,
    firefoxApiResolutionTotal,
    firefoxApiRequestDuration,
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

/** Result of one Firefox API auth attempt */
export type FirefoxApiAuthOutcome =
  // Token valid, subscriber found
  | "success"
  // No usable Bearer token
  | "missing-header"
  // Inactive, no sub, or not an access token
  | "inactive"
  // Token lacks the Monitor scope
  | "missing-scope"
  // No subscriber for the FxA uid
  | "no-subscriber"
  // FirefoxApi flag off for this user
  | "flag-off"
  // FxA unreachable, timed out, non-2xx, or malformed
  | "introspection-error"
  // Subscriber lookup threw, e.g. DB down
  | "lookup-error";

/** Firefox API paths, as in openapi.yml */
export type FirefoxApiEndpoint =
  | "/user/breaches"
  | "/user/breaches/resolutions";

/** Increment Firefox API auth outcome metric */
export function incFirefoxApiAuth(
  outcome: FirefoxApiAuthOutcome,
  endpoint: FirefoxApiEndpoint,
  clientId?: string,
) {
  getOrInitMetrics().firefoxApiAuthTotal.add(1, {
    outcome,
    endpoint,
    ...(clientId ? { client_id: clientId } : {}),
  });
}

/** Result of a Firefox API rate limit check */
export type FirefoxApiRateLimitOutcome =
  // Under the limit, let through
  | "allowed"
  // Over the limit, answered 429
  | "limited"
  // Redis failed, request let through
  | "redis-error";

/** Increment Firefox API rate limit metric */
export function incFirefoxApiRateLimit(
  outcome: FirefoxApiRateLimitOutcome,
  endpoint: FirefoxApiEndpoint,
  clientId?: string,
) {
  getOrInitMetrics().firefoxApiRateLimitTotal.add(1, {
    outcome,
    endpoint,
    ...(clientId ? { client_id: clientId } : {}),
  });
}

/** Increment Firefox API handler response metric */
export function incFirefoxApiHandlerResponse(
  endpoint: FirefoxApiEndpoint,
  statusCode: number,
  clientId?: string,
) {
  getOrInitMetrics().firefoxApiHandlerResponseTotal.add(1, {
    endpoint,
    status_code: statusCode,
    ...(clientId ? { client_id: clientId } : {}),
  });
}

/** Increment Firefox API unknown param metric */
export function incFirefoxApiUnknownParam(
  endpoint: FirefoxApiEndpoint,
  clientId?: string,
) {
  getOrInitMetrics().firefoxApiUnknownParamTotal.add(1, {
    endpoint,
    ...(clientId ? { client_id: clientId } : {}),
  });
}

/** Record Firefox API request duration metric */
export function recordFirefoxApiDuration(
  endpoint: FirefoxApiEndpoint,
  statusCode: number,
  seconds: number,
) {
  getOrInitMetrics().firefoxApiRequestDuration.record(seconds, {
    endpoint,
    status_code: statusCode,
  });
}

/** Result of one resolved breach entry */
export type FirefoxApiResolutionOutcome =
  // Newly resolved for an affected email
  | "resolved"
  // Every affected email had it already
  | "already-resolved"
  // Breach name matched nothing affecting
  | "skipped";

/** Increment Firefox API resolution metric */
export function incFirefoxApiResolution(
  outcome: FirefoxApiResolutionOutcome,
  dataClass?: string,
  by = 1,
) {
  getOrInitMetrics().firefoxApiResolutionTotal.add(by, {
    outcome,
    ...(dataClass ? { data_class: dataClass } : {}),
  });
}

/** Result of one searchHibpRange call */
export type HibpRangeSearchOutcome =
  // HIBP lists breaches for this hash
  | "match"
  // Prefix known, this hash is not
  | "no-match"
  // 404, no hash has this prefix
  | "not-found"
  // Non-2xx, see status_code
  | "http-error"
  // No answer within the timeout
  | "timeout"
  // DNS, TLS, or connection failure
  | "network-error"
  // Not JSON, or not an array
  | "invalid-body";

/** Increment HIBP range search metric */
export function incHibpRangeSearch(
  outcome: HibpRangeSearchOutcome,
  statusCode?: number,
) {
  getOrInitMetrics().hibpRangeSearchTotal.add(1, {
    outcome,
    ...(statusCode ? { status_code: statusCode } : {}),
  });
}
/* c8 ignore end */
