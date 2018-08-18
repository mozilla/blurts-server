"use strict";

const bodyParser = require("body-parser");
const express = require("express");

const {sesAuth} = require("../middleware");
const {notification} = require("../controllers/ses");


const router = express.Router();
const textParser = bodyParser.text();

router.use("/notification", sesAuth);
router.post("/notification", textParser, notification);

module.exports = router;
