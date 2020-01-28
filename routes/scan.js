"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const csrf = require("csurf");

const { asyncMiddleware } = require("../middleware");
const { post, get, getIP, postIP } = require("../controllers/scan");

const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf();


router.post("/", urlEncodedParser, csrfProtection, asyncMiddleware(post));
router.get("/", get);
router.get("/ip", getIP);
router.post("/ip", postIP);

module.exports = router;
