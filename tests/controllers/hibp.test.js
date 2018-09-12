"use strict";

const HIBPLib = require("../../hibp");
const hibp = require("../../controllers/hibp");
const EmailUtils = require("../../email-utils");
const sha1 = require("../../sha1-utils");

const { testBreaches } = require("../test-breaches");
require("../resetDB");


test("notify POST with breach, subscriber hash prefix and suffixes should call sendEmail and respond with 200", async () => {
  jest.mock("../../email-utils");
  EmailUtils.sendEmail = jest.fn();
  const testEmail = "verifiedemail@test.com";
  const testHash = sha1(testEmail);
  const testPrefix = testHash.slice(0, 6).toUpperCase();
  const testSuffix = testHash.slice(6).toUpperCase();

  const mockRequest = { body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: testBreaches } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await hibp.notify(mockRequest, mockResponse);

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

  const mockRequest = { body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: [] } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await expect(hibp.notify(mockRequest, mockResponse)).rejects.toThrow("Unrecognized breach: test");
});
