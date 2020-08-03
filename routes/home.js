"use strict";

const express = require("express");
const csrf = require("csurf");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const {home, getAboutPage, getAllBreaches, getBentoStrings, getSecurityTips, protectMyEmail, addEmailToBundleWaitlist, getUpgrade, notFound} = require("../controllers/home");
const { requireSessionUser } = require("../middleware");

const router = express.Router();
const csrfProtection = csrf();

router.get("/", csrfProtection, home);
router.get("/about", getAboutPage);
router.get("/breaches", getAllBreaches);
router.get("/security-tips", getSecurityTips);
router.get("/getBentoStrings", getBentoStrings);
router.get("/protect-my-email", requireSessionUser, protectMyEmail);
router.post("/premium-waitlist", jsonParser, requireSessionUser, addPrivacyBundleToRelayWaitlist);
router.get("/upgrade", getUpgrade);
router.use(notFound);

module.exports = router;
