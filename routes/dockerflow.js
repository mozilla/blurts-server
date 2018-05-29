"use strict";

const express = require("express");
const fs = require("fs");
const path = require("path");
const {version, homepage} = require("../package.json");


const router = express.Router();

let commit;
try {
  commit = require("git-rev-sync").short();
} catch (err) {
  console.error("Error in git-rev-sync: ", err);
}

const versionJsonPath = path.join(__dirname, "..", "public", "version.json");
const versionJson = {
  commit,
  source: homepage,
  version,
};

fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2) + "\n");

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

