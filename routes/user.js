"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const { asyncMiddleware } = require("../middleware");
const { add, verify, getUnsubscribe, postUnsubscribe, getUnsubSurvey, postUnsubSurvey } = require("../controllers/user");

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.post("/add", jsonParser, asyncMiddleware(add));
router.get("/verify", jsonParser, asyncMiddleware(verify));
router.use("/unsubscribe", urlEncodedParser);
router.get("/unsubscribe", asyncMiddleware(getUnsubscribe));
router.post("/unsubscribe", asyncMiddleware(postUnsubscribe));
router.get("/unsubscribe_survey", asyncMiddleware(getUnsubSurvey));
router.post("/unsubscribe_survey", jsonParser, asyncMiddleware(postUnsubSurvey));

module.exports = router;
