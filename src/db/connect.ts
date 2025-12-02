/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import knex from "knex";
import knexConfig from "./knexfile";

let connection: knex.Knex;
export default function createDbConnection(): knex.Knex {
  /* c8 ignore start */
  if (process.env.NODE_ENV === "development") {
    const client = knexConfig.client as string;
    if (!(client in global)) {
      (global as unknown as Record<string, knex.Knex>)[client] = knex(
        knexConfig as knex.Knex.Config,
      );
    }

    connection ??= (global as unknown as Record<string, knex.Knex>)[client];
    return connection;
  }
  /* c8 ignore stop */

  connection ??= knex(knexConfig as knex.Knex.Config);
  return connection;
}
