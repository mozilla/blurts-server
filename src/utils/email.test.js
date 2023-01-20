/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'

import test from 'ava'
import * as td from 'testdouble'

import {
  TEST_SUBSCRIBERS,
  TEST_EMAIL_ADDRESSES
} from '../db/seeds/test_subscribers.js'

test.afterEach(() => {
  td.reset()
})

test('EmailUtils.sendEmail before .init() fails', async t => {
  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
    { breach: 'Test' }
  ]

  const { default: EmailUtils } = await import('./email.js')

  const expectedError = 'SMTP transport not initialized'

  await t.throwsAsync(
    EmailUtils.sendEmail(...sendMailArgs),
    { instanceOf: Error, message: expectedError }
  )
})

test.serial('EmailUtils.init with empty host uses jsonTransport', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  const { default: EmailUtils } = await import('./email.js')

  t.true(await EmailUtils.init(''))
  td.verify(nodemailer.createTransport({ jsonTransport: true }))
})

test.serial('EmailUtils.init with SMTP URL invokes nodemailer.createTransport', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  const { default: EmailUtils } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const createTransport = {
    verify: td.func(),
    sendMail: (mailoptions, callback) => {}
  }

  td.when(nodemailer.createTransport(testSmtpUrl))
    .thenReturn(createTransport)

  td.when(
    createTransport.verify(),
    { times: 1 }
  ).thenResolve('verified')

  const result = await EmailUtils.init(testSmtpUrl)
  t.is(result, 'verified')
})

test.serial('EmailUtils.sendEmail with recipient, subject, template, context calls gTransporter.sendMail', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  await td.replaceEsm('../utils/fluent.js')
  const { default: EmailUtils } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    'template.hbs',
    { breach: 'Test' }
  ]

  const createTransport = {
    verify: td.func(),
    use: () => {},
    sendMail: (_options, cb) => cb(null, 'sent'),
    transporter: { name: 'MockTransporter' }
  }

  td.when(nodemailer.createTransport(testSmtpUrl))
    .thenReturn(createTransport)

  td.when(
    createTransport.verify(),
    { times: 1 }
  ).thenResolve('verified')

  const result = await EmailUtils.init(testSmtpUrl)
  t.is(result, 'verified')

  t.deepEqual(await EmailUtils.sendEmail(...sendMailArgs), 'sent')
})

test.serial('EmailUtils.sendEmail rejects with error', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  await td.replaceEsm('../utils/fluent.js')
  const { default: EmailUtils } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    'template.hbs',
    { breach: 'Test' }
  ]

  const createTransport = {
    verify: td.func(),
    use: () => {},
    // eslint-disable-next-line n/no-callback-literal
    sendMail: (_options, cb) => cb('error', 'null'),
    transporter: { name: 'MockTransporter' }
  }

  td.when(nodemailer.createTransport(testSmtpUrl))
    .thenReturn(createTransport)

  td.when(
    createTransport.verify(),
    { times: 1 }
  ).thenResolve('verified')

  t.is(await EmailUtils.init('smtps://test:test@test:1'), 'verified')
  await t.throwsAsync(
    EmailUtils.sendEmail(...sendMailArgs),
    { instanceOf: Error, message: 'error' }
  )
})

test.serial('EmailUtils.init with empty host uses jsonTransport. logs messages', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  const { default: EmailUtils } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    'template.hbs',
    { breach: 'Test' }
  ]
  const sendMailInfo = { message: 'sent' }

  const createTransport = {
    sendMail: (options, cb) => cb(null, sendMailInfo),
    transporter: { name: 'JSONTransport' },
    verify: td.func()
  }

  td.when(nodemailer.createTransport(testSmtpUrl))
    .thenReturn(createTransport)

  td.when(
    createTransport.verify(),
    { times: 1 }
  ).thenResolve('verified')

  t.is(await EmailUtils.init('smtps://test:test@test:1'), 'verified')
  t.is(await EmailUtils.sendEmail(...sendMailArgs), sendMailInfo)
})

test('EmailUtils.getEmailCtaHref works without a subscriber ID', async t => {
  const { default: EmailUtils } = await import('./email.js')
  const emailCtaHref = EmailUtils.getEmailCtaHref('email-type', 'content')
  t.is(emailCtaHref.pathname, '/')
  emailCtaHref.searchParams.sort()
  t.deepEqual(Array.from(emailCtaHref.searchParams.entries()), [
    ['utm_campaign', 'email-type'],
    ['utm_content', 'content'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getEmailCtaHref works with a subscriber ID', async t => {
  const { default: EmailUtils } = await import('./email.js')
  const emailCtaHref = EmailUtils.getEmailCtaHref(
    'email-type-2',
    'content-2',
    1234
  )
  t.is(emailCtaHref.pathname, '/')
  emailCtaHref.searchParams.sort()
  t.deepEqual(Array.from(emailCtaHref.searchParams.entries()), [
    ['subscriber_id', '1234'],
    ['utm_campaign', 'email-type-2'],
    ['utm_content', 'content-2'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getVerificationUrl returns a URL', async t => {
  const { default: EmailUtils } = await import('./email.js')
  const fakeSubscriber = { verification_token: 'SubscriberVerificationToken' }
  const verificationUrl = EmailUtils.getVerificationUrl(fakeSubscriber)
  t.is(verificationUrl.pathname, '/api/v1/user/verify-email')
  verificationUrl.searchParams.sort()
  t.deepEqual(Array.from(verificationUrl.searchParams.entries()), [
    ['token', 'SubscriberVerificationToken'],
    ['utm_campaign', 'verified-subscribers'],
    ['utm_content', 'account-verification-email'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getVerificationUrl throws when subscriber has no token', async t => {
  const { default: EmailUtils } = await import('./email.js')
  const fakeSubscriber = { verification_token: null }
  const expected = 'subscriber has no verification_token'

  try {
    EmailUtils.getVerificationUrl(fakeSubscriber)
  } catch (ex) {
    t.is(ex.message, expected)
  }
})

test('EmailUtils.getUnsubscribeUrl works with subscriber record', async t => {
  const subscriberRecord = TEST_SUBSCRIBERS.firefox_account

  const { default: EmailUtils } = await import('./email.js')
  const unsubUrl = EmailUtils.getUnsubscribeUrl(subscriberRecord)

  t.is(unsubUrl.searchParams.get('hash'), subscriberRecord.primary_sha1)
  t.is(unsubUrl.searchParams.get('token'), subscriberRecord.primary_verification_token)
})

test('EmailUtils.getUnsubscribeUrl works with email_address record', async t => {
  const emailAddressRecord = TEST_EMAIL_ADDRESSES.firefox_account

  const { default: EmailUtils } = await import('./email.js')
  const unsubUrl = EmailUtils.getUnsubscribeUrl(emailAddressRecord)

  t.is(unsubUrl.searchParams.get('hash'), emailAddressRecord.sha1)
  t.is(unsubUrl.searchParams.get('token'), emailAddressRecord.verification_token)
})

test('EmailUtils.getMonthlyUnsubscribeUrl returns unsubscribe URL', async t => {
  const fakeSubscriber = {
    primary_verification_token: 'PrimaryVerificationToken'
  }

  const { default: EmailUtils } = await import('./email.js')
  const unsubUrl = EmailUtils.getMonthlyUnsubscribeUrl(
    fakeSubscriber,
    'campaign',
    'content'
  )
  t.is(unsubUrl.pathname, '/user/unsubscribe-monthly/')
  unsubUrl.searchParams.sort()
  t.deepEqual(Array.from(unsubUrl.searchParams.entries()), [
    ['token', 'PrimaryVerificationToken'],
    ['utm_campaign', 'campaign'],
    ['utm_content', 'content'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getMonthlyUnsubscribeUrl throws when subscriber has no token', async t => {
  const fakeSubscriber = { primary_verification_token: null }
  const expected = 'subscriber has no primary verification_token'
  const { default: EmailUtils } = await import('./email.js')

  try {
    EmailUtils.getMonthlyUnsubscribeUrl(fakeSubscriber, 'campaign', 'content')
  } catch (ex) {
    t.is(ex.message, expected)
  }
})
