/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import initKnex from "knex";
import knexConfig from "../knexfile.js";
import { logger } from "../../app/functions/server/logging.js";
import { EmailNotificationRow } from "knex/types/tables";
const knex = initKnex(knexConfig);

export type EmailNotificationType = "incident" | "monthly";

export type EmailNotification = {
  breachesId: number;
  subscriberId: number;
  notified?: boolean;
  email: string;
  notificationType: EmailNotificationType;
};

export async function getAllEmailNotificationsForSubscriber(
  subscriberId: number,
): Promise<EmailNotificationRow[]> {
  logger.info("getAllEmailNotificationsForSubscriber: ", subscriberId);
  return await knex("email_notifications")
    .where("subscriber_id", subscriberId)
    .orderBy("id")
    .returning("*");
}

export async function getEmailNotification(
  subscriberId: number,
  breachId: number,
  email: string,
): Promise<EmailNotificationRow | null> {
  logger.info(
    `getEmailNotification for subscriber: ${subscriberId}, breach: ${breachId}`,
  );
  const res = await knex("email_notifications")
    .where("subscriber_id", subscriberId)
    .andWhere("breach_id", breachId)
    .andWhere("email", email)
    .returning("*");
  if (res.length > 1) {
    logger.error(
      "More than one entry for subscriber/breach email notification: ",
      res,
    );
  }

  return res?.[0] || null;
}

export async function getEmailNotificationSubscribersForBreach(
  breachId: number,
): Promise<number[]> {
  logger.info(
    `getEmailNotificationSubscribersForBreach for breach: ${breachId}`,
  );
  const res = await knex("email_notifications")
    .where("breach_id", breachId)
    .returning("subscriber_id");
  return res.map((row) => row.subscriber_id);
}

export async function addEmailNotification(
  newNotification: EmailNotification,
): Promise<EmailNotificationRow> {
  logger.info(`addEmailNotification: ${JSON.stringify(newNotification)}`);
  const emailNotificationDb: Partial<EmailNotificationRow> = {
    subscriber_id: newNotification.subscriberId,
    breach_id: newNotification.breachesId,
    appeared: true,
    notified: newNotification.notified || false,
    email: newNotification.email,
    notification_type: newNotification.notificationType,
  };

  const res = await knex("emails_notification")
    .insert(emailNotificationDb)
    .returning("*");
  return res[0] as EmailNotificationRow;
}

export async function markEmailAsNotified(
  subscriberId: number,
  breachId: number,
  email: string,
) {
  logger.info(`markEmailAsNotified for breach: ${breachId}`);
  await knex("email_notifications")
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
