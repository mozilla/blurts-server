/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { resetUnverifiedEmailAddress } from "../../../db/tables/emailAddresses.js";
import { sendEmail, getVerificationUrl } from "../../../utils/email";
import { getTemplate } from "../../../views/emails/email2022.js";
import { verifyPartial } from "../../../views/emails/emailVerify.js";

import { getL10n } from "../../functions/server/l10n";
const l10n = getL10n();

export async function sendVerificationEmail(user, emailId) {
  const unverifiedEmailAddressRecord = await resetUnverifiedEmailAddress(
    emailId
  );
  const recipientEmail = unverifiedEmailAddressRecord.email;
  const data = {
    recipientEmail,
    ctaHref: getVerificationUrl(unverifiedEmailAddressRecord),
    utmCampaign: "email_verify",
    heading: l10n.getString("email-verify-heading"),
    subheading: l10n.getString("email-verify-subhead"),
    partial: { name: "verify" },
  };
  await sendEmail(
    recipientEmail,
    l10n.getString("email-subject-verify"),
    getTemplate(data, verifyPartial)
  );
}
