"use strict";
const express = require("express");
const { getEmailMockUps, notFound } = require("../controllers/email-l10n");
// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/", getEmailMockUps);
router.use(notFound);

module.exports = router;
