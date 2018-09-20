"use strict";

const httpMocks = require("node-mocks-http");

const DB = require("../../db/DB");
const getSha1 = require("../../sha1-utils");
const ses = require("../../controllers/ses");

require("../resetDB");
jest.mock("../../hibp");


const testNotifications = new Map();
testNotifications.set("bounce", require("./ses-bounce-notification.json"));
testNotifications.set("complaint", require("./ses-complaint-notification.json"));
testNotifications.set("invalid", require("./invalid-signature-ses-complaint-notification.json"));


const createRequestBody = function(notificationType) {
  const notification = testNotifications.get(notificationType);
  return JSON.stringify(notification);
};


test("ses notification with Permanent bounce unsubscribes recipient", async () => {
  // TODO: restore tests for ["General", "NoEmail", "Suppressed"] sub types
  const testEmail = "bounce@simulator.amazonses.com";
  const testHashes = [getSha1(testEmail)];

  await DB.addSubscriber(testEmail);
  let subscribers = await DB.getSubscribersByHashes(testHashes);
  expect(subscribers.length).toEqual(1);

  const req = httpMocks.createRequest({
    method: "POST",
    url: "/ses/notification",
    body: createRequestBody("bounce"),
  });
  const resp = httpMocks.createResponse();

  await ses.notification(req, resp);
  expect(resp.statusCode).toEqual(200);

  subscribers = await DB.getSubscribersByHashes(testHashes);
  expect(subscribers.length).toEqual(0);
});


test("ses notification with Complaint unsubscribes recipient", async () => {
  const testEmail = "complaint@simulator.amazonses.com";

  await DB.addSubscriber(testEmail);
  let subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  expect(subscribers.length).toEqual(1);

  const req = httpMocks.createRequest({
    method: "POST",
    url: "/ses/notification",
    body: createRequestBody("complaint"),
  });
  const resp = httpMocks.createResponse();

  await ses.notification(req, resp);
  expect(resp.statusCode).toEqual(200);

  subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  expect(subscribers.length).toEqual(0);
});


test("ses notification with invalid signature responds with error and doesn't change subscribers", async () => {
  const testEmail = "complaint@simulator.amazonses.com";

  await DB.addSubscriber(testEmail);
  let subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  expect(subscribers.length).toEqual(1);

  const req = httpMocks.createRequest({
    method: "POST",
    url: "/ses/notification",
    body: createRequestBody("invalid"),
  });
  const resp = httpMocks.createResponse();

  await expect(ses.notification(req, resp)).rejects.toMatch("invalid");
  expect(resp.statusCode).toEqual(401);

  subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  expect(subscribers.length).toEqual(1);
});
