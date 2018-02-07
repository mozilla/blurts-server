"use strict";

const AppConstants = require("./app-constants").init();

const express = require("express");
const bodyParser = require("body-parser");
const sessions = require("client-sessions");

const EmailUtils = require("./email-utils");

const OAuthRoute = require("./routes/oauth");
const UserRoute = require("./routes/user");

var app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(sessions({
  cookieName: "session",
  secret: AppConstants.COOKIE_SECRET,
  duration: 15 * 60 * 1000, // 15 minutes
  activeDuration: 5 * 60 * 1000, // 5 minutes
}));

app.get("/", function(req, res) {
  res.send("blurts-server v0.01a");
});

app.use("/oauth", OAuthRoute);
app.use("/user", UserRoute);


// TODO: remove this
app.get("/test", function(req, res) {
  res.send(req.body);
})

EmailUtils.init().then(() => {
  app.listen(AppConstants.PORT, function() {
    console.log("Listening on " + AppConstants.PORT);
  });
}).catch(error => {
  console.error(error);
});
