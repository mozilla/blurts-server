/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { AnnouncementRow } from "knex/types/tables";
import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import { checkUserHasMonthlySubscription } from "../../app/functions/server/user";
import { Session } from "next-auth";

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
  user: Session["user"],
): Promise<UserAnnouncementWithDetails[]> {
  try {
    // Determine audience eligibility
    const isSubscribedMonthly = await checkUserHasMonthlySubscription(user);
    const isUS = user.subscriber?.signup_language?.includes("en-US");
    const subscriptions =
      user.subscriber?.fxa_profile_json?.subscriptions ?? [];
    const isPremium = subscriptions.includes("monitor");
    const hasRunScan = user.subscriber?.onerep_profile_id !== null;

    // Get all current announcement IDs for the user
    const existingRows = await knex("user_announcements")
      .where("user_id", user.subscriber?.id)
      .select("announcement_id");

    const userAnnouncementIds = new Set(
      existingRows.map((row) => row.announcement_id),
    );

    // Get all published announcements
    const publishedAnnouncements = await knex("announcements")
      .where("label", "published")
      .select("*");

    // Filter announcements by audience
    const eligibleAnnouncements = publishedAnnouncements.filter((a) => {
      switch (a.audience) {
        case "us_only":
          return isUS;
        case "premium_users":
          return isPremium;
        case "free_users":
          return !isPremium && isUS;
        case "has_run_scan":
          return hasRunScan;
        case "has_not_run_scan":
          return !hasRunScan;
        case "non_us":
          return !isUS;
        case "monthly_user":
          return isSubscribedMonthly && isPremium;
        case "yearly_user":
          return !isSubscribedMonthly && isPremium;
        case "all_users":
        default:
          return true;
      }
    });

    const newAnnouncements = eligibleAnnouncements.filter(
      (a) => !userAnnouncementIds.has(a.announcement_id),
    );

    // Insert missing announcements
    if (newAnnouncements.length > 0) {
      const insertData = newAnnouncements.map((a) => ({
        user_id: user.subscriber?.id,
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
      .where("ua.user_id", user.subscriber?.id)
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
