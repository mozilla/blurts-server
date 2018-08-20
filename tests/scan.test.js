"use strict";

const sha1 = require("../sha1-utils");
const HIBP = require("../hibp");
const scan = require("../controllers/scan");

require("./resetDB");


jest.mock("../hibp");

const testBreaches = [
  {
    Title: "Test",
    Name: "Test",
    Domain: "test.com",
    BreachDate: "2012-12-21",
  },
  {
    Title: "Test2",
    Name: "Test2",
    Domain: "test2.com",
    BreachDate: "2016-11-08",
  },
];


test("scan GET redirects to home", () => {
  const mockRequest = {};

  shouldRedirectHome(scan.get, mockRequest);
});


test("scan POST with empty email hash redirects to home", () => {
  const mockRequest = { body: { emailHash: null } };

  shouldRedirectHome(scan.post, mockRequest);
});


test("scan POST with hash of empty string redirects to home", () => {
  const mockRequest = { body: { emailHash: sha1("") } };

  shouldRedirectHome(scan.post, mockRequest);
});


test("scan POST with hash should render scan with foundBreaches", async () => {
  const testEmail = "test@example.com";
  const testFoundBreaches = [];

  const mockRequest = { body: { emailHash: sha1(testEmail) }, app: { locals: { breaches: testBreaches } } };
  const mockResponse = { render: jest.fn() };
  HIBP.getBreachesForEmail.mockResolvedValue(testFoundBreaches);

  await scan.post(mockRequest, mockResponse);

  const mockRenderCallArgs = mockResponse.render.mock.calls[0];
  expect(mockRenderCallArgs[0]).toBe("scan");
  expect(mockRenderCallArgs[1].foundBreaches).toBe(testFoundBreaches);
  expect(mockRenderCallArgs[1].hasOwnProperty("featuredBreach")).toBeFalsy();
});


function shouldRedirectHome(fn, req) {
  const mockResponse = { redirect: jest.fn() };

  fn(req, mockResponse);

  const mockRedirectCallArgs = mockResponse.redirect.mock.calls[0];
  expect(mockRedirectCallArgs[0]).toBe("/");
}
