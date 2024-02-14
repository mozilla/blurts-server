/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { getUserEmails } from "../db/tables/emailAddresses.js";
import { HibpLikeDbBreach, getBreachesForEmail } from "./hibp.js";
import { getSha1 } from "./fxa.js";
import {
  Breach,
  HibpBreachDataTypes,
  Subscriber,
} from "../app/deprecated/(authenticated)/user/breaches/breaches.js";
import { parseIso8601Datetime } from "./parse.js";
import {
  BreachDataTypes,
  ResolutionRelevantBreachDataTypes,
  isBreachResolved,
} from "../app/functions/universal/breach";

export type DataClassEffected = {
  [dataType: string]: number | string[];
};
export interface SubscriberBreach {
  addedDate: Date;
  breachDate: Date;
  dataClasses: Array<HibpBreachDataTypes[keyof HibpBreachDataTypes]>;
  resolvedDataClasses: Array<HibpBreachDataTypes[keyof HibpBreachDataTypes]>;
  description: string;
  domain: string;
  id: number;
  isResolved?: boolean;
  favIconUrl: string;
  modifiedDate: Date;
  name: string;
  title: string;
  emailsAffected: string[];
  dataClassesEffected: DataClassEffected[];
}

type SubscriberBreachMap = Record<number, SubscriberBreach>;

/**
 * Take the breach DataTypes array from HIBP and filter based on BreachDataTypes
 *
 * @param originalDataTypes
 */
function filterBreachDataTypes(
  originalDataTypes: SubscriberBreach["dataClasses"],
) {
  const relevantDataTypes = Object.values(ResolutionRelevantBreachDataTypes);
  return originalDataTypes.filter((d) =>
    relevantDataTypes.some((t) => t === d),
  );
}

/**
 * Replacing 'getAllEmailsAndBreaches' in breaches.js
 *
 * @param subscriber
 * @param allBreaches
 * @param countryCode
 */
export async function getSubBreaches(
  subscriber: Subscriber,
  allBreaches: (Breach | HibpLikeDbBreach)[],
  countryCode: string,
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
        breach.Domain !== "",
    );

    // breach resolution
    const breachResolution = subscriber.breach_resolution?.[email.email] ?? {};

    for (const breach of foundBreaches) {
      type ArrayOfDataClasses = Array<
        (typeof BreachDataTypes)[keyof typeof BreachDataTypes]
      >;
      const filteredBreachDataClasses: ArrayOfDataClasses =
        filterBreachDataTypes(breach.DataClasses);
      const resolvedDataClasses = (breachResolution[breach.Id]
        ?.resolutionsChecked ?? []) as ArrayOfDataClasses;

      const dataClassesEffected = filteredBreachDataClasses
        .map((c) => {
          // Exclude SSN breaches for non-US users as they are only relevant
          // to US users as of now.
          if (BreachDataTypes.SSN && countryCode !== "us") {
            return null;
          }
          if (c === BreachDataTypes.Email) {
            return { [c]: [email.email] };
          } else {
            return { [c]: 1 };
          }
        })
        .filter(
          (dataClassEffected) => dataClassEffected,
        ) as DataClassEffected[];

      // `allBreaches` is generally the return value of `getBreaches`, which
      // either loads breaches from the database, or fetches them from the HIBP
      // API. In the former csae, `AddedDate`, `BreachDate` and `ModifiedDate`
      // are Date objects, but in the latter case, they are ISO 8601 date
      // strings. Thus, we normalise that to always be a Date object.
      const subscriberBreach: SubscriberBreach = {
        id: breach.Id,
        addedDate: normalizeDate(breach.AddedDate),
        breachDate: normalizeDate(breach.BreachDate),
        dataClasses: filteredBreachDataClasses,
        resolvedDataClasses,
        description: breach.Description,
        domain: breach.Domain,
        isResolved: isBreachResolved(dataClassesEffected, resolvedDataClasses),
        favIconUrl: breach.FaviconUrl,
        modifiedDate: normalizeDate(breach.ModifiedDate),
        name: breach.Name,
        title: breach.Title,
        emailsAffected: [email.email],
        dataClassesEffected,
      };

      // if current breach does not exist in breaches map
      if (!uniqueBreaches[subscriberBreach.id]) {
        uniqueBreaches[subscriberBreach.id] = subscriberBreach;
      } else {
        // append email & other data classes counts
        const curBreach = uniqueBreaches[subscriberBreach.id];
        curBreach.emailsAffected.push(email.email);
        curBreach.dataClassesEffected.forEach((d, index) => {
          const key = Object.keys(d)[0];
          // Exclude SSN breaches for non-US users as they are only relevant
          // to US users as of now.
          if (key === BreachDataTypes.SSN && countryCode !== "us") {
            return null;
          }
          if (key === BreachDataTypes.Email) {
            (curBreach.dataClassesEffected[index][key] as string[]).push(
              email.email,
            );
          } else {
            (curBreach.dataClassesEffected[index][key] as number)++;
          }
        });
        curBreach.resolvedDataClasses = [
          ...new Set([
            ...curBreach.resolvedDataClasses,
            ...resolvedDataClasses,
          ]),
        ];
        curBreach.isResolved =
          isBreachResolved(
            curBreach.dataClassesEffected,
            curBreach.resolvedDataClasses,
          ) && subscriberBreach.isResolved;
      }
    }
  }

  return Object.values(uniqueBreaches);
}

function normalizeDate(date: string | Date): Date {
  return typeof date === "string"
    ? // If `date` is a string, it was fetched from the HIBP API, and we should be
      // able to assume that it is a valid ISO 8601 string, and thus use the
      // non-null assertion:
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      parseIso8601Datetime(date)!
    : date;
}
