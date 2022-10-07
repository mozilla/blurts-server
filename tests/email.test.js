'use strict'

const nodemailer = require('nodemailer')

const EmailUtils = require('../email-utils')
const { EMAIL_FROM, SERVER_URL, SES_CONFIG_SET } = require('../app-constants')
const { TEST_SUBSCRIBERS, TEST_EMAIL_ADDRESSES } = require('../db/seeds/test_subscribers')

jest.mock('nodemailer')

test('EmailUtils.init with empty host uses jsonTransport', () => {
  nodemailer.createTransport = jest.fn()

  EmailUtils.init('')

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
