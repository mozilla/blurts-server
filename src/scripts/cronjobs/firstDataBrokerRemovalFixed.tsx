/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  OnerepScanResultDataBrokerRow,
  OnerepScanResultRow,
  SubscriberRow,
} from "knex/types/tables";
import {
  getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail,
  markFirstDataBrokerRemovalFixedEmailAsJustSent,
} from "../../db/tables/subscribers";
import { initEmail, sendEmail, closeEmailPool } from "../../utils/email";
import { renderEmail } from "../../emails/renderEmail";
import { FirstDataBrokerRemovalFixed } from "../../emails/templates/firstDataBrokerRemovalFixed/FirstDataBrokerRemovalFixed";
import { getCronjobL10n } from "../../app/functions/l10n/cronjobs";
import { sanitizeSubscriberRow } from "../../app/functions/server/sanitize";
import { refreshStoredScanResults } from "../../app/functions/server/refreshStoredScanResults";
import { getScanResultsWithBroker } from "../../db/tables/onerep_scans";
import { hasPremium } from "../../app/functions/universal/user";
import { logger } from "../../app/functions/server/logging";
import {
  getScanAndResults,
  MoscaryData,
} from "../../app/functions/server/moscary";
import { parseIso8601Datetime } from "../../utils/parse";

type SubscriberFirstRemovedScanResult = {
  subscriber: SubscriberRow;
  firstRemovedScanResult:
    | OnerepScanResultDataBrokerRow
    | MoscaryData["ScanResult"];
};

process.on("SIGINT", () => {
  logger.info("SIGINT received, exiting...");
  tearDown();
});

void run();

function tearDown() {
  closeEmailPool();
  process.exit(0);
}

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
  const potentialSubscribersToEmail = (
    await getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail({
      stillOnOnerep: true,
    })
  ).concat(
    await getPotentialSubscribersWaitingForFirstDataBrokerRemovalFixedEmail({
      stillOnOnerep: false,
    }),
  );

  const subscribersToEmailWithData = (
    await Promise.allSettled(
      potentialSubscribersToEmail.map(async (subscriber) => {
        try {
          // OneRep suggested not relying on webhooks, but instead to fetch the latest
          // data from their API. Thus, let's refresh the data in our DB in real-time:
          if (subscriber.onerep_profile_id !== null) {
            await refreshStoredScanResults(subscriber.onerep_profile_id);
          }
          const latestScan = subscriber.moscary_id
            ? await getScanAndResults(subscriber.moscary_id)
            : await getScanResultsWithBroker(
                subscriber.onerep_profile_id,
                hasPremium(subscriber),
              );

          let firstRemovedScanResult = null;
          for (const scanResult of latestScan.results) {
            // Consider a scan result if:
            if (
              // The scan result is not manually resolved...
              !scanResult.manually_resolved &&
              // ...the scan has been removed...
              scanResult.status === "removed" &&
              // ...and scan result has been created ealier than the currently
              // selected `firstRemovedScanResult`.
              (!firstRemovedScanResult ||
                (firstRemovedScanResult &&
                  parseIso8601Datetime(scanResult.created_at).getTime() <
                    parseIso8601Datetime(
                      firstRemovedScanResult.created_at,
                    ).getTime()))
            ) {
              firstRemovedScanResult = scanResult;
            }
          }

          if (!firstRemovedScanResult) {
            return;
          }

          return { subscriber, firstRemovedScanResult };
        } catch {
          console.error(
            `An error ocurred while attemting to get the first removed scan result for subscriber: ${subscriber.id}`,
          );
        }
      }),
    )
  )
    .filter(isFulfilledResult)
    .slice(0, batchSize);

  await initEmail();

  await Promise.allSettled(
    subscribersToEmailWithData.map((data) => {
      return sendFirstDataBrokerRemovalFixedActivityEmail(
        data.value.subscriber,
        data.value.firstRemovedScanResult,
      );
    }),
  );

  console.log(
    `[${new Date(Date.now()).toISOString()}] Sent [${subscribersToEmailWithData.length}] first data broker removal fixed emails.`,
  );

  tearDown();
}

async function sendFirstDataBrokerRemovalFixedActivityEmail(
  subscriber: SubscriberRow,
  scanResult: OnerepScanResultRow | MoscaryData["ScanResult"],
) {
  const sanitizedSubscriber = sanitizeSubscriberRow(subscriber);
  const l10n = getCronjobL10n(sanitizedSubscriber);

  const subject = l10n.getString("email-first-broker-removal-fixed-subject");

  // Update the first-data-broker-removal-fixed-email date *first*,
  // so that if something goes wrong, we don't keep resending the email.
  await markFirstDataBrokerRemovalFixedEmailAsJustSent(subscriber);

  await sendEmail(
    sanitizedSubscriber.primary_email,
    subject,
    await renderEmail(
      <FirstDataBrokerRemovalFixed
        data={{
          dataBrokerName: scanResult.data_broker,
          dataBrokerLink: `${process.env.SERVER_URL}/user/dashboard/fixed`,
          removalDate: parseIso8601Datetime(scanResult.updated_at),
        }}
        l10n={l10n}
      />,
    ),
  );
}

function isFulfilledResult(
  result: PromiseSettledResult<SubscriberFirstRemovedScanResult | undefined>,
): result is PromiseFulfilledResult<SubscriberFirstRemovedScanResult> {
  return (
    typeof result !== "undefined" &&
    result.status === "fulfilled" &&
    typeof result.value !== "undefined"
  );
}
