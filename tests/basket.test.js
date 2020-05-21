"use strict";

const got = require("got");

const AppConstants = require("../app-constants");
const basket = require("../basket");


jest.mock("got");

test("subscribe calls got with expected url and options", async () => {
    const testEmail = "test@example.com";

    await basket.subscribe(testEmail);

    const gotCalls = got.mock.calls;
    expect(gotCalls.length).toEqual(1);
    const gotCallArgs = gotCalls[0];
    expect(gotCallArgs[0]).toBe(`${AppConstants.BASKET_URL}/news/subscribe/`);
    expect(gotCallArgs[1].method).toBe("POST");
    const reqBody = gotCallArgs[1].body;
    expect(reqBody.email).toEqual(testEmail);
    expect(reqBody.optin).toEqual("Y");
});
