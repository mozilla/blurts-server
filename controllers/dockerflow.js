"use strict";

const fs = require("fs");
const path = require("path");

const {version, homepage} = require("../package.json");


const versionJsonPath = path.join(__dirname, "..", "version.json");

// If the version.json file already exists (e.g., created by circle + docker),
// don't need to generate it
if (!fs.existsSync(versionJsonPath)) {
  console.log("Could not find version.json, generating ...");
  let commit;
  try {
    commit = require("git-rev-sync").short();
  } catch (err) {
    console.error("Error in git-rev-sync: ", err);
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
