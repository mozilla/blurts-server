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
import {
  getNotifictionDummyData,
  getVerificationDummyData,
  sendEmail
} from '../utils/email.js'

const { EMAIL_RECIPIENT_DUMMY } = AppConstants

function emailsPage (req, res) {
  const { params } = req
  const template = params.template || 'verification'

  const emailTemplates = {
    verification: {
      label: 'Email verification',
      template: getPreviewTemplate(
        getVerificationDummyData(EMAIL_RECIPIENT_DUMMY),
        verifyPartial
      )
    },
    notification: {
      label: 'Breach notification',
      template: getPreviewTemplate(
        getNotifictionDummyData(EMAIL_RECIPIENT_DUMMY),
        breachAlertEmailPartial
      )
    }
  }

  const data = {
    csrfToken: generateToken(res),
    fxaProfile: req.user.fxa_profile_json,
    partial: emailPreview,
    email: {
      data: emailTemplates,
      template
    }
  }

  res.send(mainLayout(data))
}

async function sendTestNotification (req, res) {
  // The test breach notification can be viewed in the public Mailinator inbox
  // as documented in the README:
  // https://github.com/mozilla/blurts-server#trigger-breach-alert-email
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

  switch (emailId) {
    case 'verification': {
      // Send test verification email
      const emailTemplate = getTemplate(
        getVerificationDummyData(EMAIL_RECIPIENT_DUMMY),
        verifyPartial
      )
      await sendEmail(
        EMAIL_RECIPIENT_DUMMY,
        getMessage('email-subject-verify'),
        emailTemplate
      )
      break
    }
    case 'notification': {
      // Send test breach notification email
      await sendTestNotification(req, res)
      break
    }
    default: {
      throw new Error(`No test email found for ${emailId}`)
    }
  }

  console.info(`Sent test email: ${emailId}`)
}

export { emailsPage, sendTestEmail }
