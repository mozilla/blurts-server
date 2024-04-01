/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { ReactLocalization } from "@fluent/react";
import { SubscriberRow } from "knex/types/tables";
import { resetUnverifiedEmailAddress } from "../../../db/tables/emailAddresses.js";
import { sendEmail, getVerificationUrl } from "../../../utils/email";
import { getStringLookup } from "../../../utils/fluent.js";
import { getTemplate } from "../../../emails/email2022.js";
import { verifyPartial } from "../../../emails/emailVerify.js";

export async function sendVerificationEmail(
  user: SubscriberRow,
  emailId: number,
  l10n: ReactLocalization,
) {
  const getMessage = getStringLookup(l10n);
  const unverifiedEmailAddressRecord = await resetUnverifiedEmailAddress(
    emailId,
    user,
    l10n,
  );
  const recipientEmail = unverifiedEmailAddressRecord.email;
  const data = {
    recipientEmail,
    ctaHref: getVerificationUrl(unverifiedEmailAddressRecord),
    utmCampaign: "email_verify",
    heading: "email-verify-heading",
    subheading: "email-verify-subhead",
    partial: { name: "verify" },
  };
  await sendEmail(
    recipientEmail,
    getMessage("email-subject-verify"),
    getTemplate(data, verifyPartial, l10n),
  );
}
