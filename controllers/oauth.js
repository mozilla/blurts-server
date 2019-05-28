"use strict";
const { URL } = require("url");

const ClientOAuth2 = require("client-oauth2");
const crypto = require("crypto");
const got = require("got");

const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const { FluentError } = require("../locale-utils");
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
  const fxaParams = new URL(req.url, AppConstants.SERVER_URL);

  url.searchParams.append("access_type", "offline");
  url.searchParams.append("action", "email");

  for (const param of fxaParams.searchParams.keys()) {
    url.searchParams.append(param, fxaParams.searchParams.get(param));
  }
  res.redirect(url);
}


async function confirmed(req, res, next, client = FxAOAuthClient) {
  if (!req.session.state) {
    throw new FluentError("oauth-invalid-session");
  }

  const fxaUser = await client.code.getToken(req.originalUrl, { state: req.session.state });
  // Clear the session.state to clean up and avoid any replays
  req.session.state = null;
  log.debug("fxa-confirmed-fxaUser", fxaUser);
  const data = await got(FxAOAuthUtils.profileUri,
    {
    headers: {
      Authorization: `Bearer ${fxaUser.accessToken}`,
    },
  });
  log.debug("fxa-confirmed-profile-data", data.body);
  const email = JSON.parse(data.body).email;

  const existingUser = await DB.getSubscriberByEmail(email);
  req.session.user = existingUser;

  // Check if user is signing up or signing in,
  // then add new users to db and send email.
  if (!existingUser || existingUser.fxa_refresh_token === null) {
    // req.session.newUser determines whether or not we show "fxa_new_user_bar" in template
    req.session.newUser = true;
    const signupLanguage = req.headers["accept-language"];
    const verifiedSubscriber = await DB.addSubscriber(email, signupLanguage, fxaUser.refreshToken, data.body);

    // duping some of user/verify for now
    let unsafeBreachesForEmail = [];

    unsafeBreachesForEmail = await HIBP.getBreachesForEmail(
      sha1(email),
      req.app.locals.breaches,
      true,
    );

    const utmID = "report";


    await EmailUtils.sendEmail(
      email,
      req.fluentFormat("user-verify-email-report-subject"),
      "default_email",
      {
        supportedLocales: req.supportedLocales,
        breachedEmail: email,
        date: req.fluentFormat(new Date()),
        unsafeBreachesForEmail: unsafeBreachesForEmail,
        scanAnotherEmailHref: EmailUtils.getScanAnotherEmailUrl(utmID),
        unsubscribeUrl: EmailUtils.getUnsubscribeUrl(verifiedSubscriber, utmID),
        buttonValue: req.fluentFormat("report-scan-another-email"),
        whichView: "email_partials/report",
      }
    );
    req.session.user = verifiedSubscriber;
  }
  res.redirect("/user/dashboard");
}

module.exports = {
  init,
  confirmed,
};
