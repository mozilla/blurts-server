"use strict";

require("dotenv").load();

const test = require("tape");

const Subscribers = require("../subscribers");
const DBUtils = require("../db-utils");

const tests = [];
tests.push({
  msg: "Test adding, getting, and deleting subscribers",
  callback: async (t) => {
    try {
      await DBUtils.setupUsersTable();
    } catch (e) {
      t.fail(`Database setup failed:\n${e}`);
      return;
    }

    t.plan(5);

    const email = "test@test.com";

    let ret = await Subscribers.addUser(email);
    t.deepEqual(ret, {
      error: null,
    }, "Add a user.");

    ret = await Subscribers.getUser(email);
    t.deepEqual(ret, {
      error: null,
      email,
    }, "Get the same user.");

    ret = await Subscribers.addUser(email);
    t.deepEqual(ret, {
      error: null,
      duplicate: true,
    }, "Add the same user again.");

    ret = await Subscribers.deleteUser(email);
    t.deepEqual(ret, {
      error: null,
    }, "Delete the user.");

    ret = await Subscribers.getUser(email);
    t.ok(ret.error, "Try getting the user - should fail.");
  },
});

tests.push({
  msg: "Test adding, getting, and deleting temp user with token.",
  callback: async (t) => {
    try {
      await DBUtils.setupTempUsersTable();
    } catch (e) {
      t.fail(`Database setup failed:\n${e}`);
      return;
    }

    t.plan(6);

    const email = "test@test.com";
    const token = Subscribers.generateToken();

    let ret = await Subscribers.addTempUser(email, token);
    t.deepEqual(ret, {
      error: null,
    }, "Add a user.");

    ret = await Subscribers.getTempUser(email);
    t.deepEqual(ret, {
      error: null,
      email,
      token,
    }, "Get the same user.");

    ret = await Subscribers.addTempUser(email, token);
    t.deepEqual(ret, {
      error: null,
      duplicate: true,
    }, "Add the same user again.");

    ret = await Subscribers.deleteTempUser(email);
    t.deepEqual(ret, {
      error: null,
    }, "Delete the user.");

    ret = await Subscribers.getTempUser(email);
    t.deepEqual(ret, {
      error: null,
    }, "Get the same user again - email and token shouldn't be available");

    try {
      await Subscribers.addTempUser(email, "fake token");
      t.fail("Attempting to add temporary user with fake token succeeded - should have failed.");
    } catch (e) {
      t.pass("Attempting to add temporary user with fake token failed as expected.");
    }
  },
});

tests.push({
  msg: "Test integrity of token generation/validation.",
  callback: async (t) => {
    t.plan(1);

    t.ok(Subscribers.validateToken(Subscribers.generateToken()),
         "Generated token should be valid.");
  },
});

(async function runTests() {
  for (const t of tests) {
    test(t.msg, (testObj) => {
      (async () => {
        await t.callback(testObj);
      })();
    });
  }
})();
