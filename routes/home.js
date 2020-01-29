"use strict";

const express = require("express");
const csrf = require("csurf");

const {home, getAboutPage, getAllBreaches, getBentoStrings, getSecurityTips, getRelay, notFound} = require("../controllers/home");


const router = express.Router();
const csrfProtection = csrf();

router.get("/", csrfProtection, home);
router.get("/about", getAboutPage);
router.get("/breaches", getAllBreaches);
router.get("/security-tips", getSecurityTips);
router.get("/getBentoStrings", getBentoStrings);
router.get("/firefox-private-relay", getRelay);
router.use(notFound);

module.exports = router;
