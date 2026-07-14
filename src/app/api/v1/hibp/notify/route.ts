/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

import { bearerToken } from "../../../utils/bearerToken";
import { logger } from "../../../../functions/server/logging";

import { isValidBearer } from "../../../../../utils/hibp";
import { config } from "../../../../../config";
import {
  incHibpNotifyRequest,
  incHibpNotifyFailure,
} from "../../../../../utils/metrics";

import * as Sentry from "@sentry/nextjs";
import { getPubSub } from "../../../../gcp/clients";
import { inspect } from "node:util";

// The publish failure is logged verbosely only once per process (this guard). gRPC/gax
// (Google API Extensions) errors
// carry their real signal in non-enumerable Error props (message/stack) and nested fields
// (cause / statusDetails / the gRPC metadata map) that winston's JSON format drops, so a full
// util.inspect is the only faithful dump; it also runs the one-time credential check below.
// Every failure still logs the cheap top-level code/details in case the failure mode changes.
let pubsubErrorInspected = false;

/**
 * One-time diagnostic check of the failing Pub/Sub client's own credentials, to test whether the
 * workload-identity path is what's breaking publish (the leading suspect for the all-undefined
 * gRPC status). Never throws, and never emits the access token or private key — only non-secret
 * identity/infra values (project id, universe domain, service-account email) plus whether a token
 * could be obtained and its length. If a call throws, its inspected error is the likely root cause.
 */
async function tryPubSubCredentials(
  pubsub: ReturnType<typeof getPubSub>,
): Promise<Record<string, unknown>> {
  const auth = pubsub.auth;
  const out: Record<string, unknown> = {};
  const capture = async (key: string, fn: () => Promise<unknown>) => {
    try {
      out[key] = await fn();
    } catch (e) {
      out[`${key}_error`] = inspect(e, { depth: 4, breakLength: Infinity });
    }
  };
  await capture("projectId", () => auth.getProjectId());
  await capture("universeDomain", () => auth.getUniverseDomain());
  await capture(
    "clientEmail",
    async () => (await auth.getCredentials()).client_email,
  );
  await capture("accessToken", async () => {
    // NEVER log the token itself — only whether one was obtained and its length.
    const token = await auth.getAccessToken();
    return {
      ok: typeof token === "string" && token.length > 0,
      length: token?.length ?? 0,
    };
  });
  return out;
}

export type PostHibpNotificationRequestBody = {
  breachName: string;
  hashPrefix: string;
  hashSuffixes: string[];
};

/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * The payload is checked for validity, and immediately queued if it is valid.
 *
 * @param req
 */
export async function POST(req: NextRequest) {
  incHibpNotifyRequest();

  const pubsub = getPubSub();
  let json: PostHibpNotificationRequestBody;
  const hibpNotifyToken = config.hibpNotifyToken;
  const topicName = config.gcp.pubsub.hibpTopic;
  try {
    const headerToken = bearerToken(req);
    if (!isValidBearer(headerToken, hibpNotifyToken)) {
      logger.error(`Received invalid header token: [${headerToken}]`);
      incHibpNotifyFailure("unauthorized");
      return NextResponse.json({ success: false }, { status: 401 });
    }

    json = (await req.json()) as PostHibpNotificationRequestBody;

    if (!(json.breachName && json.hashPrefix && json.hashSuffixes)) {
      logger.error(
        "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes.",
      );
      incHibpNotifyFailure("bad-request");
      return NextResponse.json({ success: false }, { status: 400 });
    }
  } catch (ex) {
    logger.error("error_processing_breach_alert_request:", {
      exception: ex as string,
    });
    Sentry.captureException(ex);
    incHibpNotifyFailure("server-error");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  try {
    await pubsub.topic(topicName).publishMessage({ json });
    logger.info("queued_breach_notification_success", {
      json,
      topic: topicName,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (ex) {
    // gRPC/gax errors hide their real signal in non-enumerable/nested fields that winston's JSON
    // format drops (the log used to collapse to an opaque {note, metadata:{}}). Log the cheap
    // top-level code/details every time; dump everything verbose (message/stack/full inspect)
    // plus the one-time credential check once per process (see pubsubErrorInspected above).
    const err = ex as {
      code?: unknown;
      details?: unknown;
      message?: unknown;
      stack?: unknown;
    };
    const fields: Record<string, unknown> = {
      topicName,
      // gRPC status: 7 = PERMISSION_DENIED, 5 = NOT_FOUND, 16 = UNAUTHENTICATED
      code: err?.code,
      details: err?.details,
    };
    if (!pubsubErrorInspected) {
      pubsubErrorInspected = true;
      fields.errorName = (ex as Error)?.constructor?.name;
      fields.message = err?.message;
      fields.stack = err?.stack;
      fields.inspect = inspect(ex, { depth: 8, breakLength: Infinity });
      fields.credentialCheck = await tryPubSubCredentials(pubsub);
    }
    logger.error("error_queuing_hibp_breach:", fields);
    incHibpNotifyFailure("pubsub-error");
    // extra rides the same fields onto the Sentry issue; fingerprint stops these grouping under
    // the useless "undefined undefined: undefined" title. fields carries no token/private key.
    Sentry.captureException(ex, {
      extra: fields,
      fingerprint: ["hibp-notify-pubsub-publish-failure"],
    });
    return NextResponse.json({ success: false }, { status: 429 });
  }
}
