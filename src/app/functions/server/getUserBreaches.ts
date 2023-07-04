/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { cookies } from "next/headers";
import { Session } from "next-auth";

import { getBreaches } from "./getBreaches";
import { appendBreachResolutionChecklist } from "./breachResolution";
import { getSubscriberByEmail } from "../../../../src/db/tables/subscribers.js";
import { getAllEmailsAndBreaches } from "../../../../src/utils/breaches.js";

export async function getUserBreaches({
  user,
}: {
  user: Session["user"] & { email: string };
}) {
  const subscriber = await getSubscriberByEmail(user.email);
  const allBreaches = await getBreaches();
  const breachesData = await getAllEmailsAndBreaches(subscriber, allBreaches);
  appendBreachResolutionChecklist(breachesData);

  const emailVerifiedCount = breachesData.verifiedEmails?.length ?? 0;
  const emailTotalCount =
    emailVerifiedCount + (breachesData.unverifiedEmails?.length ?? 0);

  const nextCookies = cookies();
  const emailSelectedCookie = nextCookies.get("monitor.selected-email-index");
  const emailSelectIndex =
    typeof emailSelectedCookie !== "undefined"
      ? Number.parseInt(emailSelectedCookie.value, 10)
      : 0;

  return {
    breachesData,
    emailVerifiedCount,
    emailTotalCount,
    emailSelectIndex,
  };
}
