/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { headers as headersGetter } from "next/headers";

type ReferrerUrlProps = {
  headers: Awaited<ReturnType<typeof headersGetter>>;
  referrerParam: string | undefined;
};

export function getReferrerUrl({
  headers,
  referrerParam,
}: ReferrerUrlProps): string | null {
  const referrer = headers.get("referer");
  const serverUrl = process.env.SERVER_URL as string;
  const isRouteWithinMonitor = referrer && referrer.includes(serverUrl);

  if (isRouteWithinMonitor) {
    return referrer.replace(serverUrl, "");
  }

  switch (referrerParam) {
    case "dashboard":
      return "/user/dashboard";
    default:
      return null;
  }
}
