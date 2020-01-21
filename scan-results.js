"use strict";

const HIBP = require("./hibp");


const scanResult = async(req, scannedEmail) => {
  const allBreaches = req.app.locals.breaches;
  const foundBreaches = await HIBP.getBreachesForEmail(scannedEmail, allBreaches);
  const title = req.fluentFormat("scan-title");

  const thisBreach = (breach) => {
    return (element) => element.Name.toLowerCase() === breach.toLowerCase();
  };

  const  scannedEmailId = (req.body.scannedEmailId !== "undefined") ?
    req.body.scannedEmailId :
    null;

  const specificBreach = (req.body && req.body.featuredBreach) ?
    allBreaches.find(thisBreach(req.body.featuredBreach)) :
    null;

  const specificBreachIndex = (
    specificBreach &&
    foundBreaches.findIndex(breach => breach.Name === specificBreach.Name)
  );

  const userCompromised = (specificBreach && specificBreachIndex !== -1);
  if (userCompromised) {
    foundBreaches.splice(specificBreachIndex, 1);
    foundBreaches.unshift(specificBreach);
  }

  return {
    title,
    foundBreaches,
    specificBreach,
    userCompromised,
    scannedEmailId,
  };
};

function resultsSummary(verifiedEmails) {
  const breachStats = {
    monitoredEmails: { count: 0 },
    numBreaches: { count: 0 },
    passwords: { count: 0 },
  };
  let foundBreaches = [];

  breachStats.monitoredEmails.count = verifiedEmails.length;

  // combine the breaches for each account, breach duplicates are ok
  // since the user may have multiple accounts with different emails
  verifiedEmails.forEach(email => {
    email.breaches.forEach(breach => {
      const dataClasses = breach.DataClasses;
      if (dataClasses.includes("passwords")) {
        breachStats.passwords.count++;
      }
    });
    foundBreaches = [...foundBreaches, ...email.breaches];
  });
  // tally up total number of breaches
  breachStats.numBreaches.count = foundBreaches.length;
  return breachStats;
}

module.exports = {
  scanResult,
  resultsSummary,
};
