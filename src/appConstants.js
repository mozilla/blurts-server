/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

if (typeof process.env.NEXT_RUNTIME === "undefined" && typeof process.env.STORYBOOK === "undefined") {
  // Next.js already loads env vars by itself, and dotenv-flow will throw an
  // error if loaded in that context (about `fs` not existing), so only load
  // it if we're not running in a Next.js-context (e.g. cron jobs):
  await import("dotenv-flow/config");
}

// TODO: these vars were copy/pasted from the old app-constants.js and should be cleaned up
const requiredEnvVars = [
  'ADMINS',
  'APP_ENV',
  'DATABASE_URL',
  'DELETE_UNVERIFIED_SUBSCRIBERS_TIMER',
  'EMAIL_FROM',
  'HIBP_API_ROOT',
  'HIBP_KANON_API_ROOT',
  'HIBP_KANON_API_TOKEN',
  'HIBP_NOTIFY_TOKEN',
  'HIBP_THROTTLE_DELAY',
  'HIBP_THROTTLE_MAX_TRIES',
  'FXA_SETTINGS_URL',
  'NODE_ENV',
  'OAUTH_ACCOUNT_URI',
  'OAUTH_AUTHORIZATION_URI',
  'OAUTH_CLIENT_ID',
  'OAUTH_CLIENT_SECRET',
  'OAUTH_PROFILE_URI',
  'OAUTH_TOKEN_URI',
  'SERVER_URL',
  'SES_CONFIG_SET',
  'SMTP_URL',
  'SUPPORTED_LOCALES'
]

const optionalEnvVars = [
  'FX_REMOTE_SETTINGS_WRITER_PASS',
  'FX_REMOTE_SETTINGS_WRITER_SERVER',
  'FX_REMOTE_SETTINGS_WRITER_USER',
  'HIBP_BREACH_DOMAIN_BLOCKLIST',
  'PREMIUM_PRODUCT_ID',
  'PG_HOST',
  'NEXTAUTH_REDIRECT_URL'
]

/** @type {Record<string, string>} */
const AppConstants = { }

if (!process.env.SERVER_URL && (process.env.APP_ENV) === 'heroku') {
  process.env.SERVER_URL = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
}

for (const v of requiredEnvVars) {
  const value = process.env[v]
  if (value === undefined) {
    console.warn(`Required environment variable was not set: ${v}`)
  } else {
    AppConstants[v] = value
  }
}

optionalEnvVars.forEach(key => {
  const value = process.env[key]
  if (value) AppConstants[key] = value
})

export default AppConstants.NODE_ENV === 'test'
  ? AppConstants
  : Object.freeze(AppConstants)
