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

/** Error body per openapi.yml's Error schema */
function errorResponse(
  status: number,
  code:
    | "token-invalid"
    | "missing-scope"
    | "no-monitor-account"
    | "internal-error"
    | "unavailable",
  message: string,
) {
  return NextResponse.json(
    { code, message },
    {
      status,
      // RFC 6750 requires it on a 401
      headers: status === 401 ? { "WWW-Authenticate": "Bearer" } : undefined,
    },
  );
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
      return errorResponse(401, "token-invalid", "Missing or malformed token.");
    }

    let introspection: FxaIntrospection;
    try {
      introspection = await introspectToken(token);
    } catch (error) {
      // No token or sub in Sentry
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
        503,
        "unavailable",
        "Monitor is temporarily unavailable.",
      );
    }

    const { active, sub, scope, client_id, token_type } = introspection;
    if (!active || !sub || token_type !== "access_token") {
      incFirefoxApiAuth("inactive", endpoint);
      return errorResponse(
        401,
        "token-invalid",
        "FxA reports this token as inactive.",
      );
    }

    if (!(scope ?? "").split(" ").includes(FXA_MONITOR_SCOPE)) {
      incFirefoxApiAuth("missing-scope", endpoint, client_id);
      return errorResponse(
        403,
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
          403,
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
        500,
        "internal-error",
        "Monitor could not complete this request.",
      );
    }
  };
}
