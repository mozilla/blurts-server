"use strict";

const nodemailer = require("nodemailer");

const EmailUtils = require("../email-utils");


jest.mock("nodemailer");


test("EmailUtils.init with empty host doesnt invoke nodemailer", () => {
  nodemailer.createTransport = jest.fn();

  EmailUtils.init("");

  expect(nodemailer.createTransport.mock.calls.length).toBe(0);
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
