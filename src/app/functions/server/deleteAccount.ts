/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { logger } from "./logging";
import {
  deleteSubscriber,
  getOnerepProfileId,
} from "../../../db/tables/subscribers";
import { deactivateProfile } from "./onerep";
import { SerializedSubscriber } from "../../../next-auth";

export async function deleteAccount(
  subscriber: SubscriberRow | SerializedSubscriber,
) {
  logger.info("fxa_delete_user", {
    subscriber: subscriber.id,
  });

  // get profile id
  const oneRepProfileId = await getOnerepProfileId(subscriber.id);
  if (oneRepProfileId) {
    try {
      await deactivateProfile(oneRepProfileId);
    } catch (ex) {
      if (
        (ex as Error).message ===
        "Failed to deactivate OneRep profile: [403] [Forbidden]"
      )
        logger.error("profile_already_opted_out", {
          subscriber_id: subscriber.id,
          exception: ex,
        });
    }

    logger.info("deactivated_onerep_profile", {
      subscriber_id: subscriber.id,
    });
  }

  // delete user events only have keys. Keys point to empty objects
  await deleteSubscriber(subscriber);
}
