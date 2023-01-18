'use strict'

import test from 'ava'

import { createResponse, createRequest } from 'node-mocks-http'

import EmailUtils from '../utils/email.js'

import { initFluentBundles } from '../utils/fluent.js'

import { before, beforeEach, after } from '../tests/resetDB.js'

import {
  getSubscriberByEmail,
  getUserEmails,
  getEmailById,
  getEmailByToken
} from '../db/index.js'
import getSha1 from '../utils/sha1.js'
import {
  addEmail,
  resendEmail,
  updateCommunicationOptions,
  verifyEmail,
  removeEmail,
} from './settings.js'

import {
  TEST_SUBSCRIBERS,
  TEST_EMAIL_ADDRESSES
} from '../db/seeds/test_subscribers.js'

// FIXME move these to src dir
import { testBreaches } from '../../tests/test-breaches.js'

const mockRequest = { fluentFormat: () => {} }

test.before(async () => {
  await initFluentBundles()
  before()
})

test.beforeEach(async () => {
  beforeEach()
})

test.after(async () => {
  after()
})

test('user add POST with email adds unverified subscriber and sends verification email', async t => {
  const testUserAddEmail = 'addingnewemail@test.com'
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  const req = createRequest({
    method: 'POST',
    url: '/user/add',
    body: { email: testUserAddEmail },
    session: { user: testSubscriber },
    user: testSubscriber,
    fluentFormat: () => {},
    headers: {
      referer: ''
    }
  })
  const resp = createResponse()
  // EmailUtils.sendEmail.mockResolvedValue(true)

  // Call code-under-test
  await addEmail(req, resp)

  // Check expectations
  t.is(resp.statusCode, 302)

  t.is(testSubscriber.primary_email, testSubscriberEmail)

  const testSubscriberEmailAddressRecords = await getUserEmails(
    testSubscriber.id
  )
  const testSubscriberEmailAddresses = testSubscriberEmailAddressRecords.map(
    (record) => record.email
  )
  t.truthy(testSubscriberEmailAddresses, testUserAddEmail)
  for (const testSubscriberEmailAddress of testSubscriberEmailAddresses) {
    if (testSubscriberEmailAddress.email === testUserAddEmail) {
      t.falsy(testSubscriberEmailAddress.verified)
    }
  }

  const mockCalls = EmailUtils.sendEmail.mock.calls
  t.is(mockCalls.length, 1)
  const mockCallArgs = mockCalls[0]
  t.true(mockCallArgs.includes(testUserAddEmail))
  t.true(mockCallArgs.includes('email-2022'))
})

test('user add POST with upperCaseAddress adds email_address record with lowercaseaddress sha1', async () => {
  const testUserAddEmail = 'addingUpperCaseEmail@test.com'
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  const req = createRequest({
    method: 'POST',
    url: '/user/add',
    body: { email: testUserAddEmail },
    session: { user: testSubscriber },
    user: testSubscriber,
    fluentFormat: () => {},
    headers: {
      referer: ''
    }
  })
  const resp = createResponse()
  // EmailUtils.sendEmail.mockResolvedValue(true)

  // Call code-under-test
  await addEmail(req, resp)

  // Check expectations
  expect(resp.statusCode).toEqual(302)
  expect(testSubscriber.primary_email).toEqual(testSubscriberEmail)

  const testSubscriberEmailAddressRecords = await getUserEmails(
    testSubscriber.id
  )
  const testSubscriberEmailAddresses = testSubscriberEmailAddressRecords.map(
    (record) => record.email
  )
  expect(testSubscriberEmailAddresses.includes(testUserAddEmail)).toBeTruthy()
  const testSubscriberEmailAddressHashes =
    testSubscriberEmailAddressRecords.map((record) => record.sha1)
  expect(
    testSubscriberEmailAddressHashes.includes(getSha1(testUserAddEmail))
  ).toBeTruthy()
})

test('user resendEmail with valid session and email id resets email_address record and sends new verification email', async t => {
  const testSubscriberEmail = TEST_SUBSCRIBERS.firefox_account.primary_email
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  const testEmailAddressId =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.id
  const startingTestEmailAddress = await getEmailById(testEmailAddressId)

  // Set up mocks
  const req = createRequest({
    method: 'POST',
    url: '/user/resend-email',
    body: { emailId: testEmailAddressId },
    session: { user: testSubscriber },
    fluentFormat: () => {},
    user: testSubscriber
  })
  const resp = createResponse()
  // EmailUtils.sendEmail.mockResolvedValue(true)

  // Call code-under-test
  await resendEmail(req, resp)

  // Check expectations
  t.is(resp.statusCode, 200)
  const resetTestEmailAddress = await getEmailById(testEmailAddressId)
  t.not(startingTestEmailAddress.verification_token, resetTestEmailAddress.verification_token)
})

test('user updateCommunicationOptions request with valid session updates DB', async () => {
  const testSubscriberEmail = TEST_SUBSCRIBERS.firefox_account.primary_email
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  const req = createRequest({
    method: 'POST',
    url: '/user/update-comm-option',
    body: { communicationOption: 0 },
    session: { user: testSubscriber },
    user: testSubscriber
  })
  const resp = createResponse()

  // Call code-under-test
  await updateCommunicationOptions(req, resp)

  // Check expectations
  expect(resp.statusCode).toEqual(200)
  const updatedTestSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  expect(updatedTestSubscriber.all_emails_to_primary).toBeFalsy()

  req.body = { communicationOption: 1 }

  // Call code-under-test
  await updateCommunicationOptions(req, resp)

  expect(resp.statusCode).toEqual(200)
  const againUpdatedTestSubscriber = await getSubscriberByEmail(
    testSubscriberEmail
  )
  expect(againUpdatedTestSubscriber.all_emails_to_primary).toBeTruthy()
})

// TODO: more tests of resendEmail failure scenarios

test('user add request with invalid email throws error', async t => {
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  const req = createRequest({
    method: 'POST',
    url: '/user/add',
    body: { email: 'a' },
    session: { user: testSubscriber, email_addresses: [] },
    fluentFormat: () => {}
  })
  const resp = createResponse()

  // Call code-under-test
  await t.throwsAsync(addEmail(req, resp), { instanceOf: Error, message: 'user-add-invalid-email' })
})

test('user verify request with valid token but no session renders email verified page', async () => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const mockReturnedBreaches = testBreaches.slice(0, 2)
  // subscribeHash = () => {}
  // getBreachesForEmail: () => console.debug('mock ran')

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    fluentFormat: () => {},
    app: { locals: { breaches: testBreaches } }
  })
  const resp = createResponse()

  // Call code-under-test
  await verifyEmail(req, resp)

  expect(resp.statusCode).toEqual(200)
  const emailAddress = await getEmailByToken(validToken)
  expect(emailAddress.verified).toBeTruthy()
})

test('user verify request with valid token verifies user and redirects to dashboard', async () => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  const mockReturnedBreaches = testBreaches.slice(0, 2)
  // subscribeHash = () => {}
  // getBreachesForEmail.mockReturnValue(mockReturnedBreaches)

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    session: { user: testSubscriber },
    fluentFormat: () => {},
    app: { locals: { breaches: testBreaches } },
    user: testSubscriber
  })
  const resp = createResponse()

  // Call code-under-test
  await verifyEmail(req, resp)

  expect(resp.statusCode).toEqual(302)
  const emailAddress = await getEmailByToken(validToken)
  expect(emailAddress.verified).toBeTruthy()
})

test('user verify request with valid token but wrong user session does NOT verify email address', async t => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const testSubscriberEmail = 'verifiedemail@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    session: { user: testSubscriber },
    fluentFormat: () => {},
    app: { locals: { breaches: testBreaches } },
    user: testSubscriber
  })
  const resp = createResponse()

  // Call code-under-test
  await t.throwsAsync(verifyEmail(req, resp), { instanceOf: Error, message: 'Error message for this verification email timed out or something went wrong.' })

  const emailAddress = await getEmailByToken(validToken)
  t.falsy(emailAddress.verified)
})

test("user verify request for already verified user doesn't send extra email", async t => {
  const alreadyVerifiedToken =
    TEST_EMAIL_ADDRESSES.firefox_account.verification_token
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  EmailUtils.sendEmail = () => {}
  mockRequest.session = { user: testSubscriber }
  mockRequest.query = { token: alreadyVerifiedToken }
  mockRequest.app = { locals: { breaches: testBreaches } }
  mockRequest.user = testSubscriber
  const resp = createResponse()

  // Call code-under-test
  await verifyEmail(mockRequest, resp)

  t.is(resp.statusCode, 302)
  const emailAddress = await getEmailByToken(alreadyVerifiedToken)
  t.truthy(emailAddress.verified)
  // TODO expect(EmailUtils.sendEmail).not.toHaveBeenCalled()
})

test('user verify request with invalid token returns error', async t => {
  const invalidToken = '123456789'
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${invalidToken}`,
    session: { user: testSubscriber },
    fluentFormat: () => {}
  })

  const resp = createResponse()

  await t.throwsAsync(verifyEmail(req, resp), { instanceOf: Error, message: 'Error message for this verification email timed out or something went wrong.' })
})
