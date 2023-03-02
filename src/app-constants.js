/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// TODO: these vars were copy/pasted from the old app-constants.js and should be cleaned up
import * as dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const requiredEnvVars = [
  'ADMINS',
  'BREACH_RESOLUTION_ENABLED',
  'COOKIE_SECRET',
  'CSRF_SECRET',
  'DATABASE_URL',
  'DELETE_UNVERIFIED_SUBSCRIBERS_TIMER',
  'EMAIL_FROM',
  'EXPERIMENT_ACTIVE',
  'FX_REMOTE_SETTINGS_WRITER_PASS',
  'FX_REMOTE_SETTINGS_WRITER_SERVER',
  'FX_REMOTE_SETTINGS_WRITER_USER',
  'FXA_ENABLED',
  'FXA_SETTINGS_URL',
  'HIBP_API_ROOT',
  'HIBP_KANON_API_ROOT',
  'HIBP_KANON_API_TOKEN',
  'HIBP_NOTIFY_TOKEN',
  'HIBP_RELOAD_BREACHES_TIMER',
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
  'PAGE_TOKEN_TIMER',
  'PRODUCT_PROMOS_ENABLED',
  'REDIS_URL',
  'SENTRY_DSN',
  'SERVER_URL',
  'SES_CONFIG_SET',
  'SES_NOTIFICATION_LOG_ONLY',
  'SESSION_DURATION_HOURS',
  'SMTP_URL',
  'SUPPORTED_LOCALES'
]

const optionalEnvVars = [
  'EDUCATION_VIDEO_URL_RELAY',
  'EMAIL_TEST_RECIPIENT',
  'GA4_MEASUREMENT_ID',
  'GEOIP_GEOLITE2_CITY_FILENAME',
  'GEOIP_GEOLITE2_COUNTRY_FILENAME',
  'GEOIP_GEOLITE2_PATH',
  'PORT',
  'RECRUITMENT_BANNER_LINK',
  'RECRUITMENT_BANNER_TEXT',
  'SENTRY_DSN_LEGACY',
  'VPN_PROMO_BLOCKED_LOCALES'
]

const AppConstants = { }

if (!process.env.SERVER_URL && process.env.NODE_ENV === 'heroku') {
  process.env.SERVER_URL = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
}

for (const v of requiredEnvVars) {
  if (process.env[v] === undefined) {
    throw new Error(`Required environment variable was not set: ${v}`)
  }
  AppConstants[v] = process.env[v]
}

optionalEnvVars.forEach(key => {
  if (key in process.env) AppConstants[key] = process.env[key]
})

export default Object.freeze(AppConstants)
