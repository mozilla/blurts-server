/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { headers as headersGetter } from "next/headers";

export function getPreviousRoute(
  headers: ReturnType<typeof headersGetter>,
): string {
  const referrer = headers.get("referer");
  const serverUrl = process.env.SERVER_URL as string;
  const isRouteWithinMonitor = referrer && referrer.includes(serverUrl);

  if (isRouteWithinMonitor) {
    return referrer.replace(serverUrl, "");
  }

  return "";
}
