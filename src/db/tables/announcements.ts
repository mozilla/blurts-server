/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { AnnouncementRow } from "knex/types/tables";
import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";

const knex = createDbConnection();
export async function getAllAnnouncements(): Promise<AnnouncementRow[]> {
  try {
    const announcements = await knex("announcements").select("*");
    return announcements;
  } catch (error) {
    logger.error("Error fetching announcements:", error);
    throw error;
  }
}

export async function addAnnouncements(
  newAnnouncements: AnnouncementRow,
): Promise<AnnouncementRow> {
  try {
    const [addedAnnouncements] = await knex("announcements")
      .insert(newAnnouncements)
      .returning("*");

    if (!addedAnnouncements) {
      throw new Error("Failed to insert the announcement");
    }

    return addedAnnouncements;
  } catch (error) {
    logger.error("Error adding announcement:", error);
    throw error;
  }
}

export async function getAnnouncementsByAnnouncementsId(
  announcementId: string,
) {
  logger.info("getAnnouncementsByAnnouncementsId", announcementId);
  const res = await knex("announcements").where(
    "announcement_id",
    announcementId,
  );

  return res[0] || null;
}

export async function deleteAnnouncements(announcementId: string) {
  logger.info("deleteAnnouncements", announcementId);
  const res = await knex("announcements")
    .where("announcement_id", announcementId)
    .del();

  return res;
}

export async function updateAnnouncements(
  announcementId: string,
  updatedData: AnnouncementRow,
): Promise<AnnouncementRow> {
  logger.info("updateAnnouncements", announcementId);
  try {
    const [updatedAnnouncements] = await knex("announcements")
      .where("announcement_id", announcementId)
      .update(updatedData)
      .returning("*");

    if (!updatedAnnouncements) {
      throw new Error(
        "Failed to update the announcement or announcement not found",
      );
    }

    return updatedAnnouncements;
  } catch (error) {
    logger.error("Error updating announcement:", error);
    throw error;
  }
}
