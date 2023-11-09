/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ConnectionOptions } from "tls";
import initKnex, { Knex } from "knex";
import knexConfig from "./knexfile";

export interface KnexConfig {
  client: string;
  connection: ConnectionOptions;
}

const createDbConnection = () => {
  const config = knexConfig as KnexConfig;
  /* c8 ignore start */
  if (process.env.NODE_ENV === "development") {
    const { client } = knexConfig;
    if (!(client in global)) {
      // @ts-ignore-next-line: globalThis is a read-only property
      global[client as keyof typeof globalThis] = initKnex(config);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return global[client as keyof typeof globalThis] as Knex<any, unknown>;
  }
  /* c8 ignore stop */

  return initKnex(config);
};

export { createDbConnection };
