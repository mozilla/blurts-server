"use strict";

/* eslint-disable no-process-env */

require("dotenv").load();

const kEnvironmentVariables = [
  "SERVER_URL",
  "PORT",
  "COOKIE_SECRET",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USERNAME",
  "SMTP_PASSWORD",
  "OAUTH_AUTHORIZATION_URI",
  "OAUTH_TOKEN_URI",
  "OAUTH_PROFILE_URI",
  "OAUTH_CLIENT_ID",
  "OAUTH_CLIENT_SECRET",
];

const AppConstants = {
  init() {
    for (let v of kEnvironmentVariables) {
      if (process.env[v] === undefined) {
        throw new Error(`Required environment variable was not set: ${v}`);
      }
      this[v] = process.env[v];
    }
    return this;
  }
};

module.exports = AppConstants;
