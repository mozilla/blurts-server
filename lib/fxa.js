"use strict";

const got = require("got");
const { URL } = require("url");

const AppConstants = require("../app-constants");
const mozlog = require("../log");


const log = mozlog("fxa");

const FXA = {

  async destroyOAuthToken(token) {
    const fxaTokenOrigin = new URL(AppConstants.OAUTH_TOKEN_URI).origin;
    const tokenDestroyUrl = `${fxaTokenOrigin}/v1/destroy`;
    const tokenDestroyParams = token;
    const tokenDestroyOptions = {
      method: "POST",
      headers: {"Authorization": `Bearer ${AppConstants.OAUTH_CLIENT_SECRET}`},
      json: true,
      body: tokenDestroyParams,
    };

    try {
      return await got(tokenDestroyUrl, tokenDestroyOptions);
    } catch (e) {
      log.error("destroyOAuthToken", {stack: e.stack});
    }
  },

  async revokeOAuthTokens(subscriber) {
    await this.destroyOAuthToken({ token: subscriber.fxa_access_token });
    await this.destroyOAuthToken({ refresh_token: subscriber.fxa_refresh_token });
  },

};


module.exports = FXA;
