"use strict";

const got = require("got");
const { URL } = require("url");

const AppConstants = require("../app-constants");
const mozlog = require("../log");


const log = mozlog("fxa");

const FXA = {

  async revokeOAuthToken(fxaRefreshToken) {
    const fxaTokenOrigin = new URL(AppConstants.OAUTH_TOKEN_URI).origin;
    const tokenDestroyUrl = `${fxaTokenOrigin}/v1/destroy`;
    const tokenDestroyParams = { refresh_token: fxaRefreshToken };
    const tokenDestroyOptions = {
      method: "POST",
      headers: {"Authorization": `Bearer ${AppConstants.OAUTH_CLIENT_SECRET}`},
      json: true,
      body: tokenDestroyParams,
    };

    try {
      await got(tokenDestroyUrl, tokenDestroyOptions);
    } catch (e) {
      log.error("fxa", {stack: e.stack});
    }
  },

};


module.exports = FXA;
