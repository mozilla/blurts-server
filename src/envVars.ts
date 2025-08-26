/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

if (
  typeof process.env.NEXT_RUNTIME === "undefined" &&
  typeof process.env.STORYBOOK === "undefined"
) {
  // Next.js already loads env vars by itself, and dotenv-flow will throw an
  // error if loaded in that context (about `fs` not existing), so only load
  // it if we're not running in a Next.js-context (e.g. cron jobs):
  const dotenvFlow = await import("dotenv-flow");
  dotenvFlow.config();
}

export function getEnvVarsOrThrow<EnvVarNames extends string>(
  envVars: EnvVarNames[],
): Record<EnvVarNames, string> {
  const envVarsRecord: Record<EnvVarNames, string> = {} as never;
  for (const varName of envVars) {
    const value = process.env[varName];
    if (typeof value !== "string") {
      throw new Error(
        `Required environment variable was not set: [${varName}].`,
      );
    }
    envVarsRecord[varName] = value;
  }
  return envVarsRecord;
}
