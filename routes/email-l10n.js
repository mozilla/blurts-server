"use strict";
const express = require("express");
const { testEmails } = require("../controllers/email-l10n");
const router = express.Router();


router.get("/", testEmails);


module.exports = router;
