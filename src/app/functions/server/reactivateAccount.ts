/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { logger } from "./logging";
import { reactivate } from "../../../utils/fxa";
import { record } from "./glean";

export async function reactivateAccount(subscriber: SubscriberRow) {
  logger.info("fxa_reactivate_user", {
    subscriber: subscriber.id,
  });

  record("account", "reactivate", {
    string: {
      monitorUserId: subscriber.id.toString(),
    },
  });

  // try to reactivate from subplat
  if (subscriber.fxa_access_token) {
    try {
      await reactivate(subscriber.fxa_access_token);
      logger.info("reactivate_from_subplat", {
        subscriber_id: subscriber.id,
        success: true,
      });
    } catch (ex) {
      logger.error("reactivate_from_subplat", {
        subscriber_id: subscriber.id,
        exception: ex,
      });
      throw ex;
    }
  } else {
    logger.error("reactivate_from_subplat_no_bearer_token", {
      subscriber_id: subscriber.id,
      exception: "Subscriber does not have permission or missing token",
    });
    throw new Error("Subscriber does not have permission or missing token");
  }
}
