'use strict'

import {
  TEST_SUBSCRIBERS,
  TEST_EMAIL_ADDRESSES
} from '../db/seeds/test_subscribers'
import { initFluentBundles } from './fluent.js'

import AppConstants from '../app-constants'
import EmailUtils from './email'
import { createTransport } from 'nodemailer'

jest.mock('nodemailer')

beforeAll(async () => {
  await initFluentBundles()
})

beforeEach(() => {
  createTransport.mockClear()
})

test('EmailUtils.sendEmail before .init() fails', async () => {
  const sendMailArgs = [
    'test@example.com',
    'subject',
    'template.hbs',
    { breach: 'Test' }
  ]
  const expectedError = new Error('SMTP transport not initialized')

  createTransport.mockImplementation(() => ({
    verify: jest.fn().mockReturnValueOnce('✓'),
    sendMail: jest.fn().mockReturnValueOnce((mailoptions, callback) => {})
  }))
  expect(EmailUtils.sendEmail(...sendMailArgs)).rejects.toEqual(expectedError)
})

test('EmailUtils.init with empty host uses jsonTransport', async () => {
  createTransport.mockImplementation(() => jest.fn())

  expect(EmailUtils.init('')).resolves.toBe(true)

  expect(createTransport).toHaveBeenCalledWith({ jsonTransport: true })
})

test('EmailUtils.init with SMTP URL invokes nodemailer.createTransport', async () => {
  const testSmtpUrl = 'smtps://test:test@test:1'
  const mockTransporter = {
    verify: jest.fn().mockReturnValue('✓'),
    use: jest.fn(),
    sendMail: jest.fn().mockReturnValue((mailoptions, callback) => {})
  }

  createTransport.mockReturnValueOnce(mockTransporter)

  expect(EmailUtils.init(testSmtpUrl)).resolves.toBe('✓')

  expect(createTransport).toHaveBeenCalledWith(testSmtpUrl)
  expect(mockTransporter.verify).toHaveBeenCalledWith()
  // expect(mockTransporter.use.mock.calls.length).toBe(1)
  // expect(mockTransporter.use.mock.calls[0].length).toEqual(2)
  // expect(mockTransporter.use.mock.calls[0][0]).toBe('compile')
})

test('EmailUtils.sendEmail with recipient, subject, template, context calls gTransporter.sendMail', async () => {
  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    'template.hbs',
    { breach: 'Test' }
  ]
  const mockTransporter = {
    verify: jest.fn().mockReturnValueOnce('verified'),
    use: jest.fn(),
    sendMail: jest.fn((_options, cb) => cb(null, 'sent')),
    transporter: { name: 'MockTransporter' }
  }

  createTransport.mockReturnValueOnce(mockTransporter)

  expect(EmailUtils.init(testSmtpUrl)).resolves.toBe('verified')
  expect(EmailUtils.sendEmail(...sendMailArgs)).resolves.toBe('sent')

  expect(mockTransporter.sendMail.mock.calls.length).toBe(1)
  expect(mockTransporter.sendMail.mock.calls[0].length).toBe(2)
/*
  expect(mockTransporter.sendMail.mock.calls[0][0]).toEqual(
    {
      from: AppConstants.EMAIL_FROM,
      headers: { 'x-ses-configuration-set': AppConstants.SES_CONFIG_SET },
      subject: 'subject',
      to: 'test@example.com'
    })
*/
})

test('EmailUtils.sendEmail rejects with error', async () => {
  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    'template.hbs',
    { breach: 'Test' }
  ]
  const mockTransporter = {
    verify: jest.fn().mockReturnValueOnce('verified'),
    use: jest.fn(),
    sendMail: jest.fn((options, cb) => cb('error', null)),
    transporter: { name: 'MockTransporter' }
  }

  createTransport.mockReturnValueOnce(mockTransporter)

  expect(EmailUtils.init('smtps://test:test@test:1')).resolves.toBe('verified')
  expect(EmailUtils.sendEmail(...sendMailArgs)).rejects.toBe('error')
})

test('EmailUtils.init with empty host uses jsonTransport. logs messages', async () => {
  const sendMailArgs = [
    'test@example.com',
    'subject',
    'template.hbs',
    { breach: 'Test' }
  ]
  const sendMailInfo = { message: 'sent' }
  const mockTransporter = {
    sendMail: jest.fn((options, cb) => cb(null, sendMailInfo)),
    transporter: { name: 'JSONTransport' }
  }

  createTransport.mockReturnValueOnce(mockTransporter)

  expect(EmailUtils.init('')).resolves.toBe(true)
  expect(createTransport).toHaveBeenCalledWith({ jsonTransport: true })
  expect(EmailUtils.sendEmail(...sendMailArgs)).resolves.toEqual(sendMailInfo)
})

test('EmailUtils.getEmailCtaHref works without a subscriber ID', () => {
  const emailCtaHref = EmailUtils.getEmailCtaHref('email-type', 'content')
  expect(emailCtaHref.pathname).toBe('/')
  emailCtaHref.searchParams.sort()
  expect(Array.from(emailCtaHref.searchParams.entries())).toEqual([
    ['utm_campaign', 'email-type'],
    ['utm_content', 'content'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getEmailCtaHref works with a subscriber ID', () => {
  const emailCtaHref = EmailUtils.getEmailCtaHref(
    'email-type-2',
    'content-2',
    1234
  )
  expect(emailCtaHref.pathname).toBe('/')
  emailCtaHref.searchParams.sort()
  expect(Array.from(emailCtaHref.searchParams.entries())).toEqual([
    ['subscriber_id', '1234'],
    ['utm_campaign', 'email-type-2'],
    ['utm_content', 'content-2'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getVerificationUrl returns a URL', () => {
  const fakeSubscriber = { verification_token: 'SubscriberVerificationToken' }
  const verificationUrl = EmailUtils.getVerificationUrl(fakeSubscriber)
  expect(verificationUrl.pathname).toBe('/api/v1/user/verify-email')
  verificationUrl.searchParams.sort()
  expect(Array.from(verificationUrl.searchParams.entries())).toEqual([
    ['token', 'SubscriberVerificationToken'],
    ['utm_campaign', 'verified-subscribers'],
    ['utm_content', 'account-verification-email'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getVerificationUrl throws when subscriber has no token', () => {
  const fakeSubscriber = { verification_token: null }
  const expected = 'subscriber has no verification_token'
  expect(() => EmailUtils.getVerificationUrl(fakeSubscriber)).toThrow(expected)
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
  const fakeSubscriber = {
    primary_verification_token: 'PrimaryVerificationToken'
  }

  const unsubUrl = EmailUtils.getMonthlyUnsubscribeUrl(
    fakeSubscriber,
    'campaign',
    'content'
  )
  expect(unsubUrl.pathname).toBe('/user/unsubscribe-monthly/')
  unsubUrl.searchParams.sort()
  expect(Array.from(unsubUrl.searchParams.entries())).toEqual([
    ['token', 'PrimaryVerificationToken'],
    ['utm_campaign', 'campaign'],
    ['utm_content', 'content'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getMonthlyUnsubscribeUrl throws when subscriber has no token', () => {
  const fakeSubscriber = { primary_verification_token: null }
  const expected = 'subscriber has no primary verification_token'
  expect(() =>
    EmailUtils.getMonthlyUnsubscribeUrl(fakeSubscriber, 'campaign', 'content')
  ).toThrow(expected)
})
