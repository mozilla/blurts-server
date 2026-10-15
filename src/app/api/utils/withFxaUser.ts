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
import {
  incFirefoxApiAuth,
  type FirefoxApiEndpoint,
} from "../../../utils/metrics";
import { FXA_MONITOR_SCOPE } from "../../../constants";

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
  "internal-error": 500,
  unavailable: 503,
} as const;

/** Seconds a client waits after a 503 */
const RETRY_AFTER_SECONDS = 2;

/** Error body per openapi.yml's Error schema */
function errorResponse(code: keyof typeof ERROR_STATUS, message: string) {
  const status = ERROR_STATUS[code];
  const headers: Record<string, string> = {};
  // RFC 6750 requires it on a 401
  if (status === 401) headers["WWW-Authenticate"] = "Bearer";
  // openapi.yml lets 503 clients wait this long
  if (status === 503) headers["Retry-After"] = String(RETRY_AFTER_SECONDS);
  return NextResponse.json({ code, message }, { status, headers });
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

    if (!(scope ?? "").split(" ").includes(FXA_MONITOR_SCOPE)) {
      incFirefoxApiAuth("missing-scope", endpoint, client_id);
      return errorResponse(
        "missing-scope",
        `This token lacks the ${FXA_MONITOR_SCOPE} scope.`,
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
