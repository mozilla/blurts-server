/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

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

  const { sendEmail } = await import('./email.js')

  const expectedError = 'SMTP transport not initialized'

  await t.throwsAsync(
    sendEmail(...sendMailArgs),
    { instanceOf: Error, message: expectedError }
  )
})

test.serial('EmailUtils.init with empty host uses jsonTransport', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  const { initEmail } = await import('./email.js')

  t.true(await initEmail(''))
  td.verify(nodemailer.createTransport({ jsonTransport: true }))
})

test.serial('EmailUtils.init with SMTP URL invokes nodemailer.createTransport', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  const { initEmail } = await import('./email.js')

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

  const result = await initEmail(testSmtpUrl)
  t.is(result, 'verified')
})

test.serial('EmailUtils.sendEmail with recipient, subject, template, context calls gTransporter.sendMail', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  await td.replaceEsm('../utils/fluent.js')
  const { initEmail, sendEmail } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
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

  const result = await initEmail(testSmtpUrl)
  t.is(result, 'verified')

  t.deepEqual(await sendEmail(...sendMailArgs), 'sent')
})

test.serial('EmailUtils.sendEmail rejects with error', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  await td.replaceEsm('../utils/fluent.js')
  const { initEmail, sendEmail } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
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

  t.is(await initEmail('smtps://test:test@test:1'), 'verified')
  await t.throwsAsync(
    sendEmail(...sendMailArgs),
    { instanceOf: Error, message: 'error' }
  )
})

test.serial('EmailUtils.init with empty host uses jsonTransport. logs messages', async t => {
  const nodemailer = await td.replaceEsm('nodemailer')
  const { initEmail, sendEmail } = await import('./email.js')

  const testSmtpUrl = 'smtps://test:test@test:1'
  const sendMailArgs = [
    'test@example.com',
    'subject',
    { html: '<html>test</html>' },
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

  t.is(await initEmail('smtps://test:test@test:1'), 'verified')
  t.is(await sendEmail(...sendMailArgs), sendMailInfo)
})

test('EmailUtils.getEmailCtaHref works without a subscriber ID', async t => {
  const { getEmailCtaHref } = await import('./email.js')

  const emailCtaHref = getEmailCtaHref('email-type', 'content')
  t.is(emailCtaHref.pathname, '/user/breaches')
  emailCtaHref.searchParams.sort()
  t.deepEqual(Array.from(emailCtaHref.searchParams.entries()), [
    ['utm_campaign', 'email-type'],
    ['utm_content', 'content'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getEmailCtaHref works with a subscriber ID', async t => {
  const { getEmailCtaHref } = await import('./email.js')
  const emailCtaHref = getEmailCtaHref(
    'email-type-2',
    'content-2',
    1234
  )
  t.is(emailCtaHref.pathname, '/user/breaches')
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
  const { getVerificationUrl } = await import('./email.js')
  const fakeSubscriber = { verification_token: 'SubscriberVerificationToken' }
  const verificationUrl = getVerificationUrl(fakeSubscriber)
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
  const { getVerificationUrl } = await import('./email.js')
  const fakeSubscriber = { verification_token: null }
  const expected = 'subscriber has no verification_token'

  try {
    getVerificationUrl(fakeSubscriber)
  } catch (ex) {
    t.is(ex.message, expected)
  }
})

test('EmailUtils.getUnsubscribeCtaHref works with subscriber record', async t => {
  const subscriberRecord = TEST_SUBSCRIBERS.firefox_account

  const { getUnsubscribeCtaHref } = await import('./email.js')
  const unsubUrl = getUnsubscribeCtaHref(subscriberRecord)

  t.is(unsubUrl.searchParams.get('hash'), subscriberRecord.primary_sha1)
  t.is(unsubUrl.searchParams.get('token'), subscriberRecord.primary_verification_token)
})

test('EmailUtils.getUnsubscribeCtaHref works with email_address record', async t => {
  const emailAddressRecord = TEST_EMAIL_ADDRESSES.firefox_account

  const { getUnsubscribeCtaHref } = await import('./email.js')
  const unsubUrl = getUnsubscribeCtaHref(emailAddressRecord)

  t.is(unsubUrl.searchParams.get('hash'), emailAddressRecord.sha1)
  t.is(unsubUrl.searchParams.get('token'), emailAddressRecord.verification_token)
})

test('EmailUtils.getUnsubscribeCtaHref returns unsubscribe URL for monthly emails', async t => {
  const fakeSubscriber = {
    primary_verification_token: 'PrimaryVerificationToken'
  }

  const { getUnsubscribeCtaHref } = await import('./email.js')
  const unsubUrl = getUnsubscribeCtaHref({
    subscriber: fakeSubscriber,
    isMonthlyEmail: true
  })
  t.is(unsubUrl.pathname, '/user/unsubscribe-monthly/')
  unsubUrl.searchParams.sort()
  t.deepEqual(Array.from(unsubUrl.searchParams.entries()), [
    ['token', 'PrimaryVerificationToken'],
    ['utm_campaign', 'monthly-unresolved'],
    ['utm_content', 'unsubscribe-cta'],
    ['utm_medium', 'email'],
    ['utm_source', 'fx-monitor']
  ])
})

test('EmailUtils.getUnsubscribeCtaHref throws when subscriber has no token for monthly emails', async t => {
  const fakeSubscriber = { primary_verification_token: null }
  const expected = 'subscriber has no primary verification_token'
  const { getUnsubscribeCtaHref } = await import('./email.js')

  try {
    getUnsubscribeCtaHref({
      subscriber: fakeSubscriber,
      isMonthlyEmail: true
    })
  } catch (ex) {
    t.is(ex.message, expected)
  }
})
