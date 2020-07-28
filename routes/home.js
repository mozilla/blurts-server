"use strict";

const express = require("express");
const csrf = require("csurf");

const {home, getAboutPage, getAllBreaches, getBentoStrings, getSecurityTips, notFound} = require("../controllers/home");

const router = express.Router();
const csrfProtection = csrf();

router.get("/", csrfProtection, home);
router.get("/share/", csrfProtection, home);
router.get("/share/orange", csrfProtection, home);
router.get("/share/purple", csrfProtection, home);
router.get("/share/red", csrfProtection, home);
router.get("/share/blue", csrfProtection, home);
router.get("/share/:breach", csrfProtection, home);
router.get("/about", getAboutPage);
router.get("/breaches", getAllBreaches);
router.get("/security-tips", getSecurityTips);
router.get("/getBentoStrings", getBentoStrings);
router.use(notFound);

module.exports = router;
