/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Only process.env variables starting with `NEXT_PUBLIC_` will be shipped to the client:
import "./app/functions/server/notInClientComponent";

import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import env from "@next/env";

// Initialize variables from env file if appropriate
// Doesn't run in tests by design, so ignore for coverage:
/* c8 ignore start */
if (
  typeof process.env.NEXT_RUNTIME !== "string" &&
  (process.env.NODE_ENV !== "test" || process.env.PLAYWRIGHT === "true")
) {
  // If we're in Next.js, our `.env` files are already set up to be loaded.
  // Outside of Next.js (e.g. in cron jobs), however, we need to explicitly load them.
  // (In unit tests, `next/jest` takes care of this, so no need to run this there.)
  env.loadEnvConfig(resolve(fileURLToPath(import.meta.url), "../../"));
}
/* c8 ignore end */

// Don't need to have coverage on config object
/* c8 ignore start */
const isLocalOrTest =
  process.env.NODE_ENV === "test" || process.env.APP_ENV === "local";

/**
 * Environment-specific values
 *
 * Use this object to access values that differ per environment (e.g. running
 * locally, on stage, or in production).
 *
 * Prefer using this object over `process.env`, as this object validates values
 * at app startup, ensuring that their values are something we expect, optionally
 * falling back to sensible values (for running locally) if not.
 */
export const config = {
  nodeEnv: getEnvEnum("NODE_ENV", ["production", "development", "test"], {
    fallbackValue: "development",
  }),
  appEnv: getEnvEnum(
    "APP_ENV",
    ["local", "gcpdev", "heroku", "stage", "production", "cloudrun"],
    {
      fallbackValue: "local",
    },
  ),
  admins: getEnvString("ADMINS", { fallbackValue: "" }),
  supportedLocales: getEnvString("SUPPORTED_LOCALES"),

  serverUrl: getEnvString("SERVER_URL"),
  databaseUrl: getEnvString("DATABASE_URL"),

  oauthAuthorizationUri: getEnvString("OAUTH_AUTHORIZATION_URI"),
  oauthTokenUri: getEnvString("OAUTH_TOKEN_URI"),
  oauthClientId: getEnvString("OAUTH_CLIENT_ID"),
  oauthClientSecret: getEnvString("OAUTH_CLIENT_SECRET"),
  oauthProfileUri: getEnvString("OAUTH_PROFILE_URI"),
  oauthAccountUri: getEnvString("OAUTH_ACCOUNT_URI"),
  nextAuthSecret: getEnvString("NEXTAUTH_SECRET"),
  fxaSettingsUrl: getEnvString("FXA_SETTINGS_URL"),

  // If set to an empty string, emails will be logged instead of sent,
  // which is fine for local development:
  smtpUrl: getEnvString("SMTP_URL", { fallbackValue: "" }),
  emailFrom: getEnvString("EMAIL_FROM"),
  // https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html
  sesConfigSet: getEnvString("SES_CONFIG_SET", { fallbackValue: "" }),

  sentryDsn: getEnvString("SENTRY_DSN", { fallbackValue: "" }),

  hibpThrottleMaxTries: getEnvInt("HIBP_THROTTLE_MAX_TRIES"),
  hibpThrottleDelay: getEnvInt("HIBP_THROTTLE_DELAY"),
  hibpApiRoot: getEnvString("HIBP_API_ROOT"),
  hibpNotifyToken: getEnvString("HIBP_NOTIFY_TOKEN"),
  hibpKanonApiRoot: getEnvString("HIBP_KANON_API_ROOT"),
  hibpKanonApiToken: getEnvString("HIBP_KANON_API_TOKEN"),
  hibpBreachDomainBlocklist: getEnvString("HIBP_BREACH_DOMAIN_BLOCKLIST", {
    fallbackValue: "",
  }),

  s3Bucket: getEnvString("S3_BUCKET"),

  deleteUnverifiedSubscribersTimer: getEnvInt(
    "DELETE_UNVERIFIED_SUBSCRIBERS_TIMER",
    { fallbackValue: 24 * 60 * 60 },
  ),

  nimbusUuidNamespace: getEnvString("NIMBUS_UUID_NAMESPACE"),
  nimbusSidecarUrl: getEnvString("NIMBUS_SIDECAR_URL"),

  // These can be left undefined locally if you're not working on code
  // that references these values; check whether these values are defined on use.
  fxRemoteSettingsWriterUser: process.env.FX_REMOTE_SETTINGS_WRITER_USER,
  fxRemoteSettingsWriterPass: process.env.FX_REMOTE_SETTINGS_WRITER_PASS,
  fxRemoteSettingsWriterServer: process.env.FX_REMOTE_SETTINGS_WRITER_SERVER,

  gcp: {
    projectId: getEnvString("GCP_PUBSUB_PROJECT_ID", {
      fallbackValue: isLocalOrTest ? "your-project-name" : undefined,
    }),
    pubsub: {
      hibpTopic: getEnvString("GCP_PUBSUB_TOPIC_NAME", {
        fallbackValue: isLocalOrTest ? "hibp-breaches" : undefined,
      }),
    },
  },
  aws: {
    accessKeyId: getEnvString("AWS_ACCESS_KEY_ID", { fallbackValue: "" }),
    secretAccessKey: getEnvString("AWS_SECRET_ACCESS_KEY", {
      fallbackValue: "",
    }),
    region: getEnvString("AWS_REGION", { fallbackValue: "us-west-1" }),
    s3: {
      logoBucket: getEnvString("S3_BUCKET", { fallbackValue: "" }),
    },
  },
} as const;
/* c8 ignore end */

/**
 * Like {@link getEnvString}, but also ensures the value is a valid integer
 *
 * @param key Key whose value to look up in the environment.
 * @param options.fallbackValue If specified, value to return if no integer value for the given `key` was found. If not provided, this function will throw an error if the value is not found.
 * @returns Value for the given `key`, `options.fallbackValue` if no value is found (or throws an error if that is not set).
 */
export function getEnvInt(
  key: string,
  options: Partial<{ fallbackValue: number }> = {},
): number {
  try {
    const valueString = getEnvString(key);
    const value = Number.parseInt(valueString, 10);
    if (Number.isNaN(value)) {
      throw new Error(
        `Variable $${key} is set to [${valueString}], which is not a valid number.`,
      );
    }
    return value;
  } catch (e) {
    if (typeof options.fallbackValue === "number") {
      return options.fallbackValue;
    }
    throw e;
  }
}

/**
 * Like {@link getEnvString}, but also checks that the value is one of `possibleValues`
 *
 * @param key Key whose value to look up in the environment.
 * @param possibleValues Allowed values for the given key.
 * @param options.fallbackValue If specified, value to return if no value matching `possibleValues` for the given `key` was found. If not provided, this function will throw an error if the value is not found.
 * @returns Value for the given `key`, `options.fallbackValue` if no value is found (or throws an error if that is not set).
 */
export function getEnvEnum<T extends string>(
  key: string,
  possibleValues: Array<T>,
  options: Partial<{ fallbackValue: T }> = {},
): T {
  try {
    const value = getEnvString(key);
    if (!possibleValues.includes(value as T)) {
      throw new Error(
        `Variable $${key} is set to [${value}], which is not one of the allowed values: ${JSON.stringify(possibleValues)}.`,
      );
    }
    return value as T;
  } catch (e) {
    if (typeof options.fallbackValue === "string") {
      return options.fallbackValue;
    }
    throw e;
  }
}

/**
 * Reads an environment variable, returning a fallback value if it's not set, or throws an error if no fallback value was provided.
 *
 * Environment variables are looked up by `key` from the following places,
 * in order, stopping when the variable is found:
 *
 * - Environment variables
 * - `.env.<$NODE_ENV>.local`
 * - `.env.local`
 * - `.env.<$NODE_ENV>`
 * - `.env`
 *
 * @param key Key whose value to look up in the environment.
 * @param options.fallbackValue If specified, value to return if no value for the given `key` was found. If not provided, this function will throw an error if the value is not found.
 * @returns Value for the given `key`, `options.fallbackValue` if no value is found (or throws an error if that is not set).
 */
export function getEnvString(
  key: string,
  options: Partial<{ fallbackValue: string }> = {},
): string {
  const value = process.env[key];
  if (typeof value !== "string" || value === "") {
    if (typeof options.fallbackValue === "string") {
      return options.fallbackValue;
    }
    throw new Error(
      `Variable $${key} is not defined in \`.env\`, \`.env.${process.env.NODE_ENV}\`, \`.env.local\` and \`.env.${process.env.NODE_ENV}.local\`, nor as an environment variable.`,
    );
  }

  return value;
}
