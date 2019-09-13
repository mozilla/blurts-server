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


function expectResponseRenderedSubpagePartial(resp, partial) {
  expect(resp.statusCode).toEqual(200);
  expect(resp.render).toHaveBeenCalledTimes(1);
  const renderCallArgs = resp.render.mock.calls[0];
  expect(renderCallArgs[0]).toEqual("subpage");
  expect(renderCallArgs[1].whichPartial).toEqual(partial);
}


test("user add POST with email adds unverified subscriber and sends verification email", async () => {
  const testUserAddEmail = "addingnewemail@test.com";
  const testSubscriberEmail = "firefoxaccount@test.com";
  const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

  // Set up mocks
  const req = httpMocks.createRequest({
    method: "POST",
    url: "/user/add",
    body: { email: testUserAddEmail },
    session: { user: testSubscriber },
    fluentFormat: jest.fn(),
    headers: {
      referer: "",
    },
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


test("user add POST with upperCaseAddress adds email_address record with lowercaseaddress", async () => {
  const testUserAddEmail = "addingUpperCaseEmail@test.com";
  const testSubscriberEmail = "firefoxaccount@test.com";
  const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);

  // Set up mocks
  const req = httpMocks.createRequest({
    method: "POST",
    url: "/user/add",
    body: { email: testUserAddEmail },
    session: { user: testSubscriber },
    fluentFormat: jest.fn(),
    headers: {
      referer: "",
    },
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
  expect(testSubscriberEmailAddresses.includes(testUserAddEmail.toLowerCase())).toBeTruthy();
});


test("user resendEmail with valid session and email id resets email_address record and sends new verification email", async () => {
  const testSubscriberEmail = TEST_SUBSCRIBERS.firefox_account.primary_email;
  const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);
  const testEmailAddressId = TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.id;
  const startingTestEmailAddress = await DB.getEmailById(testEmailAddressId);

  // Set up mocks
  const req = httpMocks.createRequest({
    method: "POST",
    url: "/user/resend-email",
    body: { emailId: testEmailAddressId },
    session: { user: testSubscriber },
    fluentFormat: jest.fn(),
  });
  const resp = httpMocks.createResponse();
  EmailUtils.sendEmail.mockResolvedValue(true);

  // Call code-under-test
  await user.resendEmail(req, resp);

  // Check expectations
  expect(resp.statusCode).toEqual(200);
  const resetTestEmailAddress = await DB.getEmailById(testEmailAddressId);
  expect(startingTestEmailAddress.verification_token).not.toEqual(resetTestEmailAddress.verification_token);
});


test("user updateCommunicationOptions request with valid session updates DB", async () => {
  const testSubscriberEmail = TEST_SUBSCRIBERS.firefox_account.primary_email;
  const testSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);
  const req = httpMocks.createRequest({
    method: "POST",
    url: "/user/update-comm-option",
    body: { communicationOption: 0 },
    session: { user: testSubscriber },
  });
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.updateCommunicationOptions(req, resp);

  // Check expectations
  expect(resp.statusCode).toEqual(200);
  const updatedTestSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);
  expect(updatedTestSubscriber.all_emails_to_primary).toBeFalsy();


  req.body = { communicationOption: 1 };

  // Call code-under-test
  await user.updateCommunicationOptions(req, resp);

  expect(resp.statusCode).toEqual(200);
  const againUpdatedTestSubscriber = await DB.getSubscriberByEmail(testSubscriberEmail);
  expect(againUpdatedTestSubscriber.all_emails_to_primary).toBeTruthy();
});


// TODO: more tests of resendEmail failure scenarios


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
  await expect(user.verify(req, resp)).rejects.toThrow("error-must-be-signed-in");

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

  expect(resp.statusCode).toEqual(302);
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

  expect(resp.statusCode).toEqual(302);
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


test("user unsubscribe GET request with valid token and hash for primary/subscriber record returns 302 to preferences", async () => {
  // from db/seeds/test_subscribers.js
  const subscriberToken = TEST_SUBSCRIBERS.firefox_account.primary_verification_token;
  const subscriberHash = getSha1(TEST_SUBSCRIBERS.firefox_account.primary_email);

  // Set up mocks
  const req = { fluentFormat: jest.fn(), query: { token: subscriberToken, hash: subscriberHash } };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.getUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(302);
  expect(resp._getRedirectUrl()).toEqual("/user/preferences");
});


test("user unsubscribe GET request with valid token and hash for a secondary email_addresses record renders unsubscribe", async () => {
  // from db/seeds/test_subscribers.js
  const subscriberToken = TEST_EMAIL_ADDRESSES.firefox_account.verification_token;
  const subscriberHash = getSha1(TEST_EMAIL_ADDRESSES.firefox_account.email);

  // Set up mocks
  const req = { fluentFormat: jest.fn(), query: { token: subscriberToken, hash: subscriberHash } };
  const resp = httpMocks.createResponse();
  resp.render = jest.fn();

  // Call code-under-test
  await user.getUnsubscribe(req, resp);

  expectResponseRenderedSubpagePartial(resp, "subpages/unsubscribe");
});


test("user unsubscribe GET request with valid token and hash for an old pre-FxA subscriber record renders unsubscribe", async () => {
  // from db/seeds/test_subscribers.js
  const subscriberToken = TEST_SUBSCRIBERS.verified_email.primary_verification_token;
  const subscriberHash = getSha1(TEST_SUBSCRIBERS.firefox_account.primary_email);

  // Set up mocks
  const req = { fluentFormat: jest.fn(), query: { token: subscriberToken, hash: subscriberHash } };
  const resp = httpMocks.createResponse();
  resp.render = jest.fn();

  // Call code-under-test
  await user.getUnsubscribe(req, resp);

  expectResponseRenderedSubpagePartial(resp, "subpages/unsubscribe");
});


test("user unsubscribe POST request with valid session and emailId for email_address removes from DB", async () => {
  const validToken = TEST_EMAIL_ADDRESSES.firefox_account.verification_token;
  const validHash = TEST_EMAIL_ADDRESSES.firefox_account.sha1;

  // Set up mocks
  const req = { fluentFormat: jest.fn(), body: { token: validToken, emailHash: validHash }, session: { user: TEST_SUBSCRIBERS.firefox_account }};
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.postUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(302);
  expect(resp._getRedirectUrl()).toEqual("/user/preferences");
  const emailAddress = await DB.getEmailByToken(validToken);
  expect(emailAddress).toBeUndefined();
});


test("user removeEmail POST request with valid session but wrong emailId for email_address throws error and doesnt remove email", async () => {
  const testEmailAddress = TEST_EMAIL_ADDRESSES.all_emails_to_primary;
  const testEmailId = testEmailAddress.id;
  const req = { fluentFormat: jest.fn(), body: { emailId: testEmailId }, session: { user: TEST_SUBSCRIBERS.firefox_account }};
  const resp = httpMocks.createResponse();

  await expect(user.removeEmail(req, resp)).rejects.toThrow("error-not-subscribed");

  const emailAddress = await DB.getEmailByToken(testEmailAddress.verification_token);
  expect(emailAddress.id).toEqual(testEmailId);
});


test("user/remove-fxm GET request with invalid session returns error", async () => {
  const req = httpMocks.createRequest({
    method: "GET",
    url: "/user/remove-fxm",
    fluentFormat: jest.fn(),
  });
  const resp = httpMocks.createResponse();

  await expect(user.getRemoveFxm(req, resp)).rejects.toThrow("error-must-be-signed-in");
});


test("user/remove-fxm GET request with valid session returns 200 and renders remove_fxm", async () => {
  // Set up mocks
  const req = { fluentFormat: jest.fn(), csrfToken: jest.fn(), session: { user: TEST_SUBSCRIBERS.firefox_account }};
  const resp = httpMocks.createResponse();
  resp.render = jest.fn();

  // Call code-under-test
  await user.getRemoveFxm(req, resp);

  expectResponseRenderedSubpagePartial(resp, "subpages/remove_fxm");
});


test("user/remove-fxm POST request with invalid session returns error", async () => {
  // Set up mocks
  const req = { fluentFormat: jest.fn(), session: {} };
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await expect(user.postRemoveFxm(req, resp)).rejects.toThrow("error-must-be-signed-in");
});


test("user remove-fxm POST request with valid session removes from DB and revokes FXA OAuth token", async () => {
  const req = { fluentFormat: jest.fn(), session: { user: TEST_SUBSCRIBERS.firefox_account, reset: jest.fn() }};
  const resp = httpMocks.createResponse();
  FXA.revokeOAuthTokens = jest.fn();

  await user.postRemoveFxm(req, resp);

  expect(resp.statusCode).toEqual(302);
  expect(resp._getRedirectUrl()).toEqual("/");
  const subscriber = await DB.getEmailByToken(TEST_SUBSCRIBERS.firefox_account.primary_verification_token);
  expect(subscriber).toBeUndefined();
  expect(FXA.revokeOAuthTokens).toHaveBeenCalledTimes(1);
  expect(req.session.reset).toHaveBeenCalledTimes(1);
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


test("user unsubscribe POST request with valid hash and token for email_address removes from DB", async () => {
  const validToken = TEST_EMAIL_ADDRESSES.firefox_account.verification_token;
  const validHash = TEST_EMAIL_ADDRESSES.firefox_account.sha1;

  // Set up mocks
  const req = { fluentFormat: jest.fn(), body: { token: validToken, emailHash: validHash }, session: {}};
  const resp = httpMocks.createResponse();

  // Call code-under-test
  await user.postUnsubscribe(req, resp);

  expect(resp.statusCode).toEqual(302);
  expect(resp._getRedirectUrl()).toEqual("/user/preferences");
  const emailAddress = await DB.getEmailByToken(validToken);
  expect(emailAddress).toBeUndefined();
});


test("user unsubscribe POST request with invalid token and throws error", async () => {
  const invalidToken = "123456789";
  const invalidHash = "0123456789abcdef";

  const req = { fluentFormat: jest.fn(), body: { token: invalidToken, emailHash: invalidHash } };
  const resp = { redirect: jest.fn() };

  await expect(user.postUnsubscribe(req, resp)).rejects.toThrow("error-not-subscribed");
});
