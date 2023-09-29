/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "@jest/globals";
import { getGuidedExperienceBreaches } from "./guidedExperienceBreaches";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { BreachDataTypes } from "./breach";

it("getGuidedExperienceBreaches: return guided experience", () => {
  const subBreach: SubscriberBreach = {
    addedDate: new Date(),
    breachDate: new Date(),
    dataClasses: [
      BreachDataTypes.PIN,
      BreachDataTypes.Passwords,
      BreachDataTypes.Address,
      BreachDataTypes.BankAccount,
      BreachDataTypes.CreditCard,
      BreachDataTypes.DoB,
      BreachDataTypes.Email,
      BreachDataTypes.HistoricalPasswords,
      BreachDataTypes.IP,
      BreachDataTypes.Phone,
      BreachDataTypes.SSN,
      BreachDataTypes.SecurityQuestions,
    ],
    resolvedDataClasses: [],
    description: "",
    domain: "",
    id: 1,
    isResolved: false,
    favIconUrl: "",
    modifiedDate: new Date(),
    name: "",
    title: "",
    emailsAffected: ["test@mozilla.com"],
    dataClassesEffected: [],
  };

  const guidedExp = getGuidedExperienceBreaches(
    [subBreach],
    ["test@mozilla.com"]
  );
  expect(guidedExp.emails).toHaveLength(1);
  expect(guidedExp.highRisk.ssnBreaches).toHaveLength(1);
  expect(guidedExp.highRisk.creditCardBreaches).toHaveLength(1);
  expect(guidedExp.highRisk.pinBreaches).toHaveLength(1);
  expect(guidedExp.highRisk.bankBreaches).toHaveLength(1);
  expect(guidedExp.passwordBreaches.passwords).toHaveLength(1);
  expect(guidedExp.passwordBreaches.securityQuestions).toHaveLength(1);
  expect(guidedExp.securityRecommendations.phoneNumber).toHaveLength(1);
  expect(guidedExp.securityRecommendations.emailAddress).toHaveLength(1);
  expect(guidedExp.securityRecommendations.IPAddress).toHaveLength(1);
});
