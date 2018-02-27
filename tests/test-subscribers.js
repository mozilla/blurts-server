"use strict";

require("dotenv").load();

const test = require("tape");

const Subscribers = require("../subscribers");
const DBUtils = require("../db-utils");

// eslint-disable-next-line no-process-env
if (!process.env.TESTING_ENVIRONMENT) {
  console.log("Attempting to run database tests without TESTING_ENVIRONMENT set, exiting.");
  return;
}

const tests = [];
tests.push({
  msg: "Test adding, getting, and deleting subscribers",
  callback: async (t) => {
    t.plan(5);

    const email = "test@test.com";

    let ret = await Subscribers.addUser(email);
    t.deepEqual(ret, {
      success: true,
      error: null,
    }, "Add a user.");

    ret = await Subscribers.getUser(email);
    t.deepEqual(ret, {
      success: true,
      error: null,
      email,
    }, "Get the same user.");

    ret = await Subscribers.addUser(email);
    t.deepEqual(ret, {
      success: true,
      error: null,
      duplicate: true,
    }, "Add the same user again.");

    ret = await Subscribers.deleteUser(email);
    t.deepEqual(ret, {
      success: true,
      error: null,
    }, "Delete the user.");

    ret = await Subscribers.getUser(email);
    t.deepEqual(ret, {
      success: false,
      error: null,
    }, "Try getting the user - should fail.");
  },
});

(async function setupDbAndRunTests() {
  try {
    await DBUtils.setupDatabase();
    console.log("test!");
    for (const t of tests) {
      test(t.msg, (testObj) => {
        (async () => {
          await t.callback(testObj);
        })();
      });
    }
  } catch (e) {
    console.log(e);
  }
})();
