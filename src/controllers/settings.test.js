import test from 'ava'
import * as td from 'testdouble'

import { createResponse, createRequest } from 'node-mocks-http'

import { initFluentBundles } from '../utils/fluent.js'

import { getSha1 } from '../utils/fxa.js'
/*
import {
  TEST_SUBSCRIBERS,
  TEST_EMAIL_ADDRESSES
} from '../db/seeds/test_subscribers.js'

// FIXME move these to src dir
import { testBreaches } from '../../tests/test-breaches.js'

const mockRequest = { fluentFormat: td.func() }
*/
test.before(async () => {
  await initFluentBundles()
})

test.afterEach(() => {
  td.reset()
})

test.serial('user add POST with email adds unverified subscriber and sends verification email', async t => {
  const testUserAddEmail = 'addingnewemail@test.com'
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }

  const req = createRequest({
    method: 'POST',
    url: '/user/add',
    body: { email: testUserAddEmail },
    session: { user: '123' },
    user: testSubscriber,
    fluentFormat: td.func(),
    headers: {
      referer: ''
    }
  })

  const resp = createResponse()

  await td.replaceEsm('../utils/fluent.js')

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { addSubscriberUnverifiedEmailHash, resetUnverifiedEmailAddress } = await import('../db/tables/email_addresses.js')
  td.when(addSubscriberUnverifiedEmailHash('123', 'addingnewemail@test.com'), { times: 1 }).thenResolve({ id: 'test123' })
  td.when(resetUnverifiedEmailAddress('test123'), { times: 1 }).thenResolve('test123')

  await td.replaceEsm('../utils/email.js')
  const { sendEmail } = await import('../utils/email.js')
  td.when(sendEmail(), { times: 1 }).thenResolve(true)

  // Call code-under-test
  const { addEmail } = await import('./settings.js')
  await addEmail(req, resp)

  // Check expectations
  t.is(resp.statusCode, 200)

  /*
  const testSubscriberEmailAddressRecords = await getUserEmails(
    testSubscriber.id
  )
  const testSubscriberEmailAddresses = testSubscriberEmailAddressRecords.map(
    (record) => record.email
  )
  t.true(testSubscriberEmailAddresses.includes(testUserAddEmail))
  for (const testSubscriberEmailAddress of testSubscriberEmailAddresses) {
    if (testSubscriberEmailAddress.email === testUserAddEmail) {
      t.falsy(testSubscriberEmailAddress.verified)
    }
  }
  */
  /* TODO
  const mockCalls = EmailUtils.sendEmail.mock.calls
  expect(mockCalls.length).toEqual(1)
  const mockCallArgs = mockCalls[0]
  expect(mockCallArgs).toContain(testUserAddEmail)
  expect(mockCallArgs).toContain('email-2022')
  */
})

test.serial('user add POST with upperCaseAddress adds email_address record with lowercaseaddress sha1', async t => {
  const testUserAddEmail = 'addingUpperCaseEmail@test.com'
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }

  const req = createRequest({
    method: 'POST',
    url: '/user/add',
    body: { email: testUserAddEmail },
    session: { user: '123' },
    user: testSubscriber,
    fluentFormat: td.func(),
    headers: {
      referer: ''
    }
  })
  const resp = createResponse()

  await td.replaceEsm('../utils/fluent.js')

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { addSubscriberUnverifiedEmailHash, resetUnverifiedEmailAddress } = await import('../db/tables/email_addresses.js')
  td.when(addSubscriberUnverifiedEmailHash('123', 'addingUpperCaseEmail@test.com'), { times: 1 }).thenResolve({ id: 'test123' })
  td.when(resetUnverifiedEmailAddress('test123'), { times: 1 }).thenResolve('test123')

  await td.replaceEsm('../utils/email.js')
  const { sendEmail } = await import('../utils/email.js')
  td.when(sendEmail(), { times: 1 }).thenResolve(true)

  // Call code-under-test
  const { addEmail } = await import('./settings.js')
  await addEmail(req, resp)

  // Check expectations
  t.is(resp.statusCode, 200)
  t.is(testSubscriber.primary_email, testSubscriberEmail)

  /*
  const testSubscriberEmailAddressRecords = await getUserEmails(
    testSubscriber.id
  )
  const testSubscriberEmailAddresses = testSubscriberEmailAddressRecords.map(
    (record) => record.email
  )
  t.true(testSubscriberEmailAddresses.includes(testUserAddEmail))
  const testSubscriberEmailAddressHashes =
    testSubscriberEmailAddressRecords.map((record) => record.sha1)
  t.true(
    testSubscriberEmailAddressHashes.includes(getSha1(testUserAddEmail))
  )
  */
})
/*
test('user resendEmail with valid session and email id resets email_address record and sends new verification email', async t => {
  const testSubscriberEmail = TEST_SUBSCRIBERS.firefox_account.primary_email
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  const testEmailAddressId =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.id
  const startingTestEmailAddress = await getEmailById(testEmailAddressId)

  // Set up mocks
  await td.replaceEsm('../utils/email.js')
  const { sendEmail } = await import('../utils/email.js')

  const req = createRequest({
    method: 'POST',
    url: '/user/resend-email',
    body: { emailId: testEmailAddressId },
    session: { user: testSubscriber },
    fluentFormat: td.func(),
    user: testSubscriber
  })
  const resp = createResponse()
  td.when(sendEmail(), { times: 1 }).thenResolve(true)

  // Call code-under-test
  await resendEmail(req, resp)

  // Check expectations
  t.is(resp.statusCode, 200)
  const resetTestEmailAddress = await getEmailById(testEmailAddressId)
  t.not(startingTestEmailAddress.verification_token, resetTestEmailAddress.verification_token)
})

test('user updateCommunicationOptions request with valid session updates DB', async t => {
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
  t.is(resp.statusCode, 200)
  const updatedTestSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  t.falsy(updatedTestSubscriber.all_emails_to_primary)

  req.body = { communicationOption: 1 }

  // Call code-under-test
  await updateCommunicationOptions(req, resp)

  t.is(resp.statusCode, 200)
  const againUpdatedTestSubscriber = await getSubscriberByEmail(
    testSubscriberEmail
  )
  t.truthy(againUpdatedTestSubscriber.all_emails_to_primary)
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
    user: { primary_email: testSubscriber.primary_email, email_addresses: ['test1'] },
    fluentFormat: td.func()
  })
  const resp = createResponse()

  // Call code-under-test
  await t.throwsAsync(
    addEmail(req, resp),
    { instanceOf: Error, message: 'Invalid Email' }
  )
})

test.serial('user verify request with valid token but no session renders email verified page', async t => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const mockReturnedBreaches = testBreaches.slice(0, 2)

  await td.replaceEsm('../utils/hibp.js')
  const { getBreachesForEmail } = await import('../utils/hibp.js')

  td.when(getBreachesForEmail(), { times: 1 }).thenReturn(mockReturnedBreaches)

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    fluentFormat: td.func(),
    app: { locals: { breaches: testBreaches } }
  })
  const resp = createResponse()

  // Call code-under-test
  // await verifyEmail(req, resp)

  t.is(resp.statusCode, 200)
  const emailAddress = await getEmailByToken(validToken)
  t.truthy(emailAddress.verified)
})

test.serial('user verify request with valid token verifies user and redirects to dashboard', async t => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  const mockReturnedBreaches = testBreaches.slice(0, 2)

  await td.replaceEsm('../utils/hibp.js')
  const { getBreachesForEmail } = await import('../utils/hibp.js')

  td.when(getBreachesForEmail(), { times: 1 }).thenReturn(mockReturnedBreaches)

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    session: { user: testSubscriber },
    fluentFormat: td.func(),
    app: { locals: { breaches: testBreaches } },
    user: testSubscriber
  })
  const resp = createResponse()

  // Call code-under-test
  await verifyEmail(req, resp)

  t.is(resp.statusCode, 302)
  const emailAddress = await getEmailByToken(validToken)
  t.truthy(emailAddress.verified)
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
    fluentFormat: td.func(),
    app: { locals: { breaches: testBreaches } },
    user: testSubscriber
  })
  const resp = createResponse()

  // Call code-under-test
  t.throwsAsync(
    verifyEmail(req, resp),
    { instanceOf: Error, message: 'Error message for this verification email timed out or something went wrong.' })

  const emailAddress = await getEmailByToken(validToken)
  t.falsy(emailAddress.verified)
})

test.serial("user verify request for already verified user doesn't send extra email", async t => {
  const alreadyVerifiedToken =
    TEST_EMAIL_ADDRESSES.firefox_account.verification_token
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  const sendEmail = td.func()
  mockRequest.session = { user: testSubscriber }
  mockRequest.query = { token: alreadyVerifiedToken }
  mockRequest.app = { locals: { breaches: testBreaches } }
  mockRequest.user = testSubscriber
  const resp = createResponse()

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { verifyEmailHash } = await import('../db/tables/email_addresses.js')

  td.when(verifyEmailHash(), { times: 1 })
  td.when(sendEmail(), { times: 0 })

  // Call code-under-test
  await verifyEmail(mockRequest, resp)

  t.is(resp.statusCode, 302)
  const emailAddress = await getEmailByToken(alreadyVerifiedToken)
  t.truthy(emailAddress.verified)
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
    fluentFormat: td.func()
  })

  const resp = createResponse()

  t.throwsAsync(
    verifyEmail(req, resp),
    { instanceOf: Error, message: 'Error message for this verification email timed out or something went wrong.' }
  )
})

test('user removeEmail POST request with valid session but wrong emailId for email_address throws error and doesnt remove email', async t => {
  const testEmailAddress = TEST_EMAIL_ADDRESSES.all_emails_to_primary
  const testEmailId = testEmailAddress.id
  const req = {
    fluentFormat: td.func(),
    body: { emailId: testEmailId },
    session: { user: TEST_SUBSCRIBERS.firefox_account },
    user: TEST_SUBSCRIBERS.firefox_account,
    query: { token: 'test' }
  }
  const resp = createResponse()

  t.throwsAsync(
    verifyEmail(req, resp),
    { instanceOf: Error, message: 'error-not-subscribed' }
  )

  const emailAddress = await getEmailByToken(
    testEmailAddress.verification_token
  )
  expect(emailAddress.id).toEqual(testEmailId)
})
*/
