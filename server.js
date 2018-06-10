"use strict";

const AppConstants = require("./app-constants");

const express = require("express");
const hbs = require("express-hbs");
const helmet = require("helmet");
const sessions = require("client-sessions");

// const EmailUtils = require("./email-utils");
const HBSHelpers = require("./hbs-helpers");

const DockerflowRoutes = require("./routes/dockerflow");
const HomeRoutes = require("./routes/home");
const ScanRoutes = require("./routes/scan");
// const OAuthRoutes = require("./routes/oauth");
// const UserRoutes = require("./routes/user");


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

// Use helmet to set security headers
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'none'"],
    fontSrc: ["fonts.gstatic.com"],
    frameAncestors: ["'none'"],
    imgSrc: ["'self'", "https://www.google-analytics.com", "www.google-analytics.com"],
    scriptSrc: ["'self'", "https://www.google-analytics.com/analytics.js"],
    styleSrc: ["'self'", "fonts.googleapis.com"],
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

app.use(sessions({
  cookieName: "session",
  secret: AppConstants.COOKIE_SECRET,
  duration: 15 * 60 * 1000, // 15 minutes
  activeDuration: 5 * 60 * 1000, // 5 minutes
  cookie: {
    httpOnly: true,
    secureProxy: true,
  },
}));

app.use("/", HomeRoutes);
app.use("/", DockerflowRoutes);
app.use("/scan", ScanRoutes);
// app.use("/oauth", OAuthRoutes);
// app.use("/user", UserRoutes);

// EmailUtils.init().then(() => {
  const listener = app.listen(AppConstants.PORT, () => {
    console.info(`Listening on ${listener.address().port}`);
  });
/* }).catch(error => {
  console.error(error);
}); */
