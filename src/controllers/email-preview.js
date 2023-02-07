/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'

import { notify } from './hibp.js'
import { mainLayout } from '../views/main.js'
import { emailPreview } from '../views/partials/email-preview.js'
import { getTemplate, getPreviewTemplate } from '../views/email-2022.js'
import { breachAlertEmailPartial } from '../views/partials/email-breach-alert.js'
import { verifyPartial } from '../views/partials/email-verify.js'

import { getMessage } from '../utils/fluent.js'
import { generateToken } from '../utils/csrf.js'
import { sendEmail } from '../utils/email.js'

const recipientEmail = AppConstants.EMAIL_RECIPIENT_DUMMY

function emailsPage (req, res) {
  const { params } = req
  const isVerifyTemplate = params.template === 'verify'

  const dataEmailVerification = {
    recipientEmail,
    ctaHref: '',
    utmCampaign: 'email_verify',
    unsubscribeUrl: '',
    heading: getMessage('email-verify-heading'),
    subheading: getMessage('email-verify-subhead')
  }

  const dataEmailNotifiction = {
    breachAlert: {
      Id: 1,
      Name: 'Adobe',
      Title: 'Adobe',
      Domain: 'adobe.com',
      BreachDate: '2013-01-01T22:00:00.000Z',
      AddedDate: '2013-01-02T00:00:00.000Z',
      ModifiedDate: '2023-01-01T00:00:00.000Z',
      PwnCount: 123,
      Description: 'Example description',
      LogoPath: '/images/favicon-16.webp',
      DataClasses: [
        'email-addresses',
        'password-hints',
        'passwords',
        'usernames'
      ],
      IsVerified: true,
      IsFabricated: false,
      IsSensitive: false,
      IsRetired: false,
      IsSpamList: false,
      IsMalware: false
    },
    breachedEmail: recipientEmail,
    ctaHref: '',
    heading: getMessage('email-spotted-new-breach'),
    recipientEmail,
    subscriberId: 123,
    supportedLocales: ['en'],
    unsubscribeUrl: '',
    utmCampaign: ''
  }

  const emailTemplate = isVerifyTemplate
    ? getPreviewTemplate(dataEmailVerification, verifyPartial)
    : getPreviewTemplate(dataEmailNotifiction, breachAlertEmailPartial)

  const data = {
    csrfToken: generateToken(res),
    fxaProfile: req.user.fxa_profile_json,
    partial: emailPreview,
    email: {
      templateId: params.template,
      template: emailTemplate
    }
  }

  res.send(mainLayout(data))
}

async function sendTestVerification (req, res) {
  const dataEmailVerification = {
    recipientEmail,
    ctaHref: '',
    utmCampaign: 'email_verify',
    unsubscribeUrl: '',
    heading: getMessage('email-verify-heading'),
    subheading: getMessage('email-verify-subhead')
  }

  await sendEmail(
    recipientEmail,
    getMessage('email-subject-verify'),
    getTemplate(dataEmailVerification, verifyPartial)
  )
}

async function sendTestNotification (req, res) {
  const breachNotificationData = {
    breachName: 'Adobe',
    // Hash for dummy email `localmonitor20200827@mailinator.com`
    hashPrefix: '365050',
    hashSuffixes: ['53cbb89874fc738c0512daf12bc4d91765']
  }

  const notifyReq = {
    app: req.app,
    body: breachNotificationData,
    token: AppConstants.HIBP_NOTIFY_TOKEN
  }

  await notify(notifyReq, res)
}

async function sendTestEmail (req, res) {
  const { emailId } = req.body

  try {
    switch (emailId) {
      case 'verify':
        await sendTestVerification(req, res)
        break
      case 'notify':
        await sendTestNotification(req, res)
        break
      default:
        throw new Error(`No test email found for ${emailId}`)
    }

    console.info(`Sent test email: ${emailId}`)
  } catch (error) {
    console.error(`Could not send test email with ID ${emailId}`, error)
  }
}

export { emailsPage, sendTestEmail }
