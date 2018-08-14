"use strict";

const DB = require("../db/DB");


const notification = async function(req, res) {
  try {
    const notification = JSON.parse(req.body);
    // TODO: verifyNotification(notification) or use http basic auth
    await handleNotification(notification);

    res.status(200).json(
      {status: "OK"}
    );
  } catch (e) {
    res.status(500).json(
      {info: "Internal error."}
    );
  }
};


const handleNotification = async function(notification) {
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
};


const handleBounceMessage = async function(message) {
  const bounce = message.bounce;
  if (
    bounce.bounceType === "Permanent" &&
    ["General", "NoEmail"].includes(bounce.bounceSubType)
  ) {
    return await removeSubscribersFromDB(bounce.bouncedRecipients);
  }
};


const handleComplaintMessage = async function(message) {
  const complaint = message.complaint;
  return await removeSubscribersFromDB(complaint.complainedRecipients);
};


const removeSubscribersFromDB = async function(recipients) {
  for (const recipient of recipients) {
    await DB.removeSubscriber(recipient.emailAddress);
  }
};

module.exports = {
  notification,
  handleNotification,
  handleBounceMessage,
  handleComplaintMessage,
  removeSubscribersFromDB,
};
