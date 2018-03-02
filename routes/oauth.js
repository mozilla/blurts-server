"use strict";

const AppConstants = require("../app-constants");

const ClientOAuth2 = require("client-oauth2");
const crypto = require("crypto");
const express = require("express");
const popsicle = require("popsicle");
const router = express.Router();

const Subscribers = require("../subscribers");

// This object exists instead of inlining the env vars to make it easy
// to abstract fetching API endpoints from the OAuth server (instead
// of specifying them in the environment) in the future.
const FxAOAuthUtils = {
  get authorizationUri() { return AppConstants.OAUTH_AUTHORIZATION_URI; },
  get tokenUri() { return AppConstants.OAUTH_TOKEN_URI; },
  get profileUri() { return AppConstants.OAUTH_PROFILE_URI; },
};

const FxAOAuth = new ClientOAuth2({
  clientId: AppConstants.OAUTH_CLIENT_ID,
  clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
  accessTokenUri: FxAOAuthUtils.tokenUri,
  authorizationUri: FxAOAuthUtils.authorizationUri,
  redirectUri: AppConstants.SERVER_URL + "/oauth/redirect",
  scopes: ["profile:email"],
});

router.get("/init", (req, res) => {
  // Set a random state string in a cookie so that we can verify
  // the user when they're redirected back to us after auth.
  const state = crypto.randomBytes(40).toString("hex");
  const uri = FxAOAuth.code.getUri({state});
  req.session.state = state;
  res.redirect(uri);
});

router.get("/redirect", (req, res) => {
  if (!req.session.state) {
    // TODO: Needs better error message
    res.send("Who are you?");
    return;
  }
  (async () => {
    try {
      const user = await FxAOAuth.code.getToken(req.originalUrl, { state: req.session.state });
      const data = await popsicle.get({
        method: "get",
        url: FxAOAuthUtils.profileUri,
        body: "",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      const email = JSON.parse(data.body).email;
      await Subscribers.addUser(email);
      res.send(`Registered ${email} for breach alerts. You may now close this window/tab.`);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  })();
});

module.exports = router;
