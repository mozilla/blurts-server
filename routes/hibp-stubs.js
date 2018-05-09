"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const DBUtils = require("../db/utils");


const router = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

router.get("/api/v3/breachedaccount/range/:hashPrefix", urlEncodedParser, async (req, res) => {
  const hashPrefix = req.params.hashPrefix;
  console.log("Received hash prefix: ", hashPrefix);

  const foundEntries = await DBUtils.getBreachesForHashPrefix(hashPrefix);
  console.log("foundEntries: ", foundEntries);

  res.render("range", {foundEntries});
});

module.exports = router;
