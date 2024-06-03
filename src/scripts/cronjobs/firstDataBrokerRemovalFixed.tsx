/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";
import { OnerepScanResultRow, SubscriberRow } from "knex/types/tables";
import {
  getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail,
  markFirstDataBrokerRemovalFixedEmailAsJustSent,
} from "../../db/tables/subscribers";
import { initEmail, sendEmail } from "../../utils/email";
import { renderEmail } from "../../emails/renderEmail";
import { FirstDataBrokerRemovalFixed } from "../../emails/templates/firstDataBrokerRemovalFixed/FirstDataBrokerRemovalFixed";
import { getEmailL10n } from "../../app/functions/l10n/cronjobs";
import { sanitizeSubscriberRow } from "../../app/functions/server/sanitize";
import { refreshStoredScanResults } from "../../app/functions/server/refreshStoredScanResults";
import { getLatestOnerepScanResults } from "../../db/tables/onerep_scans";

type SubscriberFirstRemovedScanResult = {
  subscriber: SubscriberRow;
  firstRemovedScanResult: OnerepScanResultRow;
};

function isFulfilledResult(
  result: PromiseSettledResult<SubscriberFirstRemovedScanResult | undefined>,
): result is PromiseFulfilledResult<SubscriberFirstRemovedScanResult> {
  return typeof result !== "undefined" && result.status === "fulfilled";
}

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
  const potentialSubscribersToEmail =
    await getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail({
      limit: batchSize,
    });

  const subscribersToEmailWithScanData = (
    await Promise.allSettled(
      potentialSubscribersToEmail.map(async (subscriber) => {
        // OneRep suggested not relying on webhooks, but instead to fetch the latest
        // data from their API. Thus, let's refresh the data in our DB in real-time:
        if (subscriber.onerep_profile_id !== null) {
          await refreshStoredScanResults(subscriber.onerep_profile_id);
        }
        const latestScan = await getLatestOnerepScanResults(
          subscriber.onerep_profile_id,
        );

        let firstRemovedScanResult = null;
        for (const scanResult of latestScan.results) {
          if (
            scanResult.manually_resolved &&
            scanResult.status === "removed" &&
            (!firstRemovedScanResult ||
              (firstRemovedScanResult &&
                scanResult.created_at.getTime() <
                  firstRemovedScanResult.created_at.getTime()))
          ) {
            firstRemovedScanResult = scanResult;
          }
        }

        if (!firstRemovedScanResult) {
          return;
        }

        return { subscriber, firstRemovedScanResult };
      }),
    )
  ).filter(isFulfilledResult);

  await initEmail();

  await Promise.allSettled(
    subscribersToEmailWithScanData.map((data) => {
      return sendFirstDataBrokerRemovalFixedActivityEmail(
        data.value.subscriber,
        data.value.firstRemovedScanResult,
      );
    }),
  );
  console.log(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmailWithScanData.length}] first data broker removal fixed emails.`,
  );
}

async function sendFirstDataBrokerRemovalFixedActivityEmail(
  subscriber: SubscriberRow,
  scanResult: OnerepScanResultRow,
) {
  const sanitizedSubscriber = sanitizeSubscriberRow(subscriber);
  const l10n = getEmailL10n(sanitizedSubscriber);

  let subject = l10n.getString("email-first-broker-removal-fixed-subject");

  // Update the first-data-broker-removal-fixed-email date *first*,
  // so that if something goes wrong, we don't keep resending the email.
  await markFirstDataBrokerRemovalFixedEmailAsJustSent(subscriber);

  await sendEmail(
    sanitizedSubscriber.primary_email,
    subject,
    renderEmail(
      <FirstDataBrokerRemovalFixed
        data={{
          dataBrokerName: scanResult.data_broker,
          dataBrokerLink: scanResult.link,
          removalDate: scanResult.updated_at,
        }}
        l10n={l10n}
      />,
    ),
  );
}
