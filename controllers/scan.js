"use strict";

const sha1 = require("../sha1-utils");
const HIBP = require("../hibp");


async function post (req, res) {
  const emailHash = req.body.emailHash;
  
  if (!emailHash || emailHash === sha1("")) {
    res.redirect("/");
    return;
  }

  let foundBreaches = await HIBP.getBreachesForEmail(emailHash, req.app.locals.breaches);

  foundBreaches.sort( (a,b) => {
    const oldestBreach = new Date(a.BreachDate);
    const newestBreach = new Date(b.BreachDate);
    return newestBreach-oldestBreach;
  });

  if (req.body.featuredBreach) {
    let featuredBreach = req.body.featuredBreach;
    if(foundBreaches.filter(breach => breach.Name === featuredBreach).length > 0) {
      featuredBreach = foundBreaches.filter(breach => breach.Name === featuredBreach);
      if (foundBreaches.length > 1) {
        foundBreaches.splice(foundBreaches.findIndex(breach => breach.Name === req.body.featuredBreach),1);
      }
      if (foundBreaches.length === 1) {
        foundBreaches = true;
      } 
    }
    res.render("scan", {
      title: "Firefox Monitor : Scan Results",
      foundBreaches,
      featuredBreach,
    });
  }

  else {
    res.render("scan", {
      title: "Firefox Monitor : Scan Results",
      foundBreaches,
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
