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

export async function getAllChurns() {
  const session = await getServerSession();
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return [];
  }

  return getAllSubscriberChurns();
}

export async function upsertAllChurns(
  churningSubscribers: SubscriberChurnRow[],
) {
  const session = await getServerSession();
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return [];
  }

  return upsertSubscriberChurns(churningSubscribers);
}

export async function clearAllChurns() {
  const session = await getServerSession();
  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return [];
  }

  return deleteSubscriberChurns();
}
