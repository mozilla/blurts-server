"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const { asyncMiddleware } = require("../middleware");
const {
  add, verify, logout,
  getDashboard, getPreferences, removeEmail, resendEmail, updateCommunicationOptions,
  getUnsubscribe, postUnsubscribe, getRemoveFxm, postRemoveFxm,
} = require("../controllers/user");

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.get("/dashboard", getDashboard);
router.get("/preferences", getPreferences);
router.get("/logout", logout);
router.post("/email", urlEncodedParser, asyncMiddleware(add));
router.post("/remove-email", urlEncodedParser, asyncMiddleware(removeEmail));
router.post("/resend-email", jsonParser, asyncMiddleware(resendEmail));
router.post("/update-comm-option", jsonParser, asyncMiddleware(updateCommunicationOptions));
router.get("/verify", jsonParser, asyncMiddleware(verify));
router.use("/unsubscribe", urlEncodedParser);
router.get("/unsubscribe", asyncMiddleware(getUnsubscribe));
router.post("/unsubscribe", asyncMiddleware(postUnsubscribe));
router.get("/remove-fxm", urlEncodedParser, asyncMiddleware(getRemoveFxm));
router.post("/remove-fxm", jsonParser, asyncMiddleware(postRemoveFxm));

module.exports = router;
