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

export async function getAllChurns() {
  return getAllSubscriberChurns();
}

export async function upsertAllChurns(
  churningSubscribers: SubscriberChurnRow[],
) {
  return upsertSubscriberChurns(churningSubscribers);
}

export async function clearAllChurns() {
  return deleteSubscriberChurns();
}
