/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * NOTE: This is intended for use in a k6 loadtest script, see https://k6.io/ for more information.
 *
 * In particular, k6 supports JS but is not a Node package: https://k6.io/docs/get-started/installation/
 * This is why import/no-unresolved and no-undef are ignored.
 *
 * Since k6 does not support @next/env, we manually emulate its behaviour;
 * this is good enough for our load tests.
 *
 * @see https://grafana.com/docs/k6/latest/get-started/running-k6
 */

import { SharedArray } from "k6/data";

/**
 * Load environment variables
 *
 * Note: this function has to run in the init stage:
 *       https://grafana.com/docs/k6/latest/using-k6/test-lifecycle/#the-init-stage
 */
export function getEnvVars(): typeof process.env {
  // @ts-ignore: k6 exposes environment variables via the __ENV variable:
  // https://grafana.com/docs/k6/latest/using-k6/environment-variables/
  const envVars: typeof process.env = __ENV;

  const envLocal = loadEnvFile("../../../.env.local");
  const env = loadEnvFile("../../../.env");
  return {
    ...env,
    ...envLocal,
    ...envVars,
  };
}

function loadEnvFile(filePath: string): typeof process.env {
  // A SharedArray is an array that is shared between virtual users by k6.
  // In other words, this prevents the env var files from getting re-read
  // for every virtual user in the load test. See
  // https://grafana.com/docs/k6/latest/javascript-api/k6-data/sharedarray/
  const varDefsArray = new SharedArray(filePath, () => {
    try {
      const fileContents = open(filePath);
      const lines = fileContents
        .split("\n")
        .map((line) => line.replace(/#(.*)$/, "").trim());
      const varLines = lines.filter((line) => line.length > 0);
      const varDefs = varLines.map((line) => {
        const [key, value] = line.split("=", 2);
        const parsedValue = value!
          .trim()
          // Remove wrapping double quotes
          .replace(/^"(.*)"$/, "$1")
          // Remove wrapping single quotes
          .replace(/^'(.*)'$/, "$1");
        return [key.trim(), parsedValue] as const;
      });
      return varDefs;
    } catch {
      return [];
    }
  });
  return Object.fromEntries(varDefsArray) as typeof process.env;
}
