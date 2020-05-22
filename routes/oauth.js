"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const {asyncMiddleware} = require("../middleware");
const {init, confirmed} = require("../controllers/oauth");


// eslint-disable-next-line new-cap
const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/init", jsonParser, init);
router.get("/confirmed", jsonParser, asyncMiddleware(confirmed));

module.exports = router;
