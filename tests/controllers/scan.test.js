"use strict";
const AppConstants = require("../../app-constants");
const sha1 = require("../../sha1-utils");
const HIBP = require("../../hibp");
const scan = require("../../controllers/scan");

const { testBreaches } = require ("../test-breaches");
require("../resetDB");


jest.mock("../../hibp");


const mockRequest = { fluentFormat: jest.fn() };

test("scan GET redirects to home", () => {
  shouldRedirectHome(scan.get, mockRequest);
});


test("scan POST with empty email hash redirects to home", () => {
  mockRequest.body = { emailHash: null };

  shouldRedirectHome(scan.post, mockRequest);
});


test("scan POST with hash of empty string redirects to home", () => {
  mockRequest.body = { emailHash: sha1("") };

  shouldRedirectHome(scan.post, mockRequest);
});


test("scan POST with hash should render scan with foundBreaches", async () => {
  const testEmail = "test@example.com";
  const testFoundBreaches = [];

  mockRequest.body = { emailHash: sha1(testEmail) };
  mockRequest.app = { locals: { breaches: testBreaches } };
  mockRequest.session = { user: null };
  mockRequest.query = {
    experimentBranch: false,
  };

  mockRequest.url = { url: AppConstants.SERVER_URL };
  mockRequest.app.locals.SERVER_URL = AppConstants.SERVER_URL;
  mockRequest.csrfToken = jest.fn();

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
