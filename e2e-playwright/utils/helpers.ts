/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export enum E2E_TEST_ENV_VALUE {
  local = "local",
  stage = "stage",
  production = "production",
}

const E2E_TEST_ENV_URLS: Record<E2E_TEST_ENV_VALUE, string> = {
  local: "http://localhost:6060",
  stage: "https://monitor-stage.allizom.org",
  production: "https://monitor.mozilla.org",
};

export const getBaseTestEnvUrl = (env?: E2E_TEST_ENV_VALUE) =>
  E2E_TEST_ENV_URLS[env ?? (process.env.E2E_TEST_ENV as E2E_TEST_ENV_VALUE)] ||
  E2E_TEST_ENV_URLS.local;
