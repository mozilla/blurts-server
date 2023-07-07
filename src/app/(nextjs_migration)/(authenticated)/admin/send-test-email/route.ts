/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { NextRequest, NextResponse } from "next/server";
import AppConstants from "../../../../../appConstants.js";
import {
  EmailTemplateType,
  getMonthlyDummyData,
  getSignupReportDummyData,
  getVerificationDummyData,
  initEmail,
  sendEmail,
} from "../../../../../utils/email.js";
import { getTemplate } from "../../../../../views/emails/email2022.js";
import { getL10n } from "../../../../functions/server/l10n";
import { verifyPartial } from "../../../../../views/emails/emailVerify.js";
import { monthlyUnresolvedEmailPartial } from "../../../../../views/emails/emailMonthlyUnresolved.js";
import { signupReportEmailPartial } from "../../../../../views/emails/emailSignupReport.js";

export async function POST(req: NextRequest) {
  const { emailId, recipient } = (await req.json()) as {
    emailId: string;
    recipient: string;
  };
  const l10n = getL10n();

  switch (emailId) {
    case EmailTemplateType.Verification: {
      // Send test verification email
      const emailTemplate = getTemplate(
        getVerificationDummyData(recipient, l10n),
        verifyPartial,
        l10n
      );
      await initEmail(process.env.SMTP_URL);
      await sendEmail(
        recipient,
        l10n.getString("email-subject-verify"),
        emailTemplate
      );
      break;
    }
    case EmailTemplateType.Notification: {
      // Send test breach notification email
      await sendTestNotification(req, new NextResponse());
      break;
    }
    case EmailTemplateType.Monthly: {
      // Send test monthly unresolved breaches email
      const emailTemplate = getTemplate(
        getMonthlyDummyData(AppConstants.EMAIL_TEST_RECIPIENT, l10n),
        monthlyUnresolvedEmailPartial,
        l10n
      );
      await initEmail(process.env.SMTP_URL);
      await sendEmail(
        recipient,
        l10n.getString("email-unresolved-heading"),
        emailTemplate
      );
      break;
    }
    case EmailTemplateType.SignupReport: {
      // Send test sign-up report email
      const emailTemplate = getTemplate(
        getSignupReportDummyData(AppConstants.EMAIL_TEST_RECIPIENT, l10n),
        signupReportEmailPartial,
        l10n
      );
      await initEmail(process.env.SMTP_URL);
      await sendEmail(
        recipient,
        l10n.getString("email-subject-found-breaches"),
        emailTemplate
      );
      break;
    }
    default: {
      throw new Error(`No test email found for ${emailId}`);
    }
  }

  console.info(`Sent test email: ${emailId}`);

  // The notify function has its own response
  if (emailId !== EmailTemplateType.Notification) {
    return NextResponse.json(
      { success: true, message: `Sent test ${emailId} email` },
      { status: 200 }
    );
  }
}

// Leaving the `async` for now because of the commented-out `await`:
// eslint-disable-next-line @typescript-eslint/require-await
async function sendTestNotification(req: NextRequest, res: NextResponse) {
  // The test breach notification can be viewed in the public Mailinator inbox
  // as documented in the README:
  // https://github.com/mozilla/blurts-server#trigger-breach-alert-email
  const breachNotificationData = {
    breachName: "Adobe",
    // Hash for dummy email `localmonitor20200827@mailinator.com`
    hashPrefix: "365050",
    hashSuffixes: ["53cbb89874fc738c0512daf12bc4d91765"],
  };

  // TODO Disabled for now; not sure yet how to trigger this with the functionality
  // moved to a Cloud Function.
  // const notifyReq = {
  //   app: req.app,
  //   body: {
  //     ...req.body,
  //     ...breachNotificationData,
  //   },
  //   token: AppConstants.HIBP_NOTIFY_TOKEN,
  // };

  // await notify(notifyReq, res);
}
