"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const { asyncMiddleware } = require("../middleware");
const { add, verify, getUnsubscribe, postUnsubscribe } = require("../controllers/user");

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });


router.post("/add", jsonParser, asyncMiddleware(add));
router.get("/verify", jsonParser, asyncMiddleware(verify));
router.use("/unsubscribe", urlEncodedParser);
router.get("/unsubscribe", getUnsubscribe);
router.post("/unsubscribe", asyncMiddleware(postUnsubscribe));


module.exports = router;
