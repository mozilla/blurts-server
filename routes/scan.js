"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const csrf = require("csurf");

const { asyncMiddleware } = require("../middleware");
const { post, get } = require("../controllers/scan");

// eslint-disable-next-line new-cap
const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf();


router.post("/", urlEncodedParser, csrfProtection, asyncMiddleware(post));
router.get("/", get);

module.exports = router;
