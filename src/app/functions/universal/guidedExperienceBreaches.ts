/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { BreachDataTypes } from "./breach";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { GuidedExperienceBreaches } from "../server/getUserBreaches";

function isUnresolvedDataBreachClass(
  breach: SubscriberBreach,
  breachDataClass: (typeof BreachDataTypes)[keyof typeof BreachDataTypes],
): boolean {
  const affectedDataClasses = breach.dataClassesEffected.map(
    (dataClass) => Object.keys(dataClass)[0],
  );
  return (
    affectedDataClasses.includes(breachDataClass) &&
    !breach.resolvedDataClasses.includes(breachDataClass)
  );
}

export function getGuidedExperienceBreaches(
  subscriberBreaches: SubscriberBreach[],
  emails: string[],
): GuidedExperienceBreaches {
  const guidedExperienceBreaches: GuidedExperienceBreaches = {
    highRisk: {
      ssnBreaches: [],
      creditCardBreaches: [],
      pinBreaches: [],
      bankBreaches: [],
    },
    passwordBreaches: {
      passwords: [],
      securityQuestions: [],
    },
    securityRecommendations: {
      phoneNumber: [],
      emailAddress: [],
      IPAddress: [],
    },
    emails,
  };

  subscriberBreaches.forEach((breach) => {
    // high risks
    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.SSN)) {
      guidedExperienceBreaches.highRisk.ssnBreaches.push(breach);
    }

    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.CreditCard)) {
      guidedExperienceBreaches.highRisk.creditCardBreaches.push(breach);
    }

    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.PIN)) {
      guidedExperienceBreaches.highRisk.pinBreaches.push(breach);
    }

    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.BankAccount)) {
      guidedExperienceBreaches.highRisk.bankBreaches.push(breach);
    }

    // passwords
    // TODO: Add tests when passwords component has been made - MNTOR-1712
    /* c8 ignore start */
    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.Passwords)) {
      guidedExperienceBreaches.passwordBreaches.passwords.push(breach);
    }
    if (
      isUnresolvedDataBreachClass(breach, BreachDataTypes.SecurityQuestions)
    ) {
      guidedExperienceBreaches.passwordBreaches.securityQuestions.push(breach);
    }

    // security recommendations
    // TODO: Add tests when security recs work is merged in
    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.Phone)) {
      guidedExperienceBreaches.securityRecommendations.phoneNumber.push(breach);
    }

    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.Email)) {
      guidedExperienceBreaches.securityRecommendations.emailAddress.push(
        breach,
      );
    }

    if (isUnresolvedDataBreachClass(breach, BreachDataTypes.IP)) {
      guidedExperienceBreaches.securityRecommendations.IPAddress.push(breach);
    }
    /* c8 ignore stop */
  });

  return guidedExperienceBreaches;
}
