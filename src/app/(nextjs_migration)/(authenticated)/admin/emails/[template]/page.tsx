/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import Script from "next/script";
import { getServerSession } from "next-auth";
import appConstants from "../../../../../../appConstants";
import {
  EmailTemplateType,
  getMonthlyDummyData,
  getNotificationDummyData,
  getSignupReportDummyData,
  getVerificationDummyData,
} from "../../../../../../utils/email";
import { getPreviewTemplate } from "../../../../../../views/emails/email2022";
import { verifyPartial } from "../../../../../../views/emails/emailVerify";
import { breachAlertEmailPartial } from "../../../../../../views/emails/emailBreachAlert";
import { monthlyUnresolvedEmailPartial } from "../../../../../../views/emails/emailMonthlyUnresolved";
import { signupReportEmailPartial } from "../../../../../../views/emails/emailSignupReport";
import { authOptions } from "../../../../../api/auth/[...nextauth]/route";
import { getL10n } from "../../../../../functions/server/l10n";
import { ReactLocalization } from "@fluent/react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "custom-select": {
        name: string;
        dangerouslySetInnerHTML: { __html: string };
      };
    }
  }
}

export default async function EmailTemplatePage(props: {
  params: { template: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user.email) {
    return redirect("/");
  }

  const admins = process.env.ADMINS?.split(",") ?? [];
  // Note: ../layout.tsx currently hides this page for non-admins.
  //       Not sure if we actually want to have this available to non-admins as well.
  const isAdminPreview = admins.includes(session.user.email);
  const chosenTemplate =
    Object.values(EmailTemplateType).find((t) => t === props.params.template) ??
    EmailTemplateType.Verification;
  const l10n = getL10n();
  const templates = getTemplatesData(l10n);
  const selectedPreviewTemplate = templates[chosenTemplate].template;
  const recipients = [session.user.email];
  if (appConstants.EMAIL_TEST_RECIPIENT) {
    recipients.push(appConstants.EMAIL_TEST_RECIPIENT);
  }

  return (
    <div data-partial="emailPreview">
      <Script src="/nextjs_migration/client/js/customSelect.js" />
      <Script src="/nextjs_migration/client/js/emailPreview.js" />
      <section className="email-preview js-email">
        <h1>Email preview</h1>
        <div className="email-preview-controls">
          <custom-select
            name="email-template"
            dangerouslySetInnerHTML={{
              __html: getPreviewOptions(chosenTemplate, templates),
            }}
          />
          {isAdminPreview ? (
            <form className="js-email-preview-form email-preview-form">
              {getRecipientInputs(recipients)}
              <button className="primary" type="submit">
                Send test email
              </button>
            </form>
          ) : null}
        </div>
        <hr className="monitor-gradient" />
        <div dangerouslySetInnerHTML={{ __html: selectedPreviewTemplate }} />
      </section>
    </div>
  );
}

function getTemplatesData(l10n: ReactLocalization) {
  return {
    [EmailTemplateType.Verification]: {
      label: "Email verification",
      template: getPreviewTemplate(
        getVerificationDummyData(appConstants.EMAIL_TEST_RECIPIENT, l10n),
        verifyPartial,
        l10n
      ),
    },
    [EmailTemplateType.Notification]: {
      label: "Breach notification",
      template: getPreviewTemplate(
        getNotificationDummyData(appConstants.EMAIL_TEST_RECIPIENT, l10n),
        breachAlertEmailPartial,
        l10n
      ),
    },
    [EmailTemplateType.Monthly]: {
      label: "Monthly unresolved breaches",
      template: getPreviewTemplate(
        getMonthlyDummyData(appConstants.EMAIL_TEST_RECIPIENT, l10n),
        monthlyUnresolvedEmailPartial,
        l10n
      ),
    },
    [EmailTemplateType.SignupReport]: {
      label: "Signup report",
      template: getPreviewTemplate(
        getSignupReportDummyData(appConstants.EMAIL_TEST_RECIPIENT, l10n),
        signupReportEmailPartial,
        l10n
      ),
    },
  };
}

// Transitioning from untyped JS:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getPreviewOptions(currentTemplateKey: string, data: any) {
  const optionsElements = Object.keys(data)
    .map(
      (templateKey) => `
    <option
      value='${templateKey}'
      ${currentTemplateKey === templateKey ? "selected" : ""}
    >
      ${data[templateKey].label}
    </option>
  `
    )
    .join("");

  return optionsElements;
}

// Transitioning from untyped JS:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getRecipientInputs(recipients: any[]) {
  const recipientInputElements = recipients.map((recipient, index) => {
    return (
      <label key={recipient}>
        <input
          name="email-recipient-option"
          type="radio"
          value={recipient}
          checked={index === 0}
        />
        {recipient}
      </label>
    );
  });

  return <fieldset>{recipientInputElements}</fieldset>;
}
