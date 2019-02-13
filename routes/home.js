"use strict";

const express = require("express");
const csrf = require("csurf");

const {home, notFound} = require("../controllers/home");


const router = express.Router();
const csrfProtection = csrf();

router.get("/", csrfProtection, home);
router.use(notFound);

module.exports = router;
