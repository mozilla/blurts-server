"use strict";

const httpMocks = require("node-mocks-http");

const DB = require("../db/DB");
const EmailUtils = require("../email-utils");
const user = require("../controllers/user");

require("./resetDB");


jest.mock("../email-utils");


test("POST with email adds unverified subscriber and sends verification email", async () => {
    // Set up test context
    const userAddEmail = "userAdd@test.com";
    let subscribers = await DB.getSubscribersByEmail(userAddEmail);
    expect(subscribers.length).toEqual(0);

    // Set up mocks
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/user/add",
      body: {email:"userAdd@test.com"},
    });
    const resp = httpMocks.createResponse();
    EmailUtils.sendEmail.mockResolvedValue(true);

    // Call code-under-test
    await user.add(req, resp);

    // Check expectations
    expect(resp.statusCode).toEqual(200);
    subscribers = await DB.getSubscribersByEmail(userAddEmail);
    expect(subscribers.length).toEqual(1);
    const userAdded = subscribers[0];
    expect(userAdded.email).toEqual(userAddEmail);
    expect(userAdded.verified).toBeFalsy();

    const mockCalls = EmailUtils.sendEmail.mock.calls;
    expect(mockCalls.length).toEqual(1);
    const mockCallArgs = mockCalls[0];
    expect(mockCallArgs).toContain(userAddEmail);
    expect(mockCallArgs).toContain("email_verify");
});
