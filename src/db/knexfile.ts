/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// It looks like the type definitions don't perfectly match how
// `pg-connection-string` works, triggering a false positive for this lint rule:

import { type Knex } from "knex";
import pgConnectionStr from "pg-connection-string";
import { config } from "../config";

const connectionObj = pgConnectionStr.parse(
  config.databaseUrl,
) as Knex.PgConnectionConfig;
if (config.appEnv === "heroku") {
  connectionObj.ssl = { rejectUnauthorized: false };
}

// For runtime, use DATABASE_URL
const RUNTIME_CONFIG = {
  client: "postgresql",
  connection: connectionObj,
  pool: { min: 0, max: 5 },
};

// For tests, use test-DATABASE
const testConnectionObj = pgConnectionStr.parse(
  config.databaseUrl.replace(/\/(\w*)$/, "/test-$1"),
) as Knex.PgConnectionConfig;
const TESTS_CONFIG: Knex.Config = {
  client: "postgresql",
  connection: testConnectionObj,
};

let exportConfig = config.nodeEnv === "test" ? TESTS_CONFIG : RUNTIME_CONFIG;

if (config.appEnv === "cloudrun") {
  // @ts-ignore TODO: Check if this typing error is correct, or if the types are wrong?
  connectionObj.ssl = false;
  connectionObj.host = /** @type {string} */ process.env.PG_HOST;
  exportConfig = {
    client: "pg",
    connection: connectionObj,
  };
}

/** @returns KnexConfig */
export default exportConfig;
