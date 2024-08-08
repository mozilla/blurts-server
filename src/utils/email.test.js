/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, jest } from "@jest/globals";

jest.mock("nodemailer", () => {
  return {
    createTransport: jest.fn(),
  };
});

test('EmailUtils.sendEmail before .init() fails', async () => {
  expect.assertions(1);

  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
    { breach: 'Test' }
  ]

  const { sendEmail } = await import('./email.js')

  const expectedError = 'SMTP transport not initialized'

  await expect(() => sendEmail(...sendMailArgs)).rejects.toThrow(expectedError);
})

test('EmailUtils.init with empty host uses jsonTransport', async () => {
  const mockedConsoleInfo = jest.spyOn(console, 'info').mockImplementation();
  const mockedNodemailer = jest.requireMock('nodemailer')
  const { initEmail } = await import('./email.js')

  await expect(await initEmail('')).toBe(true);
  expect(mockedNodemailer.createTransport).toHaveBeenCalledWith({ jsonTransport: true });
  expect(mockedConsoleInfo).toHaveBeenCalledWith(
    'smtpUrl-empty',
    { message: 'EmailUtils will log a JSON response instead of sending emails.' },
  );
})

test('EmailUtils.init with SMTP URL invokes nodemailer.createTransport', async () => {
  const mockedNodemailer = jest.requireMock('nodemailer')
  const { initEmail } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve('verified')),
  };
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  const result = await initEmail(testSmtpUrl)
  expect(mockedNodemailer.createTransport).toHaveBeenCalledWith(testSmtpUrl);
  expect(mockedTransporter.verify).toHaveBeenCalledTimes(1);
  expect(result).toBe('verified');
})

test('EmailUtils.sendEmail with recipient, subject, template, context calls gTransporter.sendMail', async () => {
  const mockedNodemailer = jest.requireMock('nodemailer')
  const mockedConsoleInfo = jest.spyOn(console, 'info').mockImplementation();
  const { initEmail, sendEmail } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
    { breach: 'Test' }
  ]

  const sendMailInfo = { messageId: 'test id', response: 'test response' }

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve('verified')),
    sendMail: jest.fn((_options) => Promise.resolve(sendMailInfo)),
    transporter: { name: 'MockTransporter' },
  };
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  const result = await initEmail(testSmtpUrl)
  expect(result).toBe("verified");

  expect(await sendEmail(...sendMailArgs)).toBe(sendMailInfo)
  expect(mockedConsoleInfo).toHaveBeenCalledWith(
    'sent_email', sendMailInfo
  );
})

test('EmailUtils.sendEmail rejects with error', async () => {
  const mockedConsoleError = jest.spyOn(console, 'error').mockImplementation();
  const mockedNodemailer = jest.requireMock('nodemailer')
  const { initEmail, sendEmail } = await import('./email.js')

  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
    { breach: 'Test' }
  ]

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve('verified')),
    sendMail: jest.fn((_options) => Promise.reject(new Error('error'))),
    transporter: { name: 'MockTransporter' },
  };
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  expect(await initEmail('smtps://test:test@test:1')).toBe("verified");
  await expect(() => sendEmail(...sendMailArgs)).rejects.toThrow('error');
  expect(mockedConsoleError).toHaveBeenCalled();
})

test('EmailUtils.init with empty host uses jsonTransport. logs messages', async () => {
  const mockedNodemailer = jest.requireMock('nodemailer')
  const mockedConsoleInfo = jest.spyOn(console, 'info').mockImplementation();
  const { initEmail, sendEmail } = await import('./email.js')

  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
    { breach: 'Test' }
  ]
  const sendMailInfo = { messageId: 'test id', response: 'test response' }

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve('verified')),
    sendMail: jest.fn((_options) => Promise.resolve(sendMailInfo)),
    transporter: { name: 'MockTransporter' },
  };
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  expect(await initEmail('smtps://test:test@test:1')).toBe('verified')
  expect(await sendEmail(...sendMailArgs)).toBe(sendMailInfo)
  expect(mockedConsoleInfo).toHaveBeenCalledWith(
    'sent_email', sendMailInfo
  );
})
