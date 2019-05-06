"use strict";

const got = require("got");

const { TEST_SUBSCRIBERS } = require("../db/seeds/test_subscribers");
const FXA = require("../lib/fxa");


jest.mock("got");


test("revokeOAuthToken calls oauth destroy with fxa_refresh_token", async () => {
  const token = TEST_SUBSCRIBERS.firefox_account.fxa_refresh_token;

  await FXA.revokeOAuthToken(token);

  const gotCalls = got.mock.calls;
  expect(gotCalls.length).toEqual(1);
  const gotCallArgs = gotCalls[0];
  expect(gotCallArgs[0]).toContain("/v1/destroy");
  const gotCallOptions = gotCallArgs[1];
  expect(gotCallOptions.body.refresh_token).toEqual(token);
});
