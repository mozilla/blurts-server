"use strict";

const httpMocks = require("node-mocks-http");

const DB = require("../db/DB");
const getSha1 = require("../sha1-utils");
const ses = require("../controllers/ses");

require("./resetDB");


const testNotifications = new Map();
testNotifications.set("bounce", require("./ses-bounce-notification.json"));
testNotifications.set("complaint", require("./ses-complaint-notification.json"));


const createRequestBody = function(notificationType, bounceSubType = null) {
  const notification = testNotifications.get(notificationType);
  if (bounceSubType) {
    const message = JSON.parse(notification.Message);
    message.bounce.bounceSubType = bounceSubType;
    notification.Message = JSON.stringify(message);
  }
  return JSON.stringify(notification);
};


test("ses notification with Permanent bounce unsubscribes recipient", async () => {
  const bounceSubTypes = ["General", "NoEmail", "Suppressed"];
  const testEmail = "bounce@simulator.amazonses.com";
  const testHashes = [getSha1(testEmail)];

  for (let i=0; i < bounceSubTypes.length; i++) {
    await DB.addSubscriber(testEmail);
    let subscribers = await DB.getSubscribersByHashes(testHashes);
    expect(subscribers.length).toEqual(1);

    const req = httpMocks.createRequest({
      method: "POST",
      url: "/ses/notification",
      body: createRequestBody("bounce", bounceSubTypes[i]),
    });
    const resp = httpMocks.createResponse();

    await ses.notification(req, resp);
    expect(resp.statusCode).toEqual(200);

    subscribers = await DB.getSubscribersByHashes(testHashes);
    expect(subscribers.length).toEqual(0);
  }
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
