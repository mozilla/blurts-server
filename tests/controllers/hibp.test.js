"use strict";

const AppConstants = require("../../app-constants");
const DB = require("../../db/DB");
const HIBPLib = require("../../hibp");
const hibp = require("../../controllers/hibp");
const EmailUtils = require("../../email-utils");
const { LocaleUtils } = require("../../locale-utils");
const sha1 = require("../../sha1-utils");

const { testBreaches } = require("../test-breaches");
require("../resetDB");


test("notify POST without token should throw error", async() => {
  const testEmail = "victim@spoofattack.com";
  const testHash = sha1.getSha1ForHIBP(testEmail);
  const testPrefix = testHash.slice(0, 6);
  const testSuffix = testHash.slice(6);

  const mockRequest = { body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "SomeSensitiveBreach" } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await expect(hibp.notify(mockRequest, mockResponse)).rejects.toThrow("HIBP notify endpoint requires valid authorization token.");
});


test("notify POST with invalid token should throw error", async() => {
  const testEmail = "victim@spoofattack.com";
  const testHash = sha1.getSha1ForHIBP(testEmail);
  const testPrefix = testHash.slice(0, 6);
  const testSuffix = testHash.slice(6);
  const mockRequest = { token: "token-that-doesnt-match-AppConstants", body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "SomeSensitiveBreach" } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await expect(hibp.notify(mockRequest, mockResponse)).rejects.toThrow("HIBP notify endpoint requires valid authorization token.");
});


async function checkNotifyCallsEverythingItShould(breachedEmail, recipientEmail) {
  if (recipientEmail === undefined) {
    recipientEmail = breachedEmail;
  }
  jest.mock("../../email-utils");
  EmailUtils.sendEmail = jest.fn();
  LocaleUtils.fluentFormat = jest.fn();
  HIBPLib.getBreachesForEmail = jest.fn();

  const testHash = sha1.getSha1ForHIBP(breachedEmail);
  const testPrefix = testHash.slice(0, 6);
  const testSuffix = testHash.slice(6);
  const mockRequest = { token: AppConstants.HIBP_NOTIFY_TOKEN, body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: testBreaches, AVAILABLE_LANGUAGES: ["en"] } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await hibp.notify(mockRequest, mockResponse);

  const mockFluentFormatCalls = LocaleUtils.fluentFormat.mock.calls;
  expect (mockFluentFormatCalls.length).toBe(1);
  const mockFluentFormatCallArgs = mockFluentFormatCalls[0];
  expect (mockFluentFormatCallArgs[0]).toEqual(["en"]);
  expect (mockFluentFormatCallArgs[1]).toBe("breach-alert-subject");

  const mockSendEmailCalls = EmailUtils.sendEmail.mock.calls;
  expect (mockSendEmailCalls.length).toBe(1);
  const mockSendEmailCallArgs = mockSendEmailCalls[0];
  expect (mockSendEmailCallArgs[0]).toBe(recipientEmail);
  expect (mockSendEmailCallArgs[2]).toBe("default_email");
  const mockStatusCallArgs = mockResponse.status.mock.calls[0];
  expect(mockStatusCallArgs[0]).toBe(200);
  const mockJsonCallArgs = mockResponse.json.mock.calls[0];
  expect(mockJsonCallArgs[0].info).toContain("Notified");
}

test("good notify POST with breach, subscriber hash prefix and suffixes should call sendEmail and respond with 200", async () => {
  const testEmail = "verifiedemail@test.com";
  await checkNotifyCallsEverythingItShould(testEmail);
});


test("good notify POST with breach, secondary email hash prefix and suffixes should call sendEmail and respond with 200", async () => {
  const testSecondaryEmail = "firefoxaccount-secondary@test.com";
  await checkNotifyCallsEverythingItShould(testSecondaryEmail);
});


test("good notify POST with breach, secondary email hash prefix and suffixes, all_emails_to_primary should call sendEmail to primary_email and respond with 200", async () => {
  const testBreachedEmail = "secondary_sending_to_primary@test.com";
  const expectedRecipientEmail = "all_emails_to_primary@test.com";
  await checkNotifyCallsEverythingItShould(testBreachedEmail, expectedRecipientEmail);
});


// TODO: test("notify POST with unknown breach should successfully reload breaches")


test("notify POST with unknown breach should throw error", async () => {
  jest.mock("../../hibp");
  HIBPLib.loadBreachesIntoApp = jest.fn();
  const testEmail = "test@example.com";
  const testHash = sha1.getSha1ForHIBP(testEmail);
  const testPrefix = testHash.slice(0, 6);
  const testSuffix = testHash.slice(6);

  const mockRequest = { token: AppConstants.HIBP_NOTIFY_TOKEN, body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: [] } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await expect(hibp.notify(mockRequest, mockResponse)).rejects.toThrow("Unrecognized breach: test");
});


test("notify POST for subscriber with no signup_language should default to en", async () => {
  jest.mock("../../email-utils");
  jest.mock("../../hibp");
  EmailUtils.sendEmail = jest.fn();
  LocaleUtils.fluentFormat = jest.fn();
  HIBPLib.subscribeHash = jest.fn();

  const testEmail = "subscriberwithoutlanguage@test.com";

  await DB.addSubscriber(testEmail);

  const testHash = sha1.getSha1ForHIBP(testEmail);
  const testPrefix = testHash.slice(0, 6);
  const testSuffix = testHash.slice(6);

  const mockRequest = { token: AppConstants.HIBP_NOTIFY_TOKEN, body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: testBreaches } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await hibp.notify(mockRequest, mockResponse);

  const mockSendEmailCalls = EmailUtils.sendEmail.mock.calls;
  expect (mockSendEmailCalls.length).toBe(1);
  const mockSendEmailCallArgs = mockSendEmailCalls[0];
  expect (mockSendEmailCallArgs[0]).toBe(testEmail);
  expect (mockSendEmailCallArgs[2]).toBe("default_email");
  const mockFluentFormatCalls = LocaleUtils.fluentFormat.mock.calls;
  const mockFluentFormatCallArgs = mockFluentFormatCalls[0];
  expect (mockFluentFormatCallArgs[0]).toEqual(["en"]);
});
