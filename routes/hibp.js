"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const bearerToken = require("express-bearer-token");

const {asyncMiddleware} = require("../middleware");
const {notify, breaches} = require("../controllers/hibp");

// eslint-disable-next-line new-cap
const router = express.Router();
const jsonParser = bodyParser.json();

router.use("/notify", bearerToken());
router.post("/notify", jsonParser, asyncMiddleware(notify));
router.get("/breaches", jsonParser, asyncMiddleware(breaches));

module.exports = router;
