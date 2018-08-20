"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const {asyncMiddleware} = require("../middleware");
const {notify} = require("../controllers/hibp");


const router = express.Router();
const jsonParser = bodyParser.json();

router.post("/notify", jsonParser, asyncMiddleware(notify));

module.exports = router;
