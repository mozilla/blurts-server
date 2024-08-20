/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SubscriberRow } from "knex/types/tables";
import { updateFxAProfileData } from "../../../db/tables/subscribers";

const MONITOR_PREMIUM_CAPABILITY = "monitor";

export async function changeSubscription(
  subscriber: SubscriberRow,
  enabled: boolean,
) {
  const currentFxAProfile = subscriber?.fxa_profile_json as FxaProfile;
  let subscriptions = currentFxAProfile.subscriptions ?? [];

  if (enabled) {
    if (!subscriptions?.includes(MONITOR_PREMIUM_CAPABILITY)) {
      subscriptions?.push(MONITOR_PREMIUM_CAPABILITY);
    }
  } else {
    subscriptions =
      currentFxAProfile.subscriptions?.filter(
        (sub: string) => sub !== MONITOR_PREMIUM_CAPABILITY,
      ) ?? [];
  }

  currentFxAProfile.subscriptions = subscriptions;
  await updateFxAProfileData(subscriber, JSON.stringify(currentFxAProfile));
}

/**
 * See https://github.com/mozilla/fxa/blob/564949dfc69f0f675ebb4e5f267282c2546a5767/packages/fxa-profile-server/lib/routes/profile.js#L63-L77
 */
type FxaProfile = {
  email?: string;
  uid?: string;
  avatar?: string;
  avatarDefault?: boolean;
  displayName?: string;
  locale?: string;
  amrValues?: string[];
  twoFactorAuthentication?: boolean;
  subscriptions?: string[];
  metricsEnabled?: boolean;
  sub?: string;
};
