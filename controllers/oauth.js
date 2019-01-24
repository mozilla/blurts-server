"use strict";
const { URL } = require("url");

const ClientOAuth2 = require("client-oauth2");
const crypto = require("crypto");
const got = require("got");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError } = require("../locale-utils");
const HBSHelpers = require("../hbs-helpers");
const HIBP = require("../hibp");
const mozlog = require("../log");
const sha1 = require("../sha1-utils");


const log = mozlog("controllers.oauth");

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

function init(req, res, next, client = FxAOAuthClient) {
  // Set a random state string in a cookie so that we can verify
  // the user when they're redirected back to us after auth.
  const state = crypto.randomBytes(40).toString("hex");
  req.session.state = state;
  const url = new URL(client.code.getUri({state}));
  url.searchParams.append("access_type", "offline");
  url.searchParams.append("action", "email");
  if (req.query.scanned) {
    url.searchParams.append("email", req.query.scanned);
  }
  res.redirect(url);
}


async function confirmed(req, res, next, client = FxAOAuthClient) {
  if (!req.session.state) {
    throw new FluentError("oauth-invalid-session");
  }

  const fxaUser = await client.code.getToken(req.originalUrl, { state: req.session.state });
  log.debug("fxa-confirmed-fxaUser", fxaUser);
  const data = await got(FxAOAuthUtils.profileUri,
    {
    headers: {
      Authorization: `Bearer ${fxaUser.accessToken}`,
    },
  });
  log.debug("fxa-confirmed-profile-data", data.body);
  const email = JSON.parse(data.body).email;

  const existingUser = await DB.getSubscribersByEmail(email);
  if (existingUser.length === 0) {
    req.session.newUser = true;
  }

  const signupLanguage = req.headers["accept-language"];

  await DB.addSubscriber(email, signupLanguage, fxaUser.refreshToken, data.body);

  const unsubscribeUrl = ""; // not totally sure yet how this gets handled long-term

  // duping some of user/verify for now
  let unsafeBreachesForEmail = [];

  unsafeBreachesForEmail = await HIBP.getBreachesForEmail(
    sha1(email),
    req.app.locals.breaches,
    true,
  );

  await EmailUtils.sendEmail(
    email,
    req.fluentFormat("user-verify-email-report-subject"),
    "default_email",
    {
      supportedLocales: req.supportedLocales,
      email: email,
      date: HBSHelpers.prettyDate(req.supportedLocales, new Date()),
      unsafeBreachesForEmail: unsafeBreachesForEmail,
      unsubscribeUrl: unsubscribeUrl,
      buttonValue: req.fluentFormat("report-scan-another-email"),
      whichView: "email_partials/report",
    }
  );

  req.session.user = JSON.parse(data.body);
  res.redirect("/scan/latest_breaches");
}


module.exports = {
  init,
  confirmed,
};
