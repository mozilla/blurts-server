"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const {asyncMiddleware} = require("../middleware");
const {notify, breaches} = require("../controllers/hibp");


const router = express.Router();
const jsonParser = bodyParser.json();

router.post("/notify", jsonParser, asyncMiddleware(notify));
router.get("/breaches", jsonParser, asyncMiddleware(breaches));

module.exports = router;
