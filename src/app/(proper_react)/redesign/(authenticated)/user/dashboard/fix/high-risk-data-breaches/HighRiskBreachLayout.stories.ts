/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import type { Meta, StoryObj } from "@storybook/react";
import { SubscriberBreach } from "../../../../../../../../utils/subscriberBreaches";
import { createRandomBreach } from "../../../../../../../../apiMocks/mockData";
import { GuidedExperienceBreaches } from "../../../../../../../functions/server/getUserBreaches";
import { BreachDataTypes } from "../../../../../../../functions/universal/breach";
import { HighRiskBreachLayout } from "./HighRiskBreachLayout";

const meta: Meta<typeof HighRiskBreachLayout> = {
  title: "ResolutionLayout",
  component: HighRiskBreachLayout,
};
export default meta;

type Story = StoryObj<typeof HighRiskBreachLayout>;

const scannedResultsArraySample: SubscriberBreach[] = Array.from(
  { length: 5 },
  () => createRandomBreach({ isHighRiskOnly: true })
);

//TODO: Be able to import this from getUserBreaches
// TODO: Write unit tests - MNTOR-2075
/* c8 ignore start */
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
/* c8 ignore stop */

export const CreditCard: Story = {
  args: {
    typeOfBreach: "creditCard",
    breachData: guidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const BankAccount: Story = {
  args: {
    typeOfBreach: "bankAccount",
    breachData: guidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const SSN: Story = {
  args: {
    typeOfBreach: "ssnBreaches",
    breachData: guidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const PIN: Story = {
  args: {
    typeOfBreach: "pin",
    breachData: guidedExperienceBreaches(scannedResultsArraySample),
  },
};

export const None: Story = {
  args: {
    typeOfBreach: "none",
    breachData: guidedExperienceBreaches(scannedResultsArraySample),
  },
};
