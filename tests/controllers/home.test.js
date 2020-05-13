"use strict";

const AppConstants = require("../../app-constants");
const home = require("../../controllers/home");
const { scanResult } = require("../../scan-results");

let mockRequest = { fluentFormat: jest.fn(), csrfToken: jest.fn() };

function addBreachesToMockRequest(mockRequest) {
  const mockBreaches = [
    {Name: "Test"},
    {Name: "DontShow"},
  ];
  mockRequest.app = { locals: { breaches: mockBreaches } };
  return mockRequest;
}

test("home GET without breach renders monitor without breach", () => {
  mockRequest.query = { breach: null };
  mockRequest = addBreachesToMockRequest(mockRequest);
  mockRequest.session = { user: null} ;
  const mockResponse = { render: jest.fn() };

  home.home(mockRequest, mockResponse);

  const mockRenderCallArgs = mockResponse.render.mock.calls[0];
  expect(mockRenderCallArgs[0]).toBe("monitor");
  expect(mockRenderCallArgs[1].featuredBreach).toBe(null);
});


test("home GET with breach renders monitor with breach", async() => {
  const testBreach = {Name: "Test"};
  mockRequest.query = { breach: testBreach.Name };
  mockRequest = addBreachesToMockRequest(mockRequest);
  mockRequest.session = { user: null };
  mockRequest.url = { url: "https://www.mozilla.com" };
  mockRequest.app.locals.SERVER_URL = AppConstants.SERVER_URL;


  const mockResponse = { render: jest.fn(), redirect: jest.fn() };
  home.home(mockRequest, mockResponse);
  const scanRes = await scanResult(mockRequest);

  expect(scanRes.doorhangerScan).toBe(false);
  expect(scanRes.selfScan).toBe(false);
  const mockRenderCallArgs = mockResponse.render.mock.calls[0];
  expect(mockRenderCallArgs[0]).toBe("monitor");
  expect(mockRenderCallArgs[1].featuredBreach).toEqual(testBreach);
});


test("notFound set status 404 and renders 404", () => {
  const mockResponse = { status: jest.fn(), render: jest.fn() };

  home.notFound(mockRequest, mockResponse);

  const mockStatusCallArgs = mockResponse.status.mock.calls[0];
  const mockRenderCallArgs = mockResponse.render.mock.calls[0];
  expect(mockStatusCallArgs[0]).toBe(404);
  expect(mockRenderCallArgs[0]).toBe("subpage");
});
