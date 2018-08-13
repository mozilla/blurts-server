"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const textParser = bodyParser.text();


router.post("/notification", textParser, async (req, res) => {
  try {
    console.log("ses-notification request body: ", req.body);

    res.status(200).json(
      {status: "OK"}
    );
  } catch (e) {
    res.status(500).json(
      {info: "Internal error."}
    );
  }
});

module.exports = router;
