/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  BreachResolutionChecked,
  SubscriberBreachResolution,
  SubscriberRow,
} from "knex/types/tables";
import { getUserEmails } from "../db/tables/emailAddresses";
import { HibpLikeDbBreach, getBreachesForEmail } from "./hibp";
import { getSha1 } from "./fxa";
import { parseIso8601Datetime } from "./parse";
import {
  BreachDataTypes,
  HibpBreachDataTypes,
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
  description: string | null;
  domain: string;
  id: number;
  isResolved?: boolean;
  favIconUrl: string | null;
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
 * @param countryCode
 */
function filterBreachDataTypes(
  originalDataTypes: SubscriberBreach["dataClasses"],
  countryCode: string,
) {
  const relevantDataTypes = Object.values(ResolutionRelevantBreachDataTypes);
  return originalDataTypes.filter((d) =>
    relevantDataTypes.some((t) => {
      // Exclude SSN breaches for non-US users as they are only relevant
      // to US users for now.
      if (d === "social-security-numbers") {
        return t === d && countryCode === "us";
      }
      return t === d;
    }),
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
  subscriber: SubscriberRow,
  allBreaches: HibpLikeDbBreach[],
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
    verification_token: subscriber.primary_verification_token,
    created_at: subscriber.created_at,
    updated_at: subscriber.updated_at,
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
    const breachResolutionForEmail =
      subscriber.breach_resolution?.[email.email] ?? {};

    for (const breach of foundBreaches) {
      type ArrayOfDataClasses = Array<
        (typeof BreachDataTypes)[keyof typeof BreachDataTypes]
      >;
      const filteredBreachDataClasses: ArrayOfDataClasses =
        filterBreachDataTypes(breach.DataClasses, countryCode);

      const resolvedDataClasses =
        breach.Id in breachResolutionForEmail
          ? (
              breachResolutionForEmail[
                breach.Id as keyof SubscriberBreachResolution
              ] as BreachResolutionChecked
            ).resolutionsChecked
          : [];

      const dataClassesEffected = filteredBreachDataClasses.map((c) => {
        if (c === BreachDataTypes.Email) {
          return { [c]: [email.email] };
        } else {
          return { [c]: 1 };
        }
      });

      // `allBreaches` is generally the return value of `getBreaches`, which
      // either loads breaches from the database, or fetches them from the HIBP
      // API. In the former case, `AddedDate`, `BreachDate` and `ModifiedDate`
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
        favIconUrl: breach.FaviconUrl ?? null,
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
          if (key === BreachDataTypes.Email) {
            (curBreach.dataClassesEffected[index][key] as string[]).push(
              email.email,
            );
          } else {
            (curBreach.dataClassesEffected[index][key] as number)++;
          }
        });

        // Only mark data classes as resolved if they are resolved for all
        // affected email addresses:
        // We check if a data class is already resolved for the other email
        // addresses. If that is the case, the respective data class are
        // duplicated in `combinedResolvedDataClasses`. Those can be considered
        // resolved and stay in the list of resolved data classes.
        // Unique data classes will be filtered out as they haven’t been
        // resolved for all affected email addresses.
        const combinedResolvedDataClasses = [
          ...curBreach.resolvedDataClasses,
          ...resolvedDataClasses,
        ];
        const duplicateResolvedDataClasses = combinedResolvedDataClasses.filter(
          (item, index) => combinedResolvedDataClasses.indexOf(item) !== index,
        );
        curBreach.resolvedDataClasses = duplicateResolvedDataClasses;
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
      parseIso8601Datetime(date)!
    : date;
}
