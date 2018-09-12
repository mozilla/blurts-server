"use strict";

const httpMocks = require("node-mocks-http");

const DB = require("../../db/DB");
const EmailUtils = require("../../email-utils");
const getSha1 = require("../../sha1-utils");
const user = require("../../controllers/user");

const { testBreaches } = require ("../test-breaches");

require("../resetDB");


jest.mock("../../email-utils");


test("user add POST with email adds unverified subscriber and sends verification email", async () => {
    // Set up test context
    const userAddEmail = "userAdd@test.com";
    let subscribers = await DB.getSubscribersByEmail(userAddEmail);
    expect(subscribers.length).toEqual(0);

    // Set up mocks
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/user/add",
      body: {email:userAddEmail},
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


test("user add request with invalid email throws error", async () => {
    // Set up mocks
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/user/add",
      body: {email:"a"},
    });
    const resp = httpMocks.createResponse();

    // Call code-under-test
    await expect(user.add(req, resp)).rejects.toThrow("Invalid Email");
});


test("user verify request with valid token verifies user", async () => {
  const validToken = "0e2cb147-2041-4e5b-8ca9-494e773b2cf0";
  // Set up mocks
  const req = { query: { token: validToken }, app: { locals: { breaches: testBreaches } } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.verify(req, resp);

  expect(resp.statusCode).toEqual(200);
  const subscriber = await DB.getSubscriberByToken(validToken);
  expect(subscriber.verified).toBeTruthy();
});


test("user verify request with invalid token returns error", async () => {
  const invalidToken = "123456789";

  const req = httpMocks.createRequest({
    method: "GET",
    url: `/user/verify?token=${invalidToken}`,
  });
  const resp = httpMocks.createResponse();

  await expect(user.verify(req, resp)).rejects.toThrow("This email address is not subscribed to Firefox Monitor.");
});


test("user unsubscribe GET request with valid token returns error", async () => {
  const validToken = "0e2cb147-2041-4e5b-8ca9-494e773b2cf0";

  // Set up mocks
  const req = { query: { token: validToken } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.getUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(200);
});


test("user unsubscribe POST request with valid hash and token unsubscribes user", async () => {
  const validToken = "0e2cb147-2041-4e5b-8ca9-494e773b2cf0";
  const validHash = getSha1("unverifiedemail@test.com");
  // Set up mocks
  const req = { body: { token: validToken, emailHash: validHash }, session: {}};
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.postUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(302);
  const subscriber = await DB.getSubscriberByToken(validToken);
  expect(subscriber).toBeUndefined();
});


test("user unsubscribe GET request with invalid token returns error", async () => {
  const invalidToken = "123456789";

  const req = httpMocks.createRequest({
    method: "GET",
    url: `/user/unsubscribe?token=${invalidToken}`,
  });
  const resp = httpMocks.createResponse();

  await expect(user.getUnsubscribe(req, resp)).rejects.toThrow("This email address is not subscribed to Firefox Monitor.");
});


test("user unsubscribe POST request with invalid token and throws error", async () => {
  const invalidToken = "123456789";
  const invalidHash = "0123456789abcdef";

  const req = { body: { token: invalidToken, emailHash: invalidHash } };
  const resp = { redirect: jest.fn() };

  await expect(user.postUnsubscribe(req, resp)).rejects.toThrow("This email address is not subscribed to Firefox Monitor.");
});
