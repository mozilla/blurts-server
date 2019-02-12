"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const {asyncMiddleware} = require("../middleware");
const {post, get, getFullReport, getUserDashboard} = require("../controllers/scan");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.post("/", urlEncodedParser, asyncMiddleware(post));
router.get("/", get);
router.get("/full_report", getFullReport);
router.get("/user_dashboard", getUserDashboard);

module.exports = router;
