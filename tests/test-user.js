"use strict";

const test = require("tape");

const models = require("../db/models");

const VALID_EMAIL = "test@test.com";
const INVALID_EMAIL = "asdfghjkl";

test("Test building user autogenerates verification token", t => {
  t.plan(2);
  const user = models.Subscriber.build({ email: VALID_EMAIL });
  t.notEqual(user.verificationToken, null, "verificationToken is not null");
  t.equal(user.verificationToken.length, 80, "verificationToken is expected length");
});

test("Test building user validates email", t => {
  t.plan(2);

  let user = models.Subscriber.build({ email: VALID_EMAIL });
  user.validate().then(user=>{
    t.equal(user.email, VALID_EMAIL, "valid email is valid");
  });

  user = models.Subscriber.build({ email: INVALID_EMAIL });
  user.validate().then(user=>{
    t.fail("invalid email should have rejected");
  }).catch(models.Subscriber.sequelize.ValidationError, err => {
    t.pass("invalid email was rejected");
  });
});

/*
test("Test saving sha1", t => {
  t.plan(3);
  let user = models.User.build({ email: VALID_EMAIL });
  t.equal(user.sha1, undefined, "sha1 starts undefined");
  user.save();

  user = models.User.findOne({ where: { email: VALID_EMAIL } }).then(user=>{
    const savedSha1 = user.saveSha1();
    t.notEqual(savedSha1, undefined, "sha1 is no longer undefined");
    t.equal(savedSha1.length, 40, "sha1 is expected hash length");
  });
});
*/
