/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { cookies } from "next/headers";
import { Session } from "next-auth";

import { getBreaches } from "./getBreaches";
import { appendBreachResolutionChecklist } from "./breachResolution";
import { BreachDataTypes } from "../universal/breach";
import { getSubscriberByEmail } from "../../../../src/db/tables/subscribers.js";
import {
  BundledVerifiedEmails,
  getAllEmailsAndBreaches,
} from "../../../../src/utils/breaches.js";
import { EmailRow } from "../../../db/tables/emailAddresses";
import { HibpLikeDbBreach } from "../../../utils/hibp";

export type UserBreaches = {
  ssnBreaches: Array<HibpLikeDbBreach>;
  passwordBreaches: Array<HibpLikeDbBreach>;
  phoneBreaches: Array<HibpLikeDbBreach>;
  emailVerifiedCount: number;
  emailTotalCount: number;
  emailSelectIndex: number;
  breachesData: {
    unverifiedEmails: EmailRow[];
    verifiedEmails: BundledVerifiedEmails[];
  };
};

export async function getUserBreaches({
  user,
  options = {},
}: {
  user: Session["user"];
  options?: Parameters<typeof appendBreachResolutionChecklist>[1];
}): Promise<UserBreaches> {
  const subscriber = await getSubscriberByEmail(user.email);
  const allBreaches = await getBreaches();
  const breachesData = await getAllEmailsAndBreaches(subscriber, allBreaches);
  appendBreachResolutionChecklist(breachesData, options);

  const ssnBreaches: HibpLikeDbBreach[] = [];
  const passwordBreaches: HibpLikeDbBreach[] = [];
  const phoneBreaches: HibpLikeDbBreach[] = [];
  for (const { breaches } of breachesData.verifiedEmails) {
    breaches.forEach((b) => {
      if (b.DataClasses.includes(BreachDataTypes.SSN)) {
        ssnBreaches.push(b);
      }

      if (b.DataClasses.includes(BreachDataTypes.Passwords)) {
        passwordBreaches.push(b);
      }

      if (b.DataClasses.includes(BreachDataTypes.Phone)) {
        phoneBreaches.push(b);
      }
    });
  }

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
    ssnBreaches,
    passwordBreaches,
    phoneBreaches,
  };
}
