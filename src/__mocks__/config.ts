/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { config as originalConfig } from "../config";

/**
 * In Storybook, we can't access the file system to load the env vars.
 * Thus, we just return a mock value for all of them. (Defaulting to
 * `"mock-config-value"`, but with the ability to provide a specific
 * mock value if needed.)
 */
const configProxyHandler: ProxyHandler<typeof originalConfig> = {
  get(_target, prop: keyof typeof originalConfig, _receiver) {
    if (prop === "appEnv" || prop === "nodeEnv") {
      return "production";
    }
    if (prop === "serverUrl") {
      return "http://localhost:8000";
    }
    return "mock-config-value";
  },
};

export const config = new Proxy(
  {} as typeof originalConfig,
  configProxyHandler,
);
