/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { headers } from "next/headers";
import { UUID } from "crypto";
import { Session } from "next-auth";
import { v5 as uuidv5 } from "uuid";
import "./notInClientComponent";
import { logger } from "./logging";

export type ExperimentationId = UUID | `guest-${UUID}`;

/**
 * Create a stable ID used for Monitor experimentation, derived from the subscriber ID.
 * Instead of using the ID directly,
 *
 * @param user
 * @returns v5 UUID, possibly with `guest-` prefix.
 */
export function getExperimentationId(
  user: Session["user"] | null,
): ExperimentationId {
  const accountId = user?.subscriber?.id;
  let experimentationId: null | ExperimentationId;

  if (accountId && typeof accountId === "number") {
    // If the user is logged in, use the Subscriber ID.
    const namespace = process.env.NIMBUS_UUID_NAMESPACE;
    if (!namespace) {
      logger.error(
        "NIMBUS_UUID_NAMESPACE environment variable is missing. Cannot generate experimentationId.",
      );
      throw new Error(
        "NIMBUS_UUID_NAMESPACE not set, cannot create experimentationId",
      );
    }
    experimentationId = uuidv5(accountId.toString(), namespace) as UUID;
    return experimentationId;
  } else {
    // If the user is not logged in, use a cookie with a randomly-generated Nimbus user ID.
    // (This header is set in middleware.ts, which reads it from a cookie, and creates the
    // cookie if it doesn't exist yet.)
    // TODO: could we use client ID for this? There's no supported way to get it from GleanJS.
    const experimentationId = headers().get("x-experimentation-id");
    if (!experimentationId) {
      logger.error(
        "get_experimentation_id_no_x-experimentation-id_header",
        headers().keys(),
      );
      return "guest-no-experimentation-id-set-by-monitor-middleware";
    }
    logger.info("Using experimentationId from header for guest user", {
      experimentationId,
    });
    return experimentationId as ExperimentationId;
  }
}
