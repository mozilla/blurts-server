"use strict";

const express = require("express");
const bearerToken = require("express-bearer-token");
const bodyParser = require("body-parser");
const csrf = require("csurf");

const { asyncMiddleware } = require("../middleware");
const {
  add, verify, logout,
  getDashboard, getPreferences, getBreachStats,
  removeEmail, resendEmail, updateCommunicationOptions,
  getUnsubscribe, postUnsubscribe, getRemoveFxm, postRemoveFxm,
} = require("../controllers/user");

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf();


router.get("/dashboard", csrfProtection, asyncMiddleware(getDashboard));
router.get("/preferences", csrfProtection, asyncMiddleware(getPreferences));
router.use("/breach-stats", bearerToken());
router.get("/breach-stats", urlEncodedParser, asyncMiddleware(getBreachStats));
router.get("/logout", logout);
router.post("/email", urlEncodedParser, csrfProtection, asyncMiddleware(add));
router.post("/remove-email", urlEncodedParser, csrfProtection, asyncMiddleware(removeEmail));
router.post("/resend-email", jsonParser, csrfProtection, asyncMiddleware(resendEmail));
router.post("/update-comm-option", jsonParser, csrfProtection, asyncMiddleware(updateCommunicationOptions));
router.get("/verify", jsonParser, asyncMiddleware(verify));
router.use("/unsubscribe", urlEncodedParser);
router.get("/unsubscribe", asyncMiddleware(getUnsubscribe));
router.post("/unsubscribe", csrfProtection, asyncMiddleware(postUnsubscribe));
router.get("/remove-fxm", urlEncodedParser, csrfProtection, asyncMiddleware(getRemoveFxm));
router.post("/remove-fxm", jsonParser, csrfProtection, asyncMiddleware(postRemoveFxm));

module.exports = router;
