/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// It looks like the type definitions don't perfectly match how
// `pg-connection-string` works, triggering a false positive for this lint rule:

import pgConnectionStr from "pg-connection-string";
import "dotenv-flow/config";

/**
 * @typedef {object} KnexConfig
 * @property {string} client
 * @property {import("pg-connection-string").ConnectionOptions} connection
 */

const DATABASE_URL = process.env.DATABASE_URL ?? "";
const APP_ENV = process.env.APP_ENV ?? "production";
/** @type {string} */
const NODE_ENV = process.env.NODE_ENV ?? "production";
const connectionObj = pgConnectionStr.parse(DATABASE_URL);
if (
  typeof process.env.APP_ENV === "string" &&
  process.env.APP_ENV === "heroku"
) {
  // @ts-ignore TODO: Check if this typing error is correct, or if the types are wrong?
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
  DATABASE_URL.replace(/\/(\w*)$/, "/test-$1"),
);
const TESTS_CONFIG = {
  client: "postgresql",
  connection: testConnectionObj,
};

let exportConfig = NODE_ENV === "tests" ? TESTS_CONFIG : RUNTIME_CONFIG;

if (APP_ENV === "cloudrun") {
  // @ts-ignore TODO: Check if this typing error is correct, or if the types are wrong?
  connectionObj.ssl = false;
  connectionObj.host = /** @type {string} */ (process.env.PG_HOST);
  exportConfig = {
    client: "pg",
    connection: connectionObj,
  };
}

/** @returns KnexConfig */
export default exportConfig;
