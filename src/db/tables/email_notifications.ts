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
  email?: string;
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
): Promise<EmailNotificationRow | null> {
  logger.info(
    `getEmailNotification for subscriber: ${subscriberId}, breach: ${breachId}`,
  );
  const res = await knex("email_notifications")
    .where("subscriber_id", subscriberId)
    .andWhere("breach_id", breachId)
    .returning("*");
  if (res.length > 1) {
    logger.error(
      "More than one entry for subscriber/breach email notification: ",
      res,
    );
  }

  return res?.[0] || null;
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
    email: newNotification.email || null,
    notification_type: newNotification.notificationType,
  };

  const res = await knex("emails_notification")
    .insert(emailNotificationDb)
    .returning("*");
  return res[0] as EmailNotificationRow;
}
