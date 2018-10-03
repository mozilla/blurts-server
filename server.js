"use strict";

const AppConstants = require("./app-constants");

const express = require("express");
const exphbs = require("express-handlebars");
const helmet = require("helmet");
const sessions = require("client-sessions");
const url = require("url");

const EmailUtils = require("./email-utils");
const HBSHelpers = require("./hbs-helpers");
const HIBP = require("./hibp");
const {logErrors, clientErrorHandler, errorHandler} = require("./middleware");
const mozlog = require("./log");

const HibpRoutes = require("./routes/hibp");
const HomeRoutes = require("./routes/home");
const ScanRoutes = require("./routes/scan");
const SesRoutes = require("./routes/ses");
const OAuthRoutes = require("./routes/oauth");
const UserRoutes = require("./routes/user");


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

(async () => {
  try {
    await HIBP.loadBreachesIntoApp(app);
  } catch (error) {
    log.error("try-load-breaches-error", { error: error });
  }
})();

// Use helmet to set security headers
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'self'"],
    connectSrc: [
      "'self'",
      "https://code.cdn.mozilla.net/fonts/",
      "https://www.google-analytics.com",
    ],
    fontSrc: ["'self'", "https://code.cdn.mozilla.net/fonts/"],
    frameAncestors: ["'none'"],
    mediaSrc: ["'self'"],
    imgSrc: ["'self'", "https://www.google-analytics.com"],
    objectSrc: ["'none'"],
    scriptSrc: ["'self'", "https://www.google-analytics.com/analytics.js"],
    styleSrc: ["'self'", "https://code.cdn.mozilla.net/fonts/"],
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
app.locals.UTM_SOURCE = url.parse(AppConstants.SERVER_URL).hostname;

app.use(sessions({
  cookieName: "session",
  secret: AppConstants.COOKIE_SECRET,
  duration: 15 * 60 * 1000, // 15 minutes
  activeDuration: 5 * 60 * 1000, // 5 minutes
  cookie: cookie,
}));

if (!AppConstants.DISABLE_DOCKERFLOW) {
  const DockerflowRoutes = require("./routes/dockerflow");
  app.use("/", DockerflowRoutes);
}
app.use("/hibp", HibpRoutes);
if (AppConstants.FXA_ENABLED) {
  app.use("/oauth", OAuthRoutes);
}
app.use("/scan", ScanRoutes);
app.use("/ses", SesRoutes);
app.use("/user", UserRoutes);
app.use("/", HomeRoutes);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

EmailUtils.init().then(() => {
  const listener = app.listen(AppConstants.PORT, () => {
    log.info("Listening", { port: listener.address().port });
  });
}).catch(error => {
  log.error("try-initialize-email-error", { error: error });
});
