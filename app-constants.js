"use strict";

/* eslint-disable no-process-env */

const path = require("path");
require("dotenv").load({path: path.join(__dirname, ".env")});

const kEnvironmentVariables = [
  "NODE_ENV",
  "DISABLE_DOCKERFLOW",
  "SERVER_URL",
  "PORT",
  "COOKIE_SECRET",
  "SMTP_URL",
  "EMAIL_FROM",
  "SES_CONFIG_SET",
  "SES_USERNAME",
  "SES_PASSWORD",
  "OAUTH_AUTHORIZATION_URI",
  "OAUTH_TOKEN_URI",
  "OAUTH_PROFILE_URI",
  "OAUTH_CLIENT_ID",
  "OAUTH_CLIENT_SECRET",
  "HIBP_KANON_API_ROOT",
  "HIBP_KANON_API_TOKEN",
  "HIBP_API_ROOT",
  "HIBP_API_TOKEN",
  "DATABASE_URL",
  "DELETE_UNVERIFIED_SUBSCRIBERS_TIMER",
];

const AppConstants = { };

for (const v of kEnvironmentVariables) {
  if (process.env[v] === undefined) {
    throw new Error(`Required environment variable was not set: ${v}`);
  }
  AppConstants[v] = process.env[v];
}

module.exports = Object.freeze(AppConstants);
