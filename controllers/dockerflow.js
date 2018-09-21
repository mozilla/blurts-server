"use strict";

const fs = require("fs");
const path = require("path");

const {version, homepage} = require("../package.json");

const mozlog = require("../log");


const log = mozlog("dockerflow");
const versionJsonPath = path.join(__dirname, "..", "version.json");

// If the version.json file already exists (e.g., created by circle + docker),
// don't need to generate it
if (!fs.existsSync(versionJsonPath)) {
  log.info("generating");
  let commit;
  try {
    commit = require("git-rev-sync").short();
  } catch (err) {
    log.error("generating", {err: err});
  }

  const versionJson = {
    commit,
    source: homepage,
    version,
  };

  fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2) + "\n");
}


function vers (req, res) {
  return res.sendFile(versionJsonPath);
}


function heartbeat (req, res) {
  return res.send("OK");
}

module.exports = {
  vers,
  heartbeat,
};
