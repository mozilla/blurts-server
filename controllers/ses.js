"use strict";

const MessageValidator = require("sns-validator");

const DB = require("../db/DB");

const mozlog = require("../log");


const validator = new MessageValidator();
const log = mozlog("controllers.ses");


async function notification(req, res) {
    const message = JSON.parse(req.body);
    return new Promise((resolve, reject) => {
        validator.validate(message, async (err, message) => {
            if (err) {
                log.error("notification", { err: err });
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
    log.info("received-SNS", { id: notification.MessageId });
    const message = JSON.parse(notification.Message);
    if (message.hasOwnProperty("eventType")) {
        await handleSESMessage(message);
    }
    if (message.hasOwnProperty("event")) {
        await handleFxAMessage(message);
    }
}


async function handleFxAMessage(message) {
    switch (message.event) {
    case "delete":
        await handleDeleteMessage(message);
        break;
    default:
        log.info("unhandled-event", { event: message.event });
    }
}


async function handleDeleteMessage(message) {
    await DB.deleteSubscriberByFxAUID(message.uid);
}


async function handleSESMessage(message) {
    switch (message.eventType) {
    case "Bounce":
        await handleBounceMessage(message);
        break;
    case "Complaint":
        await handleComplaintMessage(message);
        break;
    default:
        log.info("unhandled-eventType", { type: message.eventType });
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
        await DB.removeEmail(recipient.emailAddress);
    }
}

module.exports = {
    notification,
    handleNotification,
    handleBounceMessage,
    handleComplaintMessage,
    removeSubscribersFromDB,
};
