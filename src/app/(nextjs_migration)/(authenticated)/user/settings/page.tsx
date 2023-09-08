/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { redirect } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import AppConstants from "../../../../../appConstants";
import { getL10n } from "../../../../functions/server/l10n";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../api/utils/auth";
import ImageIconDelete from "../../../../../client/images/icon-delete.svg";
import "../../../../../client/css/partials/settings.css";
import React from "react";
import {
  EmailRow,
  getUserEmails,
} from "../../../../../db/tables/emailAddresses";
import { getBreaches } from "../../../../functions/server/getBreaches";
import { getBreachesForEmail } from "../../../../../utils/hibp";
import { getSha1 } from "../../../../../utils/fxa";
import { getSubscriberById } from "../../../../../db/tables/subscribers";
import { getNonce } from "../../../functions/server/getNonce";

const emailNeedsVerificationSub = (email: EmailRow) => {
  const l10n = getL10n();

  return (
    <>
      <span className="verification-required">
        {l10n.getString("settings-email-verification-callout")}
      </span>

      <a className="js-settings-resend-email" data-email-id={email.id} href="#">
        {l10n.getString("settings-resend-email-verification-link")}
      </a>
    </>
  );
};

const deleteButton = (email: EmailRow) => {
  const l10n = getL10n();

  return (
    <button
      aria-label={l10n.getString("settings-delete-email-button")}
      data-subscriber-id={email.subscriber_id}
      data-email-id={email.id}
      className="settings-email-remove-button js-remove-email-button"
    >
      <Image
        src={ImageIconDelete}
        alt={l10n.getString("settings-delete-email-button")}
      />
    </button>
  );
};

const createEmailItem = (
  email: EmailRow & { primary?: boolean },
  breachCounts: Map<string, number>
) => {
  const l10n = getL10n();

  return (
    <li className="settings-email-item">
      <strong>
        {email.primary
          ? l10n.getString("settings-email-label-primary", {
              email: email.email,
            })
          : email.email}
      </strong>
      {email.verified
        ? l10n.getString("settings-email-number-of-breaches-info", {
            breachCount: breachCounts.get(email.email)!,
          })
        : emailNeedsVerificationSub(email)}
      {email.primary ? null : deleteButton(email)}
    </li>
  );
};

// Moves the primary email to the front and sorts the rest alphabeticaly.
const getSortedEmails = (emails: Array<EmailRow & { primary?: boolean }>) =>
  [...emails].sort((a, b) => {
    if (a.primary) {
      return -1;
    }

    if (b.primary) {
      return 1;
    }

    return a.email.localeCompare(b.email);
  });

const createEmailList = (
  emails: EmailRow[],
  breachCounts: Map<string, number>
) => {
  return (
    <ul className="settings-email-list">
      {getSortedEmails(emails).map((email) =>
        createEmailItem(email, breachCounts)
      )}
    </ul>
  );
};

const alertOptions = ({
  allEmailsToPrimary,
}: {
  allEmailsToPrimary: boolean;
}) => {
  const l10n = getL10n();

  return (
    <div className="settings-alert-options">
      <label className="settings-radio-input">
        <input
          defaultChecked={!allEmailsToPrimary}
          className="js-settings-alert-options-input"
          data-alert-option={0}
          name="settings-alert-options"
          type="radio"
        />
        <span className="settings-radio-label">
          {l10n.getString("settings-alert-preferences-option-one")}
        </span>
      </label>

      <label className="settings-radio-input">
        <input
          defaultChecked={allEmailsToPrimary}
          className="js-settings-alert-options-input"
          data-alert-option={1}
          name="settings-alert-options"
          type="radio"
        />
        <span className="settings-radio-label">
          {l10n.getString("settings-alert-preferences-option-two")}
        </span>
      </label>
    </div>
  );
};

export default async function Settings() {
  const l10n = getL10n();
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.subscriber) {
    return redirect("/");
  }
  // Re-fetch the subscriber every time, rather than reading it from `session`
  // - if the user changes their preferences on this page, the JSON web token
  // containing the subscriber data won't be updated until the next sign-in.
  // (Possibly we shouldn't store subscriber data in that token in the first
  // place, other than their ID?)
  const subscriber = await getSubscriberById(session.user.subscriber.id);
  const emails = await getUserEmails(session.user.subscriber.id);
  // Add primary subscriber email to the list
  emails.push({
    email: session.user.subscriber.primary_email,
    sha1: session.user.subscriber.primary_sha1,
    primary: true,
    verified: true,
  } as any);

  const breachCounts = new Map();
  const allBreaches = await getBreaches();
  for (const email of emails) {
    const breaches = await getBreachesForEmail(
      getSha1(email.email),
      allBreaches,
      true
    );
    breachCounts.set(email.email, breaches?.length || 0);
  }

  return (
    <>
      <Script
        type="module"
        src="/nextjs_migration/client/js/settings.js"
        nonce={getNonce()}
      />
      <Script
        type="module"
        src="/nextjs_migration/client/js/dialog.js"
        nonce={getNonce()}
      />
      <main data-partial="settings">
        <div className="settings js-settings">
          <h2 className="settings-title">
            {l10n.getString("settings-page-title")}
          </h2>

          <div className="settings-content">
            {/* Monitored email addresses */}
            <section>
              <h3 className="settings-section-title">
                {l10n.getString("settings-email-list-title")}
              </h3>
              <p className="settings-section-info">
                {l10n.getString("settings-email-limit-info", {
                  limit: AppConstants.MAX_NUM_ADDRESSES,
                })}
              </p>

              {createEmailList(emails, breachCounts)}
              <button
                aria-label={l10n.getString("settings-add-email-button")}
                className="primary settings-add-email-button"
                data-dialog="addEmail"
                disabled={
                  emails.length >=
                  Number.parseInt(AppConstants.MAX_NUM_ADDRESSES, 10)
                }
              >
                {l10n.getString("settings-add-email-button")}
              </button>
            </section>

            <hr />

            {/* Breach alert preferences */}
            <section>
              <h3 className="settings-section-title">
                {l10n.getString("settings-alert-preferences-title")}
              </h3>
              {alertOptions({
                allEmailsToPrimary: subscriber.all_emails_to_primary,
              })}
            </section>

            <hr />

            {/* Deactivate account */}
            <section>
              <h3 className="settings-section-title">
                {l10n.getString("settings-deactivate-account-title")}
              </h3>
              <p className="settings-section-info">
                {l10n.getString("settings-deactivate-account-info")}
              </p>
              <a
                className="settings-link-fxa"
                href={AppConstants.NEXT_PUBLIC_FXA_SETTINGS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l10n.getString("settings-fxa-link-label")}
              </a>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
