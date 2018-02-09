"use strict";

const test = require("tape");

const gEmails = require("../subscribers");

test("gEmails is an object", (t) => {
  t.plan(1);
  t.equal(typeof(gEmails), "object");
});
