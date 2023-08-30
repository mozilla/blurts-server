/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import express from "express";
import * as Sentry from "@sentry/node";
import "@sentry/tracing";
import { acceptedLanguages, negotiateLanguages } from "@fluent/langneg";

import AppConstants from "../appConstants.js";

import { getSubscribersByHashes } from "../db/tables/subscribers.js";
import { getEmailAddressesByHashes } from "../db/tables/emailAddresses.js";
import { getTemplate } from "../views/emails/email2022.js";
import { breachAlertEmailPartial } from "../views/emails/emailBreachAlert.js";

import { bearerToken } from "../middleware/util.js";
import { errorHandler } from "../middleware/error.js";

import {
  initEmail,
  EmailTemplateType,
  getEmailCtaHref,
  sendEmail,
} from "../utils/email.js";

import { initFluentBundles, getMessage } from "../utils/fluent.js";
import {
  getAddressesAndLanguageForEmail,
  getBreachByName,
  loadBreachesIntoApp,
} from "../utils/hibp.js";
import { BadRequestError, TooManyRequestsError } from "../utils/error.js";

const app = express();

app.use(bearerToken);
// sentry error handler
app.use(
  // TODO: Add unit test when changing this code:
  /* c8 ignore next 5 */
  Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
      if (error instanceof TooManyRequestsError) return true;
    },
  })
);
app.use(errorHandler);
app.post("/api/v1/hibp/notify", notify);

async function init() {
  // TODO: Add unit test when changing this code:
  /* c8 ignore next 3 */
  await initFluentBundles();
  await initEmail();
}
init();

// TODO: Add unit test when changing this code:
/* c8 ignore start */
/**
 * Whenever a breach is detected on the HIBP side, HIBP sends a request to this endpoint.
 * This function attempts to retrieve the breach info from the local cache, if not found
 * it retrieves it from the database
 * A breach notification contains the following parameters:
 * - breachName
 * - hashPrefix
 * - hashSuffixes
 * More about how account identities are anonymized: https://blog.mozilla.org/security/2018/06/25/scanning-breached-accounts-k-anonymity/
 *
 * @param {import('express').RequestHandler} req
 * @param {import('express').Response} res
 */
async function notify(req, res) {
  if (!req.token || req.token !== AppConstants.HIBP_NOTIFY_TOKEN) {
    const errorMessage =
      "HIBP notify endpoint requires valid authorization token.";
    // FIXME
    // throw new UnauthorizedError(errorMessage)
    return res.status(403, errorMessage);
  }

  if (
    !["breachName", "hashPrefix", "hashSuffixes"].every(
      req.body?.hasOwnProperty,
      req.body
    )
  ) {
    throw new BadRequestError(
      "HIBP breach notification: requires breachName, hashPrefix, and hashSuffixes."
    );
  }

  const { breachName, hashPrefix, hashSuffixes } = req.body;

  await loadBreachesIntoApp(req.app);
  let breachAlert = getBreachByName(req.app.locals.breaches, breachName);

  if (!breachAlert) {
    // If breach isn't found, try to reload breaches from HIBP
    console.debug("notify", "Breach is not found, reloading breaches...");
    await loadBreachesIntoApp(req.app);
    breachAlert = getBreachByName(req.app.locals.breaches, breachName);
    if (!breachAlert) {
      // If breach *still* isn't found, we have a real error
      throw new Error("Unrecognized breach: " + breachName);
    }
  }

  const { IsVerified, Domain, IsFabricated, IsSpamList } = breachAlert;

  // If any of the following conditions are not satisfied:
  // Do not send the breach alert email! The `logId`s are being used for
  // logging in case we decide to not send the alert.
  const emailDeliveryConditions = [
    {
      logId: "isNotVerified",
      condition: !IsVerified,
    },
    {
      logId: "domainEmpty",
      condition: Domain === "",
    },
    {
      logId: "isFabricated",
      condition: IsFabricated,
    },
    {
      logId: "isSpam",
      condition: IsSpamList,
    },
  ];

  const unsatisfiedConditions = emailDeliveryConditions.filter(
    (condition) => condition.condition
  );

  const doNotSendEmail = unsatisfiedConditions.length > 0;

  if (doNotSendEmail) {
    // Get a list of the failed condition `logId`s
    const conditionLogIds = unsatisfiedConditions
      .map((condition) => condition.logId)
      .join(", ");

    console.info("Breach alert email was not sent.", {
      name: breachAlert.Name,
      reason: `The following conditions were not satisfied: ${conditionLogIds}.`,
    });

    return res.status(200).json({
      info: "Breach loaded into database. Subscribers not notified.",
    });
  }

  try {
    const reqHashPrefix = hashPrefix.toLowerCase();
    const hashes = hashSuffixes.map(
      (suffix) => reqHashPrefix + suffix.toLowerCase()
    );
    const subscribers = await getSubscribersByHashes(hashes);
    const emailAddresses = await getEmailAddressesByHashes(hashes);
    const recipients = subscribers.concat(emailAddresses);

    console.info(EmailTemplateType.Notification, {
      breachAlertName: breachAlert.Name,
      length: recipients.length,
    });

    const utmCampaignId = "breach-alert";
    const notifiedRecipients = [];

    for (const recipient of recipients) {
      console.info("notify", { recipient });

      // Get subscriber ID from:
      // - `subscriber_id`: if `email_addresses` record
      // - `id`: if `subscribers` record
      const subscriberId = recipient.subscriber_id ?? recipient.id;
      const { recipientEmail, breachedEmail, signupLanguage } =
        getAddressesAndLanguageForEmail(recipient);

      const requestedLanguage = signupLanguage
        ? acceptedLanguages(signupLanguage)
        : [];

      const availableLanguages = req.app.locals.AVAILABLE_LANGUAGES;
      const supportedLocales = negotiateLanguages(
        requestedLanguage,
        availableLanguages,
        { defaultLocale: "en" }
      );

      if (!notifiedRecipients.includes(breachedEmail)) {
        const data = {
          breachData: breachAlert,
          breachLogos: req.app.locals.breachLogoMap,
          breachedEmail,
          ctaHref: getEmailCtaHref(utmCampaignId, "dashboard-cta"),
          heading: getMessage("email-spotted-new-breach"),
          // Override recipient if explicitly set in req
          recipientEmail: req.body.recipient ?? recipientEmail,
          subscriberId,
          supportedLocales,
          utmCampaign: utmCampaignId,
        };

        const emailTemplate = getTemplate(data, breachAlertEmailPartial);
        const subject = getMessage("breach-alert-subject");

        await sendEmail(data.recipientEmail, subject, emailTemplate);

        notifiedRecipients.push(breachedEmail);
      }
    }

    console.info("notified", { length: notifiedRecipients.length });

    res.status(200).json({
      info: "Notified subscribers of breach.",
    });
  } catch (error) {
    throw new Error(`Notifying subscribers of breach failed: ${error}`);
  }
}
/* c8 ignore stop */

export { app };
