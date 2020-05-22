"use strict";

const express = require("express");
const {vers, heartbeat} = require("../controllers/dockerflow");


// eslint-disable-next-line new-cap
const router = express.Router();


router.get("/__version__", vers);
router.get("/__heartbeat__", heartbeat);
router.get("/__lbheartbeat__", heartbeat);


module.exports = router;
