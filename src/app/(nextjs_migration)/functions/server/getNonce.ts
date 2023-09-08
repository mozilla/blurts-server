/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";

export function getNonce() {
  // This header gets set in /src/middleware.ts:
  const nonce = headers().get("x-nonce") ?? undefined;
  return nonce;
}
