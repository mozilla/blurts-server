/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect, jest } from "@jest/globals";

import {
  TEST_SUBSCRIBERS,
  TEST_EMAIL_ADDRESSES
} from '../db/seeds/testSubscribers.js'


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
  const { initEmail, sendEmail } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
    { breach: 'Test' }
  ]

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve('verified')),
    sendMail: jest.fn((_options, cb) => cb(null, "sent")),
    transporter: { name: 'MockTransporter' },
  };
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  const result = await initEmail(testSmtpUrl)
  expect(result).toBe("verified");

  expect(await sendEmail(...sendMailArgs)).toBe("sent")
})

test('EmailUtils.sendEmail rejects with error', async () => {
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
    sendMail: jest.fn((_options, cb) => cb("error", null)),
    transporter: { name: 'MockTransporter' },
  };
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  expect(await initEmail('smtps://test:test@test:1')).toBe("verified")
  await expect(() => sendEmail(...sendMailArgs)).rejects.toThrow("error");
})

test('EmailUtils.init with empty host uses jsonTransport. logs messages', async () => {
  const mockedNodemailer = jest.requireMock('nodemailer')
  const { initEmail, sendEmail } = await import('./email.js')

  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
    { breach: 'Test' }
  ]
  const sendMailInfo = { message: 'sent' }

  const mockedTransporter = {
    verify: jest.fn(() => Promise.resolve('verified')),
    sendMail: jest.fn((_options, cb) => cb(null, sendMailInfo)),
    transporter: { name: 'MockTransporter' },
  };
  mockedNodemailer.createTransport.mockReturnValueOnce(mockedTransporter);

  expect(await initEmail('smtps://test:test@test:1')).toBe('verified')
  expect(await sendEmail(...sendMailArgs)).toBe(sendMailInfo)
})

test('EmailUtils.getEmailCtaHref works without a subscriber ID', async () => {
  const { getEmailCtaHref } = await import('./email.js')

  const emailCtaHref = getEmailCtaHref('email-type', 'content')
  expect(emailCtaHref.pathname).toBe('/user/breaches')
  emailCtaHref.searchParams.sort()
  expect(Array.from(emailCtaHref.searchParams.entries())).toStrictEqual([
    ['utm_campaign', 'email-type'],
    ['utm_content', 'content'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ]);
})

test('EmailUtils.getEmailCtaHref works with a subscriber ID', async () => {
  const { getEmailCtaHref } = await import('./email.js')
  const emailCtaHref = getEmailCtaHref(
    'email-type-2',
    'content-2',
    1234
  )
  expect(emailCtaHref.pathname).toBe('/user/breaches');
  emailCtaHref.searchParams.sort()
  expect(Array.from(emailCtaHref.searchParams.entries())).toStrictEqual([
    ['subscriber_id', '1234'],
    ['utm_campaign', 'email-type-2'],
    ['utm_content', 'content-2'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ]);
})

test('EmailUtils.getVerificationUrl returns a URL', async () => {
  const { getVerificationUrl } = await import('./email.js')
  const fakeSubscriber = { verification_token: 'SubscriberVerificationToken' }
  const verificationUrl = getVerificationUrl(fakeSubscriber)
  expect(verificationUrl.pathname).toBe('/api/v1/user/verify-email')
  verificationUrl.searchParams.sort()
  expect(Array.from(verificationUrl.searchParams.entries())).toStrictEqual([
    ['token', 'SubscriberVerificationToken'],
    ['utm_campaign', 'verified-subscribers'],
    ['utm_content', 'account-verification-email'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getVerificationUrl throws when subscriber has no token', async () => {
  const { getVerificationUrl } = await import('./email.js')
  const fakeSubscriber = { verification_token: null }
  const expected = 'subscriber has no verification_token'

  expect(() => getVerificationUrl(fakeSubscriber)).toThrow(expected);
})

test('EmailUtils.getUnsubscribeCtaHref works with subscriber record', async () => {
  const subscriberRecord = TEST_SUBSCRIBERS.firefox_account

  const { getUnsubscribeCtaHref } = await import('./email.js')
  const unsubUrl = getUnsubscribeCtaHref({
    subscriber: subscriberRecord
  })

  expect(unsubUrl.searchParams.get('hash')).toBe(subscriberRecord.primary_sha1);
  expect(unsubUrl.searchParams.get('token')).toBe(subscriberRecord.primary_verification_token);
})

test('EmailUtils.getUnsubscribeCtaHref works with email_address record', async () => {
  const emailAddressRecord = TEST_EMAIL_ADDRESSES.firefox_account

  const { getUnsubscribeCtaHref } = await import('./email.js')
  const unsubUrl = getUnsubscribeCtaHref({
    subscriber: emailAddressRecord
  })

  expect(unsubUrl.searchParams.get('hash')).toBe(emailAddressRecord.sha1);
  expect(unsubUrl.searchParams.get('token')).toBe(emailAddressRecord.verification_token);
})

test('EmailUtils.getUnsubscribeCtaHref returns unsubscribe URL for monthly emails', async () => {
  const fakeSubscriber = {
    primary_verification_token: 'PrimaryVerificationToken'
  }

  const { getUnsubscribeCtaHref } = await import('./email.js')
  const unsubUrl = getUnsubscribeCtaHref({
    subscriber: fakeSubscriber,
    isMonthlyEmail: true
  })
  expect(unsubUrl.pathname).toBe('/user/unsubscribe-monthly');
  unsubUrl.searchParams.sort()
  expect(Array.from(unsubUrl.searchParams.entries())).toStrictEqual([
    ['token', 'PrimaryVerificationToken'],
    ['utm_campaign', 'monthly-unresolved'],
    ['utm_content', 'unsubscribe-cta'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ]);
})

test('EmailUtils.getUnsubscribeCtaHref throws when subscriber has no token for monthly emails', async () => {
  const fakeSubscriber = { primary_verification_token: null }
  const expected = 'subscriber has no primary verification_token'
  const { getUnsubscribeCtaHref } = await import('./email.js')

  expect(() => getUnsubscribeCtaHref({
    subscriber: fakeSubscriber,
    isMonthlyEmail: true
  })).toThrow(expected);
})
