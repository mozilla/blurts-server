"use strict";

// initialize Sentry ASAP to capture fatal startup errors
const Sentry = require("@sentry/node");
const AppConstants = require("./app-constants");
Sentry.init({
  dsn: AppConstants.SENTRY_DSN,
  environment: AppConstants.NODE_ENV,
});

const connectRedis = require("connect-redis");
const express = require("express");
const exphbs = require("express-handlebars");
const helmet = require("helmet");
const redis = require("redis");
const session = require("express-session");
const { URL } = require("url");

const EmailUtils = require("./email-utils");
const HBSHelpers = require("./template-helpers/");
const HIBP = require("./hibp");
const {
  addRequestToResponse, pickLanguage, logErrors, localizeErrorMessages,
  clientErrorHandler, errorHandler, recordVisitFromEmail,
} = require("./middleware");
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
const BreachRoutes= require("./routes/breach-details");

const log = mozlog("server");

const redisStore = connectRedis(session);
const redisClient = redis.createClient({url: AppConstants.REDIS_URL });
const app = express();


function devOrHeroku() {
 return ["dev", "heroku"].includes(AppConstants.NODE_ENV);
}

if (app.get("env") !== "dev") {
  app.enable("trust proxy");
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
// only enable HSTS on heroku; Ops handles it in stage & prod configs
const hsts = AppConstants.NODE_ENV === "heroku" ? true : false;
app.use(helmet({ hsts }));

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
  "https://firefoxusercontent.com",
  "https://mozillausercontent.com/",
  "https://monitor.cdn.mozilla.net/",
];

const connectSrc = [
  "'self'",
  "https://code.cdn.mozilla.net/fonts/",
  "https://www.google-analytics.com",
  "https://accounts.firefox.com",
  "https://accounts.stage.mozaws.net/metrics-flow",
];

if (AppConstants.FXA_ENABLED) {
  const fxaSrc = new URL(AppConstants.OAUTH_PROFILE_URI).origin;
  [imgSrc, connectSrc].forEach(arr => {
    arr.push(fxaSrc);
  });
}

app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'self'"],
    connectSrc: connectSrc,
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com/",
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

const hbs = exphbs.create({
  extname: ".hbs",
  layoutsDir: __dirname + "/views/layouts",
  defaultLayout: "default",
  partialsDir: __dirname + "/views/partials",
  helpers: HBSHelpers.helpers,
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

// TODO: refactor all templates to use constants.VAR
// instead of assigning these 1-by-1 to app.locales
app.locals.constants = AppConstants;
app.locals.FXA_ENABLED = AppConstants.FXA_ENABLED;
app.locals.SERVER_URL = AppConstants.SERVER_URL;
app.locals.MAX_NUM_ADDRESSES = AppConstants.MAX_NUM_ADDRESSES;
app.locals.EXPERIMENT_ACTIVE = AppConstants.EXPERIMENT_ACTIVE;
app.locals.LOGOS_ORIGIN = AppConstants.LOGOS_ORIGIN;
app.locals.UTM_SOURCE = new URL(AppConstants.SERVER_URL).hostname;

const SESSION_DURATION_HOURS = AppConstants.SESSION_DURATION_HOURS || 48;
app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: SESSION_DURATION_HOURS * 60 * 60 * 1000, // 48 hours
    rolling: true,
    sameSite: "lax",
  },
  resave: false,
  saveUninitialized: true,
  secret: AppConstants.COOKIE_SECRET,
  store: new redisStore({ client: redisClient }),
}));

app.use(pickLanguage);
app.use(addRequestToResponse);
app.use(recordVisitFromEmail);

app.use("/", DockerflowRoutes);
app.use("/hibp", HibpRoutes);
if (AppConstants.FXA_ENABLED) {
  app.use("/oauth", OAuthRoutes);
}
app.use("/scan", ScanRoutes);
app.use("/ses", SesRoutes);
app.use("/user", UserRoutes);
(devOrHeroku ? app.use("/email-l10n", EmailL10nRoutes) : null);
app.use("/breach-details", BreachRoutes);
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
