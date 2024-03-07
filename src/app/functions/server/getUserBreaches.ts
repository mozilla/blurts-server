/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { cookies } from "next/headers";
import { Session } from "next-auth";
import { EmailAddressRow } from "knex/types/tables";

import { getBreaches } from "./getBreaches";
import { appendBreachResolutionChecklist } from "./breachResolution";
import { BreachDataTypes } from "../universal/breach";
import { getSubscriberByFxaUid } from "../../../../src/db/tables/subscribers.js";
import {
  BundledVerifiedEmails,
  getAllEmailsAndBreaches,
} from "../../../../src/utils/breaches.js";
import {
  SubscriberBreach,
  getSubBreaches,
} from "../../../utils/subscriberBreaches";
import { HibpLikeDbBreach } from "../../../utils/hibp";

//TODO: deprecate with MNTOR-2021
export type UserBreaches = {
  ssnBreaches: Array<HibpLikeDbBreach>;
  passwordBreaches: Array<HibpLikeDbBreach>;
  phoneBreaches: Array<HibpLikeDbBreach>;
  emailVerifiedCount: number;
  emailTotalCount: number;
  emailSelectIndex: number;
  breachesData: {
    unverifiedEmails: EmailAddressRow[];
    verifiedEmails: BundledVerifiedEmails[];
  };
};

//TODO: deprecate with MNTOR-2021
export async function getUserBreaches({
  user,
  options = {},
}: {
  user: Session["user"];
  options?: Parameters<typeof appendBreachResolutionChecklist>[1];
}): Promise<UserBreaches> {
  if (!user.subscriber?.fxa_uid) {
    throw new Error("No fxa_uid found in session");
  }
  const subscriber = await getSubscriberByFxaUid(user.subscriber.fxa_uid);
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

/**
 * NOTE: new function to replace getUserBreaches
 *
 * @param user
 * @param user.user
 * @param user.countryCode
 */
export async function getSubscriberBreaches({
  user,
  countryCode,
}: {
  user: Session["user"];
  countryCode: string;
}): Promise<SubscriberBreach[]> {
  if (!user.subscriber?.fxa_uid) {
    throw new Error("No fxa_uid found in session");
  }
  const subscriber = await getSubscriberByFxaUid(user.subscriber.fxa_uid);
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

export interface GuidedExperienceBreaches {
  highRisk: {
    ssnBreaches: SubscriberBreach[];
    creditCardBreaches: SubscriberBreach[];
    pinBreaches: SubscriberBreach[];
    bankBreaches: SubscriberBreach[];
  };
  passwordBreaches: {
    passwords: SubscriberBreach[];
    securityQuestions: SubscriberBreach[];
  };
  securityRecommendations: {
    phoneNumber: SubscriberBreach[];
    emailAddress: SubscriberBreach[];
    IPAddress: SubscriberBreach[];
  };
  emails: string[];
}
