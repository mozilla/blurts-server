/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { SubscriberRow } from "knex/types/tables";
import { getSubscribersWaitingForFirstDataBrokerRemovalFixedEmail } from "../../db/tables/subscribers";
import { initEmail, sendEmail } from "../../utils/email";
import { renderEmail } from "../../emails/renderEmail";
import { FirstDataBrokerRemovalFixed } from "../../emails/templates/firstDataBrokerRemovalFixed/FirstDataBrokerRemovalFixed";
import { getEmailL10n } from "../../app/functions/l10n/cronjobs";
import { sanitizeSubscriberRow } from "../../app/functions/server/sanitize";
import { refreshStoredScanResults } from "../../app/functions/server/refreshStoredScanResults";

void run();

async function run() {
  const batchSize = Number.parseInt(
    process.env.FIRST_DATA_BROKER_REMOVAL_FIXED_EMAIL_BATCH_SIZE ?? "10",
    10,
  );
  if (Number.isNaN(batchSize)) {
    throw new Error(
      `Could not send first data broker removal fixed emails, because the env var FIRST_DATA_BROKER_REMOVAL_FIXED_EMAIL_BATCH_SIZE has a non-numeric value: [${process.env.FIRST_DATA_BROKER_REMOVAL_FIXED_EMAIL_BATCH_SIZE}].`,
    );
  }
  const subscribersToEmail =
    await getSubscribersWaitingForFirstDataBrokerRemovalFixedEmail({
      limit: batchSize,
    });
  await initEmail();

  await Promise.allSettled(
    subscribersToEmail.map((subscriber) => {
      return sendFirstDataBrokerRemovalFixedActivityEmail(subscriber);
    }),
  );
  console.log(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmail.length}] first data broker removal fixed emails.`,
  );
}

async function sendFirstDataBrokerRemovalFixedActivityEmail(
  subscriber: SubscriberRow,
) {
  const sanitizedSubscriber = sanitizeSubscriberRow(subscriber);
  const l10n = getEmailL10n(sanitizedSubscriber);

  // OneRep suggested not relying on webhooks, but instead to fetch the latest
  // data from their API. Thus, let's refresh the data in our DB in real-time:
  if (subscriber.onerep_profile_id !== null) {
    await refreshStoredScanResults(subscriber.onerep_profile_id);
  }

  let subject = l10n.getString("email-first-broker-removal-fixed-subject");

  // TODO: Update the first-data-broker-removal-fixed-email date *first*,
  // so that if something goes wrong, we don't keep resending the email.

  await sendEmail(
    sanitizedSubscriber.primary_email,
    subject,
    renderEmail(
      <FirstDataBrokerRemovalFixed
        data={{
          dataBrokerName: "Data broker name",
          dataBrokerLink: "https://monitor.firefox.com/",
          removalDate: "01/01/2024",
        }}
        l10n={l10n}
      />,
    ),
  );
}
