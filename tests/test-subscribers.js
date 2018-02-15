"use strict";

const test = require("tape");

const Subscribers = require("../subscribers");

test("Test adding, getting, and deleting subscribers", (t) => {
  t.plan(5);
  (async () => {
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
  })();
});
