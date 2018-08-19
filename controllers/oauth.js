"use strict";

const ClientOAuth2 = require("client-oauth2");
const crypto = require("crypto");
const got = require("got");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");


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
  redirectUri: AppConstants.SERVER_URL + "/oauth/confirmed",
  scopes: ["profile:email"],
});


function init(req, res) {
  // Set a random state string in a cookie so that we can verify
  // the user when they're redirected back to us after auth.
  const state = crypto.randomBytes(40).toString("hex");
  const uri = FxAOAuth.code.getUri({state});
  req.session.state = state;
  res.redirect(uri);
}


async function confirmed(req, res) {
  if (!req.session.state) {
    // TODO: Needs better error message
    res.set("Content-Type", "text/text");
    res.send("Who are you?");
    return;
  }

  try {
    const fxaUser = await FxAOAuth.code.getToken(req.originalUrl, { state: req.session.state });
    const data = await got(FxAOAuthUtils.profileUri,
      {
      headers: {
        Authorization: `Bearer ${fxaUser.accessToken}`,
      },
    });
    const email = JSON.parse(data.body).email;
    await DB.addSubscriber(email);

    res.render("confirm", {
      title: "Firefox Monitor : Subscribed",
      email: email,
    });
  } catch (err) {
    console.error(err);
    res.send(err);
  }
}


module.exports = {
  init,
  confirmed,
};
