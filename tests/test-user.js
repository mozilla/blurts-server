"use strict";

require("dotenv").load();

const crypto = require("crypto");
const test = require("tape");

const models = require("../db/models");

test("Test building user autogenerates verification token", t => {
  t.plan(2);
  const user = models.User.build({ email: "test@test.com" });
  t.notEqual(user.verificationToken, null, "verificationToken is not null");
  t.equal(user.verificationToken.length, 80, "verificationToken is expected length");
});

test("Test building user validates email", t => {
  t.plan(2);
  const valid_email = "test@test.com";
  const invalid_email = "asdfghjkl";

  let user = models.User.build({ email: valid_email });
  user.validate().then(user=>{
    t.equal(user.email, valid_email, "valid email is valid");
  });

  user = models.User.build({ email: invalid_email });
  user.validate().then(user=>{
    t.fail("invalid email should have rejected");
  }).catch(models.User.sequelize.ValidationError, err => {
    t.pass("invalid email was rejected");
  });
});
