/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";
import { getBreaches } from "./getBreaches";
import { getSubscriberByFxaUid } from "../../../../src/db/tables/subscribers";
import {
  SubscriberBreach,
  getSubBreaches,
} from "../../../utils/subscriberBreaches";

/**
 * NOTE: new function to replace getUserBreaches
 *
 * @param params
 * @param params.fxaUid
 * @param params.countryCode
 */
export async function getSubscriberBreaches({
  fxaUid,
  countryCode,
}: {
  fxaUid?: NonNullable<Session["user"]["subscriber"]>["fxa_uid"];
  countryCode: string;
}): Promise<SubscriberBreach[]> {
  if (!fxaUid) {
    throw new Error("No fxa_uid found in session");
  }
  const subscriber = await getSubscriberByFxaUid(fxaUid);
  if (!subscriber) {
    throw new Error("No subscriber found for the given user data.");
  }
  const allBreaches = await getBreaches();
  const breachesData = await getSubBreaches(
    subscriber,
    allBreaches,
    countryCode,
  );
  return breachesData;
}
