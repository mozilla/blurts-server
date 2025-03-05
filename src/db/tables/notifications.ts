/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NotificationRow } from "knex/types/tables";
import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";

const knex = createDbConnection();
export async function getAllNotifications(): Promise<NotificationRow[]> {
  try {
    const notifications = await knex("notifications").select("*");
    return notifications;
  } catch (error) {
    logger.error("Error fetching notifications:", error);
    throw error;
  }
}

export async function addNotification(
  newNotification: NotificationRow,
): Promise<NotificationRow> {
  try {
    const [addedNotification] = await knex("notifications")
      .insert(newNotification)
      .returning("*");

    if (!addedNotification) {
      throw new Error("Failed to insert the notification");
    }

    return addedNotification;
  } catch (error) {
    logger.error("Error adding notification:", error);
    throw error;
  }
}

export async function getNotificationByNotificationId(notificationId: string) {
  logger.info("getNotificationByNotificationId", notificationId);
  const res = await knex("notifications").where(
    "notification_id",
    notificationId,
  );

  return res[0] || null;
}

export async function deleteNotification(notificationId: string) {
  logger.info("deleteNotification", notificationId);
  const res = await knex("notifications")
    .where("notification_id", notificationId)
    .del();

  return res;
}

export async function updateNotification(
  notificationId: string,
  updatedData: NotificationRow,
): Promise<NotificationRow> {
  logger.info("updateNotification", notificationId);
  try {
    const [updatedNotification] = await knex("notifications")
      .where("notification_id", notificationId)
      .update(updatedData)
      .returning("*");

    if (!updatedNotification) {
      throw new Error(
        "Failed to update the notification or notification not found",
      );
    }

    return updatedNotification;
  } catch (error) {
    logger.error("Error updating notification:", error);
    throw error;
  }
}
