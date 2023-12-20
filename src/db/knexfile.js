/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// It looks like the type definitions don't perfectly match how
// `pg-connection-string` works, triggering a false positive for this lint rule:
/* eslint-disable import/no-named-as-default-member */
import pgConnectionStr from "pg-connection-string";
import AppConstants from "../appConstants.js";

/**
 * @typedef {object} KnexConfig
 * @property {string} client
 * @property {import("pg-connection-string").ConnectionOptions} connection 
 */

const { DATABASE_URL, APP_ENV, NODE_ENV } = AppConstants;
const connectionObj = pgConnectionStr.parse(DATABASE_URL);
if (APP_ENV === "heroku") {
  // @ts-ignore TODO: Check if this typing error is correct, or if the types are wrong?
  connectionObj.ssl = { rejectUnauthorized: false };
}

// For runtime, use DATABASE_URL
const RUNTIME_CONFIG = {
  client: "postgresql",
  connection: connectionObj,
  pool: { min: 0, max: 5 }
};

// For tests, use test-DATABASE
const testConnectionObj = pgConnectionStr.parse(DATABASE_URL.replace(/\/(\w*)$/, "/test-$1"));
const TESTS_CONFIG = {
  client: "postgresql",
  connection: testConnectionObj,
};

/** @returns KnexConfig */
export default NODE_ENV === "tests" ? TESTS_CONFIG : RUNTIME_CONFIG;
