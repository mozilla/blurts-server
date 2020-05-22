"use strict";

const bodyParser = require("body-parser");
const express = require("express");

const AppConstants = require("../app-constants");
const mozlog = require("../log");
const {notification} = require("../controllers/ses");


const log = mozlog("routes.ses");
// eslint-disable-next-line new-cap
const router = express.Router();
const textParser = bodyParser.text();

if (AppConstants.SES_NOTIFICATION_LOG_ONLY) {
    router.post("/notification", textParser, (req, res, next) => {
        log.info("ses-notification-body", { body: req.body });
    });
} else {
    router.post("/notification", textParser, notification);
}

module.exports = router;
