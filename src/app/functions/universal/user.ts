/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { ISO8601DateString } from "../../../utils/parse";
import { SubscriberRow } from "knex/types/tables";

// TODO: Keep this until after Dec 31, 2024, then remove Plus entirely.
export function hasPremium(user?: Session["user"] | SubscriberRow): boolean {
  const subscriptions =
    // Simulating subscribers with incomplete FxA profile data
    // is a bit too much effort for too little gain, hence:
    /* c8 ignore next */
    (user as SubscriberRow)?.fxa_profile_json?.subscriptions ??
    (user as Session["user"])?.fxa?.subscriptions;

  // Simulating subscribers with incomplete FxA profile data
  // is a bit too much effort for too little gain, hence:
  /* c8 ignore next */
  return subscriptions?.includes("monitor") ?? false;
}

// Users need to be at least 13 years or older.
const USER_MIN_AGE = 13;
export function meetsAgeRequirement(dateOfBirth: ISO8601DateString): boolean {
  const dateNow = new Date();
  const dateBirth = new Date(dateOfBirth);
  const dateDelta = new Date(dateNow.valueOf() - dateBirth.valueOf());
  const unixStartDate = new Date(0);
  const age = dateDelta.getUTCFullYear() - unixStartDate.getUTCFullYear();

  return age >= USER_MIN_AGE;
}
