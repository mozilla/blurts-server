/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Subscriber } from "../../(nextjs_migration)/(authenticated)/user/breaches/breaches";
import { updateFxAProfileData } from "../../../db/tables/subscribers";

const MONITOR_PREMIUM_CAPABILITY = "monitor";

export async function changeSubscription(
  subscriber: Subscriber,
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
