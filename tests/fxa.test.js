"use strict";

const got = require("got");

const FXA = require("../lib/fxa");


jest.mock("got");


test("revokeOAuthToken calls oauth destroy with fxa_refresh_token", async () => {
  // from db/seeds/test_subscribers.js
  const token = "4a4792b89434153f1a6262fbd6a4510c00834ff842585fc4f4d972da158f0fc1";

  await FXA.revokeOAuthToken(token);

  const gotCalls = got.mock.calls;
  expect(gotCalls.length).toEqual(1);
  const gotCallArgs = gotCalls[0];
  expect(gotCallArgs[0]).toContain("/v1/destroy");
  const gotCallOptions = gotCallArgs[1];
  expect(gotCallOptions.body.refresh_token).toEqual(token);
});
