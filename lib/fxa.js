"use strict";

const ClientOAuth2 = require("client-oauth2");
const got = require("got");
const { URL } = require("url");

const AppConstants = require("../app-constants");
const mozlog = require("../log");


const log = mozlog("fxa");

// This object exists instead of inlining the env vars to make it easy
// to abstract fetching API endpoints from the OAuth server (instead
// of specifying them in the environment) in the future.
const FxAOAuthUtils = {
  get authorizationUri() { return AppConstants.OAUTH_AUTHORIZATION_URI; },
  get tokenUri() { return AppConstants.OAUTH_TOKEN_URI; },
  get profileUri() { return AppConstants.OAUTH_PROFILE_URI; },
};

const FxAOAuthClient = new ClientOAuth2({
  clientId: AppConstants.OAUTH_CLIENT_ID,
  clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
  accessTokenUri: FxAOAuthUtils.tokenUri,
  authorizationUri: FxAOAuthUtils.authorizationUri,
  redirectUri: AppConstants.SERVER_URL + "/oauth/confirmed",
  scopes: ["profile"],
});

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

  async getProfileData(accessToken) {
    try {
      const data = await got(FxAOAuthUtils.profileUri,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      return data.body;
    } catch (e) {
      log.warn("getProfileData", {stack: e.stack});
      return e;
    }
  },

  async sendMetricsFlowPing(path) {
    const fxaMetricsFlowUrl = new URL(path, AppConstants.FXA_SETTINGS_URL);
    const fxaMetricsFlowOptions = {
      method: "GET",
      headers: { Origin: AppConstants.SERVER_URL },
    };
    try {
      log.info(`GETting ${fxaMetricsFlowUrl}, with options: ${JSON.stringify(fxaMetricsFlowOptions)}`);
      const fxaResp = await got(fxaMetricsFlowUrl, fxaMetricsFlowOptions);
      log.info("pinged FXA metrics flow.");
      return fxaResp;
    } catch (e) {
      log.error("sendMetricsFlowPing", {stack: e.stack});
      return false;
    }
  },

};


module.exports = {
  FXA,
  FxAOAuthClient,
};
