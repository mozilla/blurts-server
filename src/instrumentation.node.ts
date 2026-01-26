/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const runtime = "nodejs";

import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import {
  ConsoleMetricExporter,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";
import { detectResources } from "@opentelemetry/resources";
import { gcpDetector } from "@opentelemetry/resource-detector-gcp";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import {
  AlwaysOnSampler,
  BatchSpanProcessor,
  ConsoleSpanExporter,
  ParentBasedSampler,
  SimpleSpanProcessor,
} from "@opentelemetry/sdk-trace-node";
import { KnexInstrumentation } from "@opentelemetry/instrumentation-knex";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";
import {
  Attributes,
  Counter,
  diag,
  DiagConsoleLogger,
  DiagLogLevel,
  metrics,
} from "@opentelemetry/api";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import {
  SentryPropagator,
  SentrySpanProcessor,
  SentrySampler,
  setupEventContextTrace,
  setOpenTelemetryContextAsyncContextStrategy,
  wrapContextManagerClass,
} from "@sentry/opentelemetry";
import * as Sentry from "@sentry/nextjs";
import { AsyncLocalStorageContextManager } from "@opentelemetry/context-async-hooks";
import { config as appConfig, parseKVList } from "./config";

// Note: console.log use is intentional because this step is done as early
// as possible, before setting up winston logging
export async function nodeSDKBuilder() {
  const collectorUrl = appConfig.otel.endpoint;
  const hasUrl = collectorUrl !== undefined && collectorUrl.length > 0;
  if (!hasUrl) {
    console.log(
      "[INSTRUMENTATION] No OTLP collector url provided. Exporting to console.",
    );
  } else {
    console.log(
      `[INSTRUMENTATION] OTLP Collector provided. Sending to ${collectorUrl}`,
    );
  }
  const isLocalCollector =
    process.env.APP_ENV === "local" &&
    (collectorUrl?.includes("localhost") ||
      collectorUrl?.includes("127.0.0.1"));

  const sentryClient = Sentry.getClient();

  if (sentryClient) {
    // https://github.com/getsentry/sentry-javascript/tree/develop/packages/opentelemetry
    setupEventContextTrace(sentryClient);
    setOpenTelemetryContextAsyncContextStrategy();
  }
  const SentryContextManager = wrapContextManagerClass(
    AsyncLocalStorageContextManager,
  );

  // Enable OTEL diagnostic logging at INFO level (less verbose than DEBUG)
  // Set to DiagLogLevel.DEBUG for more verbose output for local debugging
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

  const traceExporter = hasUrl
    ? new OTLPTraceExporter({ url: `${collectorUrl}/v1/traces` })
    : new ConsoleSpanExporter();

  const metricExporter = hasUrl
    ? new OTLPMetricExporter({ url: `${collectorUrl}/v1/metrics` })
    : new ConsoleMetricExporter();

  const appSpanProcessor = hasUrl
    ? new BatchSpanProcessor(traceExporter)
    : new SimpleSpanProcessor(traceExporter);

  // If running locally sample everything, otherwise
  // use Sentry config
  const sampler = isLocalCollector
    ? new ParentBasedSampler({ root: new AlwaysOnSampler() })
    : sentryClient
      ? new SentrySampler(sentryClient)
      : undefined;

  const detectedResource = detectResources({
    detectors: [gcpDetector],
  });
  await detectedResource.waitForAsyncAttributes?.();

  const sdk = new NodeSDK({
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: appConfig.otel.serviceName,
      ...parseKVList(appConfig.otel.resourceAttributes),
    }).merge(detectedResource),
    metricReaders: [
      new PeriodicExportingMetricReader({
        exporter: metricExporter,
      }),
    ],
    spanProcessors: [
      // Ensure spans are correctly linked & sent to Sentry
      new SentrySpanProcessor(),
      // Additional processors
      appSpanProcessor,
    ],
    // Ensure trace propagation works
    // This relies on the SentrySampler for correct propagation
    textMapPropagator: new SentryPropagator(),
    // Ensure context & request isolation are correctly managed
    contextManager: new SentryContextManager(),
    // Ensure the correct subset of traces is sent to Sentry
    // This also ensures trace propagation works as expected
    sampler,
    instrumentations: [
      getNodeAutoInstrumentations({
        "@opentelemetry/instrumentation-fs": {
          // Disable unless required by parent span (noisy and memory-intensive)
          enabled: false,
          requireParentSpan: true,
        },
        "@opentelemetry/instrumentation-pg": {
          // Disable because we're using @opentelemetry/instrumentation-knex
          enabled: false,
        },
        // Node native fetch instrumentation
        "@opentelemetry/instrumentation-undici": {
          // Ignore sending anonymous telemetry to next.js
          ignoreRequestHook: (request) =>
            request.origin === "https://telemetry.nextjs.org",
          headersToSpanAttributes: {
            // Outgoing fetch headers to capture on the span
            requestHeaders: ["sentry-trace", "baggage"],
          },
        },
        // Don't record incoming healthcheck requests
        "@opentelemetry/instrumentation-http": {
          ignoreIncomingRequestHook: (request) => {
            if (
              request.url?.includes("_heartbeat__") ||
              request.url?.includes("_lbheartbeat__")
            ) {
              return true;
            }
            return false;
          },
        },
        // Similar to prometheus default metrics
        "@opentelemetry/instrumentation-runtime-node": {
          enabled: true,
        },
      }),
      // Additional instrumentations
      new KnexInstrumentation(),
    ],
  });
  sdk.start();
  console.log("[INSTRUMENTATION] Validating otel setup with sentry");
  Sentry.validateOpenTelemetrySetup();
  console.log("[INSTRUMENTATION] Otel setup is valid");
}

// Prometheus setup
type MetricsState = {
  hibpNotifyRequestsTotal: Counter<Attributes>;
  hibpNotifyRequestFailuresTotal: Counter<Attributes>;
};

declare global {
  var __metrics: Readonly<MetricsState> | undefined;
}

// NOTE: OTEL must be initialized before calling any metrics
// or else it will be a No-Op metric
function getOrInitMetrics(): MetricsState {
  // Return cached state
  if (globalThis.__metrics !== undefined) return globalThis.__metrics;
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

  const state: MetricsState = {
    hibpNotifyRequestFailuresTotal,
    hibpNotifyRequestsTotal,
  };

  // Make it readonly
  Object.defineProperty(globalThis, "__metrics", {
    value: state,
    writable: false,
    configurable: false,
    enumerable: false,
  });
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
