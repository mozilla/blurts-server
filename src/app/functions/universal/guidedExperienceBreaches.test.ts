/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { it, expect } from "vitest";
import { getGuidedExperienceBreaches } from "./guidedExperienceBreaches";
import { SubscriberBreach } from "../../../utils/subscriberBreaches";
import { BreachDataTypes } from "./breach";

it("getGuidedExperienceBreaches: return all guided experience breaches if they have relevant data classes", () => {
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
    dataClassesEffected: [
      { [BreachDataTypes.PIN]: 1 },
      { [BreachDataTypes.Passwords]: 1 },
      { [BreachDataTypes.Address]: 1 },
      { [BreachDataTypes.BankAccount]: 1 },
      { [BreachDataTypes.CreditCard]: 1 },
      { [BreachDataTypes.DoB]: 1 },
      { [BreachDataTypes.Email]: 1 },
      { [BreachDataTypes.HistoricalPasswords]: 1 },
      { [BreachDataTypes.IP]: 1 },
      { [BreachDataTypes.Phone]: 1 },
      { [BreachDataTypes.SSN]: 1 },
      { [BreachDataTypes.SecurityQuestions]: 1 },
    ],
  };

  const guidedExp = getGuidedExperienceBreaches(
    [subBreach],
    ["test@mozilla.com"],
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

it("getGuidedExperienceBreaches: exclude guided experience breaches if they do not have the relevant classes", () => {
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
    dataClassesEffected: [
      { [BreachDataTypes.PIN]: 1 },
      { [BreachDataTypes.Passwords]: 2 },
    ],
  };

  const guidedExp = getGuidedExperienceBreaches(
    [subBreach],
    ["test@mozilla.com"],
  );
  expect(guidedExp.highRisk.pinBreaches).toHaveLength(1);
  expect(guidedExp.emails).toHaveLength(1);
  expect(guidedExp.highRisk.ssnBreaches).toHaveLength(0);
  expect(guidedExp.highRisk.creditCardBreaches).toHaveLength(0);
  expect(guidedExp.highRisk.bankBreaches).toHaveLength(0);
  expect(guidedExp.passwordBreaches.passwords).toHaveLength(1);
  expect(guidedExp.passwordBreaches.securityQuestions).toHaveLength(0);
  expect(guidedExp.securityRecommendations.phoneNumber).toHaveLength(0);
  expect(guidedExp.securityRecommendations.emailAddress).toHaveLength(0);
  expect(guidedExp.securityRecommendations.IPAddress).toHaveLength(0);
});
