/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import "server-only";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import { v5 as uuidv5 } from "uuid";
import { Session } from "next-auth";

/**
 * Create a stable ID used for Monitor experimentation, derived from the subscriber ID.
 * Instead of using the ID directly,
 *
 * @param user Session["user"]
 * @returns {string} - v5 UUID, possibly with `guest-` prefix.
 */
export function getExperimentationId(user: Session["user"] | null): string {
  const accountId = user?.subscriber?.id;
  let experimentationId = "";

  if (accountId && typeof accountId === "string") {
    // If the user is logged in, use the Subscriber ID.
    const namespace = process.env.NIMBUS_UUID_NAMESPACE;
    if (!namespace) {
      throw new Error(
        "NIMBUS_UUID_NAMESPACE not set, cannot create experimentationId",
      );
    }
    experimentationId = uuidv5(accountId, namespace);
  } else {
    // if the user is not logged in, use a cookie with a randomly-generated Nimbus user ID.
    // TODO: could we use client ID for this? There's no supported way to get it from GleanJS.
    const cookie = cookies().get("experimentationId");
    if (cookie) {
      experimentationId = cookie.value;
    } else {
      // TODO Cookies can only be set in server action or route handler
      // @see https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options
      // This is set client-side in <PageLoadEvent>.
      experimentationId = `guest-${randomUUID()}`;
    }
  }
  return experimentationId;
}
