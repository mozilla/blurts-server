/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import jwt from "jsonwebtoken";

export function createTestClientRegionToken(region: string): string {
  const secret = process.env.E2E_TEST_SECRET;
  if (!secret) {
    throw new Error("Missing env variable E2E_TEST_SECRET");
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const payload = {
    region: region.toLowerCase(),
    iat: timestamp,
    exp: timestamp + 60, // expires after 1 minute
  };

  return jwt.sign(payload, secret);
}

export function getTestClientRegionFromToken(
  token: string,
): string | undefined {
  try {
    const secret = process.env.E2E_TEST_SECRET;
    if (!secret) {
      return;
    }
    const decoded = jwt.verify(token, secret) as jwt.JwtPayload;
    if (typeof decoded.region === "string") {
      return decoded.region.toLowerCase();
    }
  } catch {
    console.warn("Invalid or expired JWT token");
  }
}
