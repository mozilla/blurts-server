/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { AnnouncementRow } from "knex/types/tables";
import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";

const knex = createDbConnection();

export type UserAnnouncementWithDetails = AnnouncementRow & {
  status: string;
  seen_at: Date | null;
  cleared_at: Date | null;
  user_created_at: Date;
  user_updated_at: Date;
};

export async function markAnnouncementAsSeen(
  userId: number,
  announcementId: string,
) {
  try {
    return knex("user_announcements")
      .where({ user_id: userId, announcement_id: announcementId })
      .update({
        status: "seen",
        seen_at: new Date(),
        updated_at: new Date(),
      });
  } catch (error) {
    logger.error("Could not set announcement to seen", error);
    throw error;
  }
}

export async function markAnnouncementAsCleared(
  userId: number,
  announcementId: string,
) {
  return await knex("user_announcements")
    .where({ user_id: userId, announcement_id: announcementId })
    .update({
      status: "cleared",
      cleared_at: new Date(),
      updated_at: new Date(),
    });
}

export async function initializeUserAnnouncements(
  userId: number,
): Promise<UserAnnouncementWithDetails[]> {
  try {
    // Get all current announcement IDs for the user
    const existingRows = await knex("user_announcements")
      .where("user_id", userId)
      .select("announcement_id");

    const userAnnouncementIds = new Set(
      existingRows.map((row) => row.announcement_id),
    );

    // Get all global announcements
    const allAnnouncements =
      await knex("announcements").select("announcement_id");

    const newAnnouncements = allAnnouncements.filter(
      (a) => !userAnnouncementIds.has(a.announcement_id),
    );

    // Insert missing announcements
    if (newAnnouncements.length > 0) {
      const insertData = newAnnouncements.map((a) => ({
        user_id: userId,
        announcement_id: a.announcement_id,
        status: "new",
        created_at: new Date(),
        updated_at: new Date(),
      }));

      await knex("user_announcements").insert(insertData);
    }

    const results: UserAnnouncementWithDetails[] = await knex(
      "user_announcements as ua",
    )
      .join("announcements as a", "ua.announcement_id", "a.announcement_id")
      .where("ua.user_id", userId)
      .select(
        "a.*",
        "ua.status",
        "ua.seen_at",
        "ua.cleared_at",
        "ua.created_at as user_created_at",
        "ua.updated_at as user_updated_at",
      );

    return results;
  } catch (error) {
    logger.error("Error initializing user announcements:", error);
    throw error;
  }
}
