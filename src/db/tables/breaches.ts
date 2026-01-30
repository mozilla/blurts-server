/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachRow } from "knex/types/tables";
import {
  formatDataClassesArray,
  HibpGetBreachesResponse,
} from "../../utils/hibp";
import createDbConnection from "../connect";

const knex = createDbConnection();

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getAllBreaches(): Promise<BreachRow[]> {
  return knex("breaches").returning("*");
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function getAllBreachesCount(): Promise<number> {
  const breachesCount = await knex("breaches")
    .count({ count: "id" })
    .first()
    .then((result) => result?.count || "");
  // Make sure we are returning a number.
  return parseInt(breachesCount.toString(), 10);
}
/* c8 ignore stop */

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function upsertBreaches(
  hibpBreaches: HibpGetBreachesResponse,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  console.debug("upsertBreaches", hibpBreaches[0]);

  return knex.transaction(async (trx) => {
    const queries = hibpBreaches.map((breach) =>
      knex("breaches")
        .insert({
          name: breach.Name,
          title: breach.Title,
          domain: breach.Domain,
          breach_date: breach.BreachDate,
          added_date: breach.AddedDate,
          modified_date: breach.ModifiedDate,
          pwn_count: breach.PwnCount,
          description: breach.Description,
          logo_path: breach.LogoPath,
          data_classes: formatDataClassesArray(breach.DataClasses),
          is_verified: breach.IsVerified,
          is_fabricated: breach.IsFabricated,
          is_sensitive: breach.IsSensitive,
          is_retired: breach.IsRetired,
          is_spam_list: breach.IsSpamList,
          is_malware: breach.IsMalware,
          favicon_url: null,
        })
        .onConflict("name")
        .merge()
        .transacting(trx),
    );

    try {
      const value = await Promise.all(queries);
      return trx.commit(value);
    } catch (error) {
      return trx.rollback(error);
    }
  });
}
/* c8 ignore stop */
// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
async function updateBreachFaviconUrl(name: string, faviconUrl: string | null) {
  await knex("breaches").where("name", name).update({
    favicon_url: faviconUrl,
  });
}

async function getBreachFaviconUrl(name: string) {
  const res = await knex("breaches")
    .where("name", name)
    .select("favicon_url")
    .first();
  return res?.favicon_url;
}
/* c8 ignore stop */

export {
  getAllBreaches,
  getAllBreachesCount,
  upsertBreaches,
  updateBreachFaviconUrl,
  getBreachFaviconUrl,
  knex,
};
