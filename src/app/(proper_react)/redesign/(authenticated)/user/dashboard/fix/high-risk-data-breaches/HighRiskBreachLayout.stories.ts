/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { BreachDataTypes } from "../../../../../../../functions/universal/breach";

const meta: Meta<typeof HighRiskBreachLayout> = {
  title: "HighRiskDataBreach",
  component: HighRiskBreachLayout,
};
export default meta;
type Story = StoryObj<typeof HighRiskBreachLayout>;

const scannedResultsArraySample: SubscriberBreach[] = Array.from(
  { length: 5 },
  () => createRandomBreach({ isHighRiskOnly: true })
);

//TODO: Be able to import this from getUserBreaches
function guidedExperienceBreaches(
  subscriberBreaches: SubscriberBreach[]
): GuidedExperienceBreaches {
  const guidedExperienceBreaches: GuidedExperienceBreaches = {
    highRisk: {
      ssnBreaches: [],
      creditCardBreaches: [],
      pinBreaches: [],
      bankBreaches: [],
    },
    passwordBreaches: [],
  };
  subscriberBreaches.forEach((b) => {
    // high risks
    if (b.dataClasses.includes(BreachDataTypes.SSN)) {
      guidedExperienceBreaches.highRisk.ssnBreaches.push(b);
    }

    if (b.dataClasses.includes(BreachDataTypes.CreditCard)) {
      guidedExperienceBreaches.highRisk.creditCardBreaches.push(b);
    }

    if (b.dataClasses.includes(BreachDataTypes.PIN)) {
      guidedExperienceBreaches.highRisk.pinBreaches.push(b);
    }

    if (b.dataClasses.includes(BreachDataTypes.BankAccount)) {
      guidedExperienceBreaches.highRisk.bankBreaches.push(b);
    }

    // other
    if (b.dataClasses.includes(BreachDataTypes.Passwords)) {
      guidedExperienceBreaches.passwordBreaches.push(b);
    }
  });

  return guidedExperienceBreaches;
}

console.log(guidedExperienceBreaches(scannedResultsArraySample));

export const HighRiskDataBreach: Story = {
  args: {
    typeOfBreach: "creditCard",
    breachData: guidedExperienceBreaches(scannedResultsArraySample),
  },
};
