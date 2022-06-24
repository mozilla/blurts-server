"use strict";

const { TEST_SUBSCRIBERS } = require("../db/seeds/test_subscribers");
const AppConstants = require("../app-constants");
const DB = require("../db/DB");
const OneRep = require("../lib/onerep");


const CREATE_ONEREP_PROFILE_DATA = {
  first_name: "Mo",
  last_name: "Zilla",
  addresses: [
    {
      city: "San Francisco",
      state: "CA",
    },
  ],
};

test("clearAllWebhooks clears all webhooks", async () => {
  await OneRep.clearAllWebhooks();
});

test("createProfile creates onerep profile ID", async () => {
  const subscriber = TEST_SUBSCRIBERS.firefox_account;
  const newlyCreatedProfile = await OneRep.createProfile(subscriber, CREATE_ONEREP_PROFILE_DATA);

  // OneRep should have returned a new profile ID
  expect(newlyCreatedProfile.id).toBeGreaterThan(0);

  // The onerep_profile_id should have been saved into the DB
  const subscriberFromDB = await DB.getSubscriberById(subscriber.id);
  expect(subscriberFromDB.onerep_profile_id).toEqual(newlyCreatedProfile.id);
});

test("getProfile gets existing onerep profile", async () => {
  const subscriber = TEST_SUBSCRIBERS.onerep_user;
  const profile = await OneRep.getProfile(subscriber);

  // OneRep should have returned a new profile ID
  expect(profile.id).toEqual(subscriber.onerep_profile_id);
});

test("createWebhook makes webhooks", async () => {
  const endpointUrl = `${AppConstants.SERVER_URL}/brokers/onerep_event`;
  for (const eventType of ["scan.started", "scan.completed", "scan_result.created", "scan_result.updated"]) {
    const createWebhookResponse = OneRep.createWebhook(eventType, endpointUrl);
    expect(createWebhookResponse.statusCode).toEqual(201);
    expect(createWebhookResponse.body.event_type).toEqual(eventType);
    expect(createWebhookResponse.body.endpoint_url).toEqual(endpointUrl);
  }
});

test("createScan creates scan for onerep profile", async () => {
  const subscriber = TEST_SUBSCRIBERS.onerep_user;
  const scan = await OneRep.createScan(subscriber);

  // OneRep should have created a scan for this profile and returned it
  expect(scan.id).toBeGreaterThan(0);
  expect(scan.profile_id).toEqual(subscriber.onerep_profile_id);
});

test("listScans lists scans for onerep profile", async () => {
  const subscriber = TEST_SUBSCRIBERS.onerep_user;
  const scans = await OneRep.listScans(subscriber);

  // FIXME: this depends on the previous test 😢
  expect(scans.length).toBeGreaterThan(0);
  expect(scans[0].profile_id).toEqual(subscriber.onerep_profile_id);
});

test("getScan gets a single scan for onerep profile", async () => {
  const subscriber = TEST_SUBSCRIBERS.onerep_user;
  const scans = await OneRep.listScans(subscriber);

  // FIXME: this depends on the previous test 😢
  expect(scans.length).toBeGreaterThan(0);
  expect(scans[0].profile_id).toEqual(subscriber.onerep_profile_id);

  const scan = await OneRep.getScan(subscriber, scans[0].id);
  expect(scan.id).toEqual(scans[0].id);
  expect(scan.profile_id).toEqual(subscriber.onerep_profile_id);
});

test("getScanResults gets scan results for onerep profile", async () => {
  const subscriber = TEST_SUBSCRIBERS.onerep_user;
  const scanResults = await OneRep.getScanResults(subscriber);
  expect(scanResults.data.length).toBeGreaterThan(0);
  expect(scanResults.links.first).toContain(`profile_id%5B0%5D=${subscriber.onerep_profile_id}`);
});

/*
 * SKIP tests to activate and opt-out: OneRep doesn't seem to allow
 * these operations in the sandbox.
 *
test("activate activates the onerep profile", async () => {
  const subscriber = TEST_SUBSCRIBERS.onerep_user;
  const activatedSubscriber = await OneRep.activate(subscriber);
  expect(activatedSubscriber.status).toEqual("active");
});

test("optout sets optout_in_progress on scan results", async () => {
  const subscriber = TEST_SUBSCRIBERS.onerep_user;
  const activatedSubscriber = await OneRep.activate(subscriber);
  expect(activatedSubscriber.status).toEqual("active");
  const optOutResponse = await OneRep.optout(subscriber);
  expect(optOutResponse.status).toEqual(204);
  const scanResults = await OneRep.getScanResults(subscriber);
  for (const result of scanResults) {
    expect(result.status).toEqual("optout_in_progress");
  }
});
*/
