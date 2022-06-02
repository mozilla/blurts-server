'use strict'

const httpMocks = require('node-mocks-http')

const DB = require('../../db/DB')
const getSha1 = require('../../sha1-utils')
const ses = require('../../controllers/ses')

require('../resetDB')
jest.mock('../../hibp')

const testNotifications = new Map()
testNotifications.set('bounce', require('./ses-bounce-notification.json'))
testNotifications.set('complaint', require('./ses-complaint-notification.json'))
testNotifications.set('invalid', require('./invalid-signature-ses-complaint-notification.json'))
testNotifications.set('fxa-delete', require('./sns-fxa-delete.json'))

const createRequestBody = function (notificationType) {
  const notification = testNotifications.get(notificationType)
  return JSON.stringify(notification)
}

test('ses notification with Permanent bounce unsubscribes recipient subscriber', async () => {
  // TODO: restore tests for ["General", "NoEmail", "Suppressed"] sub types
  const testEmail = 'bounce@simulator.amazonses.com'
  const testHashes = [getSha1(testEmail)]

  await DB.addSubscriber(testEmail)
  let subscribers = await DB.getSubscribersByHashes(testHashes)
  expect(subscribers.length).toEqual(1)

  const req = httpMocks.createRequest({
    method: 'POST',
    url: '/ses/notification',
    body: createRequestBody('bounce')
  })
  const resp = httpMocks.createResponse()

  await ses.notification(req, resp)
  expect(resp.statusCode).toEqual(200)

  subscribers = await DB.getSubscribersByHashes(testHashes)
  expect(subscribers.length).toEqual(0)
})

test('ses notification with Complaint unsubscribes recipient subscriber', async () => {
  const testEmail = 'complaint@simulator.amazonses.com'

  await DB.addSubscriber(testEmail)
  let subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)])
  expect(subscribers.length).toEqual(1)

  const req = httpMocks.createRequest({
    method: 'POST',
    url: '/ses/notification',
    body: createRequestBody('complaint')
  })
  const resp = httpMocks.createResponse()

  await ses.notification(req, resp)
  expect(resp.statusCode).toEqual(200)

  subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)])
  expect(subscribers.length).toEqual(0)
})

test('ses notification with Complaint unsubscribes recipient from email_addresses', async () => {
  const testPrimaryEmail = 'secondary-email-complainer@mailinator.com'
  const testSignupLanguage = 'en'
  const testUser = await DB.addSubscriber(testPrimaryEmail, testSignupLanguage)
  const testEmail = 'complaint@simulator.amazonses.com'

  await DB.addSubscriberUnverifiedEmailHash(testUser, testEmail)

  const req = httpMocks.createRequest({
    method: 'POST',
    url: '/ses/notification',
    body: createRequestBody('complaint')
  })
  const resp = httpMocks.createResponse()

  await ses.notification(req, resp)
  expect(resp.statusCode).toEqual(200)
  const noMoreEmailAddressRecord = await DB.getEmailAddressRecordByEmail(testEmail)
  expect(noMoreEmailAddressRecord).toBeUndefined()
})

test("ses notification with invalid signature responds with error and doesn't change subscribers", async () => {
  const testEmail = 'complaint@simulator.amazonses.com'

  await DB.addSubscriber(testEmail)
  let subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)])
  expect(subscribers.length).toEqual(1)

  const req = httpMocks.createRequest({
    method: 'POST',
    url: '/ses/notification',
    body: createRequestBody('invalid')
  })
  const resp = httpMocks.createResponse()

  await expect(ses.notification(req, resp)).rejects.toMatch('invalid')
  expect(resp.statusCode).toEqual(401)

  subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)])
  expect(subscribers.length).toEqual(1)
})

test('sns notification for FxA account deletes monitor subscriber record', async () => {
  const testEmail = 'fxa-deleter@mailinator.com'
  const testSignupLanguage = 'en'
  const testFxaAccessToken = 'abcdef123456789'
  const testFxaRefreshToken = 'abcdef123456789'
  const testFxaUID = '3b1a9d27f85b4a4c977f3a84838f9116'
  const testFxaProfileData = JSON.stringify({ uid: testFxaUID })
  await DB.addSubscriber(testEmail, testSignupLanguage, testFxaAccessToken, testFxaRefreshToken, testFxaProfileData)

  let subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)])
  expect(subscribers.length).toEqual(1)

  const req = httpMocks.createRequest({
    method: 'POST',
    url: '/ses/notification',
    body: createRequestBody('fxa-delete')
  })
  const resp = httpMocks.createResponse()
  await ses.notification(req, resp)
  expect(resp.statusCode).toEqual(200)

  subscribers = await DB.getSubscribersByHashes([getSha1(testEmail)])
  expect(subscribers.length).toEqual(0)
})
