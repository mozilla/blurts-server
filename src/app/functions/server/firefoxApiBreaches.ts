/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachResolutionChecked, SubscriberRow } from "knex/types/tables";
import { getBreaches } from "./getBreaches";
import { getUserEmails } from "../../../db/tables/emailAddresses";
import {
  getFilteredBreaches,
  searchHibpRange,
  type HibpLikeDbBreach,
} from "../../../utils/hibp";
import { getSha1 } from "../../../utils/fxa";

/** The only data classes the Firefox API serves */
export const SERVED_DATA_CLASSES = ["passwords", "email-addresses"] as const;

/** A data class Firefox can resolve */
export type ServedDataClass = (typeof SERVED_DATA_CLASSES)[number];

/** Whether Firefox can resolve this data class */
export function isServedDataClass(value: unknown): value is ServedDataClass {
  return SERVED_DATA_CLASSES.includes(value as ServedDataClass);
}

/** Breach id to resolutions, for one email */
export type BreachResolutions = Record<number, BreachResolutionChecked>;

/** Email to its breach resolutions */
export type ResolutionsByEmail = Record<string, BreachResolutions>;

/**
 * This user's resolutions, keyed by email.
 * The column is null until they resolve anything.
 */
export function getResolutionsByEmail(
  subscriber: SubscriberRow,
): ResolutionsByEmail {
  // Cast drops the useBreachId flag from the type
  return (subscriber.breach_resolution ?? {}) as ResolutionsByEmail;
}

/** A servable breach and the emails it affected */
type AffectingBreach = {
  breach: HibpLikeDbBreach;
  emails: string[];
};

/** Primary and secondary emails, verified only */
async function getVerifiedEmails(subscriber: SubscriberRow): Promise<string[]> {
  const verified: string[] = [];
  if (subscriber.primary_verified) {
    verified.push(subscriber.primary_email);
  }
  for (const secondary of await getUserEmails(subscriber.id)) {
    if (secondary.verified) {
      verified.push(secondary.email);
    }
  }

  // Case-insensitive dedupe
  const seen = new Set<string>();
  return verified.filter((email) => {
    const key = email.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Breaches the Firefox API may return */
function isServable(breach: HibpLikeDbBreach): boolean {
  if (breach.IsSensitive) return false;
  return breach.DataClasses.some(isServedDataClass);
}

/**
 * Servable breaches affecting this user, newest first.
 * Throws UpstreamUnavailableError if HIBP fails.
 */
export async function getAffectingBreaches(
  subscriber: SubscriberRow,
  domain?: string,
): Promise<AffectingBreach[]> {
  const emails = await getVerifiedEmails(subscriber);

  // Parallel; one failure fails them all
  const lookups = await Promise.all(
    emails.map(async (email) => ({
      email,
      breachNames: await searchHibpRange(getSha1(email.toLowerCase())),
    })),
  );

  const candidates = getFilteredBreaches(await getBreaches())
    .filter(isServable)
    .filter((breach) => domain === undefined || breach.Domain === domain)
    .sort((a, b) => b.AddedDate.getTime() - a.AddedDate.getTime());

  return candidates
    .map((breach) => ({
      breach,
      emails: lookups
        .filter(({ breachNames }) => breachNames.includes(breach.Name))
        .map(({ email }) => email),
    }))
    .filter(({ emails }) => emails.length > 0);
}
