"use strict";

const httpMocks = require("node-mocks-http");

const DB = require("../../db/DB");
const EmailUtils = require("../../email-utils");
const getSha1 = require("../../sha1-utils");
const user = require("../../controllers/user");

const { testBreaches } = require ("../test-breaches");

require("../resetDB");


jest.mock("../../email-utils");
jest.mock("../../hibp");

const mockRequest = { fluentFormat: jest.fn() };


test("user add POST with email adds unverified subscriber and sends verification email", async () => {
    // Set up test context
    const userAddEmail = "userAdd@test.com";
    const userAddLanguages = "en-US,en;q=0.5";
    let subscribers = await DB.getSubscribersByEmail(userAddEmail);
    expect(subscribers.length).toEqual(0);

    // Set up mocks
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/user/add",
      headers: { "accept-language": userAddLanguages },
      body: {email:userAddEmail},
      fluentFormat: jest.fn(),
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
    expect(userAdded.signup_language).toEqual(userAddLanguages);

    const mockCalls = EmailUtils.sendEmail.mock.calls;
    expect(mockCalls.length).toEqual(1);
    const mockCallArgs = mockCalls[0];
    expect(mockCallArgs).toContain(userAddEmail);
    expect(mockCallArgs).toContain("default_email");
});


test("user add request with invalid email throws error", async () => {
    // Set up mocks
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/user/add",
      body: {email:"a"},
      fluentFormat: jest.fn(),
    });
    const resp = httpMocks.createResponse();

    // Call code-under-test
    await expect(user.add(req, resp)).rejects.toThrow("user-add-invalid-email");
});


test("user verify request with valid token verifies user", async () => {
  const validToken = "0e2cb147-2041-4e5b-8ca9-494e773b2cf0";
  // Set up mocks
  const req = { fluentFormat: jest.fn(), query: { token: validToken }, app: { locals: { breaches: testBreaches } } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.verify(req, resp);

  expect(resp.statusCode).toEqual(200);
  const subscriber = await DB.getSubscriberByToken(validToken);
  expect(subscriber.verified).toBeTruthy();
});


test("user verify request for already verified user doesn't send extra email", async () => {
  const alreadyVerifiedToken = "54010800-6c3c-4186-971a-76dc92874941";
  // Set up mocks
  EmailUtils.sendEmail = jest.fn();
  mockRequest.query = { token: alreadyVerifiedToken };
  mockRequest.app = { locals: { breaches: testBreaches } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.verify(mockRequest, resp);

  expect(resp.statusCode).toEqual(200);
  const subscriber = await DB.getSubscriberByToken(alreadyVerifiedToken);
  expect(subscriber.verified).toBeTruthy();
  expect(EmailUtils.sendEmail).not.toHaveBeenCalled();
});


test("user verify request with invalid token returns error", async () => {
  const invalidToken = "123456789";

  const req = httpMocks.createRequest({
    method: "GET",
    url: `/user/verify?token=${invalidToken}`,
    fluentFormat: jest.fn(),
  });
  const resp = httpMocks.createResponse();

  await expect(user.verify(req, resp)).rejects.toThrow("error-not-subscribed");
});


test("user unsubscribe GET request with valid token returns error", async () => {
  const validToken = "0e2cb147-2041-4e5b-8ca9-494e773b2cf0";

  // Set up mocks
  const req = { fluentFormat: jest.fn(), query: { token: validToken, hash: "ad9c69bcc69b3399775d2ddbe9b0b229369fca42" } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.getUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(200);
});


test("user unsubscribe POST request with valid hash and token unsubscribes user", async () => {
  const validToken = "0e2cb147-2041-4e5b-8ca9-494e773b2cf0";
  const validHash = getSha1("unverifiedemail@test.com");
  // Set up mocks
  const req = { fluentFormat: jest.fn(), body: { token: validToken, emailHash: validHash }, session: {}};
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
    fluentFormat: jest.fn(),
  });
  const resp = httpMocks.createResponse();

  await expect(user.getUnsubscribe(req, resp)).rejects.toThrow("error-not-subscribed");
});


test("user unsubscribe POST request with invalid token and throws error", async () => {
  const invalidToken = "123456789";
  const invalidHash = "0123456789abcdef";

  const req = { fluentFormat: jest.fn(), body: { token: invalidToken, emailHash: invalidHash } };
  const resp = { redirect: jest.fn() };

  await expect(user.postUnsubscribe(req, resp)).rejects.toThrow("error-not-subscribed");
});
