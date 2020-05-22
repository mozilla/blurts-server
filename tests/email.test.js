"use strict";

const nodemailer = require("nodemailer");

const EmailUtils = require("../email-utils");
const { TEST_SUBSCRIBERS, TEST_EMAIL_ADDRESSES } = require("../db/seeds/test_subscribers");

jest.mock("nodemailer");

test("EmailUtils.init with empty host doesnt invoke nodemailer", () => {
    nodemailer.createTransport = jest.fn();

    EmailUtils.init("");

    const mockCreateTransport = nodemailer.createTransport.mock;
    expect(mockCreateTransport.calls.length).toBe(1);
    expect(mockCreateTransport.calls[0][0]).toEqual({jsonTransport: true});
});

test("EmailUtils.init with user, pass, host, port invokes nodemailer.createTransport", () => {
    const testSmtpUrl = "smtps://test:test@test:1";
    nodemailer.createTransport = jest.fn();

    EmailUtils.init(testSmtpUrl);

    const mockCreateTransport = nodemailer.createTransport.mock;
    expect(mockCreateTransport.calls.length).toBe(1);
    expect(mockCreateTransport.calls[0][0]).toBe(testSmtpUrl);
});

test("EmailUtils.sendEmail with recipient, subject, template, context calls gTransporter.sendMail", () => {
    const testSmtpUrl = "smtps://test:test@test:1";
    const sendMailArgs = ["test@example.com", "subject", "template.hbs", {breach: "Test"}];
    nodemailer.createTransport = jest.fn();

    EmailUtils.init(testSmtpUrl);
    EmailUtils.sendEmail(...sendMailArgs);

    // TODO: find a way to expect gTransporter.sendMail
});

test("EmailUtils.getUnsubscribeUrl works with subscriber record", () => {
    const subscriberRecord = TEST_SUBSCRIBERS.firefox_account;

    const unsubUrl = EmailUtils.getUnsubscribeUrl(subscriberRecord).toString();

    expect(unsubUrl).toMatch(subscriberRecord.primary_sha1);
    expect(unsubUrl).toMatch(subscriberRecord.primary_verification_token);

});

test("EmailUtils.getUnsubscribeUrl works with email_address record", () => {
    const emailAddressRecord = TEST_EMAIL_ADDRESSES.firefox_account;

    const unsubUrl = EmailUtils.getUnsubscribeUrl(emailAddressRecord).toString();

    expect(unsubUrl).toMatch(emailAddressRecord.sha1);
    expect(unsubUrl).toMatch(emailAddressRecord.verification_token);
});
