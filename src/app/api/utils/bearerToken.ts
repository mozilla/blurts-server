/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest } from "next/server";

export function bearerToken(req: NextRequest): string {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.get("authorization");
  const authHeader = requestHeaders.get("authorization");

  // Require an auth header
  if (!authHeader) {
    throw new Error("No auth header found");
  }

  // Extract the first portion which should be 'Bearer'
  const headerType = authHeader.substring(0, authHeader.indexOf(" "));
  if (headerType !== "Bearer") {
    throw new Error("Invalid auth type");
  }

  // The remaining portion, which should be the token
  return authHeader.substring(authHeader.indexOf(" ") + 1);
}
