"use strict";

const AppConstants = require("./app-constants");

const express = require("express");
const hbs = require("express-hbs");
const helmet = require("helmet");
const sessions = require("client-sessions");

const EmailUtils = require("./email-utils");
const HBSHelpers = require("./hbs-helpers");
const HIBP = require("./hibp");

const HibpRoutes = require("./routes/hibp");
const HomeRoutes = require("./routes/home");
const ScanRoutes = require("./routes/scan");
const SesRoutes = require("./routes/ses");
const OAuthRoutes = require("./routes/oauth");
const UserRoutes = require("./routes/user");


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
    req.app.locals.breaches = await HIBP.loadBreaches();
  } catch (error) {
    console.error(error);
  }
})();

// Use helmet to set security headers
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'none'"],
    connectSrc: [
      "'self'",
      "https://code.cdn.mozilla.net/fonts/",
      "https://www.google-analytics.com",
    ],
    fontSrc: ["'self'", "https://code.cdn.mozilla.net/fonts/"],
    frameAncestors: ["'none'"],
    imgSrc: ["'self'", "https://www.google-analytics.com"],
    scriptSrc: ["'self'", "https://www.google-analytics.com/analytics.js"],
    styleSrc: ["'self'", "https://code.cdn.mozilla.net/fonts/"],
    reportUri: "/__cspreport__",
  },
}));
app.use(express.static("public"));

app.engine("hbs", hbs.express4({
  layoutsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views/partials",
}));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
HBSHelpers.init(hbs);

const cookie = {httpOnly: true, secureProxy: true};

// Disable secure cookies in dev environment
if (app.get("env") === "dev") {
  cookie.secureProxy = false;
}

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
app.use("/oauth", OAuthRoutes);
app.use("/scan", ScanRoutes);
app.use("/ses", SesRoutes);
app.use("/user", UserRoutes);
app.use("/", HomeRoutes);

EmailUtils.init().then(() => {
  const listener = app.listen(AppConstants.PORT, () => {
    console.info(`Listening on ${listener.address().port}`);
  });
}).catch(error => {
  console.error(error);
});
