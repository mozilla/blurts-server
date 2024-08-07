/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachRow } from "knex/types/tables";
import createDbConnection from "../connect.js";

const knex = createDbConnection();

/**
 * @param {number} subscriberId
 */
async function getAllEmailNotificationsForSubscriber(subscriberId: number) {
  console.info("getAllEmailNotificationsForSubscriber: ", subscriberId);
  return await knex.transaction((trx) => {
    return trx("email_notifications")
      .forUpdate()
      .select()
      .where("subscriber_id", subscriberId)
      .orderBy("id");
  });
}

async function getNotifiedSubscribersForBreach(
  breachId: BreachRow["id"],
): Promise<number[]> {
  console.info(
    `getEmailNotificationSubscribersForBreach for breach: ${breachId}`,
  );

  const res = await knex.transaction((trx) => {
    return trx("email_notifications")
      .forUpdate()
      .select("subscriber_id")
      .where("notified", true)
      .andWhere("breach_id", breachId);
  });

  return res.map((row) => row.subscriber_id);
}

type NewNotification = {
  breachId: number;
  subscriberId: number;
  notified: boolean;
  email: string;
  notificationType: string;
};

async function addEmailNotification(newNotification: NewNotification) {
  console.info(`addEmailNotification: ${JSON.stringify(newNotification)}`);
  const emailNotificationDb = {
    subscriber_id: newNotification.subscriberId,
    breach_id: newNotification.breachId,
    appeared: true,
    notified: newNotification.notified || false,
    email: newNotification.email,
    notification_type: newNotification.notificationType,
  };

  const res = await knex.transaction((trx) => {
    return trx("email_notifications")
      .forUpdate()
      .insert(emailNotificationDb)
      .returning("*");
  });
  return res[0];
}

async function markEmailAsNotified(
  subscriberId: number,
  breachId: BreachRow["id"],
  email: string,
) {
  console.info(`markEmailAsNotified for breach: ${breachId}`);
  await knex.transaction((trx) => {
    return trx("email_notifications")
      .forUpdate()
      .where("subscriber_id", subscriberId)
      .andWhere("breach_id", breachId)
      .andWhere("email", email)
      .update({
        notified: true,
        // @ts-ignore knex.fn.now() results in it being set to a date,
        // even if it's not typed as a JS date object:
        updated_at: knex.fn.now(),
      });
  });
}

export {
  getAllEmailNotificationsForSubscriber,
  getNotifiedSubscribersForBreach,
  addEmailNotification,
  markEmailAsNotified,
};
