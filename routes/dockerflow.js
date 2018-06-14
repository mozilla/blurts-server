"use strict";

const express = require("express");
const path = require("path");

const router = express.Router();

const versionJsonPath = path.join(__dirname, "..", "version.json");

router.get("/__version__", (req, res) => {
  return res.sendFile(versionJsonPath);
});

router.get("/__heartbeat__", (req, res) => {
  return res.send("OK");
});

router.get("/__lbheartbeat__", (req, res) => {
  return res.send("OK");
});

module.exports = router;
