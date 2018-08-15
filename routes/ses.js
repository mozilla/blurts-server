"use strict";

const auth = require("basic-auth");
const bodyParser = require("body-parser");
const express = require("express");

const AppConstants = require("../app-constants");
const {notification} = require("../controllers/ses");


const router = express.Router();
const textParser = bodyParser.text();

function checkAuth (user, pass) {
  return user === AppConstants.SES_USERNAME && pass === AppConstants.SES_PASSWORD;
}


router.use("/notification", (req, res, next) => {
  const credentials = auth(req);
  if (!credentials || !checkAuth(credentials.name, credentials.pass)) {
    res.setHeader("WWW-Authenticate", `Basic realm="${AppConstants.SERVER_URL}"`);
    res.status(401).send("Access denied");
  } else {
    next();
  }
});


router.post("/notification", textParser, notification);

module.exports = router;
