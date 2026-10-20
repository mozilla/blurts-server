/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import type { HibpLikeDbBreach } from "../../../utils/hibp";
import {
  getAffectingBreaches,
  getResolutionsByEmail,
  isServedDataClass,
  type BreachResolutions,
} from "./firefoxApiBreaches";

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

/** Served data classes this email resolved */
function getResolvedDataClasses(
  resolutions: BreachResolutions | undefined,
  breach: HibpLikeDbBreach,
): string[] {
  const resolved = resolutions?.[breach.Id]?.resolutionsChecked ?? [];

  return resolved.filter(
    (dataClass) =>
      isServedDataClass(dataClass) && breach.DataClasses.includes(dataClass),
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
  const resolutionsByEmail = getResolutionsByEmail(subscriber);
  const affecting = await getAffectingBreaches(subscriber, domain);
  return affecting.map(({ breach, emails }) => ({
    id: breach.Name,
    breachedAccounts: emails.map((email) => ({
      email,
      resolvedDataClasses: getResolvedDataClasses(
        resolutionsByEmail[email],
        breach,
      ),
    })),
  }));
}
