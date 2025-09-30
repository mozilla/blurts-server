/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { logger } from "./logging";
import {
  deleteSubscriber,
  getOnerepProfileId,
} from "../../../db/tables/subscribers";
import { deactivateProfile as deactivateOnerepProfile } from "./onerep";
import { deleteSubscription } from "../../../utils/fxa";
import { record } from "./glean";

export async function deleteAccount(subscriber: SubscriberRow) {
  logger.info("fxa_delete_user", {
    subscriber: subscriber.id,
  });

  record("account", "remove", {
    string: {
      monitorUserId: subscriber.id.toString(),
    },
  });

  // get profile id
  const oneRepProfileId = await getOnerepProfileId(subscriber.id);
  if (oneRepProfileId) {
    // try to deactivate onerep profile
    try {
      await deactivateOnerepProfile(oneRepProfileId);
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

  // try to unsubscribe from subplat
  if (subscriber.fxa_access_token) {
    try {
      const isDeleted = await deleteSubscription(subscriber.fxa_access_token);
      logger.info("unsubscribe_from_subplat", {
        subscriber_id: subscriber.id,
        success: isDeleted,
      });
    } catch (ex) {
      logger.error("unsubscribe_from_subplat", {
        subscriber_id: subscriber.id,
        exception: ex,
      });
    }
  }

  // delete user events only have keys. Keys point to empty objects
  await deleteSubscriber(subscriber);
}
