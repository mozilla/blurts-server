/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Session } from "next-auth";

export function hasPremium(user?: Session["user"]): boolean {
  return user?.fxa?.subscriptions.includes("monitor") ?? false;
}

export function canSubscribeToPremium(params: {
  user?: Session["user"];
  countryCode: string;
}): boolean {
  return hasPremium(params.user) && params.countryCode.toLowerCase() === "us";
}

export function hasSetupOnerep(
  user?: Session["user"]
): user is Session["user"] & { subscriber: { onerep_profile_id: number } } {
  return typeof user?.subscriber?.onerep_profile_id === "number";
}
