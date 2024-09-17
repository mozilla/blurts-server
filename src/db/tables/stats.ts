/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { StatsRow } from "knex/types/tables";
import createDbConnection from "../connect";
const knex = createDbConnection();

export { knex as knexStats };

// Not covered by tests; mostly side-effects. See test-coverage.md#mock-heavy
/* c8 ignore start */
export async function addOnerepStats(
  name: string,
  current: string,
  max: string,
): Promise<StatsRow | null> {
  const res = await knex("stats")
    .insert({ name, current, max, type: "onerep" })
    .returning("*");
  return res[0];
}
/* c8 ignore stop */
