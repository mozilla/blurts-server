/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { UUID } from "crypto";
import { v5 as uuidv5 } from "uuid";
import type { Session } from "next-auth";
import type { SubscriberRow } from "knex/types/tables";
import { logger } from "./logging";
import { loadNextHeaders } from "./loadNextHeaders";
import "./notInClientComponent";

export type ExperimentationId = UUID | `guest-${UUID}`;

/**
 * Create a stable ID used for Monitor experimentation, derived from the subscriber ID.
 * Instead of using the ID directly,
 *
 * @param subscriberId
 * @returns v5 UUID, possibly with `guest-` prefix.
 */
async function getExperimentationId(
  subscriberId?: number,
): Promise<ExperimentationId | undefined> {
  if (subscriberId && typeof subscriberId === "number") {
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
    const experimentationId = uuidv5(
      subscriberId.toString(),
      namespace,
    ) as UUID;
    return experimentationId;
  }

  // If the user is not logged in, use a cookie with a randomly-generated Nimbus user ID.
  // (This header is set in middleware.ts, which reads it from a cookie, and creates the
  // cookie if it doesn't exist yet.)
  // TODO: could we use client ID for this? There's no supported way to get it from GleanJS.
  try {
    const nextHeaders = await loadNextHeaders();
    if (nextHeaders) {
      const experimentationId = (await nextHeaders.headers()).get(
        "x-experimentation-id",
      );
      if (!experimentationId) {
        logger.error(
          "get_experimentation_id_no_x-experimentation-id_header",
          (await nextHeaders.headers()).keys(),
        );
        return "guest-no-experimentation-id-set-by-monitor-middleware";
      }
      logger.info("Using experimentationId from header for guest user", {
        experimentationId,
      });
      return experimentationId as ExperimentationId;
    } else {
      throw new Error("Could not load next/headers");
    }
  } catch (error) {
    logger.info(
      "get_experimentation_id_get_x-experimentation-id_header_failed",
      error,
    );
  }
}

export async function getExperimentationIdFromUserSession(
  user: Session["user"] | null,
) {
  const subscriberId = user?.subscriber?.id;
  return await getExperimentationId(subscriberId);
}

export async function getExperimentationIdFromSubscriber(
  subscriber: SubscriberRow,
) {
  return await getExperimentationId(subscriber.id);
}
