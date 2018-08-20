"use strict";

const sha1 = require("../sha1-utils");
const hibp = require("../controllers/hibp");

const { testBreaches } = require("./test-breaches");
require("./resetDB");


test("notify POST with breach, hash prefix, and suffixes should respond with 200", async () => {
  const testEmail = "test@example.com";
  const testHash = sha1(testEmail);
  const testPrefix = testHash.slice(0, 6).toUpperCase();
  const testSuffix = testHash.slice(6).toUpperCase();

  const mockRequest = { body: { hashPrefix: testPrefix, hashSuffixes: [testSuffix], breachName: "Test" }, app: { locals: { breaches: testBreaches } } };
  const mockResponse = { status: jest.fn(), json: jest.fn() };

  await hibp.notify(mockRequest, mockResponse);

  const mockStatusCallArgs = mockResponse.status.mock.calls[0];
  expect(mockStatusCallArgs[0]).toBe(200);
  const mockJsonCallArgs = mockResponse.json.mock.calls[0];
  expect(mockJsonCallArgs[0].info).toContain("Notified");
});
