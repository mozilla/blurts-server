"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const { asyncMiddleware } = require("../middleware");
const { add, verify, remove } = require("../controllers/user");

const router = express.Router();
const jsonParser = bodyParser.json();


router.post("/add", jsonParser, asyncMiddleware(add));
router.get("/verify", jsonParser, verify);
router.post("/remove", jsonParser, remove);


module.exports = router;
