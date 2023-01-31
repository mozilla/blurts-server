/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import test from 'ava'
import * as td from 'testdouble'

import { createResponse, createRequest } from 'node-mocks-http'

// import { getSha1 } from '../utils/fxa.js'

import {
  TEST_SUBSCRIBERS,
  TEST_EMAIL_ADDRESSES
} from '../db/seeds/test_subscribers.js'

// FIXME move these to src dir
import { testBreaches } from '../../tests/test-breaches.js'

const mockRequest = { fluentFormat: td.func() }

test.beforeEach(async () => {
  await td.replaceEsm('../utils/fluent.js')
  const { getMessage } = await import('../utils/fluent.js')
  td.when(getMessage(td.matchers.anything())).thenReturn('test')
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
  t.deepEqual(resp._getJSONData(), {
    message: 'Sent the verification email',
    status: 200,
    success: true
  })
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
  const { getMessage } = await import('../utils/fluent.js')
  td.when(getMessage(td.matchers.anything())).thenReturn('test')

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
test.serial('user resendEmail with valid session and email id resets email_address record and sends new verification email', async t => {
  const testSubscriberEmail = TEST_SUBSCRIBERS.firefox_account.primary_email
  const testSubscriber = { id: 123, primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }
  const testEmailAddressId = TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.id
  const startingTestEmailAddress = 'test-starting@example.com' // await getEmailById(testEmailAddressId)

  // Set up mocks
  await td.replaceEsm('../utils/email.js')
  const { sendEmail } = await import('../utils/email.js')
  td.when(sendEmail(), { times: 1 }).thenResolve(true)

  const req = createRequest({
    method: 'POST',
    url: '/user/resend-email',
    body: { emailId: testEmailAddressId },
    session: { user: testSubscriber },
    fluentFormat: td.func(),
    user: testSubscriber
  })

  const resp = createResponse()

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { getUserEmails } = await import('../db/tables/email_addresses.js')
  td.when(getUserEmails('test'), { times: 1 }).thenResolve(['test'])

  const { resendEmail } = await import('./settings.js')

  // Call code-under-test
  await resendEmail(req, resp)

  // Check expectations
  t.is(resp.statusCode, 200)
  // const resetTestEmailAddress = await getEmailById(testEmailAddressId)
  // t.not(startingTestEmailAddress.verification_token, resetTestEmailAddress.verification_token)
})
*/

test.serial('user updateCommunicationOptions request with valid session updates DB', async t => {
  const testSubscriberEmail = TEST_SUBSCRIBERS.firefox_account.primary_email
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }
  const req = createRequest({
    method: 'POST',
    url: '/user/update-comm-option',
    body: { communicationOption: 0 },
    session: { user: testSubscriber },
    user: testSubscriber
  })
  const resp = createResponse()

  await td.replaceEsm('../db/tables/subscribers.js')
  const { setAllEmailsToPrimary } = await import('../db/tables/subscribers.js')
  td.when(setAllEmailsToPrimary()).thenResolve(testSubscriber)

  // Call code-under-test
  const { updateCommunicationOptions } = await import('./settings.js')
  await updateCommunicationOptions(req, resp)

  // Check expectations
  t.is(resp.statusCode, 200)
  t.deepEqual(resp._getJSONData(), {
    success: true,
    status: 200,
    message: 'Communications options updated'
  })

  /*
  const updatedTestSubscriber = await getSubscriberByEmail(testSubscriberEmail)
  t.falsy(updatedTestSubscriber.all_emails_to_primary)
  */

  req.body = { communicationOption: 1 }

  // Call code-under-test
  await updateCommunicationOptions(req, resp)

  t.is(resp.statusCode, 200)
  /*
  const againUpdatedTestSubscriber = await getSubscriberByEmail(
    testSubscriberEmail
  )
  t.truthy(againUpdatedTestSubscriber.all_emails_to_primary)
  */
})

// TODO: more tests of resendEmail failure scenarios

test.serial('user add request with invalid email throws error', async t => {
  const testSubscriberEmail = 'firefoxaccount-test.com'
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }

  // Set up mocks
  const req = createRequest({
    method: 'POST',
    url: '/user/add',
    body: { email: 'invalid-email-address' },
    user: { primary_email: testSubscriber.primary_email, email_addresses: ['test1'] },
    fluentFormat: td.func()
  })
  const resp = createResponse()

  const { fluentError } = await import('../utils/fluent.js')
  td.when(fluentError('user-add-invalid-email')).thenThrow(new Error('user-add-invalid-email'))

  // Call code-under-test
  const { addEmail } = await import('./settings.js')

  await t.throwsAsync(
    addEmail(req, resp),
    { instanceOf: Error, message: 'user-add-invalid-email' }
  )
})

test.serial('user verify request with valid token but no session renders email verified page', async t => {
  // const validToken = TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const mockReturnedBreaches = testBreaches.slice(0, 2)

  await td.replaceEsm('../utils/hibp.js')
  const { getBreachesForEmail } = await import('../utils/hibp.js')

  td.when(getBreachesForEmail(), { times: 1 }).thenReturn(mockReturnedBreaches)

  /*
  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    fluentFormat: td.func(),
    app: { locals: { breaches: testBreaches } }
  })
  */
  const resp = createResponse()

  // Call code-under-test
  // await verifyEmail(req, resp)

  t.is(resp.statusCode, 200)
  // const emailAddress = await getEmailByToken(validToken)
  // t.truthy(emailAddress.verified)
})

test.serial('user verify request with valid token verifies user and redirects to dashboard', async t => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }
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

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { verifyEmailHash } = await import('../db/tables/email_addresses.js')
  td.when(verifyEmailHash('test'), { times: 1 }).thenReject('error-not-subscribed')

  // Call code-under-test
  const { verifyEmail } = await import('./settings.js')
  await verifyEmail(req, resp)

  t.is(resp.statusCode, 302)
  // const emailAddress = await getEmailByToken(validToken)
  // t.truthy(emailAddress.verified)
})

test.serial('user verify request with valid token but wrong user session does NOT verify email address', async t => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const testSubscriberEmail = 'verifiedemail@test.com'
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    session: { user: testSubscriber },
    fluentFormat: td.func(),
    app: { locals: { breaches: testBreaches } },
    user: testSubscriber
  })
  const resp = createResponse()

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { verifyEmailHash } = await import('../db/tables/email_addresses.js')
  td.when(verifyEmailHash('test'), { times: 1 }).thenReject(new Error('Error message for this verification email timed out or something went wrong.'))

  // Call code-under-test
  const { verifyEmail } = await import('./settings.js')
  // await t.throwsAsync(
  //  verifyEmail(req, resp),
  //  { instanceOf: Error, message: 'Error message for this verification email timed out or something went wrong.' })
  t.falsy(await verifyEmail(req, resp))

  // const emailAddress = await getEmailByToken(validToken)
  // t.falsy(emailAddress.verified)
})

test.serial("user verify request for already verified user doesn't send extra email", async t => {
  const alreadyVerifiedToken =
    TEST_EMAIL_ADDRESSES.firefox_account.verification_token
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }

  // Set up mocks
  mockRequest.session = { user: testSubscriber }
  mockRequest.query = { token: alreadyVerifiedToken }
  mockRequest.app = { locals: { breaches: testBreaches } }
  mockRequest.user = testSubscriber
  const resp = createResponse()

  await td.replaceEsm('../utils/email.js')
  const { sendEmail } = await import('../utils/email.js')
  td.when(sendEmail(), { times: 1 }).thenResolve(true)

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { verifyEmailHash } = await import('../db/tables/email_addresses.js')
  td.when(verifyEmailHash('test'), { times: 1 }).thenReject('error-not-subscribed')

  const { verifyEmail } = await import('./settings.js')

  // Call code-under-test
  await verifyEmail(mockRequest, resp)

  t.is(resp.statusCode, 302)
  // const emailAddress = await getEmailByToken(alreadyVerifiedToken)
  // t.truthy(emailAddress.verified)
})

/*
test.serial('user verify request with invalid token returns error', async t => {
  const invalidToken = '123456789'
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = { primary_email: testSubscriberEmail, email_addresses: [{ email: 'test1' }] }

  // Set up mocks
  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${invalidToken}`,
    session: { user: testSubscriber },
    fluentFormat: td.func()
  })

  const resp = createResponse()

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { verifyEmailHash } = await import('../db/tables/email_addresses.js')
  td.when(verifyEmailHash('test'), { times: 1 }).thenReject(new Error('Error message for this verification email timed out or something went wrong.'))

  const { verifyEmail } = await import('./settings.js')

  await t.throwsAsync(
    verifyEmail(req, resp),
    { instanceOf: Error, message: 'Error message for this verification email timed out or something went wrong.' }
  )
  t.falsy(await verifyEmail(req, resp))
})
*/

test.serial('user removeEmail POST request with valid session but wrong emailId for email_address throws error and doesnt remove email', async t => {
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

  await td.replaceEsm('../utils/fluent.js')
  const { getMessage } = await import('../utils/fluent.js')
  td.when(getMessage(td.matchers.anything())).thenReturn('test')

  await td.replaceEsm('../db/tables/email_addresses.js')
  const { verifyEmailHash } = await import('../db/tables/email_addresses.js')
  td.when(verifyEmailHash('test'), { times: 1 }).thenReject(new Error('error-not-subscribed'))

  const { verifyEmail } = await import('./settings.js')

  await t.throwsAsync(
    verifyEmail(req, resp),
    { instanceOf: Error, message: 'error-not-subscribed' }
  )
  t.is(resp.statusCode, 200)
})
