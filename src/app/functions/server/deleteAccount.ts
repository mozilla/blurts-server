/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { logger } from "./logging";
import { deleteSubscriber } from "../../../db/tables/subscribers";
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

  // delete user events only have keys. Keys point to empty objects
  await deleteSubscriber(subscriber);
}
