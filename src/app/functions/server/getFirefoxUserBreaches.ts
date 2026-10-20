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
const SERVED_DATA_CLASSES = ["passwords", "email-addresses"];

/** One email's state within a breach */
type BreachedAccount = {
  email: string;
  resolvedDataClasses: string[];
};

/** One item of GET /user/breaches, per openapi.yml */
export type FirefoxUserBreach = {
  // HIBP Name, never the numeric id
  id: string;
  breachedAccounts: BreachedAccount[];
};

/** Breach id to resolutions, for one email */
type BreachResolutions = Record<number, BreachResolutionChecked>;

/** Email to its breach resolutions */
type ResolutionsByEmail = Record<string, BreachResolutions>;

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
  return breach.DataClasses.some((dataClass) =>
    SERVED_DATA_CLASSES.includes(dataClass),
  );
}

/** Served data classes this email resolved */
function getResolvedDataClasses(
  resolutions: BreachResolutions | undefined,
  breach: HibpLikeDbBreach,
): string[] {
  const resolved = resolutions?.[breach.Id]?.resolutionsChecked ?? [];

  return resolved.filter(
    (dataClass) =>
      SERVED_DATA_CLASSES.includes(dataClass) &&
      breach.DataClasses.includes(dataClass),
  );
}

/**
 * This user's breaches, newest first.
 * Throws UpstreamUnavailableError if HIBP fails.
 */
export async function getFirefoxUserBreaches(
  subscriber: SubscriberRow,
  domain?: string,
): Promise<FirefoxUserBreach[]> {
  const emails = await getVerifiedEmails(subscriber);
  // null until the user resolves anything.
  // Cast: its type mixes in useBreachId.
  const resolutionsByEmail = (subscriber.breach_resolution ??
    {}) as ResolutionsByEmail;

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

  const userBreaches: FirefoxUserBreach[] = [];
  for (const breach of candidates) {
    const breachedAccounts: BreachedAccount[] = [];
    for (const { email, breachNames } of lookups) {
      if (breachNames.includes(breach.Name)) {
        breachedAccounts.push({
          email,
          resolvedDataClasses: getResolvedDataClasses(
            resolutionsByEmail[email],
            breach,
          ),
        });
      }
    }

    if (breachedAccounts.length > 0) {
      userBreaches.push({ id: breach.Name, breachedAccounts });
    }
  }
  return userBreaches;
}
