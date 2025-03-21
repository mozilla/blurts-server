/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use server";

import {
  getAllSubscriberChurns,
  upsertSubscriberChurns,
  deleteSubscriberChurns,
} from "../../../../../../db/tables/subscriber_churns";
import { SubscriberChurnRow } from "knex/types/tables";
import { getServerSession } from "../../../../../functions/server/getServerSession";
import { isAdmin } from "../../../../../api/utils/auth";

/**
 * Helper function to perform session + admin check.
 * Returns true if the current session belongs to an admin user.
 */
async function isAuthorized(): Promise<boolean> {
  const session = await getServerSession();
  return Boolean(session?.user?.email && isAdmin(session.user.email));
}

export async function getAllChurns() {
  if (!(await isAuthorized())) {
    return null;
  }
  return getAllSubscriberChurns();
}

export async function upsertAllChurns(
  churningSubscribers: SubscriberChurnRow[],
) {
  if (!(await isAuthorized())) {
    return null;
  }
  return upsertSubscriberChurns(churningSubscribers);
}

export async function clearAllChurns() {
  if (!(await isAuthorized())) {
    return null;
  }
  return deleteSubscriberChurns();
}
