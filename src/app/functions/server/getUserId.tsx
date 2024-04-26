/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "server-only";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import { Session } from "next-auth";

export function getUserId(session: Session | null) {
  const accountId = session?.user?.subscriber?.fxa_uid;
  let userId = "";

  if (accountId && typeof accountId === "string") {
    // If the user is logged in, use the FxA User ID.
    // Note: we may want to use the FxA UID here, but we need approval for that first.
    userId = accountId;
  } else {
    // if the user is not logged in, use a cookie with a randomly-generated Nimbus user ID.
    // TODO: could we use client ID for this? There's no supported way to get it from GleanJS.
    const cookie = cookies().get("userId");
    if (cookie) {
      userId = cookie.value;
    } else {
      // TODO Cookies can only be set in server action or route handler
      // @see https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options
      // This is set client-side in <PageLoadEvent>.
      userId = `guest-${randomUUID()}`;
    }
  }
  return userId;
}
