"use strict";

const got = require("got");
const { URL } = require("url");

const AppConstants = require("../app-constants");
const mozlog = require("../log");


const log = mozlog("fxa");

const FXA = {

  async _postTokenRequest(path, token) {
    const fxaTokenOrigin = new URL(AppConstants.OAUTH_TOKEN_URI).origin;
    const tokenUrl = `${fxaTokenOrigin}${path}`;
    const tokenBody = (typeof token === "object") ? token : {token};
    const tokenOptions = {
      method: "POST",
      json: true,
      body: tokenBody,
    };

    try {
      const response = await got(tokenUrl, tokenOptions);
      return response;
    } catch (e) {
      log.error("_postTokenRequest", {stack: e.stack});
      return e;
    }
  },

  async verifyOAuthToken(token) {
    try {
      const response = await this._postTokenRequest("/v1/verify", token);
      return response;
    } catch (e) {
      log.error("verifyOAuthToken", {stack: e.stack});
    }
  },

  async destroyOAuthToken(token) {
    try {
      const response = await this._postTokenRequest("/v1/destroy", token);
      return response;
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
