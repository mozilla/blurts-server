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

export async function initializeUserAnnouncements(
  userId: number,
): Promise<UserAnnouncementWithDetails[]> {
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
      }
    }

    const results: UserAnnouncementWithDetails[] = await knex(
      "user_announcements as ua",
    )
      .join("announcements as a", "ua.announcement_id", "a.announcement_id")
      .where("ua.user_id", userId)
      .select(
        "a.announcement_id",
        "a.title",
        "a.description",
        "a.label",
        "a.cta_label",
        "a.cta_link",
        "a.small_image_path",
        "a.big_image_path",
        "a.audience",
        "a.created_at as created_at",
        "a.updated_at as updated_at",

        // user-specific info
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
