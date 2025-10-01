/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { AnnouncementRow } from "knex/types/tables";
import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";
import {
  getUserSubscriptionType,
  SubscriptionType,
} from "../../app/functions/server/user";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { getCountryCode } from "../../app/functions/server/getCountryCode";
import { headers } from "next/headers";
import { isEligibleForPremium } from "../../app/functions/universal/premium";

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
  const subscriberId = user.subscriber?.id;

  try {
    if (!subscriberId) {
      logger.error(
        "Failed to initialize announcements: missing or incomplete subscriber object for user",
      );
      return redirect("/auth/logout");
    }

    // Checking for foreign key constraint violations when inserting into the user_announcements table.
    const subscriberExists = await knex("subscribers")
      .where("id", subscriberId)
      .first();
    if (!subscriberExists) {
      logger.error(
        "Foreign key violation likely: subscriber ID does not exist in DB",
        {
          subscriberId,
        },
      );
    }

    // Determine audience eligibility
    const subscriptions =
      user.subscriber?.fxa_profile_json?.subscriptions ?? [];
    const isPremium = subscriptions.includes("monitor");
    const countryCode = getCountryCode(await headers());
    const isUS = isEligibleForPremium(countryCode);

    let subscriptionType: SubscriptionType | undefined;
    if (isPremium) {
      subscriptionType = await getUserSubscriptionType(user);
    }

    const isMonthly = subscriptionType === "monthly";
    const isYearly = subscriptionType === "yearly";
    const isBundle = subscriptionType === "bundle";

    const hasRunScan = typeof user.subscriber?.onerep_profile_id === "number";

    // Get all current announcement IDs for the user
    const existingRows = await knex("user_announcements")
      .where("user_id", user.subscriber?.id)
      .select("announcement_id");

    if (!existingRows || existingRows.length === 0) {
      logger.info("No user_announcements found for user", {
        subscriberId: subscriberId,
      });
    }

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
          return !isPremium && hasRunScan && isUS;
        case "has_not_run_scan":
          return !isPremium && !hasRunScan && isUS;
        case "non_us":
          return !isUS;
        case "monthly_user":
          return isMonthly && isPremium;
        case "yearly_user":
          return isYearly && isPremium;
        case "bundle_user":
          return isBundle && isPremium;
        case "premium_non_bundle":
          return isYearly || isMonthly;
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
      const pendingAnnouncements = newAnnouncements.map((a) => ({
        user_id: user.subscriber?.id,
        announcement_id: a.announcement_id,
        status: "new",
        created_at: new Date(),
        updated_at: new Date(),
      }));

      logger.info("Attempting to insert user announcements", {
        subscriberId: subscriberId,
        announcementIds: pendingAnnouncements.map((a) => a.announcement_id),
      });

      try {
        await knex("user_announcements")
          .insert(pendingAnnouncements)
          .onConflict(["user_id", "announcement_id"])
          .ignore(); // avoids inserting duplicates
      } catch (error) {
        logger.error("Error inserting an announcement", {
          subscriberId: subscriberId,
          announcementData: JSON.stringify(pendingAnnouncements),
          error,
        });
      }
    }

    const results: UserAnnouncementWithDetails[] = await knex(
      "user_announcements as ua",
    )
      .join("announcements as a", "ua.announcement_id", "a.announcement_id")
      .where("ua.user_id", user.subscriber?.id)
      .andWhere("a.label", "published")
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
