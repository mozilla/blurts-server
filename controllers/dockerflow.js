"use strict";

const fs = require("fs");
const path = require("path");


const AppConstants = require("../app-constants");
const mozlog = require("../log");
const {version, homepage} = require("../package.json");


const log = mozlog("controllers.dockerflow");
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
        languages: AppConstants.SUPPORTED_LOCALES,
    };

    fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2) + "\n");
}


function vers (req, res) {
    if (AppConstants.NODE_ENV === "heroku") {
    /* eslint-disable no-process-env */
        return res.json({
            commit: process.env.HEROKU_SLUG_COMMIT,
            version: process.env.HEROKU_SLUG_COMMIT,
            source: homepage,
            languages: AppConstants.SUPPORTED_LOCALES,
        });
    /* eslint-enable no-process-env */
    }
    return res.sendFile(versionJsonPath);
}


function heartbeat (req, res) {
    return res.send("OK");
}

module.exports = {
    vers,
    heartbeat,
};
