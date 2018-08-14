"use strict";

const fs = require("fs");
const httpMocks = require("node-mocks-http");
const path = require("path");
const test = require("tape-async");

const DB = require("../db/DB");
const getSha1 = require("../sha1-utils");
const ses = require("../controllers/ses");


const createRequestBody = function(notificationType) {
  const cwd = path.join(path.dirname(fs.realpathSync(__filename)));
  const bodyFile = path.join(cwd, `ses-${notificationType}-notification.json`);
  return fs.readFileSync(bodyFile).toString();
};

test("setup", async t => {
  DB.createConnection();
});


test("ses notification with Permanent bounce unsubscribes recipient", async t => {
  const testEmail = "bounce@simulator.amazonses.com";

  await DB.addSubscriber(testEmail);
  let subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  t.deepEqual(subscribers.length, 1);

  const req = httpMocks.createRequest({
    method: "POST",
    url: "/ses/notification",
    body: createRequestBody("bounce"),
  });
  const resp = httpMocks.createResponse();

  await ses.notification(req, resp);
  t.deepEqual(resp.statusCode, 200);

  subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  t.deepEqual(subscribers.length, 0);
});


test("ses notification with Complaint unsubscribes recipient", async t => {
  const testEmail = "complaint@simulator.amazonses.com";

  await DB.addSubscriber(testEmail);
  let subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  t.deepEqual(subscribers.length, 1);

  const req = httpMocks.createRequest({
    method: "POST",
    url: "/ses/notification",
    body: createRequestBody("complaint"),
  });
  const resp = httpMocks.createResponse();

  await ses.notification(req, resp);
  t.deepEqual(resp.statusCode, 200);

  subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)]);
  t.deepEqual(subscribers.length, 0);
});


test("teardown", async t => {
  DB.destroyConnection();
});
