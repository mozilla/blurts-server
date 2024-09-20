/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import createDbConnection from "../connect";
import { logger } from "../../app/functions/server/logging";

const knex = createDbConnection();

async function addClientIdForSubscriber(
  subscriberId: number,
  cookieVersion: string,
  cookiePath: number,
  gaClientId: string,
  cookieTimestamp: number,
): Promise<string> {
  logger.info("addClientIdForSubscriber", {
    subscriberId,
    cookieVersion,
    cookiePath,
    gaClientId,
    cookieTimestamp,
  });

  const res = await knex("google_analytics_clients")
    .insert({
      subscriber_id: subscriberId,
      cookie_version: cookieVersion,
      cookie_path: cookiePath,
      client_id: gaClientId,
      cookie_timestamp: cookieTimestamp,
    })
    .onConflict("subscriber_id")
    .merge()
    .onConflict("client_id")
    .merge()
    .returning("*");

  return res?.[0] as string;
}

async function getClientIdForSubscriber(subscriberId: number) {
  const res = await knex("google_analytics_clients")
    .select("client_id", "cookieTimestamp")
    .where("subscriber_id", subscriberId);

  return res?.[0] as string;
}

export { addClientIdForSubscriber, getClientIdForSubscriber };
