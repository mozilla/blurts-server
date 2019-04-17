"use strict";

const express = require("express");
const csrf = require("csurf");

const {home, getAllBreaches, getSecurityTips, notFound} = require("../controllers/home");


const router = express.Router();
const csrfProtection = csrf();

router.get("/", csrfProtection, home);
router.get("/breaches", getAllBreaches);
router.get("/security-tips", getSecurityTips);
router.use(notFound);

module.exports = router;
