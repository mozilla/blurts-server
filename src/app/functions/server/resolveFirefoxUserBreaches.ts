/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { SubscriberRow } from "knex/types/tables";
import {
  getAffectingBreaches,
  getResolutionsByEmail,
  getServedDataClasses,
} from "./firefoxApiBreaches";
import { setBreachResolution } from "../../../db/tables/subscribers";
import {
  incFirefoxApiResolution,
  type FirefoxApiResolutionOutcome,
} from "../../../utils/metrics";

/**
 * Marks named breaches resolved, every data class.
 * Skips names matching no affecting breach.
 * Throws UpstreamUnavailableError if HIBP fails.
 */
export async function resolveFirefoxUserBreaches(
  subscriber: SubscriberRow,
  breachNames: Set<string>,
): Promise<void> {
  // Also validates names, finds emails to update
  const matched = (await getAffectingBreaches(subscriber)).filter(
    ({ breach }) => breachNames.has(breach.Name),
  );

  const resolutions = getResolutionsByEmail(subscriber);
  const outcomes: Array<[FirefoxApiResolutionOutcome, string]> = [];
  for (const { breach, emails } of matched) {
    for (const dataClass of getServedDataClasses(breach)) {
      let resolvedAny = false;
      for (const email of emails) {
        resolutions[email] ??= {};
        resolutions[email][breach.Id] ??= { resolutionsChecked: [] };
        // Legacy entries may lack it
        const checked = (resolutions[email][breach.Id].resolutionsChecked ??=
          []);
        if (!checked.includes(dataClass)) {
          checked.push(dataClass);
          resolvedAny = true;
        }
      }
      outcomes.push([resolvedAny ? "resolved" : "already-resolved", dataClass]);
    }
  }

  // Retries are common; skip the no-op write
  if (outcomes.some(([outcome]) => outcome === "resolved")) {
    await setBreachResolution(subscriber, {
      ...resolutions,
      // Marks keys as breach ids, like the website
      useBreachId: true,
    } as SubscriberRow["breach_resolution"]);
  }

  // Count only once written
  for (const [outcome, dataClass] of outcomes) {
    incFirefoxApiResolution(outcome, dataClass);
  }
  for (let i = matched.length; i < breachNames.size; i++) {
    incFirefoxApiResolution("skipped");
  }
}
