"use strict";

const DB = require("../db/DB");


async function notification(req, res) {
  try {
    const notification = JSON.parse(req.body);
    // TODO: verifyNotification(notification) or use http basic auth
    await handleNotification(notification);

    res.status(200).json(
      {status: "OK"}
    );
  } catch (e) {
    console.error("SES notification error: ", e);
    res.status(500).json(
      {info: "Internal error."}
    );
  }
}


async function handleNotification(notification) {
  console.log("Received SES message, ID: ", notification.MessageId);
  const message = JSON.parse(notification.Message);
  switch (message.eventType) {
    case "Bounce":
      await handleBounceMessage(message);
      break;
    case "Complaint":
      await handleComplaintMessage(message);
      break;
    default:
      console.log("Unhandled eventType: ", message.eventType);
  }
}


async function handleBounceMessage(message) {
  const bounce = message.bounce;
  if (bounce.bounceType === "Permanent") {
    return await removeSubscribersFromDB(bounce.bouncedRecipients);
  }
}


async function handleComplaintMessage(message) {
  const complaint = message.complaint;
  return await removeSubscribersFromDB(complaint.complainedRecipients);
}


async function removeSubscribersFromDB(recipients) {
  for (const recipient of recipients) {
    await DB.removeSubscriberByEmail(recipient.emailAddress);
  }
}

module.exports = {
  notification,
  handleNotification,
  handleBounceMessage,
  handleComplaintMessage,
  removeSubscribersFromDB,
};
