"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const jsonParser = bodyParser.json();

const DBUtils = require("../db/utils");

router.post("/notify", jsonParser, async (req, res) => {
  try {
    const hashes = req.body.hashSuffixes.map(suffix=>req.body.hashPrefix + suffix);
    console.log("hashes: ", hashes);

    const subscribers = await DBUtils.getSubscribersByHashes(hashes);
    console.log("subscribers: ", subscribers);

    const breach = DBUtils.getBreachByName(req.body.breachName);
    console.log("breach: ", breach);

    // TODO: Send notification(s), either by SMTP or by Basket
    res.status(200).json(
      {info: "Notified subscribers of breach."}
    );
  } catch (e) {
    res.status(500).json(
      {info: "Internal error."}
    );
  }
});

module.exports = router;
