'use strict'

/* eslint-disable no-process-env */

const path = require('path')
const fs = require('fs')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const requiredEnvVars = [
  'NODE_ENV',
  'SERVER_URL',
  'LOGOS_ORIGIN',
  'COOKIE_SECRET',
  'SESSION_DURATION_HOURS',
  'SMTP_URL',
  'EMAIL_FROM',
  'SES_CONFIG_SET',
  'SES_NOTIFICATION_LOG_ONLY',
  'BREACH_RESOLUTION_ENABLED',
  'FXA_ENABLED',
  'FXA_SETTINGS_URL',
  'FX_REMOTE_SETTINGS_WRITER_SERVER',
  'FX_REMOTE_SETTINGS_WRITER_USER',
  'FX_REMOTE_SETTINGS_WRITER_PASS',
  'MOZLOG_FMT',
  'MOZLOG_LEVEL',
  'OAUTH_AUTHORIZATION_URI',
  'OAUTH_TOKEN_URI',
  'OAUTH_PROFILE_URI',
  'OAUTH_CLIENT_ID',
  'OAUTH_CLIENT_SECRET',
  'HIBP_KANON_API_ROOT',
  'HIBP_KANON_API_TOKEN',
  'HIBP_API_ROOT',
  'HIBP_RELOAD_BREACHES_TIMER',
  'HIBP_THROTTLE_DELAY',
  'HIBP_THROTTLE_MAX_TRIES',
  'HIBP_NOTIFY_TOKEN',
  'DATABASE_URL',
  'PAGE_TOKEN_TIMER',
  'PRODUCT_PROMOS_ENABLED',
  'REDIS_URL',
  'SENTRY_DSN',
  'DELETE_UNVERIFIED_SUBSCRIBERS_TIMER',
  'EXPERIMENT_ACTIVE',
  'MAX_NUM_ADDRESSES'
]

const optionalEnvVars = [
  'PORT',
  'RECRUITMENT_BANNER_LINK',
  'RECRUITMENT_BANNER_TEXT',
  'GEOIP_GEOLITE2_PATH',
  'GEOIP_GEOLITE2_CITY_FILENAME',
  'GEOIP_GEOLITE2_COUNTRY_FILENAME',
  'VPN_PROMO_BLOCKED_LOCALES',
  'EDUCATION_VIDEO_URL_RELAY',
  'EDUCATION_VIDEO_URL_VPN',
  'ADMINS',
  'MONTHLY_CRON_ENABLED'
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

AppConstants.VPN_PROMO_BLOCKED_LOCALES = AppConstants.VPN_PROMO_BLOCKED_LOCALES?.split(',')

AppConstants.AD_UNIT_TOTAL = fs.readdirSync(path.join(__dirname, 'views/partials/ad-units')).length

module.exports = Object.freeze(AppConstants)
