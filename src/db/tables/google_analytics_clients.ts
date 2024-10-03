/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { GoogleAnalyticsClientsRow } from "../../knex-tables";
import createDbConnection from "../connect";

const knex = createDbConnection();

async function addClientIdForSubscriber(
  subscriberId: number,
  cookieVersion: string,
  cookiePath: number,
  gaClientId: string,
  cookieTimestamp: Date,
): Promise<void> {
  await knex("google_analytics_clients")
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
    .merge();
}

async function getClientIdForSubscriber(
  subscriberId: number,
): Promise<GoogleAnalyticsClientsRow> {
  const res = await knex("google_analytics_clients")
    .select("client_id", "cookie_timestamp")
    .where("subscriber_id", subscriberId);

  return res[0] as GoogleAnalyticsClientsRow;
}

export { addClientIdForSubscriber, getClientIdForSubscriber };
