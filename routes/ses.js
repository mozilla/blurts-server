"use strict";

const bodyParser = require("body-parser");
const express = require("express");

const AppConstants = require("../app-constants");
const {sesAuth} = require("../middleware");
const {notification} = require("../controllers/ses");


const router = express.Router();
const textParser = bodyParser.text();

if (AppConstants.SES_NOTIFICATION_LOG_ONLY) {
  router.post("/notification", textParser, (req, res, next) => {
    console.log("SES Notification request body: ", req.body);
  });
} else {
  router.use("/notification", textParser);
  router.use("/notification", sesAuth);
  router.post("/notification", textParser, notification);
}

module.exports = router;
