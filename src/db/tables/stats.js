/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 import createDbConnection from "../connect.js";
 const knex = createDbConnection();

 export { knex as knexStats }

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */

/**
 * @param {string} name
 * @param {string} current
 * @param {string} max
 * @returns {Promise<import('knex/types/tables').SubscriberRow | null>} updated subscriber
 */
export async function addOnerepStats (name, current, max) {
  const res = await knex("stats").insert({ name, current, max, type: "onerep"}).returning("*");
  return res[0];
}

/**
 * @returns {object}
 */
export async function getOnerepStats () {
  const res = await knex("stats").select("name", "current", "max").where("type", "onerep");
  return res[0];
}

/* c8 ignore stop */
