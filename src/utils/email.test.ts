/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, jest } from "@jest/globals";
import type { createTransport, Transporter } from "nodemailer";
import { randomToken } from "./email";
import type * as loggerModule from "../app/functions/server/logging";

jest.mock("nodemailer", () => {
  return {
    createTransport: jest.fn(),
  };
});

jest.mock("../app/functions/server/logging", () => {
  return {
    logger: {
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    },
  };
});

test("EmailUtils.sendEmail before .init() fails", async () => {
  expect.assertions(1);

  const { sendEmail } = await import("./email");

  const expectedError = "SMTP transport not initialized";

  await expect(() =>
    sendEmail("test@example.com", "subject", "<html>test</html>"),
  ).rejects.toThrow(expectedError);
});

test("EmailUtils.init with empty host uses jsonTransport", async () => {
  const mockedLoggerModule = jest.requireMock<typeof loggerModule>(
    "../app/functions/server/logging",
  );
  const mockedNodemailer: {
    createTransport: jest.MockedFunction<typeof createTransport>;
  } = jest.requireMock("nodemailer");
  const { initEmail } = await import("./email");

  expect(await initEmail("")).toBe(true);
  expect(mockedNodemailer.createTransport).toHaveBeenCalledWith({
    jsonTransport: true,
  });
  expect(mockedLoggerModule.logger.info).toHaveBeenCalledWith("smtpUrl-empty", {
    message: "EmailUtils will log a JSON response instead of sending emails.",
  });
});

test("EmailUtils.init with SMTP URL invokes nodemailer.createTransport", async () => {
  const mockedNodemailer: {
    createTransport: jest.MockedFunction<typeof createTransport>;
  } = jest.requireMock("nodemailer");
  const { initEmail } = await import("./email");

  const testSmtpUrl = "smtps://test:test@test:1";
  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve("verified")),
  } as unknown as Transporter;
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  const result = await initEmail(testSmtpUrl);
  expect(mockedNodemailer.createTransport).toHaveBeenCalledWith(testSmtpUrl);

  expect(mockedTransporter.verify).toHaveBeenCalledTimes(1);
  expect(result).toBe("verified");
});

test("EmailUtils.sendEmail with recipient, subject, template, context calls gTransporter.sendMail", async () => {
  const mockedNodemailer: {
    createTransport: jest.MockedFunction<typeof createTransport>;
  } = jest.requireMock("nodemailer");
  const mockedLoggerModule = jest.requireMock<typeof loggerModule>(
    "../app/functions/server/logging",
  );
  const { initEmail, sendEmail } = await import("./email");

  const testSmtpUrl = "smtps://test:test@test:1";
  const sendMailInfo = { messageId: "test id", response: "test response" };

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve("verified")),
    sendMail: jest.fn((_options) => Promise.resolve(sendMailInfo)),
    transporter: { name: "MockTransporter" },
  } as unknown as Transporter;
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  const result = await initEmail(testSmtpUrl);
  expect(result).toBe("verified");

  expect(
    await sendEmail("test@example.com", "subject", "<html>test</html>"),
  ).toBe(sendMailInfo);
  expect(mockedLoggerModule.logger.info).toHaveBeenCalledWith(
    "sent_email",
    sendMailInfo,
  );
});

test("EmailUtils.sendEmail rejects with error", async () => {
  const mockedLoggerModule = jest.requireMock<typeof loggerModule>(
    "../app/functions/server/logging",
  );
  const mockedNodemailer: {
    createTransport: jest.MockedFunction<typeof createTransport>;
  } = jest.requireMock("nodemailer");
  const { initEmail, sendEmail } = await import("./email");

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve("verified")),
    sendMail: jest.fn((_options) => Promise.reject(new Error("error"))),
    transporter: { name: "MockTransporter" },
  } as unknown as Transporter;
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  expect(await initEmail("smtps://test:test@test:1")).toBe("verified");
  await expect(() =>
    sendEmail("test@example.com", "subject", "<html>test</html>"),
  ).rejects.toThrow("error");
  expect(mockedLoggerModule.logger.error).toHaveBeenCalled();
});

test("EmailUtils.init with empty host uses jsonTransport. logs messages", async () => {
  const mockedNodemailer: {
    createTransport: jest.MockedFunction<typeof createTransport>;
  } = jest.requireMock("nodemailer");
  const mockedLoggerModule = jest.requireMock<typeof loggerModule>(
    "../app/functions/server/logging",
  );
  const { initEmail, sendEmail } = await import("./email");

  const sendMailInfo = { messageId: "test id", response: "test response" };

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve("verified")),
    sendMail: jest.fn((_options) => Promise.resolve(sendMailInfo)),
    transporter: { name: "MockTransporter" },
  } as unknown as Transporter;
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  expect(await initEmail("smtps://test:test@test:1")).toBe("verified");
  expect(
    await sendEmail("test@example.com", "subject", "<html>test</html>"),
  ).toBe(sendMailInfo);
  expect(mockedLoggerModule.logger.info).toHaveBeenCalledWith(
    "sent_email",
    sendMailInfo,
  );
});

test("EmailUtils.closeEmailPool before .init() fails", async () => {
  expect.assertions(1);

  const { closeEmailPool } = await import("./email");

  const expectedError = "`closeEmailPool` called before `initEmail`";

  expect(() => closeEmailPool()).toThrow(expectedError);
});

test("randomToken returns a random token of 2xlength (because of hex)", () => {
  const token = randomToken(32);
  expect(token).toHaveLength(64);
});
