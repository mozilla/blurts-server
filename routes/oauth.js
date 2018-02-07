"use strict";

const AppConstants = require("../app-constants");

const ClientOAuth2 = require("client-oauth2");
const crypto = require("crypto");
const express = require("express");
const popsicle = require("popsicle");
const router = express.Router();

const gEmails = require("../subscribers");

// This object exists instead of inlining the env vars to make it easy
// to abstract fetching API endpoints from the OAuth server (instead
// of specifying them in the environment) in the future.
const FxAOAuthUtils = {
  get authorizationUri() { return AppConstants.OAUTH_AUTHORIZATION_URI },
  get tokenUri() { return AppConstants.OAUTH_TOKEN_URI },
  get profileUri() { return AppConstants.OAUTH_PROFILE_URI },
};

var FxAOAuth = new ClientOAuth2({
  clientId: AppConstants.OAUTH_CLIENT_ID,
  clientSecret: AppConstants.OAUTH_CLIENT_SECRET,
  accessTokenUri: FxAOAuthUtils.tokenUri,
  authorizationUri: FxAOAuthUtils.authorizationUri,
  redirectUri: AppConstants.SERVER_URL + "/oauth/redirect",
  scopes: ["profile:email"],
});

router.get("/init", function(req, res) {
  // Set a random state string in a cookie so that we can verify
  // the user when they're redirected back to us after auth.
  let state = crypto.randomBytes(40).toString("hex");
  let uri = FxAOAuth.code.getUri({state});
  req.session.state = state;
  res.redirect(uri);
});

router.get("/redirect", function (req, res) {
  if (!req.session.state) {
    res.send("Who are you?");
    return;
  }
  FxAOAuth.code.getToken(req.originalUrl, { state: req.session.state })
    .then(function (user) {
      return popsicle.get({
        method: "get",
        url: FxAOAuthUtils.profileUri,
        body: "",
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      }).then(function (data) {
        let email = JSON.parse(data.body).email;
        gEmails.add(email);
        res.send("Registered " + email + " for breach alerts. You may now close this window/tab.");
      });
    })
    .catch(function (err) {
      res.send(err);
    });
});

module.exports = router;
