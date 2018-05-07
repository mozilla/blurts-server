"use strict";

const AppConstants = require("./app-constants");

const express = require("express");
const hbs = require("express-hbs");
const sessions = require("client-sessions");

const EmailUtils = require("./email-utils");
const BaseRoutes = require("./routes/home");
const OAuthRoutes = require("./routes/oauth");
const UserRoutes = require("./routes/user");


const app = express();
app.use(express.static("public"));

app.engine("hbs", hbs.express4({
  layoutsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views/partials",
}));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(sessions({
  cookieName: "session",
  secret: AppConstants.COOKIE_SECRET,
  duration: 15 * 60 * 1000, // 15 minutes
  activeDuration: 5 * 60 * 1000, // 5 minutes
}));

app.use("/", BaseRoutes);
app.use("/oauth", OAuthRoutes);
app.use("/user", UserRoutes);

EmailUtils.init().then(() => {
  const listener = app.listen(AppConstants.PORT, () => {
    console.log(`Listening on ${listener.address().port}`);
  });
}).catch(error => {
  console.error(error);
});
