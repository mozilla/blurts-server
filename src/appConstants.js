/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// TODO: these vars were copy/pasted from the old app-constants.js and should be cleaned up
import * as dotenv from 'dotenv'
dotenv.config()

const requiredEnvVars = [
  'ADMINS',
  'COOKIE_SECRET',
  'CSRF_SECRET',
  'DATABASE_URL',
  'DELETE_UNVERIFIED_SUBSCRIBERS_TIMER',
  'EMAIL_FROM',
  'FXA_ENABLED',
  'FXA_SETTINGS_URL',
  'HIBP_API_ROOT',
  'HIBP_KANON_API_ROOT',
  'HIBP_KANON_API_TOKEN',
  'HIBP_NOTIFY_TOKEN',
  'HIBP_THROTTLE_DELAY',
  'HIBP_THROTTLE_MAX_TRIES',
  'LOGOS_ORIGIN',
  'MAX_NUM_ADDRESSES',
  'MOZLOG_FMT',
  'MOZLOG_LEVEL',
  'NODE_ENV',
  'OAUTH_AUTHORIZATION_URI',
  'OAUTH_CLIENT_ID',
  'OAUTH_CLIENT_SECRET',
  'OAUTH_PROFILE_URI',
  'OAUTH_TOKEN_URI',
  'ONEREP_API_KEY',
  'REDIS_URL',
  'SENTRY_DSN',
  'SERVER_URL',
  'SES_CONFIG_SET',
  'SESSION_DURATION_HOURS',
  'SMTP_URL',
  'SUPPORTED_LOCALES'
]

const optionalEnvVars = [
  'EMAIL_TEST_RECIPIENT',
  'FX_REMOTE_SETTINGS_WRITER_PASS',
  'FX_REMOTE_SETTINGS_WRITER_SERVER',
  'FX_REMOTE_SETTINGS_WRITER_USER',
  'GA4_DEBUG_MODE',
  'GA4_MEASUREMENT_ID',
  'HIBP_BREACH_DOMAIN_BLOCKLIST',
  'LIVE_RELOAD',
  'OPTINMONSTER_ACCOUNT',
  'OPTINMONSTER_USER',
  'PORT',
  'SENTRY_DSN_LEGACY'
]

/** @type {Record<string, string>} */
const AppConstants = { }

if (!process.env.SERVER_URL && process.env.NODE_ENV === 'heroku') {
  process.env.SERVER_URL = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
}

for (const v of requiredEnvVars) {
  const value = process.env[v]
  if (value === undefined) {
    throw new Error(`Required environment variable was not set: ${v}`)
  }
  AppConstants[v] = value
}

optionalEnvVars.forEach(key => {
  const value = process.env[key]
  if (value) AppConstants[key] = value
})

export default AppConstants.NODE_ENV === 'test'
  ? AppConstants
  : Object.freeze(AppConstants)
