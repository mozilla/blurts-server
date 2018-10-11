"use strict";

const AppConstants = require("../../app-constants");
const HIBPLib = require("../../hibp");
const hibp = require("../../controllers/hibp");
const EmailUtils = require("../../email-utils");
const { LocaleUtils } = require("../../locale-utils");
const sha1 = require("../../sha1-utils");

const { testBreaches } = require("../test-breaches");
require("../resetDB");


test("notify POST without token should throw error", async() => {
  const testEmail = "victim@spoofattack.com";
  const testHash = sha1(testEmail);
  const testPrefix = testHash.slice(0, 6).toUpperCase();
  const testSuffix = testHash.slice(6).toUpperCase();

  const mockRequest = { body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "SomeSensitiveBreach" } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await expect(hibp.notify(mockRequest, mockResponse)).rejects.toThrow("HIBP notify endpoint requires valid authorization token.");
});


test("notify POST with invalid token should throw error", async() => {
  const testEmail = "victim@spoofattack.com";
  const testHash = sha1(testEmail);
  const testPrefix = testHash.slice(0, 6).toUpperCase();
  const testSuffix = testHash.slice(6).toUpperCase();

  const mockRequest = { token: "token-that-doesnt-match-AppConstants", body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "SomeSensitiveBreach" } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await expect(hibp.notify(mockRequest, mockResponse)).rejects.toThrow("HIBP notify endpoint requires valid authorization token.");
});


test("notify POST with breach, subscriber hash prefix and suffixes should call sendEmail and respond with 200", async () => {
  jest.mock("../../email-utils");
  EmailUtils.sendEmail = jest.fn();
  LocaleUtils.fluentFormat = jest.fn();
  const testEmail = "verifiedemail@test.com";
  const testHash = sha1(testEmail);
  const testPrefix = testHash.slice(0, 6).toUpperCase();
  const testSuffix = testHash.slice(6).toUpperCase();

  HIBPLib.getUnsafeBreachesForEmail = jest.fn();

  const mockRequest = { token: AppConstants.HIBP_NOTIFY_TOKEN, body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: testBreaches, AVAILABLE_LANGUAGES: ["en"] } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await hibp.notify(mockRequest, mockResponse);

  const mockFluentFormatCalls = LocaleUtils.fluentFormat.mock.calls;
  expect (mockFluentFormatCalls.length).toBe(1);
  const mockFluentFormatCallArgs = mockFluentFormatCalls[0];
  expect (mockFluentFormatCallArgs[0]).toEqual(["en", "en-US"]);
  expect (mockFluentFormatCallArgs[1]).toBe("hibp-notify-email-subject");

  const mockSendEmailCalls = EmailUtils.sendEmail.mock.calls;
  expect (mockSendEmailCalls.length).toBe(1);
  const mockSendEmailCallArgs = mockSendEmailCalls[0];
  expect (mockSendEmailCallArgs[0]).toBe(testEmail);
  expect (mockSendEmailCallArgs[2]).toBe("report");
  const mockStatusCallArgs = mockResponse.status.mock.calls[0];
  expect(mockStatusCallArgs[0]).toBe(200);
  const mockJsonCallArgs = mockResponse.json.mock.calls[0];
  expect(mockJsonCallArgs[0].info).toContain("Notified");
});


// TODO: test("notify POST with unknown breach should successfully reload breaches")


test("notify POST with unknown breach should throw error", async () => {
  jest.mock("../../hibp");
  HIBPLib.loadBreachesIntoApp = jest.fn();
  const testEmail = "test@example.com";
  const testHash = sha1(testEmail);
  const testPrefix = testHash.slice(0, 6).toUpperCase();
  const testSuffix = testHash.slice(6).toUpperCase();

  const mockRequest = { token: AppConstants.HIBP_NOTIFY_TOKEN, body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: [] } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await expect(hibp.notify(mockRequest, mockResponse)).rejects.toThrow("Unrecognized breach: test");
});


test("GET breaches with no if-modified-since responds with Last-Modified and json", async () => {
  const testDate = new Date();
  const mockReq = { headers: [], app: { locals: { breaches: testBreaches, mostRecentBreachDateTime: testDate } } };
  const mockResp = { append: jest.fn(), json: jest.fn() };

  await hibp.breaches(mockReq, mockResp);

  const mockAppendCallArgs = mockResp.append.mock.calls[0];
  expect(mockAppendCallArgs[0]).toBe("Last-Modified");
  expect(mockAppendCallArgs[1]).toBe(testDate);
  const mockJsonCallArgs = mockResp.json.mock.calls[0];
  expect(mockJsonCallArgs[0]).toBe(testBreaches);
});


test("GET breaches with expired if-modified-since responds with Last-Modified and json", async () => {
  const testDate = new Date();
  const mockReq = { headers: {"if-modified-since": "Mon, 10 Sep 2016 00:00:00 GMT"}, app: { locals: { breaches: testBreaches, mostRecentBreachDateTime: testDate } } };
  const mockResp = { append: jest.fn(), json: jest.fn() };

  await hibp.breaches(mockReq, mockResp);

  const mockAppendCallArgs = mockResp.append.mock.calls[0];
  expect(mockAppendCallArgs[0]).toBe("Last-Modified");
  expect(mockAppendCallArgs[1]).toBe(testDate);
  const mockJsonCallArgs = mockResp.json.mock.calls[0];
  expect(mockJsonCallArgs[0]).toBe(testBreaches);
});


test("GET breaches with up-to-date if-modified-since responds 304", async () => {
  const mockReq = { headers: {"if-modified-since": "Mon, 10 Sep 2018 00:00:00 GMT"}, app: { locals: { breaches: testBreaches } } };
  const mockResp = { sendStatus: jest.fn() };

  await hibp.breaches(mockReq, mockResp);

  const mockSendStatusCallArgs = mockResp.sendStatus.mock.calls[0];
  expect(mockSendStatusCallArgs[0]).toBe(304);
});


test("GET breaches after HIBP_RELOAD_BREACHES_TIMER triggers HIBP reload", async () => {
  jest.mock("../../hibp");
  HIBPLib.loadBreachesIntoApp = jest.fn();
  const breachesLoaded20mAgoDateTime = new Date();
  breachesLoaded20mAgoDateTime.setMinutes(breachesLoaded20mAgoDateTime.getMinutes() - 20);
  const mockReq = { headers: {"if-modified-since": "Mon, 10 Sep 2018 00:00:00 GMT"}, app: { locals: { breaches: testBreaches, breachesLoadedDateTime: breachesLoaded20mAgoDateTime } } };
  const mockResp = { sendStatus: jest.fn() };

  await hibp.breaches(mockReq, mockResp);

  const mockSendStatusCallArgs = mockResp.sendStatus.mock.calls[0];
  expect(mockSendStatusCallArgs[0]).toBe(304);
  const mockLoadBreachesCallArgs = HIBPLib.loadBreachesIntoApp.mock.calls[0];
  expect(mockLoadBreachesCallArgs[0]).toBe(mockReq.app);
});
