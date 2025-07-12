/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { request } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { type E2E_TEST_ENV_VALUE, getBaseTestEnvUrl } from "./utils/helpers";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const globalSetup = async () => {
  const baseURL =
    process.env.E2E_TEST_ENV === "production"
      ? getBaseTestEnvUrl("production" as E2E_TEST_ENV_VALUE)
      : getBaseTestEnvUrl("stage" as E2E_TEST_ENV_VALUE);
  const apiContext = await request.newContext();
  const response = await apiContext.get(
    `${baseURL}/api/v1/admin/feature-flags`,
  );

  if (!response.ok()) {
    throw new Error(`Failed to fetch feature flags: ${response.status()}`);
  }

  const configPath = path.resolve(__dirname, "./enabledFeatureFlags.json");
  fs.writeFileSync(
    configPath,
    JSON.stringify({ data: (await response.json()) ?? [] }, null, 2),
  );
};

export default globalSetup;
