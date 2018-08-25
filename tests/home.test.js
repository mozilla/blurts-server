"use strict";

const HIBP = require("../hibp");
const home = require("../controllers/home");


jest.mock("../hibp");


HIBP.breaches = [
  {Name: "Test"},
  {Name: "DontShow"},
];


test("home GET without breach renders monitor without breach", () => {
  let mockRequest = { query: { breach: null } };
  const mockResponse = { render: jest.fn() };

  home.home(mockRequest, mockResponse);

  const mockRenderCallArgs = mockResponse.render.mock.calls[0];
  expect(mockRenderCallArgs[0]).toBe("monitor");
  expect(mockRenderCallArgs[1].featuredBreach).toBe(null);
});


test("home GET with breach renders monitor with breach", () => {
  const testBreach = {Name: "Test"};
  let mockRequest = { query: { breach: testBreach.Name } };
  const mockResponse = { render: jest.fn() };

  home.home(mockRequest, mockResponse);

  const mockRenderCallArgs = mockResponse.render.mock.calls[0];
  expect(mockRenderCallArgs[0]).toBe("monitor");
  expect(mockRenderCallArgs[1].featuredBreach).toEqual(testBreach);
});


test("notFound set status 404 and renders 404", () => {
  const mockRequest = {};
  const mockResponse = { status: jest.fn(), render: jest.fn() };

  home.notFound(mockRequest, mockResponse);

  const mockStatusCallArgs = mockResponse.status.mock.calls[0];
  const mockRenderCallArgs = mockResponse.render.mock.calls[0];
  expect(mockStatusCallArgs[0]).toBe(404);
  expect(mockRenderCallArgs[0]).toBe("404");
});
