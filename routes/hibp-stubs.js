"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const DBUtils = require("../db/utils");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.get("/api/v3/breachedaccount/range/:hashPrefix", urlEncodedParser, async (req, res) => {
  const hashPrefix = req.params.hashPrefix;

  const foundEntries = await DBUtils.getBreachesForHashPrefix(hashPrefix);

  if (!foundEntries.length) {
    res.status(404).send("Not Found");
  } else {
    res.render("range", {foundEntries});
  }
});

module.exports = router;
