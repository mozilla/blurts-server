/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getUserEmails } from "../db/tables/emailAddresses.js";
import { HibpLikeDbBreach, getBreachesForEmail } from "./hibp.js";
import { getSha1 } from "./fxa.js";
import { BreachDataTypes, filterBreachDataTypes } from "./breachResolution.js";
import {
  Breach,
  Subscriber,
} from "../app/(nextjs_migration)/(authenticated)/user/breaches/breaches.js";

export type DataClassEffected = {
  [dataType: string]: number | string[];
};
export interface SubscriberBreach {
  addedDate: string;
  breachDate: string;
  dataClasses: string[];
  description: string;
  domain: string;
  id: number;
  isResolved?: boolean;
  favIconUrl: string;
  modifiedDate: string;
  name: string;
  title: string;
  emailsEffected?: string[];
  dataClassesEffected: DataClassEffected[];
}

type SubscriberBreachMap = Record<number, SubscriberBreach>;

/**
 * Replacing 'getAllEmailsAndBreaches' in breaches.js
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
    const breachResolution = subscriber.breach_resolution?.[email.email] ?? {};

    for (const breach of foundBreaches) {
      const filteredBreachDataClasses: string[] = filterBreachDataTypes(
        breach.DataClasses
      );
      const subscriberBreach: SubscriberBreach = {
        id: breach.Id,
        addedDate: breach.AddedDate,
        breachDate: breach.BreachDate,
        dataClasses: filteredBreachDataClasses,
        description: breach.Description,
        domain: breach.Domain,
        isResolved: breachResolution[breach.Id]?.isResolved || false,
        favIconUrl: breach.FaviconUrl,
        modifiedDate: breach.ModifiedDate,
        name: breach.Name,
        title: breach.Title,
        emailsEffected: [email.email],
        dataClassesEffected: filteredBreachDataClasses.map((c) => {
          if (c === BreachDataTypes.Email) {
            return { [c]: [email.email] };
          } else {
            return { [c]: 1 };
          }
        }),
      };

      // if current breach does not exist in breaches map
      if (!uniqueBreaches[subscriberBreach.id]) {
        uniqueBreaches[subscriberBreach.id] = subscriberBreach;
      } else {
        // append email & other data classes counts
        const curBreach = uniqueBreaches[subscriberBreach.id];
        curBreach.emailsEffected?.push(email.email);
        curBreach.dataClassesEffected.forEach((d, index) => {
          const key = Object.keys(d)[0];
          if (key === BreachDataTypes.Email) {
            (curBreach.dataClassesEffected[index][key] as string[]).push(
              email.email
            );
          } else {
            (curBreach.dataClassesEffected[index][key] as number)++;
          }
        });
      }
    }
  }

  return Object.values(uniqueBreaches);
}
