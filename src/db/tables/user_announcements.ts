/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { UserAnnouncementsRow } from "knex/types/tables";
import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";

const knex = createDbConnection();

export async function initializeUserAnnouncements(
  userId: number,
): Promise<UserAnnouncementsRow[]> {
  try {
    const existing = await knex("user_announcements")
      .where("user_id", userId)
      .first();

    if (!existing) {
      const announcements =
        await knex("announcements").select("announcement_id");

      const insertData = announcements.map((a) => ({
        user_id: userId,
        announcement_id: a.announcement_id,
        status: "new",
        created_at: new Date(),
        updated_at: new Date(),
      }));

      if (insertData.length > 0) {
        await knex("user_announcements").insert(insertData);
        logger.info(`Initialized user_announcements for user ${userId}`);
      }
    }

    const userAnnouncements = await knex("user_announcements")
      .join(
        "announcements",
        "user_announcements.announcement_id",
        "=",
        "announcements.announcement_id",
      )
      .select(
        "announcements.*",
        "user_announcements.status",
        "user_announcements.seen_at",
        "user_announcements.cleared_at",
        "user_announcements.created_at",
        "user_announcements.updated_at",
      )
      .where("user_announcements.user_id", userId);

    return userAnnouncements;
  } catch (error) {
    logger.error("Error initializing and fetching user announcements:", error);
    throw error;
  }
}
