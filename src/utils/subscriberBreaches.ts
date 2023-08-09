/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getUserEmails } from "../db/tables/emailAddresses.js";
import { HibpLikeDbBreach, getBreachesForEmail } from "./hibp.js";
import { getSha1 } from "./fxa.js";
import { filterBreachDataTypes } from "./breachResolution.js";
import {
  Breach,
  Subscriber,
} from "../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js";

interface SubscriberBreach {
  addedDate: string;
  breachDate: string;
  dataClasses: Array<string>;
  description: string;
  domain: string;
  id: number;
  isResolved?: boolean;
  favIconUrl: string;
  modifiedDate: string;
  name: string;
  title: string;
  emailsEffected: string[];
}

type SubscriberBreachMap = Record<number, SubscriberBreach>;

/**
 * Replacing breaches.js
 * Get all emails and breaches for a user via app.locals
 * This function will be replaced after 'breaches" table is created
 * and all records can be retrieved from the one table
 *
 * @param subscriber
 * @param allBreaches
 */
export async function getSubBreaches(
  subscriber: Subscriber,
  allBreaches: (Breach | HibpLikeDbBreach)[]
) {
  const uniqueBreaches: SubscriberBreachMap = {};

  let verifiedEmails = await getUserEmails(subscriber.id);
  verifiedEmails.push({
    id: -1,
    subscriber_id: subscriber.id,
    email: subscriber.primary_email,
    verified: subscriber.primary_verified,
    sha1: subscriber.primary_sha1,
  });

  verifiedEmails = verifiedEmails.filter((e) => e.verified);

  for (const email of verifiedEmails) {
    const lowerCaseEmailSha = getSha1(email.email.toLowerCase());

    // find all breaches relevant to the current email
    const foundBreaches = (
      await getBreachesForEmail(lowerCaseEmailSha, allBreaches, true, false)
    ).filter(
      (breach) =>
        !breach.IsRetired &&
        !breach.IsSpamList &&
        !breach.IsFabricated &&
        breach.IsVerified &&
        breach.Domain !== ""
    );

    // breach resolution
    const breachResolution = subscriber.breach_resolution
      ? subscriber.breach_resolution[email.email]
        ? subscriber.breach_resolution[email.email]
        : {}
      : [];

    for (const breach of foundBreaches) {
      const subscriberBreach: SubscriberBreach = {
        id: breach.Id,
        addedDate: breach.AddedDate,
        breachDate: breach.BreachDate,
        dataClasses: filterBreachDataTypes(breach.DataClasses),
        description: breach.Description,
        domain: breach.Domain,
        isResolved: breachResolution[breach.Id]?.isResolved || false,
        favIconUrl: breach.FaviconUrl,
        modifiedDate: breach.ModifiedDate,
        name: breach.Name,
        title: breach.Title,
        emailsEffected: [email.email],
      };

      // if current breach does not exist in breaches map
      if (!uniqueBreaches[subscriberBreach.id]) {
        uniqueBreaches[subscriberBreach.id] = subscriberBreach;
      } else {
        // append email & other data classes counts
        const curBreach = uniqueBreaches[subscriberBreach.id];
        curBreach.emailsEffected?.push(email.email);
      }
    }
  }

  return Object.values(uniqueBreaches);
}
