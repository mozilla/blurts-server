"use strict";

const MessageValidator = require("sns-validator");

const DB = require("../db/DB");


const validator = new MessageValidator();


async function notification(req, res) {
  const message = JSON.parse(req.body);
  return new Promise((resolve, reject) => {
    validator.validate(message, async (err, message) => {
      if (err) {
        console.error(err);
        const body = "Access denied. " + err.message;
        res.status(401).send(body);
        return reject(body);
      }

      await handleNotification(message);

      res.status(200).json(
        {status: "OK"}
      );
      return resolve("OK");
    });
  });
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
