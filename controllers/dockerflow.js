"use strict";

const fs = require("fs");
const path = require("path");

const {version, homepage} = require("../package.json");


let commit;
try {
  commit = require("git-rev-sync").short();
} catch (err) {
  console.error("Error in git-rev-sync: ", err);
}

const versionJsonPath = path.join(__dirname, "..", "version.json");
const versionJson = {
  commit,
  source: homepage,
  version,
};

fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2) + "\n");


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
