"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const {notification} = require("../controllers/ses");


const router = express.Router();
const textParser = bodyParser.text();

router.post("/notification", textParser, notification);

module.exports = router;
