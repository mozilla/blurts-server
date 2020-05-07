"use strict";

const { URL } = require("url");

const HIBP = require("./hibp");
const sha1 = require("./sha1-utils");
const { getExperimentBranch } = require("./controllers/utils");

const AppConstants = require("./app-constants");
const EXPERIMENTS_ENABLED = (AppConstants.EXPERIMENT_ACTIVE === "1");

const scanResult = async(req, selfScan=false) => {

  const allBreaches = req.app.locals.breaches;
  let scannedEmail = null;

  let experimentBranch = null;
  let isUserInExperiment = null;
  let experimentBranchB = null;

  if (EXPERIMENTS_ENABLED) {
    const coinFlipNumber = Math.floor(Math.random() * 100);
    experimentBranch = getExperimentBranch(req, coinFlipNumber);
    if (!experimentBranch) { req.session.excludeFromExperiment = true; }
    req.session.experimentBranch = experimentBranch;
    isUserInExperiment = (experimentBranch === "vb");
    experimentBranchB = (experimentBranch === "vb" && isUserInExperiment);
  }

  const title = req.fluentFormat("scan-title");
  let foundBreaches = [];
  let specificBreach = null;
  let doorhangerScan = false;
  let userCompromised = false;
  let signedInUser = null;
  let fullReport = false;
  let userDash = false;
  let scannedEmailId = null;

  if (req.session.user) {
    signedInUser = req.session.user;
  }


  // Checks if the user scanning their own verified email.
  if (req.body && req.body.emailHash) {
    scannedEmail = req.body.emailHash;

    if (req.body.scannedEmailId) {
      scannedEmailId = req.body.scannedEmailId;
    }

    if (signedInUser) {
      for (const emailAddress of signedInUser.email_addresses) {
        if (!selfScan && sha1(emailAddress.email) === req.body.emailHash) {
          selfScan = true;
          break;
        }
      }
    }
  }

  const url = new URL(req.url, req.app.locals.SERVER_URL);
  const thisBreach = (breach) => {
    return (element) => element.Name.toLowerCase() === breach.toLowerCase();
  };

  // Checks for a signedInUser arriving from doorhanger.
  if (signedInUser && url.searchParams.has("utm_source") && url.searchParams.get("utm_source") === "firefox") {
    doorhangerScan = true, selfScan = true;
    specificBreach = allBreaches.find(thisBreach(req.query.breach));
  }

  fullReport = url.pathname === "/full_report";

  userDash = url.pathname === "/user_dashboard";

  if (selfScan) {
    scannedEmail = sha1(signedInUser.primary_email);
  }

  if (scannedEmail) {
    // Gets sensitive breaches only if selfScan === true
    foundBreaches = await HIBP.getBreachesForEmail(scannedEmail, allBreaches, selfScan);
  }

  // Checks if scan originated from a breach detail/"featured breach" page.
  if (req.body && req.body.featuredBreach) {
    specificBreach = allBreaches.find(thisBreach(req.body.featuredBreach));
  }

  if (doorhangerScan || specificBreach) {
    const specificBreachIndex = foundBreaches.findIndex(breach => breach.Name === specificBreach.Name);

    // Checks foundBreaches for specificBreach and if found,
    // brings specificBreach to front of foundBreaches list.
    if (specificBreachIndex !== -1) {
      userCompromised = true;
      foundBreaches.splice(specificBreachIndex, 1);
      foundBreaches.unshift(specificBreach);
    }
  }


  return {
    title,
    foundBreaches,
    specificBreach,
    doorhangerScan,
    userCompromised,
    signedInUser,
    selfScan,
    fullReport,
    userDash,
    scannedEmailId,
    experimentBranch,
    isUserInExperiment,
    experimentBranchB,
  };
};

function resultsSummary(verifiedEmails) {
  const breachStats = {
    monitoredEmails: {
      count: 0,
    },
    numBreaches: {
      count: 0,
      numResolved: 0,
    },
    passwords: {
      count: 0,
      numResolved: 0,
    },
  };
  let foundBreaches = [];

  // combine the breaches for each account, breach duplicates are ok
  // since the user may have multiple accounts with different emails
  verifiedEmails.forEach(email => {

    email.breaches.forEach(breach => {
      if (breach.IsResolved) {
        breachStats.numBreaches.numResolved++;
      }

      const dataClasses = breach.DataClasses;
      if (dataClasses.includes("passwords")) {
        breachStats.passwords.count++;
        if (breach.IsResolved) {
          breachStats.passwords.numResolved++;
        }
      }
    });
    foundBreaches = [...foundBreaches, ...email.breaches];
  });

  // total number of verified emails being monitored
  breachStats.monitoredEmails.count = verifiedEmails.length;

  // total number of breaches across all emails
  breachStats.numBreaches.count = foundBreaches.length;
  return breachStats;
}

module.exports = {
  scanResult,
  resultsSummary,
};
