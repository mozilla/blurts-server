"use strict";

const express = require("express");

const {home, notFound} = require("../controllers/home");


const router = express.Router();

router.get("/", home);
router.use(notFound);

module.exports = router;
