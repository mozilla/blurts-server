'use strict'

const nodemailer = require('nodemailer')

const EmailUtils = require('../email-utils')
const { EMAIL_FROM, SERVER_URL, SES_CONFIG_SET } = require('../app-constants')
const { TEST_SUBSCRIBERS, TEST_EMAIL_ADDRESSES } = require('../db/seeds/test_subscribers')

jest.mock('nodemailer')

test('EmailUtils.sendEmail before .init() fails', async () => {
  const sendMailArgs = ['test@example.com', 'subject', 'template.hbs', { breach: 'Test' }]
  const expectedError = new Error('SMTP transport not initialized')
  await expect(EmailUtils.sendEmail(...sendMailArgs)).rejects.toEqual(expectedError)
})

test('EmailUtils.init with empty host uses jsonTransport', async () => {
  nodemailer.createTransport = jest.fn()

  await expect(EmailUtils.init('')).resolves.toBe(true)

  expect(nodemailer.createTransport).toHaveBeenCalledWith({ jsonTransport: true })
})

test('EmailUtils.init with SMTP URL invokes nodemailer.createTransport', async () => {
  const testSmtpUrl = 'smtps://test:test@test:1'
  const mockTransporter = {
    verify: jest.fn().mockReturnValueOnce("✓"),
    use: jest.fn(),
  }
  nodemailer.createTransport = jest.fn().mockReturnValueOnce(mockTransporter)

  await expect(EmailUtils.init(testSmtpUrl)).resolves.toBe("✓")

  expect(nodemailer.createTransport).toHaveBeenCalledWith(testSmtpUrl)
  expect(mockTransporter.verify).toHaveBeenCalledWith()
  expect(mockTransporter.use.mock.calls.length).toBe(1)
  expect(mockTransporter.use.mock.calls[0].length).toEqual(2)
  expect(mockTransporter.use.mock.calls[0][0]).toBe('compile')
})


test('EmailUtils.sendEmail with recipient, subject, template, context calls gTransporter.sendMail', async () => {
  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = ['test@example.com', 'subject', 'template.hbs', { breach: 'Test' }]
  const mockTransporter = {
    verify: jest.fn().mockReturnValueOnce("verified"),
    use: jest.fn(),
    sendMail: jest.fn((options, cb) => cb(null, "sent")),
    transporter: {name: 'MockTransporter'}
  }
  nodemailer.createTransport = jest.fn().mockReturnValueOnce(mockTransporter)

  await expect(EmailUtils.init(testSmtpUrl)).resolves.toBe("verified")
  await expect(EmailUtils.sendEmail(...sendMailArgs)).resolves.toBe("sent")

  expect(mockTransporter.sendMail.mock.calls.length).toBe(1)
  expect(mockTransporter.sendMail.mock.calls[0].length).toBe(2)
  expect(mockTransporter.sendMail.mock.calls[0][0]).toEqual(
  {
    context: {
      SERVER_URL,
      layout: 'template.hbs',
      breach: 'Test',
    },
    from: EMAIL_FROM,
    headers: {"x-ses-configuration-set": SES_CONFIG_SET},
    subject: "subject",
    template: "template.hbs",
    to: "test@example.com",
  })
})

test('EmailUtils.sendEmail rejects with error', async () => {
  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = ['test@example.com', 'subject', 'template.hbs', { breach: 'Test' }]
  const mockTransporter = {
    verify: jest.fn().mockReturnValueOnce("verified"),
    use: jest.fn(),
    sendMail: jest.fn((options, cb) => cb("error", null)),
    transporter: {name: 'MockTransporter'}
  }
  nodemailer.createTransport = jest.fn().mockReturnValueOnce(mockTransporter)

  await expect(EmailUtils.init('smtps://test:test@test:1')).resolves.toBe("verified")
  await expect(EmailUtils.sendEmail(...sendMailArgs)).rejects.toBe("error")
})

test('EmailUtils.init with empty host uses jsonTransport. logs messages', async () => {
  const sendMailArgs = ['test@example.com', 'subject', 'template.hbs', { breach: 'Test' }]
  const sendMailInfo = {message: "sent"}
  const mockTransporter = {
    sendMail: jest.fn((options, cb) => cb(null, sendMailInfo)),
    transporter: {name: 'JSONTransport'}
  }
  nodemailer.createTransport = jest.fn().mockReturnValueOnce(mockTransporter)

  await expect(EmailUtils.init('')).resolves.toBe(true)
  expect(nodemailer.createTransport).toHaveBeenCalledWith({ jsonTransport: true })
  await expect(EmailUtils.sendEmail(...sendMailArgs)).resolves.toEqual(sendMailInfo)
})

test('EmailUtils.getEmailCtaHref works without a subscriber ID', () => {
  const emailCtaHref = EmailUtils.getEmailCtaHref('email-type', 'content')
  expect(emailCtaHref.pathname).toBe('/')
  emailCtaHref.searchParams.sort()
  expect(Array.from(emailCtaHref.searchParams.entries())).toEqual(
    [
      ['utm_campaign', 'email-type'],
      ['utm_content', 'content'],
      ['utm_medium', 'email'],
      ['utm_source', 'fx-monitor'],
    ])
})

test('EmailUtils.getEmailCtaHref works with a subscriber ID', () => {
  const emailCtaHref = EmailUtils.getEmailCtaHref('email-type-2', 'content-2', 1234)
  expect(emailCtaHref.pathname).toBe('/')
  emailCtaHref.searchParams.sort()
  expect(Array.from(emailCtaHref.searchParams.entries())).toEqual(
    [
      ['subscriber_id', '1234'],
      ['utm_campaign', 'email-type-2'],
      ['utm_content', 'content-2'],
      ['utm_medium', 'email'],
      ['utm_source', 'fx-monitor'],
    ])
})

test('EmailUtils.getVerificationUrl returns a URL', () => {
  const fakeSubscriber = {"verification_token": "SubscriberVerificationToken"}
  const verificationUrl = EmailUtils.getVerificationUrl(fakeSubscriber)
  expect(verificationUrl.pathname).toBe('/user/verify')
  verificationUrl.searchParams.sort()
  expect(Array.from(verificationUrl.searchParams.entries())).toEqual(
    [
      ['token', 'SubscriberVerificationToken'],
      ['utm_campaign', 'verified-subscribers'],
      ['utm_content', 'account-verification-email'],
      ['utm_medium', 'email'],
      ['utm_source', 'fx-monitor'],
    ])
})

test('EmailUtils.getUnsubscribeUrl works with subscriber record', () => {
  const subscriberRecord = TEST_SUBSCRIBERS.firefox_account

  const unsubUrl = EmailUtils.getUnsubscribeUrl(subscriberRecord).toString()

  expect(unsubUrl).toMatch(subscriberRecord.primary_sha1)
  expect(unsubUrl).toMatch(subscriberRecord.primary_verification_token)
})

test('EmailUtils.getUnsubscribeUrl works with email_address record', () => {
  const emailAddressRecord = TEST_EMAIL_ADDRESSES.firefox_account

  const unsubUrl = EmailUtils.getUnsubscribeUrl(emailAddressRecord).toString()

  expect(unsubUrl).toMatch(emailAddressRecord.sha1)
  expect(unsubUrl).toMatch(emailAddressRecord.verification_token)
})

test('EmailUtils.getMonthlyUnsubscribeUrl returns unsubscribe URL', () => {
  const fakeSubscriber = {'primary_verification_token': 'PrimaryVerificationToken'}

  const unsubUrl = EmailUtils.getMonthlyUnsubscribeUrl(fakeSubscriber, 'campaign', 'content')
  expect(unsubUrl.pathname).toBe('/user/unsubscribe-monthly/')
  unsubUrl.searchParams.sort()
  expect(Array.from(unsubUrl.searchParams.entries())).toEqual(
    [
      ['token', 'PrimaryVerificationToken'],
      ['utm_campaign', 'campaign'],
      ['utm_content', 'content'],
      ['utm_medium', 'email'],
      ['utm_source', 'fx-monitor'],
    ])
})
