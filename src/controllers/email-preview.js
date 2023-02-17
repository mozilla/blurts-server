/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import AppConstants from '../app-constants.js'

import { notify } from './hibp.js'
import { mainLayout } from '../views/main.js'
import { emailPreview } from '../views/partials/email-preview.js'
import { getTemplate, getPreviewTemplate } from '../views/email-2022.js'
import { breachAlertEmailPartial } from '../views/partials/email-breach-alert.js'
import { signupReportEmailPartial } from '../views/partials/email-signup-report.js'
import { verifyPartial } from '../views/partials/email-verify.js'
import {
  monthlyUnresolvedEmailPartial
} from '../views/partials/email-monthly-unresolved.js'

import { getMessage } from '../utils/fluent.js'
import { generateToken } from '../utils/csrf.js'
import {
  EmailTemplateType,
  getNotifictionDummyData,
  getVerificationDummyData,
  getMonthlyDummyData,
  getSignupReportDummyData,
  sendEmail
} from '../utils/email.js'

const { EMAIL_TEST_RECIPIENT } = AppConstants

function getTemplatesData () {
  return {
    [EmailTemplateType.Verification]: {
      label: 'Email verification',
      template: getPreviewTemplate(
        getVerificationDummyData(EMAIL_TEST_RECIPIENT),
        verifyPartial
      )
    },
    [EmailTemplateType.Notification]: {
      label: 'Breach notification',
      template: getPreviewTemplate(
        getNotifictionDummyData(EMAIL_TEST_RECIPIENT),
        breachAlertEmailPartial
      )
    },
    [EmailTemplateType.Monthly]: {
      label: 'Monthly unresolved breaches',
      template: getPreviewTemplate(
        getMonthlyDummyData(EMAIL_TEST_RECIPIENT),
        monthlyUnresolvedEmailPartial
      )
    },
    [EmailTemplateType.SignupReport]: {
      label: 'Signup report',
      template: getPreviewTemplate(
        getSignupReportDummyData(EMAIL_TEST_RECIPIENT),
        signupReportEmailPartial
      )
    }
  }
}

function emailsPage (req, res) {
  const { params } = req
  const template = params.template ?? EmailTemplateType.Verification

  const data = {
    csrfToken: generateToken(res),
    fxaProfile: req.user.fxa_profile_json,
    partial: emailPreview,
    email: {
      data: getTemplatesData(),
      recipients: [
        req.session.user.primary_email,
        AppConstants.EMAIL_TEST_RECIPIENT
      ],
      template
    },
    isAdminPreview: true
  }

  res.send(mainLayout(data))
}

function emailsPreviewPage (req, res) {
  const { params } = req
  const template = params.template ?? EmailTemplateType.Verification

  const data = {
    partial: emailPreview,
    email: {
      data: getTemplatesData(),
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
    body: {
      ...req.body,
      ...breachNotificationData
    },
    token: AppConstants.HIBP_NOTIFY_TOKEN
  }

  await notify(notifyReq, res)
}

async function sendTestEmail (req, res) {
  const { emailId, recipient } = req.body

  switch (emailId) {
    case EmailTemplateType.Verification: {
      // Send test verification email
      const emailTemplate = getTemplate(
        getVerificationDummyData(recipient),
        verifyPartial
      )
      await sendEmail(
        recipient,
        getMessage('email-subject-verify'),
        emailTemplate
      )
      break
    }
    case EmailTemplateType.Notification: {
      // Send test breach notification email
      await sendTestNotification(req, res)
      break
    }
    case EmailTemplateType.Monthly: {
      // Send test monthly unresolved breaches email
      const emailTemplate = getTemplate(
        getMonthlyDummyData(EMAIL_TEST_RECIPIENT),
        monthlyUnresolvedEmailPartial
      )
      await sendEmail(
        recipient,
        getMessage('email-unresolved-heading'),
        emailTemplate
      )
      break
    }
    case EmailTemplateType.SignupReport: {
      // Send test sign-up report email
      const emailTemplate = getTemplate(
        getSignupReportDummyData(EMAIL_TEST_RECIPIENT),
        signupReportEmailPartial
      )
      await sendEmail(
        recipient,
        getMessage('email-subject-found-breaches'),
        emailTemplate
      )
      break
    }
    default: {
      throw new Error(`No test email found for ${emailId}`)
    }
  }

  console.info(`Sent test email: ${emailId}`)

  // The notify function has its own response
  if (emailId !== EmailTemplateType.Notification) {
    return res.json({
      success: true,
      status: 200,
      message: `Sent test ${emailId} email`
    })
  }
}

export { emailsPage, emailsPreviewPage, sendTestEmail }
