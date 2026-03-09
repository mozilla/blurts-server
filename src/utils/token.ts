/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { randomUUID } from "node:crypto";

/**
 * Returns random base64 url-encoded token,
 * generated from a random v4 UUID
 */
export function randomBase64UrlToken() {
  const uuid = randomUUID().replace(/-/g, ""); // UUID without hyphens
  const hex = Buffer.from(uuid, "hex");
  return hex.toString("base64url");
}
