/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";
import { bearerToken } from "./bearerToken";
import {
  FxaIntrospectError,
  introspectToken,
  type FxaIntrospection,
} from "../../../utils/fxa";
import { getSubscriberByFxaUid } from "../../../db/tables/subscribers";
import { redisClient } from "../../../db/redis/client";
import {
  incFirefoxApiAuth,
  incFirefoxApiRateLimit,
  type FirefoxApiEndpoint,
} from "../../../utils/metrics";
import { FXA_MONITOR_SCOPE } from "../../../constants";
import { config } from "../../../config";

/** Subscriber row, with emails, for the token's user */
export type FxaSubscriber = NonNullable<
  Awaited<ReturnType<typeof getSubscriberByFxaUid>>
>;

/**
 * Bearer token, or undefined if missing or malformed.
 * Headers trims, so "Bearer " throws too.
 */
function readToken(req: NextRequest): string | undefined {
  try {
    return bearerToken(req);
  } catch {
    return undefined;
  }
}

/** HTTP status for each openapi.yml error code which defines the contract
 *  that we the backend have made with the frontend. */
const ERROR_STATUS = {
  "token-invalid": 401,
  "missing-scope": 403,
  "no-monitor-account": 403,
  "rate-limited": 429,
  "internal-error": 500,
  unavailable: 503,
} as const;

/** Seconds a client waits after a 503 */
const UNAVAILABLE_RETRY_AFTER_SECONDS = 2;

/** One hour, per FIREFOX_API_RATE_LIMIT_PER_HOUR */
const RATE_LIMIT_WINDOW_SECONDS = 60 * 60;

/** Error body per openapi.yml's Error schema */
function errorResponse(
  code: keyof typeof ERROR_STATUS,
  message: string,
  retryAfterSeconds?: number,
) {
  const status = ERROR_STATUS[code];
  const headers: Record<string, string> = {};
  // RFC 6750 requires it on a 401
  if (status === 401) headers["WWW-Authenticate"] = "Bearer";
  if (retryAfterSeconds) headers["Retry-After"] = String(retryAfterSeconds);
  return NextResponse.json({ code, message }, { status, headers });
}

/** Seconds to wait, 0 when allowed */
async function rateLimitRetryAfter(
  uid: string,
  limit: number,
): Promise<number> {
  const key = `firefox-api:rate-limit:${uid}`;
  // One transaction, so the TTL always lands
  const replies = await redisClient()
    .multi()
    // Start a window unless one is running
    .set(key, 0, "EX", RATE_LIMIT_WINDOW_SECONDS, "NX")
    // Count this request
    .incr(key)
    // Seconds left in the window
    .ttl(key)
    .exec();
  // Null only when a WATCH aborts it
  if (replies === null) {
    throw new Error("Redis aborted the rate limit transaction");
  }

  // Each reply is an [error, result] pair
  for (const [error] of replies) {
    if (error) throw error;
  }
  const count = replies[1][1] as number; // INCR
  const ttl = replies[2][1] as number; // TTL

  // No TTL: fail open, alert via Sentry
  if (ttl < 0) throw new Error("Rate limit key has no TTL");
  if (count <= limit) return 0;
  // TTL can read 0; 0 means allowed
  return Math.max(ttl, 1);
}

/**
 * Seconds to wait, 0 when allowed.
 * Fails open: Redis errors return 0.
 */
async function checkRateLimit(
  uid: string,
  endpoint: FirefoxApiEndpoint,
  clientId?: string,
): Promise<number> {
  const limit = config.firefoxApiRateLimitPerHour;
  // 0 disables rate limiting
  if (limit <= 0) return 0;

  try {
    const retryAfterSeconds = await rateLimitRetryAfter(uid, limit);
    if (retryAfterSeconds > 0) {
      incFirefoxApiRateLimit("limited", endpoint, clientId);
    } else {
      incFirefoxApiRateLimit("allowed", endpoint, clientId);
    }
    return retryAfterSeconds;
  } catch (error) {
    // Fail open, like the breaches cache
    Sentry.captureException(error, {
      tags: { outcome: "redis-error", endpoint },
      fingerprint: ["firefox-api-rate-limit-redis"],
    });
    incFirefoxApiRateLimit("redis-error", endpoint, clientId);
    return 0;
  }
}

/**
 * Gates a Firefox API route on an FxA token.
 * Identity comes from the token only, never cookies, as cookies could
 * belong to a different user.
 *
 * @example export const GET = withFxaUser("/user/breaches", async (req, { subscriber }) => ...)
 */
export function withFxaUser(
  endpoint: FirefoxApiEndpoint,
  handler: (
    req: NextRequest,
    ctx: { subscriber: FxaSubscriber },
  ) => Promise<Response>,
) {
  return async (req: NextRequest): Promise<Response> => {
    const token = readToken(req);
    if (!token) {
      incFirefoxApiAuth("missing-header", endpoint);
      return errorResponse("token-invalid", "Missing or malformed token.");
    }

    let introspection: FxaIntrospection;
    try {
      introspection = await introspectToken(token);
      // Lands in the catch, as FxA's fault
      if (typeof introspection?.active !== "boolean") {
        throw new Error("FxA introspect returned a malformed body");
      }
    } catch (error) {
      // Error carries no token or sub
      Sentry.captureException(error, {
        tags: {
          outcome: "introspection-error",
          endpoint,
          ...(error instanceof FxaIntrospectError
            ? { httpStatus: error.status }
            : {}),
        },
        fingerprint: ["firefox-api-fxa-introspect"],
      });
      incFirefoxApiAuth("introspection-error", endpoint);
      return errorResponse(
        "unavailable",
        "Monitor is temporarily unavailable.",
        UNAVAILABLE_RETRY_AFTER_SECONDS,
      );
    }

    const { active, sub, scope, client_id, token_type } = introspection;
    if (!active || !sub || token_type !== "access_token") {
      incFirefoxApiAuth("inactive", endpoint);
      return errorResponse(
        "token-invalid",
        "FxA reports this token as inactive.",
      );
    }

    const scopes = typeof scope === "string" ? scope.split(" ") : [];
    if (!scopes.includes(FXA_MONITOR_SCOPE)) {
      incFirefoxApiAuth("missing-scope", endpoint, client_id);
      return errorResponse(
        "missing-scope",
        `This token lacks the ${FXA_MONITOR_SCOPE} scope.`,
      );
    }

    const retryAfterSeconds = await checkRateLimit(sub, endpoint, client_id);
    if (retryAfterSeconds > 0) {
      return errorResponse(
        "rate-limited",
        `Too many requests. Retry after ${retryAfterSeconds} seconds.`,
        retryAfterSeconds,
      );
    }

    let subscriber: FxaSubscriber | undefined;
    try {
      subscriber = await getSubscriberByFxaUid(sub);
      if (!subscriber) {
        incFirefoxApiAuth("no-subscriber", endpoint, client_id);
        return errorResponse(
          "no-monitor-account",
          "This Firefox account has no Monitor subscriber.",
        );
      }

      incFirefoxApiAuth("success", endpoint, client_id);
      // Await, so handler errors land below
      return await handler(req, { subscriber });
    } catch (error) {
      // No subscriber yet means lookup failed
      const lookupFailed = !subscriber;
      if (lookupFailed) {
        incFirefoxApiAuth("lookup-error", endpoint, client_id);
      }
      // openapi.yml promises a JSON body
      Sentry.captureException(error, {
        tags: {
          endpoint,
          ...(lookupFailed ? { outcome: "lookup-error" } : {}),
        },
      });
      return errorResponse(
        "internal-error",
        "Monitor could not complete this request.",
      );
    }
  };
}
