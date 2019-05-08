"use strict";

const express = require("express");
const { getBreachDetail } = require("../controllers/breach-details");
const router = express.Router();


router.get("/:breachName", getBreachDetail);

module.exports = router;
