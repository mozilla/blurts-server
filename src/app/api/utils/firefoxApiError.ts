/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextResponse } from "next/server";

/** HTTP status for each openapi.yml error code which defines the contract
 *  that we the backend have made with the frontend. */
const ERROR_STATUS = {
  "invalid-request": 400,
  "token-invalid": 401,
  "missing-scope": 403,
  "no-monitor-account": 403,
  "rate-limited": 429,
  "internal-error": 500,
  unavailable: 503,
} as const;

/** Error body per openapi.yml's Error schema */
export function errorResponse(
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
