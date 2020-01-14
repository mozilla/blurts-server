"use strict";


const DB  = require("../db/DB");
const { FXA } = require("../lib/fxa");
const { requireSessionUser } = require("../middleware");
const { TEST_SUBSCRIBERS } = require("../db/seeds/test_subscribers");


require("./resetDB");


test("requireSessionUser calls getProfileData, updateFxAProfileData, and sets req.user", async () => {
  const req = { session: { user: TEST_SUBSCRIBERS.firefox_account } };
  const res = jest.fn();
  const next = jest.fn();
  jest.mock("../db/DB");
  jest.mock("../lib/fxa");
  FXA.getProfileData = jest.fn();
  FXA.getProfileData.mockReturnValueOnce({});
  DB.updateFxAProfileData = jest.fn();

  await requireSessionUser(req, res, next);

  expect(req.user.id).toEqual(TEST_SUBSCRIBERS.firefox_account.id);
  expect(Number(req.user.fxa_uid)).toEqual(Number(TEST_SUBSCRIBERS.firefox_account.fxa_uid));
  const mockNextCalls = next.mock.calls;
  expect(mockNextCalls.length).toBe(1);

  const mockGetProfileDataCalls = FXA.getProfileData.mock.calls;
  expect(mockGetProfileDataCalls.length).toBe(1);
  expect(mockGetProfileDataCalls[0][0]).toBe(TEST_SUBSCRIBERS.firefox_account.fxa_access_token);
  const mockUpdateFxAProfileDataCalls = DB.updateFxAProfileData.mock.calls;
  expect(mockUpdateFxAProfileDataCalls.length).toBe(1);
});


test("requireSessionUser clears session user and redirects to / if FXA error", async () => {
  const req = { session: { user: TEST_SUBSCRIBERS.firefox_account } };
  const res = { redirect: jest.fn() };
  const next = jest.fn();
  jest.mock("../lib/fxa");
  FXA.getProfileData = jest.fn();
  FXA.getProfileData.mockReturnValueOnce({ name: "HTTPError" });

  await requireSessionUser(req, res, next);

  expect(req.session.hasOwnProperty("user")).toBeFalsy();
  const mockRedirectCallArgs = res.redirect.mock.calls[0];
  expect(mockRedirectCallArgs[0]).toBe("/");
});


test("requireSessionUser redirects to /oauth/init if no user", async () => {
  const req = { session: { } };
  const res = { redirect: jest.fn() };
  const next = jest.fn();

  await requireSessionUser(req, res, next);

  const mockRedirectCallArgs = res.redirect.mock.calls[0];
  expect(mockRedirectCallArgs[0]).toBe("/oauth/init?");
});


test("requireSessionUser redirect preserves utm params", async () => {
  const req = { session: { }, query: {"utm_campaign": "direct-to-dashboard"} };
  const res = { redirect: jest.fn() };
  const next = jest.fn();

  await requireSessionUser(req, res, next);

  const mockRedirectCallArgs = res.redirect.mock.calls[0];
  expect(mockRedirectCallArgs[0]).toBe("/oauth/init?utm_campaign=direct-to-dashboard");
});
