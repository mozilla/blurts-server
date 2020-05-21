"use strict";

const got = require("got");

const { TEST_SUBSCRIBERS } = require("../db/seeds/test_subscribers");
const { FXA } = require("../lib/fxa");


jest.mock("got");


test("revokeOAuthToken calls oauth destroy with fxa_refresh_token", async () => {
    const subscriber = TEST_SUBSCRIBERS.firefox_account;

    await FXA.revokeOAuthTokens(subscriber);

    const gotCalls = got.mock.calls;
    expect(gotCalls.length).toEqual(2);

    const accessGotCallArgs = gotCalls[0];
    expect(accessGotCallArgs[0]).toContain("/v1/destroy");
    const accessGotCallOptions = accessGotCallArgs[1];
    expect(accessGotCallOptions.body.token).toEqual(subscriber.fxa_access_token);

    const refreshGotCallArgs = gotCalls[1];
    expect(refreshGotCallArgs[0]).toContain("/v1/destroy");
    const refreshGotCallOptions = refreshGotCallArgs[1];
    expect(refreshGotCallOptions.body.refresh_token).toEqual(subscriber.fxa_refresh_token);
});
