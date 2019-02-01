"use strict";

// initialize Sentry ASAP to capture fatal startup errors
const Sentry = require("@sentry/node");
const AppConstants = require("./app-constants");
Sentry.init({
  dsn: AppConstants.SENTRY_DSN,
  environment: AppConstants.NODE_ENV,
});

const express = require("express");
const exphbs = require("express-handlebars");
const helmet = require("helmet");
const sessions = require("client-sessions");
const { URL } = require("url");

const EmailUtils = require("./email-utils");
const HBSHelpers = require("./hbs-helpers");
const HIBP = require("./hibp");
const {addRequestToResponse, pickLanguage, logErrors, localizeErrorMessages, clientErrorHandler, errorHandler} = require("./middleware");
const { LocaleUtils } = require("./locale-utils");
const mozlog = require("./log");

const DockerflowRoutes = require("./routes/dockerflow");
const HibpRoutes = require("./routes/hibp");
const HomeRoutes = require("./routes/home");
const ScanRoutes = require("./routes/scan");
const SesRoutes = require("./routes/ses");
const OAuthRoutes = require("./routes/oauth");
const UserRoutes = require("./routes/user");
const EmailL10nRoutes= require("./routes/email-l10n");

const log = mozlog("server");
const app = express();

// Redirect non-dev environments to HTTPS
app.enable("trust proxy");

if (app.get("env") !== "dev") {
  app.use( (req, res, next) => {
    if (req.secure) {
      next();
    } else {
      res.redirect("https://" + req.headers.host + req.url);
    }
  });
}

try {
  LocaleUtils.init();
  LocaleUtils.loadLanguagesIntoApp(app);
} catch (error) {
  log.error("try-load-languages-error", { error: error });
}

(async () => {
  try {
    await HIBP.loadBreachesIntoApp(app);
  } catch (error) {
    log.error("try-load-breaches-error", { error: error });
  }
})();

// Use helmet to set security headers
// disable default HSTS; Ops handles it in stage & prod configs
app.use(helmet({
  hsts: false,
}));

const SCRIPT_SOURCES = ["'self'", "https://www.google-analytics.com/analytics.js"];
const STYLE_SOURCES = ["'self'", "https://code.cdn.mozilla.net/fonts/"];
const FRAME_ANCESTORS = ["'none'"];

app.locals.ENABLE_PONTOON_JS = false;
// Allow pontoon.mozilla.org on heroku for in-page localization
const PONTOON_DOMAIN = "https://pontoon.mozilla.org";
if (AppConstants.NODE_ENV === "heroku") {
  app.locals.ENABLE_PONTOON_JS = true;
  SCRIPT_SOURCES.push(PONTOON_DOMAIN);
  STYLE_SOURCES.push(PONTOON_DOMAIN);
  FRAME_ANCESTORS.push(PONTOON_DOMAIN);
  app.use(helmet.frameguard({
    action: "allow-from",
    domain: PONTOON_DOMAIN,
  }));
}

const imgSrc = [
  "'self'",
  "https://www.google-analytics.com",
];
if (AppConstants.FXA_ENABLED) {
  const fxaProfileImgSrc = new URL(AppConstants.OAUTH_PROFILE_URI).origin;
  imgSrc.push(fxaProfileImgSrc);
}

app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'self'"],
    connectSrc: [
      "'self'",
      "https://code.cdn.mozilla.net/fonts/",
      "https://www.google-analytics.com",
    ],
    fontSrc: [
      "'self'",
      "https://code.cdn.mozilla.net/fonts/",
    ],
    frameAncestors: FRAME_ANCESTORS,
    mediaSrc: ["'self'"],
    imgSrc: imgSrc,
    objectSrc: ["'none'"],
    scriptSrc: SCRIPT_SOURCES,
    styleSrc: STYLE_SOURCES,
    reportUri: "/__cspreport__",
  },
}));
app.use(helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" }));
app.use(express.static("public", {
  setHeaders: res => res.set("Cache-Control",
    "public, maxage=" + 10 * 60 * 1000 + ", s-maxage=" + 24 * 60 * 60 * 1000),
})); // 10-minute client-side caching; 24-hour server-side caching

app.engine("hbs", exphbs({
  extname: ".hbs",
  layoutsDir: __dirname + "/views/layouts",
  defaultLayout: "default",
  partialsDir: __dirname + "/views/partials",
  helpers: HBSHelpers,
}));
app.set("view engine", "hbs");

const cookie = {httpOnly: true, sameSite: "lax"};

if (app.get("env") === "dev") {
  app.set("trust proxy", false);
} else {
  app.set("trust proxy", true);
}

app.locals.FXA_ENABLED = AppConstants.FXA_ENABLED;
app.locals.SERVER_URL = AppConstants.SERVER_URL;
app.locals.UTM_SOURCE = new URL(AppConstants.SERVER_URL).hostname;

app.use(sessions({
  cookieName: "session",
  secret: AppConstants.COOKIE_SECRET,
  duration: 15 * 60 * 1000, // 15 minutes
  activeDuration: 5 * 60 * 1000, // 5 minutes
  cookie: cookie,
}));

app.use(pickLanguage);
app.use(addRequestToResponse);

app.use("/", DockerflowRoutes);
app.use("/hibp", HibpRoutes);
if (AppConstants.FXA_ENABLED) {
  app.use("/oauth", OAuthRoutes);
}
app.use("/scan", ScanRoutes);
app.use("/ses", SesRoutes);
app.use("/user", UserRoutes);
if (["dev", "heroku"].includes(AppConstants.NODE_ENV)) {
  app.use("/email-l10n", EmailL10nRoutes);
}
app.use("/", HomeRoutes);

app.use(logErrors);
app.use(localizeErrorMessages);
app.use(clientErrorHandler);
app.use(errorHandler);

EmailUtils.init().then(() => {
  const listener = app.listen(AppConstants.PORT, () => {
    log.info("Listening", { port: listener.address().port });
  });
}).catch(error => {
  log.error("try-initialize-email-error", { error: error });
});
