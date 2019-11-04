"use strict";


const { requireSessionUser } = require("../middleware");


const { TEST_SUBSCRIBERS } = require("../db/seeds/test_subscribers");

require("./resetDB");


test("requireSessionUser sets req.user", async () => {
  const req = { session: { user: TEST_SUBSCRIBERS.firefox_account } };
  const res = jest.fn();
  const next = jest.fn();

  await requireSessionUser(req, res, next);

  expect(req.user.id).toEqual(TEST_SUBSCRIBERS.firefox_account.id);
  expect(Number(req.user.fxa_uid)).toEqual(Number(TEST_SUBSCRIBERS.firefox_account.fxa_uid));
  const mockNextCalls = next.mock.calls;
  expect(mockNextCalls.length).toBe(1);
});


test("requireSessionUser redirects to /oauth/init if no user", async () => {
  const req = { session: { } };
  const res = { redirect: jest.fn() };
  const next = jest.fn();

  await requireSessionUser(req, res, next);

  const mockRedirectCallArgs = res.redirect.mock.calls[0];
  expect(mockRedirectCallArgs[0]).toBe("/oauth/init");
});
