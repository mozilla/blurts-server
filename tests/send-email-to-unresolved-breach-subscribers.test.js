const DB = require('../db/DB')
const { TEST_SUBSCRIBERS, TEST_EMAIL_ADDRESSES } = require('../db/seeds/test_subscribers')
const { sendUnresolvedBreachEmails } = require('../scripts/send-email-to-unresolved-breach-subscribers')
const EmailUtils = require('../email-utils')

require('./resetDB')

jest.mock('../email-utils')

test('sendUnresolvedBreachEmails to test subscriber', async () => {
  const data = await sendUnresolvedBreachEmails()
  expect(data).toEqual({"attempted": 1, "emailed": 1, "total": 1})
  expect(EmailUtils.sendEmail).toHaveBeenCalled()
  const subscriber = await DB.getSubscriberById(12346)
  expect(subscriber.monthly_email_at).not.toBeNull()
  expect(Date.now() - subscriber.monthly_email_at).toBeLessThan(100)
})
