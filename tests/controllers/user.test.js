"use strict";

const httpMocks = require("node-mocks-http");

const DB = require("../../db/DB");
const EmailUtils = require("../../email-utils");
const FXA = require("../../lib/fxa");
const getSha1 = require("../../sha1-utils");
const user = require("../../controllers/user");

const { testBreaches } = require ("../test-breaches");
const { TEST_SUBSCRIBERS, TEST_EMAIL_ADDRESSES } = require("../../db/seeds/test_subscribers");

require("../resetDB");


jest.mock("../../email-utils");
jest.mock("../../hibp");

const mockRequest = { fluentFormat: jest.fn() };


test("user add POST with email adds unverified subscriber and sends verification email", async () => {
  const testUserAddEmail = "addingNewEmail@test.com";
  const testSubscriberEmail = "firefoxaccount@test.com";
  const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

  // Set up mocks
  const req = httpMocks.createRequest({
    method: "POST",
    url: "/user/add",
    body: { email: testUserAddEmail },
    session: { user: testSubscriber },
    fluentFormat: jest.fn(),
  });
  const resp = httpMocks.createResponse();
  EmailUtils.sendEmail.mockResolvedValue(true);

  // Call code-under-test
  await user.add(req, resp);

  // Check expectations
  expect(resp.statusCode).toEqual(302);

  expect(testSubscriber.primary_email).toEqual(testSubscriberEmail);

  const testSubscriberEmailAddressRecords = await DB.getUserEmails(testSubscriber.id);
  const testSubscriberEmailAddresses = testSubscriberEmailAddressRecords.map(record => record.email);
  expect(testSubscriberEmailAddresses.includes(testUserAddEmail)).toBeTruthy();
  for (const testSubscriberEmailAddress of testSubscriberEmailAddresses) {
    if (testSubscriberEmailAddress.email === testUserAddEmail) {
      expect(testSubscriberEmailAddress.verified).toBeFalsy();
    }
  }

  const mockCalls = EmailUtils.sendEmail.mock.calls;
  expect(mockCalls.length).toEqual(1);
  const mockCallArgs = mockCalls[0];
  expect(mockCallArgs).toContain(testUserAddEmail);
  expect(mockCallArgs).toContain("default_email");
});


test("user add request with invalid email throws error", async () => {
    const testSubscriberEmail = "firefoxaccount@test.com";
    const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

    // Set up mocks
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/user/add",
      body: { email: "a" },
      session: { user: testSubscriber },
      fluentFormat: jest.fn(),
    });
    const resp = httpMocks.createResponse();

    // Call code-under-test
    await expect(user.add(req, resp)).rejects.toThrow("user-add-invalid-email");
});


test("user verify request with valid token but no session throws error", async () => {
    const validToken = TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token;

    const req = httpMocks.createRequest({
      method: "GET",
      url: `/user/verify?token=${validToken}`,
      fluentFormat: jest.fn(),
      app: { locals: { breaches: testBreaches } },
    });
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await expect(user.verify(req, resp)).rejects.toThrow("must-be-signed-in");

  const emailAddress = await DB.getEmailByToken(validToken);
  expect(emailAddress.verified).toBeFalsy();
});


test("user verify request with valid token verifies user", async () => {
    const validToken = TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token;
    const testSubscriberEmail = "firefoxaccount@test.com";
    const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

    const req = httpMocks.createRequest({
      method: "GET",
      url: `/user/verify?token=${validToken}`,
      session: { user: testSubscriber },
      fluentFormat: jest.fn(),
      app: { locals: { breaches: testBreaches } },
    });
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.verify(req, resp);

  expect(resp.statusCode).toEqual(200);
  const emailAddress = await DB.getEmailByToken(validToken);
  expect(emailAddress.verified).toBeTruthy();
});


test("user verify request with valid token but wrong user session does NOT verify email address", async () => {
    const validToken = TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token;
    const testSubscriberEmail = "verifiedemail@test.com";
    const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

    const req = httpMocks.createRequest({
      method: "GET",
      url: `/user/verify?token=${validToken}`,
      session: { user: testSubscriber },
      fluentFormat: jest.fn(),
      app: { locals: { breaches: testBreaches } },
    });
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await expect(user.verify(req, resp)).rejects.toThrow("user-verify-token-error");

  const emailAddress = await DB.getEmailByToken(validToken);
  expect(emailAddress.verified).toBeFalsy();
});


test("user verify request for already verified user doesn't send extra email", async () => {
  const alreadyVerifiedToken = TEST_EMAIL_ADDRESSES.firefox_account.verification_token;
  const testSubscriberEmail = "firefoxaccount@test.com";
  const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

  // Set up mocks
  EmailUtils.sendEmail = jest.fn();
  mockRequest.session = { user: testSubscriber };
  mockRequest.query = { token: alreadyVerifiedToken };
  mockRequest.app = { locals: { breaches: testBreaches } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.verify(mockRequest, resp);

  expect(resp.statusCode).toEqual(200);
  const emailAddress = await DB.getEmailByToken(alreadyVerifiedToken);
  expect(emailAddress.verified).toBeTruthy();
  expect(EmailUtils.sendEmail).not.toHaveBeenCalled();
});


test("user verify request with invalid token returns error", async () => {
  const invalidToken = "123456789";
  const testSubscriberEmail = "firefoxaccount@test.com";
  const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

  // Set up mocks
  const req = httpMocks.createRequest({
    method: "GET",
    url: `/user/verify?token=${invalidToken}`,
    session: { user: testSubscriber },
    fluentFormat: jest.fn(),
  });

  const resp = httpMocks.createResponse();

  await expect(user.verify(req, resp)).rejects.toThrow("error-not-subscribed");
});


test("user unsubscribe GET request with valid token and hash returns 200 without error", async () => {
  // from db/seeds/test_subscribers.js
  const subscriberToken = TEST_SUBSCRIBERS.firefox_account.primary_verification_token;
  const subscriberHash = getSha1(TEST_SUBSCRIBERS.firefox_account.primary_email);

  // Set up mocks
  const req = { fluentFormat: jest.fn(), query: { token: subscriberToken, hash: subscriberHash } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.getUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(200);
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


test("user unsubscribe POST request with valid hash and token unsubscribes user and calls FXA.revokeOAuthToken", async () => {
  const validToken = TEST_SUBSCRIBERS.unverified_email.primary_verification_token;
  const validHash = getSha1(TEST_SUBSCRIBERS.unverified_email.primary_email);

  // Set up mocks
  const req = { fluentFormat: jest.fn(), body: { token: validToken, emailHash: validHash }, session: {}};
  const resp = httpMocks.createResponse();
  FXA.revokeOAuthToken = jest.fn();

  // Call code-under-test
  await user.postUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(302);
  const subscriber = await DB.getSubscriberByToken(validToken);
  expect(subscriber).toBeUndefined();
  const mockCalls = FXA.revokeOAuthToken.mock.calls;
  expect(mockCalls.length).toEqual(1);
});


test("user unsubscribe POST request with invalid token and throws error", async () => {
  const invalidToken = "123456789";
  const invalidHash = "0123456789abcdef";

  const req = { fluentFormat: jest.fn(), body: { token: invalidToken, emailHash: invalidHash } };
  const resp = { redirect: jest.fn() };

  await expect(user.postUnsubscribe(req, resp)).rejects.toThrow("error-not-subscribed");
});
