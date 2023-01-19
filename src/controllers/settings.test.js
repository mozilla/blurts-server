'use strict'

import { createResponse, createRequest } from 'node-mocks-http'

import EmailUtils from '../utils/email'

import { initFluentBundles } from '../utils/fluent'

import {
  getSubscriberByEmail,
  getUserEmails,
  getEmailById,
  getEmailByToken
} from '../db'
import { revokeOAuthTokens, verifyOAuthToken } from '../utils/fxa'
import getSha1 from '../utils/sha1'
import {
  addEmail,
  resendEmail,
  updateCommunicationOptions,
  verifyEmail,
  getUnsubscribe,
  postUnsubscribe,
  removeEmail,
  getRemoveFxm,
  postRemoveFxm,
  getBreachStats,
  FXA_MONITOR_SCOPE
} from './settings'
import { getBreachesForEmail } from '../utils/hibp.js'

import {
  TEST_SUBSCRIBERS,
  TEST_EMAIL_ADDRESSES
} from '../db/seeds/test_subscribers'

// FIXME move these to src dir
import { testBreaches } from '../../tests/test-breaches'

jest.mock('../utils/email')
jest.mock('../utils/hibp')
jest.mock('../utils/fxa')

const mockRequest = { fluentFormat: jest.fn() }

beforeAll(async () => {
  await initFluentBundles()
})

function expectResponseRenderedSubpagePartial (resp, partial) {
  expect(resp.statusCode).toEqual(200)
  expect(resp.render).toHaveBeenCalledTimes(1)
  const renderCallArgs = resp.render.mock.calls[0]
  expect(renderCallArgs[0]).toEqual('subpage')
  expect(renderCallArgs[1].whichPartial).toEqual(partial)
}

test('user add POST with email adds unverified subscriber and sends verification email', async () => {
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
    fluentFormat: jest.fn(),
    headers: {
      referer: ''
    }
  })
  const resp = createResponse()
  EmailUtils.sendEmail.mockResolvedValue(true)

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
  for (const testSubscriberEmailAddress of testSubscriberEmailAddresses) {
    if (testSubscriberEmailAddress.email === testUserAddEmail) {
      expect(testSubscriberEmailAddress.verified).toBeFalsy()
    }
  }

  const mockCalls = EmailUtils.sendEmail.mock.calls
  expect(mockCalls.length).toEqual(1)
  const mockCallArgs = mockCalls[0]
  expect(mockCallArgs).toContain(testUserAddEmail)
  expect(mockCallArgs).toContain('email-2022')
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
    fluentFormat: jest.fn(),
    headers: {
      referer: ''
    }
  })
  const resp = createResponse()
  EmailUtils.sendEmail.mockResolvedValue(true)

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

test('user resendEmail with valid session and email id resets email_address record and sends new verification email', async () => {
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
    fluentFormat: jest.fn(),
    user: testSubscriber
  })
  const resp = createResponse()
  EmailUtils.sendEmail.mockResolvedValue(true)

  // Call code-under-test
  await resendEmail(req, resp)

  // Check expectations
  expect(resp.statusCode).toEqual(200)
  const resetTestEmailAddress = await getEmailById(testEmailAddressId)
  expect(startingTestEmailAddress.verification_token).not.toEqual(
    resetTestEmailAddress.verification_token
  )
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

test('user add request with invalid email throws error', async () => {
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  const req = createRequest({
    method: 'POST',
    url: '/user/add',
    body: { email: 'a' },
    session: { user: testSubscriber, email_addresses: [] },
    fluentFormat: jest.fn()
  })
  const resp = createResponse()

  // Call code-under-test
  await expect(addEmail(req, resp)).rejects.toThrow('user-add-invalid-email')
})

test('user verify request with valid token but no session renders email verified page', async () => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const mockReturnedBreaches = testBreaches.slice(0, 2)
  // subscribeHash = jest.fn()
  getBreachesForEmail.mockReturnValue(mockReturnedBreaches)

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    fluentFormat: jest.fn(),
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
  // subscribeHash = jest.fn()
  getBreachesForEmail.mockReturnValue(mockReturnedBreaches)

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    session: { user: testSubscriber },
    fluentFormat: jest.fn(),
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

test('user verify request with valid token but wrong user session does NOT verify email address', async () => {
  const validToken =
    TEST_EMAIL_ADDRESSES.unverified_email_on_firefox_account.verification_token
  const testSubscriberEmail = 'verifiedemail@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${validToken}`,
    session: { user: testSubscriber },
    fluentFormat: jest.fn(),
    app: { locals: { breaches: testBreaches } },
    user: testSubscriber
  })
  const resp = createResponse()

  // Call code-under-test
  await expect(verifyEmail(req, resp)).rejects.toThrow('Error message for this verification email timed out or something went wrong.')

  const emailAddress = await getEmailByToken(validToken)
  expect(emailAddress.verified).toBeFalsy()
})

test("user verify request for already verified user doesn't send extra email", async () => {
  const alreadyVerifiedToken =
    TEST_EMAIL_ADDRESSES.firefox_account.verification_token
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  EmailUtils.sendEmail = jest.fn()
  mockRequest.session = { user: testSubscriber }
  mockRequest.query = { token: alreadyVerifiedToken }
  mockRequest.app = { locals: { breaches: testBreaches } }
  mockRequest.user = testSubscriber
  const resp = createResponse()

  // Call code-under-test
  await verifyEmail(mockRequest, resp)

  expect(resp.statusCode).toEqual(302)
  const emailAddress = await getEmailByToken(alreadyVerifiedToken)
  expect(emailAddress.verified).toBeTruthy()
  expect(EmailUtils.sendEmail).not.toHaveBeenCalled()
})

test('user verify request with invalid token returns error', async () => {
  const invalidToken = '123456789'
  const testSubscriberEmail = 'firefoxaccount@test.com'
  const testSubscriber = await getSubscriberByEmail(testSubscriberEmail)

  // Set up mocks
  const req = createRequest({
    method: 'GET',
    url: `/user/verify?token=${invalidToken}`,
    session: { user: testSubscriber },
    fluentFormat: jest.fn()
  })

  const resp = createResponse()

  await expect(verifyEmail(req, resp)).rejects.toThrow('Error message for this verification email timed out or something went wrong.')
})

test('user unsubscribe GET request with valid token and hash for primary/subscriber record returns 302 to preferences', async () => {
  // from db/seeds/test_subscribers.js
  const subscriberToken =
    TEST_SUBSCRIBERS.firefox_account.primary_verification_token
  const subscriberHash = getSha1(
    TEST_SUBSCRIBERS.firefox_account.primary_email
  )

  // Set up mocks
  const req = {
    fluentFormat: jest.fn(),
    query: { token: subscriberToken, hash: subscriberHash }
  }
  const resp = createResponse()

  // Call code-under-test
  await getUnsubscribe(req, resp)

  expect(resp.statusCode).toEqual(302)
  expect(resp._getRedirectUrl()).toEqual('/user/preferences')
})

test('user unsubscribe GET request with valid token and hash for a secondary email_addresses record renders unsubscribe', async () => {
  // from db/seeds/test_subscribers.js
  const subscriberToken =
    TEST_EMAIL_ADDRESSES.firefox_account.verification_token
  const subscriberHash = getSha1(TEST_EMAIL_ADDRESSES.firefox_account.email)

  // Set up mocks
  const req = {
    fluentFormat: jest.fn(),
    query: { token: subscriberToken, hash: subscriberHash }
  }
  const resp = createResponse()
  resp.render = jest.fn()

  // Call code-under-test
  await getUnsubscribe(req, resp)

  expectResponseRenderedSubpagePartial(resp, 'subpages/unsubscribe')
})

test('user unsubscribe GET request with valid token and hash for an old pre-FxA subscriber record renders unsubscribe', async () => {
  // from db/seeds/test_subscribers.js
  const subscriberToken =
    TEST_SUBSCRIBERS.verified_email.primary_verification_token
  const subscriberHash = getSha1(
    TEST_SUBSCRIBERS.firefox_account.primary_email
  )

  // Set up mocks
  const req = {
    fluentFormat: jest.fn(),
    query: { token: subscriberToken, hash: subscriberHash }
  }
  const resp = createResponse()
  resp.render = jest.fn()

  // Call code-under-test
  await getUnsubscribe(req, resp)

  expectResponseRenderedSubpagePartial(resp, 'subpages/unsubscribe')
})

test('user unsubscribe POST request with valid session and emailId for email_address removes from DB', async () => {
  const validToken = TEST_EMAIL_ADDRESSES.firefox_account.verification_token
  const validHash = TEST_EMAIL_ADDRESSES.firefox_account.sha1

  // Set up mocks
  const req = {
    fluentFormat: jest.fn(),
    body: { token: validToken, emailHash: validHash },
    session: { user: TEST_SUBSCRIBERS.firefox_account }
  }
  const resp = createResponse()

  // Call code-under-test
  await postUnsubscribe(req, resp)

  expect(resp.statusCode).toEqual(302)
  expect(resp._getRedirectUrl()).toEqual('/user/preferences')
  const emailAddress = await getEmailByToken(validToken)
  expect(emailAddress).toBeUndefined()
})

test('user removeEmail POST request with valid session but wrong emailId for email_address throws error and doesnt remove email', async () => {
  const testEmailAddress = TEST_EMAIL_ADDRESSES.all_emails_to_primary
  const testEmailId = testEmailAddress.id
  const req = {
    fluentFormat: jest.fn(),
    body: { emailId: testEmailId },
    session: { user: TEST_SUBSCRIBERS.firefox_account },
    user: TEST_SUBSCRIBERS.firefox_account
  }
  const resp = createResponse()

  await expect(removeEmail(req, resp)).rejects.toThrow('error-not-subscribed')

  const emailAddress = await getEmailByToken(
    testEmailAddress.verification_token
  )
  expect(emailAddress.id).toEqual(testEmailId)
})

test('user/remove-fxm GET request with valid session returns 200 and renders remove_fxm', async () => {
  // Set up mocks
  const req = {
    fluentFormat: jest.fn(),
    csrfToken: jest.fn(),
    session: { user: TEST_SUBSCRIBERS.firefox_account }
  }
  const resp = createResponse()
  resp.render = jest.fn()

  // Call code-under-test
  await getRemoveFxm(req, resp)

  expectResponseRenderedSubpagePartial(resp, 'subpages/remove_fxm')
})

test('user remove-fxm POST request with valid session removes from DB and revokes FXA OAuth token', async () => {
  const req = {
    fluentFormat: jest.fn(),
    session: { user: TEST_SUBSCRIBERS.firefox_account, destroy: jest.fn() },
    user: TEST_SUBSCRIBERS.firefox_account
  }
  const resp = createResponse()
  // revokeOAuthTokens = jest.fn()

  await postRemoveFxm(req, resp)

  expect(resp.statusCode).toEqual(302)
  expect(resp._getRedirectUrl()).toEqual('/')
  const subscriber = await getEmailByToken(
    TEST_SUBSCRIBERS.firefox_account.primary_verification_token
  )
  expect(subscriber).toBeUndefined()
  expect(revokeOAuthTokens).toHaveBeenCalledTimes(1)
  expect(req.session.destroy).toHaveBeenCalledTimes(1)
})

test('user unsubscribe GET request with invalid token returns error', async () => {
  const invalidToken = '123456789'

  const req = createRequest({
    method: 'GET',
    url: `/user/unsubscribe?token=${invalidToken}`,
    fluentFormat: jest.fn()
  })
  const resp = createResponse()

  await expect(getUnsubscribe(req, resp)).rejects.toThrow(
    'error-not-subscribed'
  )
})

test('user unsubscribe POST request with valid hash and token for email_address removes from DB', async () => {
  const validToken = TEST_EMAIL_ADDRESSES.firefox_account.verification_token
  const validHash = TEST_EMAIL_ADDRESSES.firefox_account.sha1

  // Set up mocks
  const req = {
    fluentFormat: jest.fn(),
    body: { token: validToken, emailHash: validHash },
    session: {}
  }
  const resp = createResponse()

  // Call code-under-test
  await postUnsubscribe(req, resp)

  expect(resp.statusCode).toEqual(302)
  expect(resp._getRedirectUrl()).toEqual('/user/preferences')
  const emailAddress = await getEmailByToken(validToken)
  expect(emailAddress).toBeUndefined()
})

test('user unsubscribe POST request with invalid token and throws error', async () => {
  const invalidToken = '123456789'
  const invalidHash = '0123456789abcdef'

  const req = {
    fluentFormat: jest.fn(),
    body: { token: invalidToken, emailHash: invalidHash }
  }
  const resp = { redirect: jest.fn() }

  await expect(postUnsubscribe(req, resp)).rejects.toThrow(
    'error-not-subscribed'
  )
})

test('user breach-stats POST request with no token responds unauthorized', async () => {
  const req = {}
  const mockStatus = jest.fn()
  const mockJson = { json: jest.fn() }
  mockStatus.mockReturnValueOnce(mockJson)

  const resp = { status: mockStatus }

  await getBreachStats(req, resp)

  const statusCallArgs = mockStatus.mock.calls[0]
  const jsonCallArgs = mockJson.json.mock.calls[0]

  expect(statusCallArgs[0]).toEqual(401)
  expect(jsonCallArgs[0].errorMessage).toMatch('Authorization')
})

test('user breach-stats POST request with FXA http error responds with FXA error', async () => {
  const mockFXAStatusCode = '1234'
  const req = { token: 'test-token' }
  const mockStatus = jest.fn()
  const mockJson = { json: jest.fn() }
  mockStatus.mockReturnValueOnce(mockJson)
  // verifyOAuthToken = jest.fn()
  verifyOAuthToken.mockReturnValueOnce({
    name: 'HTTPError',
    response: { statusCode: mockFXAStatusCode }
  })

  const resp = { status: mockStatus }

  await getBreachStats(req, resp)

  const statusCallArgs = mockStatus.mock.calls[0]
  const jsonCallArgs = mockJson.json.mock.calls[0]

  expect(statusCallArgs[0]).toEqual(mockFXAStatusCode)
  expect(jsonCallArgs[0].errorMessage).toMatch('FXA returned message')
})

test('user breach-stats POST request with FXA response that has no Monitor scope responds unauthorized', async () => {
  const req = { token: 'test-token' }
  const mockStatus = jest.fn()
  const mockJson = { json: jest.fn() }
  mockStatus.mockReturnValueOnce(mockJson)
  // verifyOAuthToken = jest.fn()
  verifyOAuthToken.mockReturnValueOnce({ body: { scope: [] } })

  const resp = { status: mockStatus }

  await getBreachStats(req, resp)

  const statusCallArgs = mockStatus.mock.calls[0]
  const jsonCallArgs = mockJson.json.mock.calls[0]

  expect(statusCallArgs[0]).toEqual(401)
  expect(jsonCallArgs[0].errorMessage).toMatch('Monitor scope')
})

test('user breach-stats POST request with FXA response for a user unknown to Monitor returns 404', async () => {
  const req = { token: 'test-token' }
  const mockStatus = jest.fn()
  const mockJson = { json: jest.fn() }
  mockStatus.mockReturnValueOnce(mockJson)
  // verifyOAuthToken = jest.fn()
  verifyOAuthToken.mockReturnValueOnce({
    body: {
      scope: [FXA_MONITOR_SCOPE],
      user: 'unknown-fxa-uid'
    }
  })

  const resp = { status: mockStatus }

  await getBreachStats(req, resp)

  const statusCallArgs = mockStatus.mock.calls[0]
  const jsonCallArgs = mockJson.json.mock.calls[0]

  expect(statusCallArgs[0]).toEqual(404)
  expect(jsonCallArgs[0].errorMessage).toMatch(
    'Cannot find Monitor subscriber'
  )
})

test('user breach-stats POST request with FXA response for Monitor user returns breach stats json', async () => {
  const testSubscriberFxAUID = TEST_SUBSCRIBERS.firefox_account.fxa_uid
  const req = {
    token: 'test-token',
    app: { locals: { breaches: testBreaches } },
    query: {}
  }
  // verifyOAuthToken = jest.fn()
  verifyOAuthToken.mockReturnValueOnce({
    body: {
      scope: [FXA_MONITOR_SCOPE],
      user: testSubscriberFxAUID
    }
  })
  getBreachesForEmail.mockReturnValue([])

  const resp = { json: jest.fn() }

  await getBreachStats(req, resp)

  const jsonCallArgs = resp.json.mock.calls[0]

  expect(jsonCallArgs[0]).toMatchObject({
    monitoredEmails: expect.anything(),
    numBreaches: expect.anything(),
    passwords: expect.anything()
  })
})

test('user breach-stats POST request with includeResolved returns breach stats json with resolved', async () => {
  const testSubscriberFxAUID = TEST_SUBSCRIBERS.firefox_account.fxa_uid
  const req = {
    token: 'test-token',
    app: { locals: { breaches: testBreaches } },
    query: { includeResolved: 'true' }
  }
  // verifyOAuthToken = jest.fn()
  verifyOAuthToken.mockReturnValueOnce({
    body: {
      scope: [FXA_MONITOR_SCOPE],
      user: testSubscriberFxAUID
    }
  })
  getBreachesForEmail.mockReturnValue([])

  const resp = { json: jest.fn() }

  await getBreachStats(req, resp)

  const jsonCallArgs = resp.json.mock.calls[0]

  expect(jsonCallArgs[0]).toMatchObject({
    monitoredEmails: expect.anything(),
    numBreaches: expect.anything(),
    passwords: expect.anything(),
    numBreachesResolved: expect.anything(),
    passwordsResolved: expect.anything()
  })
})
