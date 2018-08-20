"use strict";

const DB = require("../db/DB");


async function notify (req, res) {
  const hashes = req.body.hashSuffixes.map(suffix=>req.body.hashPrefix + suffix);

  const subscribers = await DB.getSubscribersByHashes(hashes);

  const reqBreachName = req.body.breachName.toLowerCase();
  const breach = req.app.locals.breaches.filter(breach => breach.Name.toLowerCase() === reqBreachName)[0];

  console.log(`Found ${subscribers.length} in ${breach.Name}. Notifying ...`);
  // TODO: loop over subscribers and send breach notification(s)
  res.status(200);
  res.json(
    {info: "Notified subscribers of breach."}
  );
}


module.exports = {
  notify,
};
