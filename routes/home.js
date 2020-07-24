"use strict";

const express = require("express");
const csrf = require("csurf");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const {home, getAboutPage, getAllBreaches, getBentoStrings, getSecurityTips, protectMyEmail, addEmailToRelayWaitlist, notFound} = require("../controllers/home");
const { requireSessionUser } = require("../middleware");

const router = express.Router();
const csrfProtection = csrf();

router.get("/", csrfProtection, home);
router.get("/share/", csrfProtection, home);
router.get("/share/purple", csrfProtection, home);
router.get("/share/red", csrfProtection, home);
router.get("/share/blue", csrfProtection, home);
router.get("/share/:breach", csrfProtection, home);
router.get("/about", getAboutPage);
router.get("/breaches", getAllBreaches);
router.get("/security-tips", getSecurityTips);
router.get("/getBentoStrings", getBentoStrings);
router.get("/protect-my-email", requireSessionUser, protectMyEmail);
router.post("/relay-waitlist", jsonParser, requireSessionUser, addEmailToRelayWaitlist);
router.use(notFound);

module.exports = router;
