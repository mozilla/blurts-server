"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const { asyncMiddleware } = require("../middleware");
const { getDashboard,getPreferences, add, verify, getUnsubscribe, postUnsubscribe, getUnsubSurvey, postUnsubSurvey, removeEmail, resendEmail, updateCommunicationOptions, logout } = require("../controllers/user");

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.get("/dashboard", getDashboard);
router.get("/preferences", getPreferences);
router.get("/logout", logout);
router.post("/email", urlEncodedParser, asyncMiddleware(add));
router.post("/remove-email", jsonParser, asyncMiddleware(removeEmail));
router.post("/resend-email", jsonParser, asyncMiddleware(resendEmail));
router.post("/update-comm-option", jsonParser, asyncMiddleware(updateCommunicationOptions));
router.get("/verify", jsonParser, asyncMiddleware(verify));
router.use("/email/unsubscribe", urlEncodedParser);
router.get("/email/unsubscribe", asyncMiddleware(getUnsubscribe));
router.post("/email/unsubscribe", asyncMiddleware(postUnsubscribe));
router.get("/email/unsubscribe_survey", getUnsubSurvey);
router.post("/email/unsubscribe_survey", jsonParser, postUnsubSurvey);

module.exports = router;
