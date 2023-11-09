/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { parse } from "pg-connection-string";
import AppConstants from "../appConstants.js";

const { DATABASE_URL, APP_ENV, NODE_ENV } = AppConstants;
const connectionObj = parse(DATABASE_URL);
if (APP_ENV === "heroku") {
  // @ts-ignore TODO: Check if this typing error is correct, or if the types are wrong?
  connectionObj.ssl = { rejectUnauthorized: false };
}

// For runtime, use DATABASE_URL
const RUNTIME_CONFIG = {
  client: "postgresql",
  connection: connectionObj,
};

// For tests, use test-DATABASE
const testConnectionObj = parse(DATABASE_URL.replace(/\/(\w*)$/, "/test-$1"));
const TESTS_CONFIG = {
  client: "postgresql",
  connection: testConnectionObj,
};

export default NODE_ENV === "tests" ? TESTS_CONFIG : RUNTIME_CONFIG;
