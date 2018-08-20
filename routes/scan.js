"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const {asyncMiddleware} = require("../middleware");
const {post, get} = require("../controllers/scan");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.post("/", urlEncodedParser, asyncMiddleware(post));
router.get("/", get);

module.exports = router;
