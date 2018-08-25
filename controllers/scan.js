"use strict";

const sha1 = require("../sha1-utils");
const HIBP = require("../hibp");
const TIPS = require("../tips");


async function post (req, res) {
  const emailHash = req.body.emailHash;
  let featuredBreach = null;
  let userAccountCompromised = false;
  
  if (!emailHash || emailHash === sha1("")) {
    res.redirect("/");
    return;
  }
  let foundBreaches = await HIBP.getBreachesForEmail(emailHash, HIBP.breaches);

  foundBreaches.sort( (a,b) => {
    const oldestBreach = new Date(a.BreachDate);
    const newestBreach = new Date(b.BreachDate);
    return newestBreach-oldestBreach;
  });
  
  if (req.body.featuredBreach) {
    featuredBreach = HIBP.breaches.find(breach => breach.Name.toLowerCase() === req.body.featuredBreach.toLowerCase()); 

    if (foundBreaches.find(breach => breach.Name === featuredBreach.Name)) {
      userAccountCompromised = true;

      if (foundBreaches.length > 1) {
        foundBreaches.splice(foundBreaches.findIndex(breach => breach.Name === req.body.featuredBreach),1);
      }

      if (foundBreaches.length === 1) {
        foundBreaches = false;
      } 
    }
    res.render("scan", {
      title: "Firefox Monitor : Scan Results",
      foundBreaches,
      featuredBreach,
      userAccountCompromised,
      passwordTips: TIPS,
    });
  }

  else {
    res.render("scan", {
      title: "Firefox Monitor : Scan Results",
      foundBreaches,
      passwordTips: TIPS,
    });
  }
}


function get (req, res) {
  res.redirect("/");
}

module.exports = {
  post,
  get,
};
