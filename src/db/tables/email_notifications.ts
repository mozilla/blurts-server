/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachRow, EmailNotificationRow } from "knex/types/tables";
import createDbConnection from "../connect";

// Covered by integration tests but report is not combined
// TODO: MNTOR-5117
/* c8 ignore start */
const knex = createDbConnection();

export async function subscriberNotifiedForBreach(
  breachId: EmailNotificationRow["breach_id"],
  subscriber_id: EmailNotificationRow["subscriber_id"],
) {
  const res = await knex("email_notifications")
    .select("subscriber_id")
    .where("notified", true)
    .andWhere("subscriber_id", subscriber_id)
    .andWhere("breach_id", breachId)
    .first();
  return res !== undefined;
}

type NewNotification = {
  breachId: number;
  subscriberId: number;
  notified: boolean;
  email: string;
  notificationType: string;
};

export async function addEmailNotification(
  newNotification: NewNotification,
): Promise<EmailNotificationRow | undefined> {
  console.info(
    `addEmailNotification: ${newNotification.subscriberId}, ${newNotification.breachId}, ${newNotification.notificationType}`,
  );
  const emailNotificationDb = {
    subscriber_id: newNotification.subscriberId,
    breach_id: newNotification.breachId,
    appeared: true,
    notified: newNotification.notified || false,
    email: newNotification.email,
    notification_type: newNotification.notificationType,
  };

  const res = await knex("email_notifications")
    .insert(emailNotificationDb)
    .onConflict(["subscriber_id", "breach_id", "email"])
    .ignore()
    .returning("*");
  return res[0];
}

export async function markEmailAsNotified(
  subscriberId: number,
  breachId: BreachRow["id"],
  email: string,
) {
  console.info(`markEmailAsNotified for breach: ${breachId}`);
  return await knex("email_notifications")
    .where("subscriber_id", subscriberId)
    .andWhere("breach_id", breachId)
    .andWhere("email", email)
    .update({
      notified: true,
      // @ts-ignore knex.fn.now() results in it being set to a date,
      // even if it's not typed as a JS date object:
      updated_at: knex.fn.now(),
    });
}
/* c8 ignore stop */
